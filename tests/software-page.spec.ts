import { test, expect } from '@playwright/test';
import { SoftwarePage } from '../page-objects/SoftwarePage';

test.describe('Software Page Tests', () => {
  let softwarePage: SoftwarePage;

  test.beforeEach(async ({ page }) => {
    softwarePage = new SoftwarePage(page);
    await softwarePage.navigateTo();
  });

  test.describe('Page Structure and SEO Validation', () => {
    test('TC-075: should have proper page title', async () => {
      const title = await softwarePage.getPageTitle();
      expect(title).toContain('Custom Software');
      expect(title).toContain('Excelon Development');
    });

    test('TC-076: should have meta description for SEO', async () => {
      const metaDescription = await softwarePage.getMetaDescription();
      expect(metaDescription).not.toBeNull();
      expect(metaDescription).not.toBe('');
      expect(metaDescription).toContain('custom software');
    });

    test('TC-077: should have proper heading hierarchy', async () => {
      const h1Count = await softwarePage.getH1Count();
      const h2Count = await softwarePage.getH2Count();
      const h4Count = await softwarePage.getH4Count();
      
      expect(h1Count).toBeGreaterThanOrEqual(1);
      expect(h2Count).toBeGreaterThan(0);
      expect(h4Count).toBeGreaterThan(0);
    });

    test('TC-078: should have correct H1 content', async () => {
      const h1Elements = await softwarePage.getH1Elements();
      expect(h1Elements.length).toBeGreaterThanOrEqual(1);
      
      // Check for the page-specific H1
      const pageH1 = h1Elements.find(h1 => h1.toLowerCase().includes('software'));
      expect(pageH1).toBeDefined();
      expect(pageH1).not.toBe('Search results');
    });

    test('TC-079: should not have multiple H1 elements issue', async () => {
      const h1Count = await softwarePage.getH1Count();
      const h1Elements = await softwarePage.getH1Elements();
      
      // Document the issue but expect it to fail until fixed
      if (h1Count > 1) {
        const searchResultsH1 = h1Elements.find(h1 => h1 === 'Search results');
        expect(searchResultsH1).toBeUndefined(); // This should fail, documenting the bug
      }
      expect(h1Count).toBe(1);
    });

    test('TC-080: should have proper page structure', async () => {
      await expect(softwarePage.mainContent).toBeVisible();
      await expect(softwarePage.pageHeading).toBeVisible();
      await expect(softwarePage.footer).toBeVisible();
    });
  });

  test.describe('Navigation and Link Validation', () => {
    test('TC-081: should have functional main navigation', async () => {
      await expect(softwarePage.mainNavigation).toBeVisible();
      await expect(softwarePage.testingLink).toBeVisible();
      await expect(softwarePage.placementLink).toBeVisible();
      await expect(softwarePage.writingLink).toBeVisible();
      await expect(softwarePage.consultingLink).toBeVisible();
      await expect(softwarePage.softwareLink).toBeVisible();
      await expect(softwarePage.blogLink).toBeVisible();
    });

    test('TC-082: should not have broken navigation links', async () => {
      const brokenLinks = await softwarePage.getBrokenNavigationLinks();
      expect(brokenLinks.length).toBe(0);
    });

    test('TC-083: should have accessible logo and navigation', async () => {
      await expect(softwarePage.logo).toBeVisible();
      await expect(softwarePage.logoImage).toHaveAttribute('alt', 'Excelon Development');
    });

    test('TC-084: should navigate to Testing page', async () => {
      await softwarePage.navigateToTesting();
      await expect(softwarePage.page).toHaveURL(/.*testing/);
    });

    test('TC-085: should navigate to Placement page', async () => {
      await softwarePage.navigateToPlacement();
      await expect(softwarePage.page).toHaveURL(/.*placement/);
    });

    test('TC-086: should navigate to Writing page', async () => {
      await softwarePage.navigateToWriting();
      await expect(softwarePage.page).toHaveURL(/.*writing/);
    });

    test('TC-087: should navigate to Consulting page', async () => {
      await softwarePage.navigateToConsulting();
      await expect(softwarePage.page).toHaveURL(/.*consulting/);
    });

    test('TC-088: should navigate home when logo is clicked', async () => {
      await softwarePage.clickLogo();
      await expect(softwarePage.page).toHaveURL('https://xndev.com/');
    });
  });

  test.describe('Content and Interactive Elements', () => {
    test('TC-089: should display main content sections', async () => {
      await expect(softwarePage.buildForYouHeading).toBeVisible();
      await expect(softwarePage.callToActionHeading).toBeVisible();
    });

    test('TC-090: should display Build For You section content', async () => {
      await expect(softwarePage.buildForYouHeading).toContainText('Let Us Build it For You');
      await expect(softwarePage.introText1).toBeVisible();
      await expect(softwarePage.introText2).toBeVisible();
      await expect(softwarePage.introText3).toBeVisible();
    });

    test('TC-091: should display services list with all items', async () => {
      await expect(softwarePage.servicesList).toBeVisible();
      
      const servicesCount = await softwarePage.getServicesListCount();
      expect(servicesCount).toBeGreaterThanOrEqual(8);
      
      await expect(softwarePage.webDevelopmentItem).toBeVisible();
      await expect(softwarePage.mobileDevelopmentItem).toBeVisible();
      await expect(softwarePage.cloudInfrastructureItem).toBeVisible();
      await expect(softwarePage.continuousDeliveryItem).toBeVisible();
      await expect(softwarePage.systemsIntegrationItem).toBeVisible();
      await expect(softwarePage.embeddedSystemsItem).toBeVisible();
      await expect(softwarePage.technicalWritingItem).toBeVisible();
      await expect(softwarePage.testInfrastructureItem).toBeVisible();
    });

    test('TC-092: should have functional contact call-to-action', async () => {
      await expect(softwarePage.contactButton).toBeVisible();
      await expect(softwarePage.contactButton).toHaveAttribute('href', /contact/);
    });

    test('TC-093: should display conclusion text', async () => {
      await expect(softwarePage.conclusionText1).toBeVisible();
      await expect(softwarePage.conclusionText2).toBeVisible();
    });

    test('TC-094: should have quality content structure', async () => {
      const hasQualityContent = await softwarePage.hasQualityContent();
      expect(hasQualityContent).toBe(true);
    });
  });

  test.describe('Services Portfolio Validation', () => {
    test('TC-095: should list web development services', async () => {
      const servicesItems = await softwarePage.getServicesListItems();
      expect(servicesItems).toContain('Web Development');
    });

    test('TC-096: should list mobile development services', async () => {
      const servicesItems = await softwarePage.getServicesListItems();
      expect(servicesItems).toContain('Mobile (iOS and Android) Development');
    });

    test('TC-097: should list cloud infrastructure services', async () => {
      const servicesItems = await softwarePage.getServicesListItems();
      expect(servicesItems).toContain('Cloud Infrastructure Development');
    });

    test('TC-098: should list continuous delivery services', async () => {
      const servicesItems = await softwarePage.getServicesListItems();
      expect(servicesItems).toContain('Continuous Delivery / Deploy Pipeline Work');
    });

    test('TC-099: should list systems integration services', async () => {
      const servicesItems = await softwarePage.getServicesListItems();
      expect(servicesItems).toContain('Systems Integration');
    });

    test('TC-100: should list embedded systems development', async () => {
      const servicesItems = await softwarePage.getServicesListItems();
      expect(servicesItems).toContain('Real Time Embedded System Development (phone, automotive, aerospace, controllers)');
    });

    test('TC-101: should list technical writing services', async () => {
      const servicesItems = await softwarePage.getServicesListItems();
      expect(servicesItems).toContain('Technical Writing and Documentation');
    });

    test('TC-102: should list test infrastructure services', async () => {
      const servicesItems = await softwarePage.getServicesListItems();
      expect(servicesItems).toContain('Test Infrastructure Development');
    });
  });

  test.describe('Footer Validation', () => {
    test('TC-103: should have complete footer elements', async () => {
      await expect(softwarePage.footer).toBeVisible();
      await expect(softwarePage.footerCopyright).toBeVisible();
      await expect(softwarePage.rumspeedLink).toBeVisible();
      await expect(softwarePage.footerNavigation).toBeVisible();
    });

    test('TC-104: should have functional footer navigation', async () => {
      await expect(softwarePage.workWithExcelonLink).toBeVisible();
      await expect(softwarePage.aboutExcelonLink).toBeVisible();
      await expect(softwarePage.contactLink).toBeVisible();
    });

    test('TC-105: should navigate to contact from footer', async () => {
      await softwarePage.clickFooterContact();
      await expect(softwarePage.page).toHaveURL(/.*contact/);
    });

    test('TC-106: should have functional Rumspeed link', async () => {
      await expect(softwarePage.rumspeedLink).toHaveAttribute('href');
      const rumspeedHref = await softwarePage.rumspeedLink.getAttribute('href');
      expect(rumspeedHref).not.toBe('#');
      expect(rumspeedHref).not.toBe('');
    });
  });

  test.describe('Accessibility and Security Validation', () => {
    test('TC-107: should not have images without alt text', async () => {
      const imagesWithoutAlt = await softwarePage.getImagesWithoutAltText();
      expect(imagesWithoutAlt).toBe(0);
    });

    test('TC-108: should not have links without accessible text', async () => {
      const linksWithoutText = await softwarePage.getLinksWithoutText();
      expect(linksWithoutText).toBe(0);
    });

    test('TC-109: should have secure external links', async () => {
      const unsecureLinks = await softwarePage.getExternalLinksWithoutSecurity();
      expect(unsecureLinks).toBe(0);
    });

    test('TC-110: should have responsive design elements', async () => {
      const hasResponsiveDesign = await softwarePage.isResponsiveDesignPresent();
      expect(hasResponsiveDesign).toBe(true);
    });

    test('TC-111: should have proper heading hierarchy for accessibility', async () => {
      const hasProperHierarchy = await softwarePage.hasProperHeadingHierarchy();
      expect(hasProperHierarchy).toBe(true);
    });
  });

  test.describe('Mobile Navigation Validation', () => {
    test('TC-112: should have mobile navigation elements', async () => {
      await expect(softwarePage.mobileNavigation).toBeVisible();
    });

    test('TC-113: should have mobile navigation links', async () => {
      await expect(softwarePage.mobileTestingLink).toBeVisible();
      await expect(softwarePage.mobilePlacementLink).toBeVisible();
      await expect(softwarePage.mobileWritingLink).toBeVisible();
      await expect(softwarePage.mobileConsultingLink).toBeVisible();
      await expect(softwarePage.mobileSoftwareLink).toBeVisible();
    });

    test('TC-114: should have mobile logo with proper accessibility', async () => {
      await expect(softwarePage.mobileLogoLink).toBeVisible();
      await expect(softwarePage.mobileLogoImage).toHaveAttribute('alt', 'Excelon Development');
    });

    test('TC-115: should have mobile menu expandable sections', async () => {
      await expect(softwarePage.mobileAboutExpander).toBeVisible();
      await expect(softwarePage.mobileTrainingExpander).toBeVisible();
    });
  });

  test.describe('Business Value and Content Quality', () => {
    test('TC-116: should communicate value proposition clearly', async () => {
      const mainContentText = await softwarePage.getMainContentText();
      expect(mainContentText).toContain('custom development');
      expect(mainContentText).toContain('fair price');
      expect(mainContentText).toContain('realistic projections');
    });

    test('TC-117: should highlight competitive advantages', async () => {
      const mainContentText = await softwarePage.getMainContentText();
      expect(mainContentText).toContain('Contracting Plus');
      expect(mainContentText).toContain('staff augmentation');
      expect(mainContentText).toContain('custom test suite');
    });

    test('TC-118: should provide clear service offerings', async () => {
      const servicesCount = await softwarePage.getServicesListCount();
      expect(servicesCount).toBeGreaterThanOrEqual(8);
      
      const servicesItems = await softwarePage.getServicesListItems();
      expect(servicesItems.length).toBeGreaterThanOrEqual(8);
    });
  });
});
