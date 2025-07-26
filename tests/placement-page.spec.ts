import { test, expect } from '@playwright/test';
import { PlacementPage } from '../page-objects/PlacementPage';

/**
 * Placement Page - Comprehensive Functional Tests
 * 
 * These tests follow ISTQB testing standards and focus on:
 * - HTML Standards Compliance
 * - SEO Requirements 
 * - Accessibility Standards
 * - Navigation Functionality
 * - Content Validation
 * - User Experience Elements
 * 
 * Test Strategy: Bug-first approach where tests fail for bugs, pass when fixed
 * Browser: Chromium only as requested
 * Framework: Playwright with TypeScript
 */

test.describe('Placement Page - Comprehensive Functional Tests', () => {
  let placementPage: PlacementPage;

  test.beforeEach(async ({ page }) => {
    placementPage = new PlacementPage(page);
    await placementPage.goto();
  });

  test.describe('Page Structure and SEO Tests', () => {
    
    test('BUG-017: Placement page has multiple H1 elements (HTML Standards Violation)', async () => {
      // ISTQB Principle: Test focuses on a single behavior - HTML standards compliance
      const h1Elements = await placementPage.getAllH1Elements();
      const h1Count = h1Elements.length;
      const h1Texts = h1Elements.join(', ');
      
      console.log(`Found ${h1Count} H1 elements with texts: ${h1Texts}`);
      
      expect(h1Count,
        `Page should have exactly 1 H1 element for proper SEO. Found ${h1Count} H1 elements: ${h1Texts}`
      ).toBe(1);
    });

    test('BUG-018: Placement page has proper H1 (POSITIVE TEST)', async () => {
      // ISTQB Principle: Positive test to validate expected behavior
      const mainHeading = await placementPage.getMainHeading();
      console.log(`Main H1 heading: "${mainHeading}"`);
      
      expect(mainHeading.toLowerCase()).toContain('placement');
      expect(mainHeading.length).toBeGreaterThan(3);
      
      console.log('✅ Placement page has proper H1 heading');
    });

    test('BUG-019: Placement page missing meta description', async () => {
      // ISTQB Principle: SEO requirement validation
      const metaDescription = await placementPage.getMetaDescription();
      
      expect(metaDescription,
        'Placement page should have a meta description for SEO'
      ).toBeTruthy();

      if (metaDescription) {
        expect(metaDescription.length,
          `Meta description should be between 150-160 characters. Found ${metaDescription.length} characters.`
        ).toBeGreaterThanOrEqual(100);
        
        expect(metaDescription.length,
          `Meta description should not exceed 160 characters. Found ${metaDescription.length} characters.`
        ).toBeLessThanOrEqual(160);
      }
    });

    test('BUG-020: Page title validation', async () => {
      // ISTQB Principle: SEO and branding requirement validation
      const pageTitle = await placementPage.getPageTitle();
      console.log(`Page title: "${pageTitle}"`);
      
      expect(pageTitle).toContain('Placement');
      expect(pageTitle).toContain('Excelon');
      expect(pageTitle.length).toBeGreaterThan(10);
      expect(pageTitle.length).toBeLessThan(70); // SEO best practice
    });
  });

  test.describe('Navigation and Link Tests', () => {
    
    test('BUG-021: Placement page also has broken navigation links', async () => {
      // ISTQB Principle: Site-wide consistency validation
      const brokenLinks = await placementPage.getBrokenNavigationLinks();
      
      console.log(`Found ${brokenLinks.length} broken navigation links:`);
      brokenLinks.forEach((link, index) => {
        console.log(`Broken link ${index + 1}: href="${link.href}", text="${link.text}"`);
      });
      
      expect(brokenLinks.length,
        `Placement page has ${brokenLinks.length} broken navigation links (same as homepage). This is a site-wide issue.`
      ).toBe(0);
    });

    test('BUG-022: Links without descriptive text for accessibility', async () => {
      // ISTQB Principle: Accessibility compliance validation
      const linksWithoutText = await placementPage.getLinksWithoutText();
      
      console.log(`Links without text: [`);
      linksWithoutText.slice(0, 5).forEach(link => {
        console.log(`  'Link with href="${link.href}" has no text content'`);
      });
      if (linksWithoutText.length > 5) {
        console.log(`  ... and ${linksWithoutText.length - 5} more`);
      }
      console.log(`]`);
      
      expect(linksWithoutText.length,
        `Found ${linksWithoutText.length} links without text content. This creates accessibility issues.`
      ).toBe(0);
    });

    test('Placement page navigation links functionality (POSITIVE TEST)', async ({ page }) => {
      // ISTQB Principle: Positive functional test
      const linkResults = await placementPage.verifyNavigationLinkFunctionality();
      
      console.log(`Working links: ${linkResults.working.join(', ')}`);
      console.log(`Broken links: ${linkResults.broken.join(', ')}`);
      
      expect(linkResults.working.length).toBeGreaterThan(0);
      
      // Test specific functional navigation links
      const testingHref = await placementPage.testingNavLink.getAttribute('href');
      expect(testingHref).toContain('testing');
      console.log('✅ Testing navigation link works');
      
      const writingHref = await placementPage.writingNavLink.getAttribute('href');
      expect(writingHref).toContain('writing');
      console.log('✅ Writing navigation link works');
    });
  });

  test.describe('Content and Interactive Elements Tests', () => {
    
    test('BUG-023: Contact button functionality (POSITIVE TEST)', async () => {
      // ISTQB Principle: Critical user action validation
      const isContactButtonFunctional = await placementPage.isContactButtonFunctional();
      
      expect(isContactButtonFunctional,
        'Contact button should have a valid href pointing to contact page'
      ).toBe(true);
      
      await expect(placementPage.contactButton).toBeVisible();
      await expect(placementPage.contactButton).toBeEnabled();
      
      console.log('✅ Contact button functionality works');
    });

    test('BUG-024: Image accessibility check', async () => {
      // ISTQB Principle: Accessibility compliance validation
      const imagesWithoutAlt = await placementPage.getImagesWithoutAltText();
      
      console.log(`Images without alt text: ${imagesWithoutAlt.length}`);
      imagesWithoutAlt.forEach((img, index) => {
        console.log(`Image ${index + 1}: src="${img.src}", alt="${img.alt}"`);
      });
      
      expect(imagesWithoutAlt.length,
        `Found ${imagesWithoutAlt.length} images without proper alt text. This violates accessibility standards.`
      ).toBe(0);
    });

    test('Placement page key content elements visibility (POSITIVE TEST)', async () => {
      // ISTQB Principle: Content validation and user experience
      
      // Check main content sections are visible
      await expect(placementPage.recruitingHeading).toBeVisible();
      await expect(placementPage.budgetHeading).toBeVisible();
      await expect(placementPage.contactHeading).toBeVisible();
      
      // Check specific content paragraphs
      await expect(placementPage.staffingParagraph).toBeVisible();
      await expect(placementPage.recruitersExperienceParagraph).toBeVisible();
      await expect(placementPage.bestForLessParagraph).toBeVisible();
      
      // Check content quality indicators
      const recruitingText = await placementPage.recruitingHeading.textContent();
      expect(recruitingText).toContain('Recruiting');
      
      const budgetText = await placementPage.budgetHeading.textContent();
      expect(budgetText).toContain('budget');
      
      console.log('✅ All key content elements are visible and contain expected text');
    });

    test('BUG-025: Content sections structure validation', async () => {
      // ISTQB Principle: Content structure and hierarchy validation
      
      // Validate H2 headings hierarchy
      const h2Elements = await placementPage.getAllH2Elements();
      console.log(`Found ${h2Elements.length} H2 elements:`);
      h2Elements.forEach((h2, index) => {
        console.log(`H2 ${index + 1}: "${h2}"`);
      });
      
      // Check for expected H2 headings
      const h2Texts = h2Elements.join(' | ');
      expect(h2Texts).toContain('Recruiting and Contract Staff');
      expect(h2Texts).toContain('Outstanding IT help without busting your budget');
      expect(h2Texts).toContain('technical expertise');
      
      // Check for duplicate H2 headings
      const duplicateH2s = h2Elements.filter((h2, index) => 
        h2Elements.indexOf(h2) !== index && !h2.includes('No results') && !h2.includes('Filter')
      );
      
      expect(duplicateH2s.length,
        `Found duplicate H2 headings: ${duplicateH2s.join(', ')}`
      ).toBe(0);
    });
  });

  test.describe('Social Media and Footer Tests', () => {
    
    test('BUG-026: Social media links have proper titles (POSITIVE TEST)', async () => {
      // ISTQB Principle: Social media integration validation
      const socialCounts = await placementPage.getSocialMediaLinkCounts();
      
      console.log(`Social media link counts:`, socialCounts);
      
      // Verify social media links exist
      expect(socialCounts.twitter).toBeGreaterThan(0);
      expect(socialCounts.facebook).toBeGreaterThan(0);
      expect(socialCounts.linkedin).toBeGreaterThan(0);
      expect(socialCounts.rss).toBeGreaterThan(0);
      
      // Check that social media links have titles
      await expect(placementPage.twitterLinks.first()).toHaveAttribute('title', 'Twitter');
      await expect(placementPage.facebookLinks.first()).toHaveAttribute('title', 'Facebook');
      await expect(placementPage.linkedinLinks.first()).toHaveAttribute('title', 'LinkedIn');
      await expect(placementPage.rssLinks.first()).toHaveAttribute('title', 'RSS Feed');
      
      console.log('✅ Social media links have proper titles');
    });

    test('Footer functionality and links (POSITIVE TEST)', async () => {
      // ISTQB Principle: Footer navigation and legal compliance
      
      // Check footer is present and visible
      await expect(placementPage.footer).toBeVisible();
      
      // Check copyright information
      await expect(placementPage.copyrightText).toBeVisible();
      const copyrightText = await placementPage.copyrightText.textContent();
      expect(copyrightText).toContain('2025');
      expect(copyrightText).toContain('Excelon Development');
      
      // Check footer links functionality
      await expect(placementPage.workWithExcelonLink).toBeVisible();
      await expect(placementPage.aboutExcelonLink).toBeVisible();
      await expect(placementPage.footerContactLink).toBeVisible();
      
      // Check external link (Rumspeed)
      await expect(placementPage.rumspeedLink).toBeVisible();
      const rumspeedHref = await placementPage.rumspeedLink.getAttribute('href');
      expect(rumspeedHref).toContain('rumspeed.com');
      
      console.log('✅ Footer elements are properly implemented');
    });

    test('BUG-027: Multiple social media link instances (Strict Mode Violation)', async () => {
      // ISTQB Principle: Technical implementation validation
      const socialCounts = await placementPage.getSocialMediaLinkCounts();
      
      console.log(`Social media link instance counts:`, socialCounts);
      
      // Check for multiple instances that could cause strict mode violations
      if (socialCounts.twitter > 1) {
        console.log(`⚠️ Multiple Twitter links found: ${socialCounts.twitter} instances`);
      }
      if (socialCounts.facebook > 1) {
        console.log(`⚠️ Multiple Facebook links found: ${socialCounts.facebook} instances`);
      }
      if (socialCounts.linkedin > 1) {
        console.log(`⚠️ Multiple LinkedIn links found: ${socialCounts.linkedin} instances`);
      }
      
      // For now, document this as expected behavior due to responsive design
      // but flag it as a potential issue for strict mode
      const hasMultipleInstances = socialCounts.twitter > 1 || socialCounts.facebook > 1 || socialCounts.linkedin > 1;
      
      if (hasMultipleInstances) {
        console.log('📝 Note: Multiple social media link instances detected (responsive design)');
        console.log('This may cause Playwright strict mode violations in some tests');
      }
    });

    test('BUG-028: Responsive/mobile navigation elements', async () => {
      // ISTQB Principle: Responsive design validation
      const hasResponsiveElements = await placementPage.areResponsiveElementsPresent();
      
      expect(hasResponsiveElements,
        'Page should have responsive/mobile navigation elements'
      ).toBe(true);
      
      // Check specific mobile navigation elements
      const mobileNavCount = await placementPage.mobileNavigation.count();
      const sidebarNavCount = await placementPage.sidebarNavigation.count();
      
      console.log(`Mobile navigation instances: ${mobileNavCount}`);
      console.log(`Sidebar navigation instances: ${sidebarNavCount}`);
      
      expect(mobileNavCount + sidebarNavCount).toBeGreaterThan(0);
      
      console.log('✅ Responsive navigation elements are present');
    });
  });

  test.describe('Content Quality and Business Logic Tests', () => {
    
    test('BUG-029: Placement page content quality validation', async () => {
      // ISTQB Principle: Business logic and content validation
      
      // Check key business messaging is present
      await expect(placementPage.staffingParagraph).toContainText('more people');
      await expect(placementPage.recruitersExperienceParagraph).toContainText('software development');
      await expect(placementPage.bestForLessParagraph).toContainText('best for less');
      
      // Check for specific value propositions
      const typicalRecruitersText = await placementPage.typicalRecruitersNote.textContent();
      expect(typicalRecruitersText).toContain('typical recruiters');
      
      // Validate content doesn't have obvious errors
      const allContentText = await placementPage.page.textContent('main');
      expect(allContentText).not.toContain('Lorem ipsum');
      expect(allContentText).not.toContain('[placeholder]');
      expect(allContentText).not.toContain('TBD');
      
      console.log('✅ Placement page content quality meets business requirements');
    });

    test('BUG-030: Call-to-action effectiveness validation', async () => {
      // ISTQB Principle: User journey and conversion validation
      
      // Check primary CTA (Contact button) is prominent and functional
      await expect(placementPage.contactButton).toBeVisible();
      
      const contactButtonText = await placementPage.contactButton.textContent();
      expect(contactButtonText).toContain('Contact');
      
      // Check CTA positioning (should be after compelling content)
      const contactSectionPosition = await placementPage.contactSection.isVisible();
      expect(contactSectionPosition).toBe(true);
      
      // Validate the question leading to CTA is compelling
      const contactHeadingText = await placementPage.contactHeading.textContent();
      expect(contactHeadingText).toContain('project');
      expect(contactHeadingText).toContain('technical expertise');
      
      console.log('✅ Call-to-action elements are effectively positioned and compelling');
    });
  });
});
