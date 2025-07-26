import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test.describe('Homepage Navigation - Broken Links', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateToHome();
  });

  test('BUG-001: Navigation should not contain empty links', async () => {
    // This test identifies broken navigation links that point to "#"
    // Expected: All navigation links should have valid URLs
    // Current: There are navigation links with href="#" which is a bug
    
    const emptyLinks = await homePage.getEmptyNavigationLinks();
    
    // This test will fail until the bug is fixed
    // When fixed, all navigation links should have proper URLs
    expect(emptyLinks.length, 
      `Found ${emptyLinks.length} navigation links with empty href="#". All navigation links should have valid URLs.`
    ).toBe(0);
  });

  test('BUG-002: All navigation links should be functional', async () => {
    // This test verifies that clicking navigation links actually navigates somewhere
    // Expected: Clicking any navigation link should navigate to a different page
    // Current: Some links point to "#" and don't navigate anywhere
    
    const brokenLinks = await homePage.getBrokenLinks();
    
    // Document broken links for the development team
    if (brokenLinks.length > 0) {
      console.log(`Found ${brokenLinks.length} broken links on the homepage`);
      for (let i = 0; i < brokenLinks.length; i++) {
        const href = await brokenLinks[i].getAttribute('href');
        const text = await brokenLinks[i].textContent();
        console.log(`Broken link ${i + 1}: href="${href}", text="${text}"`);
      }
    }
    
    // This test will fail until all links are fixed
    expect(brokenLinks.length, 
      `Found ${brokenLinks.length} broken links. All links should have valid destinations.`
    ).toBe(0);
  });

  test('BUG-003: Navigation links should have descriptive text', async () => {
    // This test checks for navigation links without text content
    // Expected: All navigation links should have descriptive text for accessibility
    // Current: Some navigation links appear to have empty or minimal text
    
    const navLinks = await homePage.page.locator('nav a').all();
    const linksWithoutText: string[] = [];
    
    for (const link of navLinks) {
      const text = await link.textContent();
      const trimmedText = text?.trim() || '';
      if (trimmedText.length === 0) {
        const href = await link.getAttribute('href');
        linksWithoutText.push(`Link with href="${href}" has no text content`);
      }
    }
    
    // This test will fail if there are navigation links without proper text
    expect(linksWithoutText.length, 
      `Found navigation links without text content: ${linksWithoutText.join(', ')}`
    ).toBe(0);
  });
});
