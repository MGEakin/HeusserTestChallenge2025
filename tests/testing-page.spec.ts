import { test, expect } from '@playwright/test';
import { TestingPage } from '../page-objects/TestingPage';

test.describe('Testing Page - Comprehensive Functional Tests', () => {
  let testingPage: TestingPage;

  test.beforeEach(async ({ page }) => {
    testingPage = new TestingPage(page);
    await testingPage.navigateToTestingPage();
  });

  test.describe('Page Structure and SEO Tests', () => {
    test('BUG-013: Testing page has multiple H1 elements (HTML Standards Violation)', async () => {
      // This test identifies a critical HTML standards violation
      // Expected: Only one H1 element per page for proper SEO and accessibility
      // Current: Testing page has 2 H1 elements which violates HTML standards
      
      const h1Count = await testingPage.getH1Count();
      const h1Texts = await testingPage.getH1Texts();
      
      console.log(`Found ${h1Count} H1 elements with texts: ${h1Texts.join(', ')}`);
      
      // This test will fail, highlighting a serious HTML standards violation
      expect(h1Count, 
        `Page should have exactly 1 H1 element for proper SEO. Found ${h1Count} H1 elements: ${h1Texts.join(', ')}`
      ).toBe(1);
    });

    test('BUG-008: Testing page has proper H1 (POSITIVE TEST)', async () => {
      // This test verifies that the Testing page has a proper H1
      // Expected: H1 should be "TESTING" and be visible
      // Current: This should pass as it appears to be implemented correctly
      
      await expect(testingPage.mainHeading).toBeVisible();
      const h1Text = await testingPage.mainHeading.textContent();
      
      expect(h1Text?.trim(), 
        'Testing page should have "TESTING" as H1 heading'
      ).toBe('TESTING');
      
      // This test should pass, showing good implementation
      console.log('✅ Testing page has proper H1 heading');
    });

    test('BUG-010: Testing page missing meta description', async () => {
      // This test checks if the Testing page has SEO meta description
      // Expected: Each page should have unique meta description for SEO
      // Current: Testing page likely missing meta description
      
      const metaDescription = await testingPage.getMetaDescription();
      
      // This test will likely fail, showing SEO issue is site-wide  
      expect(metaDescription, 
        'Testing page should have a meta description for SEO'
      ).toBeTruthy();
      
      if (metaDescription) {
        expect(metaDescription.length, 
          `Meta description should be 120-160 characters. Found: ${metaDescription.length}`
        ).toBeGreaterThanOrEqual(120);
      }
    });
  });

  test.describe('Navigation and Link Tests', () => {
    test('BUG-009: Testing page also has broken navigation links', async () => {
      // This test identifies that broken navigation links exist across pages
      // Expected: Navigation should be consistent and functional across all pages
      // Current: Same broken links from homepage exist on Testing page
      
      const emptyLinks = await testingPage.getEmptyNavigationLinks();
      
      // This test will fail, showing the navigation issue is site-wide
      expect(emptyLinks.length, 
        `Testing page has ${emptyLinks.length} broken navigation links (same as homepage). This is a site-wide issue.`
      ).toBe(0);
    });

    test('BUG-014: Links without descriptive text for accessibility', async () => {
      // This test checks for accessibility issues with links
      // Expected: All links should have descriptive text or proper ARIA labels
      // Current: Multiple links without text content found
      
      const linksWithoutText = await testingPage.getLinksWithoutText();
      
      if (linksWithoutText.length > 0) {
        console.log('Links without text:', linksWithoutText.slice(0, 5));
      }
      
      // This test will fail, showing accessibility issues
      expect(linksWithoutText.length, 
        `Found ${linksWithoutText.length} links without text content. This creates accessibility issues.`
      ).toBe(0);
    });

    test('Testing page navigation links functionality (POSITIVE TEST)', async ({ page }) => {
      // This test verifies main navigation links work properly
      // Expected: All main navigation links should navigate to their respective pages
      
      const currentUrl = page.url();
      
      // Test placement link
      await testingPage.placementNavLink.click();
      await page.waitForLoadState('networkidle');
      expect(page.url()).toContain('/placement/');
      console.log('✅ Placement navigation link works');
      
      // Navigate back to testing page
      await testingPage.navigateToTestingPage();
      await page.waitForLoadState('networkidle');
      
      // Test writing link
      await testingPage.writingNavLink.click();
      await page.waitForLoadState('networkidle');
      expect(page.url()).toContain('/writing/');
      console.log('✅ Writing navigation link works');
    });
  });

  test.describe('Content and Interactive Elements Tests', () => {
    test('BUG-011: Contact button functionality (POSITIVE TEST)', async ({ page }) => {
      // This test verifies the "Contact Excelon" button works properly
      // Expected: Button should navigate to contact page
      // Current: Should work but let's verify
      
      const currentUrl = page.url();
      await testingPage.clickContactButton();
      await page.waitForLoadState('networkidle');
      
      const newUrl = page.url();
      
      expect(newUrl, 
        'Contact button should navigate to contact page'
      ).toContain('/contact/');
      
      expect(newUrl, 
        'Contact button should navigate away from testing page'
      ).not.toBe(currentUrl);
      
      console.log('✅ Contact button functionality works');
    });

    test('BUG-012: External link security (POSITIVE TEST)', async ({ page }) => {
      // This test checks if external links have proper accessibility attributes
      // Expected: External links should open in new tab and have proper ARIA labels
      // Current: External link to context-driven-testing.com might not be properly marked
      
      await expect(testingPage.contextDrivenLink).toBeVisible();
      
      const href = await testingPage.contextDrivenLink.getAttribute('href');
      const target = await testingPage.contextDrivenLink.getAttribute('target');
      const rel = await testingPage.contextDrivenLink.getAttribute('rel');
      
      console.log(`External link: href="${href}", target="${target}", rel="${rel}"`);
      
      // Check if external link has proper attributes
      if (href && href.startsWith('http') && !href.includes('xndev.com')) {
        expect(target, 
          'External links should open in new tab for better UX'
        ).toBe('_blank');
        
        expect(rel, 
          'External links should have rel="noopener" for security'
        ).toContain('noopener');
        
        console.log('✅ External link security implemented correctly');
      }
    });

    test('Testing page key content elements visibility (POSITIVE TEST)', async () => {
      // This test verifies that all key content elements are visible and accessible
      // Expected: All main content sections should be visible
      
      // Check main headings
      await expect(testingPage.mainHeading).toBeVisible();
      await expect(testingPage.subHeading).toBeVisible();
      await expect(testingPage.testingServicesHeading).toBeVisible();
      await expect(testingPage.taglineHeading).toBeVisible();
      await expect(testingPage.visualizeHeading).toBeVisible();
      await expect(testingPage.ctaHeading).toBeVisible();
      
      // Check key interactive elements
      await expect(testingPage.contactButton).toBeVisible();
      await expect(testingPage.contextDrivenLink).toBeVisible();
      await expect(testingPage.resourcesImage).toBeVisible();
      
      // Check quote blockquote
      await expect(testingPage.quoteBlockquote).toBeVisible();
      
      console.log('✅ All key content elements are visible');
    });

    test('BUG-015: Image accessibility check', async () => {
      // This test checks if all images have proper alt text for accessibility
      // Expected: All images should have descriptive alt text
      // Current: Need to verify all images have proper alt attributes
      
      const imagesWithoutAlt = await testingPage.checkImageAltTexts();
      
      if (imagesWithoutAlt.length > 0) {
        console.log('Images without alt text:', imagesWithoutAlt);
      }
      
      // This test may fail if images lack alt text
      expect(imagesWithoutAlt.length, 
        `Found ${imagesWithoutAlt.length} images without alt text: ${imagesWithoutAlt.join(', ')}`
      ).toBe(0);
    });
  });

  test.describe('Social Media and Footer Tests', () => {
    test('Social media links have proper titles (POSITIVE TEST)', async () => {
      // This test verifies social media links have proper titles for accessibility
      // Expected: Social media links should have title attributes even if no visible text
      
      // Check that social media links exist and have titles
      await expect(testingPage.twitterLink).toHaveAttribute('title', 'Twitter');
      await expect(testingPage.facebookLink).toHaveAttribute('title', 'Facebook');
      await expect(testingPage.linkedinLink).toHaveAttribute('title', 'LinkedIn');
      await expect(testingPage.rssLink).toHaveAttribute('title', 'RSS Feed');
      
      console.log('✅ Social media links have proper titles');
    });

    test('Footer functionality and links (POSITIVE TEST)', async () => {
      // This test verifies footer elements are present and functional
      // Expected: Footer should have all required links and copyright info
      
      await expect(testingPage.footer).toBeVisible();
      await expect(testingPage.footerCopyright).toBeVisible();
      await expect(testingPage.rumspeedLink).toBeVisible();
      await expect(testingPage.workWithExcelonLink).toBeVisible();
      await expect(testingPage.aboutExcelonLink).toBeVisible();
      await expect(testingPage.contactFooterLink).toBeVisible();
      
      // Verify footer copyright year is current
      const copyrightText = await testingPage.footerCopyright.textContent();
      expect(copyrightText).toContain('2025');
      
      console.log('✅ Footer elements are properly implemented');
    });

    test('BUG-016: Responsive/mobile navigation elements', async () => {
      // This test checks if responsive navigation elements are properly implemented
      // Expected: Mobile navigation triggers should be properly implemented
      // Current: Need to verify mobile navigation functionality
      
      // Check that mobile navigation elements exist (even if not visible on desktop)
      const mobileNavExists = await testingPage.mobileNavTrigger.count() > 0;
      const searchTriggerExists = await testingPage.searchTrigger.count() > 0;
      const sideTriggerExists = await testingPage.sideTrigger.count() > 0;
      
      expect(mobileNavExists, 'Mobile navigation trigger should exist').toBe(true);
      expect(searchTriggerExists, 'Search trigger should exist').toBe(true);
      expect(sideTriggerExists, 'Side trigger should exist').toBe(true);
      
      console.log('✅ Responsive navigation elements are present');
    });
  });
});
