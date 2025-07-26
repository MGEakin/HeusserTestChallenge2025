import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test.describe('Homepage SEO and HTML Standards', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateToHome();
  });

  test('BUG-004: Homepage should have proper H1 heading for SEO', async ({ page }) => {
    // This test identifies an SEO issue with the H1 heading
    // Expected: Homepage should have an H1 that describes the main purpose of the site
    // Current: H1 shows "Search results" which is inappropriate for the homepage
    
    const h1Element = page.locator('h1').first();
    const h1Text = await h1Element.textContent();
    
    // Document the current problematic H1
    console.log(`Current H1 text: "${h1Text}"`);
    
    // This test will fail until the H1 is fixed to be more appropriate
    expect(h1Text, 
      `Homepage H1 should not be "Search results". Found: "${h1Text}". Should be something like "Excelon Development" or describe the main service.`
    ).not.toBe('Search results');
    
    // Additionally, the H1 should be meaningful for the homepage
    expect(h1Text?.toLowerCase().includes('excelon') || 
           h1Text?.toLowerCase().includes('development') ||
           h1Text?.toLowerCase().includes('software'), 
      `H1 should be relevant to the business. Found: "${h1Text}"`
    ).toBe(true);
  });

  test('BUG-005: Missing meta description for SEO', async ({ page }) => {
    // This test identifies missing meta description which is crucial for SEO
    // Expected: Homepage should have a descriptive meta description
    // Current: No meta description found
    
    const metaDescriptionElement = page.locator('meta[name="description"]');
    const hasMetaDescription = await metaDescriptionElement.count() > 0;
    
    if (!hasMetaDescription) {
      // This test will fail until a proper meta description is added
      expect(hasMetaDescription, 
        'Homepage should have a meta description for SEO purposes'
      ).toBe(true);
    } else {
      const metaDescription = await metaDescriptionElement.getAttribute('content');
      
      expect(metaDescription, 
        'Meta description content should not be empty'
      ).toBeTruthy();
      
      if (metaDescription) {
        expect(metaDescription.length, 
          `Meta description should be between 120-160 characters. Found: ${metaDescription.length} characters`
        ).toBeGreaterThanOrEqual(120);
        
        expect(metaDescription.length, 
          `Meta description should be between 120-160 characters. Found: ${metaDescription.length} characters`
        ).toBeLessThanOrEqual(160);
      }
    }
  });

  test('BUG-006: Improper heading hierarchy structure', async ({ page }) => {
    // This test identifies poor heading hierarchy for accessibility and SEO
    // Expected: Page should start with H1, then H2s, etc. in proper order
    // Current: Page starts with H3 as main heading, H1 is hidden/misplaced
    
    const headings = await page.evaluate(() => {
      interface HeadingInfo {
        level: number;
        text: string;
        visible: boolean;
      }
      
      const allHeadings: HeadingInfo[] = [];
      for (let i = 1; i <= 6; i++) {
        const elements = document.querySelectorAll(`h${i}`);
        elements.forEach((el: Element) => {
          allHeadings.push({
            level: i,
            text: el.textContent?.trim() || '',
            visible: (el as HTMLElement).offsetParent !== null
          });
        });
      }
      return allHeadings.sort((a, b) => {
        const aTop = document.querySelector(`h${a.level}`)?.getBoundingClientRect().top || 0;
        const bTop = document.querySelector(`h${b.level}`)?.getBoundingClientRect().top || 0;
        return aTop - bTop;
      });
    });
    
    // Check that the first visible heading is H1
    const firstVisibleHeading = headings.find(h => h.visible);
    expect(firstVisibleHeading?.level, 
      `First visible heading should be H1 for proper structure. Found: H${firstVisibleHeading?.level} with text "${firstVisibleHeading?.text}"`
    ).toBe(1);
    
    // Check that main content doesn't start with H3
    const mainH3Elements = await page.locator('main h3').count();
    if (mainH3Elements > 0) {
      const mainContentHeading = await page.locator('main h3').first().textContent();
      console.log(`Main content starts with H3: "${mainContentHeading}"`);
      
      // This indicates poor heading hierarchy - fail the test to highlight the issue
      expect(false, 
        `Main content should not start with H3. Found H3 with text: "${mainContentHeading}". This indicates poor heading hierarchy.`
      ).toBe(true);
    }
  });

  test('BUG-007: Duplicate visible H2 headings', async ({ page }) => {
    // This test identifies duplicate content which can confuse users and search engines
    // Expected: Each H2 should have unique content
    // Current: "Software Testing", "Placement", "Writing" appear to be duplicated
    
    const visibleH2s = await page.evaluate(() => {
      const h2Elements = document.querySelectorAll('h2');
      return Array.from(h2Elements)
        .filter((el: Element) => (el as HTMLElement).offsetParent !== null)
        .map((el: Element) => el.textContent?.trim() || '');
    });
    
    const h2Counts: Record<string, number> = {};
    visibleH2s.forEach(text => {
      h2Counts[text] = (h2Counts[text] || 0) + 1;
    });
    
    const duplicates = Object.entries(h2Counts).filter(([, count]) => (count as number) > 1);
    
    console.log('H2 counts:', h2Counts);
    console.log('Duplicates found:', duplicates);
    
    // This test will fail if there are duplicate H2 headings
    expect(duplicates.length, 
      `Found duplicate H2 headings: ${duplicates.map(([text, count]) => `"${text}" (${count} times)`).join(', ')}`
    ).toBe(0);
  });
});
