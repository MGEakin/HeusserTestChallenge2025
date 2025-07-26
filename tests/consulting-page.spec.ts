import { test, expect } from '@playwright/test';
import { ConsultingPage } from '../page-objects/ConsultingPage';

test.describe('Consulting Page Tests', () => {
  let consultingPage: ConsultingPage;

  test.beforeEach(async ({ page }) => {
    consultingPage = new ConsultingPage(page);
    await consultingPage.navigateTo();
  });

  test.describe('Page Structure and SEO Validation', () => {
    test('TC-039: should have proper page title', async () => {
      const title = await consultingPage.getPageTitle();
      expect(title).toContain('Consulting');
      expect(title).toContain('Excelon Development');
    });

    test('TC-040: should have meta description for SEO', async () => {
      const metaDescription = await consultingPage.getMetaDescription();
      expect(metaDescription).not.toBeNull();
      expect(metaDescription).not.toBe('');
    });

    test('TC-041: should have proper heading hierarchy', async () => {
      const h1Count = await consultingPage.getH1Count();
      const h2Count = await consultingPage.getH2Count();
      const h4Count = await consultingPage.getH4Count();
      
      expect(h1Count).toBe(1);
      expect(h2Count).toBeGreaterThan(0);
      expect(h4Count).toBeGreaterThan(0);
    });

    test('TC-042: should have correct H1 content', async () => {
      const h1Elements = await consultingPage.getH1Elements();
      expect(h1Elements).toHaveLength(1);
      expect(h1Elements[0]).not.toBe('Search results');
      expect(h1Elements[0]).toContain('Consulting');
    });

    test('TC-043: should have quality page content', async () => {
      const paragraphCount = await consultingPage.getParagraphCount();
      const hasQualityContent = await consultingPage.hasQualityContent();
      
      expect(paragraphCount).toBeGreaterThanOrEqual(7);
      expect(hasQualityContent).toBe(true);
    });

    test('TC-044: should have proper page structure', async () => {
      await expect(consultingPage.mainContent).toBeVisible();
      await expect(consultingPage.pageHeading).toBeVisible();
      await expect(consultingPage.footer).toBeVisible();
    });
  });

  test.describe('Navigation and Link Validation', () => {
    test('TC-045: should have functional main navigation', async () => {
      await expect(consultingPage.mainNavigation).toBeVisible();
      await expect(consultingPage.testingLink).toBeVisible();
      await expect(consultingPage.placementLink).toBeVisible();
      await expect(consultingPage.writingLink).toBeVisible();
      await expect(consultingPage.consultingLink).toBeVisible();
      await expect(consultingPage.softwareLink).toBeVisible();
      await expect(consultingPage.blogLink).toBeVisible();
    });

    test('TC-046: should not have broken navigation links', async () => {
      const brokenLinks = await consultingPage.getBrokenNavigationLinks();
      expect(brokenLinks.length).toBe(0);
    });

    test('TC-047: should have accessible logo and navigation', async () => {
      await expect(consultingPage.logo).toBeVisible();
      await expect(consultingPage.logoImage).toHaveAttribute('alt', 'Excelon Development');
    });

    test('TC-048: should navigate to Testing page', async () => {
      await consultingPage.navigateToTesting();
      await expect(consultingPage.page).toHaveURL(/.*testing/);
    });

    test('TC-049: should navigate to Placement page', async () => {
      await consultingPage.navigateToPlacement();
      await expect(consultingPage.page).toHaveURL(/.*placement/);
    });

    test('TC-050: should navigate to Writing page', async () => {
      await consultingPage.navigateToWriting();
      await expect(consultingPage.page).toHaveURL(/.*writing/);
    });

    test('TC-051: should navigate home when logo is clicked', async () => {
      await consultingPage.clickLogo();
      await expect(consultingPage.page).toHaveURL('https://xndev.com/');
    });
  });

  test.describe('Content and Interactive Elements', () => {
    test('TC-052: should display main content sections', async () => {
      await expect(consultingPage.excelonDifferenceHeading).toBeVisible();
      await expect(consultingPage.practitionersHeading).toBeVisible();
      await expect(consultingPage.callToActionHeading).toBeVisible();
    });

    test('TC-053: should display Excelon Difference section content', async () => {
      await expect(consultingPage.excelonDifferenceHeading).toContainText('The Excelon Difference');
      await expect(consultingPage.introParagraph1).toBeVisible();
      await expect(consultingPage.processParagraph1).toBeVisible();
      await expect(consultingPage.observationParagraph).toBeVisible();
      await expect(consultingPage.recommendationsParagraph).toBeVisible();
    });

    test('TC-054: should display software practitioners section', async () => {
      await expect(consultingPage.practitionersHeading).toContainText('Our consultants are all software practitioners');
      await expect(consultingPage.practitionersParagraph1).toBeVisible();
      await expect(consultingPage.practitionersParagraph2).toBeVisible();
      await expect(consultingPage.practitionersParagraph3).toBeVisible();
    });

    test('TC-055: should have functional contact call-to-action', async () => {
      await expect(consultingPage.contactButton).toBeVisible();
      await expect(consultingPage.contactButton).toHaveAttribute('href', /contact/);
    });

    test('TC-056: should display technical writing image with alt text', async () => {
      await expect(consultingPage.technicalWritingImage).toBeVisible();
      await expect(consultingPage.technicalWritingImage).toHaveAttribute('alt', 'technical writing');
    });

    test('TC-057: should have hero image displayed', async () => {
      await expect(consultingPage.heroImage).toBeVisible();
    });
  });

  test.describe('Consultation Process Validation', () => {
    test('TC-058: should describe consultation timeframe', async () => {
      await expect(consultingPage.consultingTimeframeParagraph).toBeVisible();
      const timeframeText = await consultingPage.consultingTimeframeParagraph.textContent();
      expect(timeframeText).toContain('Most of our consulting sessions');
    });

    test('TC-059: should explain observation process', async () => {
      const observationText = await consultingPage.observationParagraph.textContent();
      expect(observationText).toContain('During our visit we take');
    });

    test('TC-060: should describe recommendations approach', async () => {
      const recommendationsText = await consultingPage.recommendationsParagraph.textContent();
      expect(recommendationsText).toContain('Our recommendations are grounded');
    });

    test('TC-061: should explain consultant qualifications', async () => {
      const practitionersText = await consultingPage.practitionersParagraph2.textContent();
      expect(practitionersText).toContain('When it comes to software');
    });
  });

  test.describe('Footer Validation', () => {
    test('TC-062: should have complete footer elements', async () => {
      await expect(consultingPage.footer).toBeVisible();
      await expect(consultingPage.footerCopyright).toBeVisible();
      await expect(consultingPage.rumspeedLink).toBeVisible();
      await expect(consultingPage.footerNavigation).toBeVisible();
    });

    test('TC-063: should have functional footer navigation', async () => {
      await expect(consultingPage.workWithExcelonLink).toBeVisible();
      await expect(consultingPage.aboutExcelonLink).toBeVisible();
      await expect(consultingPage.contactLink).toBeVisible();
    });

    test('TC-064: should navigate to contact from footer', async () => {
      await consultingPage.clickFooterContact();
      await expect(consultingPage.page).toHaveURL(/.*contact/);
    });

    test('TC-065: should have functional Rumspeed link', async () => {
      await expect(consultingPage.rumspeedLink).toHaveAttribute('href');
      const rumspeedHref = await consultingPage.rumspeedLink.getAttribute('href');
      expect(rumspeedHref).not.toBe('#');
      expect(rumspeedHref).not.toBe('');
    });
  });

  test.describe('Accessibility and Security Validation', () => {
    test('TC-066: should not have images without alt text', async () => {
      const imagesWithoutAlt = await consultingPage.getImagesWithoutAltText();
      expect(imagesWithoutAlt).toBe(0);
    });

    test('TC-067: should not have links without accessible text', async () => {
      const linksWithoutText = await consultingPage.getLinksWithoutText();
      expect(linksWithoutText).toBe(0);
    });

    test('TC-068: should have secure external links', async () => {
      const unsecureLinks = await consultingPage.getExternalLinksWithoutSecurity();
      expect(unsecureLinks).toBe(0);
    });

    test('TC-069: should have responsive design elements', async () => {
      const hasResponsiveDesign = await consultingPage.isResponsiveDesignPresent();
      expect(hasResponsiveDesign).toBe(true);
    });

    test('TC-070: should have proper heading hierarchy for accessibility', async () => {
      const hasProperHierarchy = await consultingPage.hasProperHeadingHierarchy();
      expect(hasProperHierarchy).toBe(true);
    });
  });

  test.describe('Mobile Navigation Validation', () => {
    test('TC-071: should have mobile navigation elements', async () => {
      await expect(consultingPage.mobileNavigation).toBeVisible();
      await expect(consultingPage.mobileNavigationList).toBeVisible();
    });

    test('TC-072: should have mobile navigation links', async () => {
      await expect(consultingPage.mobileTestingLink).toBeVisible();
      await expect(consultingPage.mobilePlacementLink).toBeVisible();
      await expect(consultingPage.mobileWritingLink).toBeVisible();
      await expect(consultingPage.mobileConsultingLink).toBeVisible();
      await expect(consultingPage.mobileSoftwareLink).toBeVisible();
    });

    test('TC-073: should have mobile logo with proper accessibility', async () => {
      await expect(consultingPage.mobileLogoLink).toBeVisible();
      await expect(consultingPage.mobileLogoImage).toHaveAttribute('alt', 'Excelon Development');
    });

    test('TC-074: should have mobile menu expandable sections', async () => {
      await expect(consultingPage.mobileAboutExpander).toBeVisible();
      await expect(consultingPage.mobileTrainingExpander).toBeVisible();
    });
  });
});
