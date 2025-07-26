import { test, expect } from '@playwright/test';
import { WritingPage } from '../page-objects/WritingPage';

test.describe('Writing Page - Comprehensive Functional Tests', () => {
  let writingPage: WritingPage;

  test.beforeEach(async ({ page }) => {
    writingPage = new WritingPage(page);
    await writingPage.navigateTo();
  });

  test.describe('Page Structure and SEO Validation', () => {
    test('should have correct page title and URL', async () => {
      await expect(writingPage.page).toHaveTitle('Writing - Excelon Development');
      expect(writingPage.page.url()).toBe('https://xndev.com/writing/');
    });

    test('should have meta description for SEO', async () => {
      const metaDescription = await writingPage.getMetaDescription();
      expect(metaDescription).toBeTruthy();
      expect(metaDescription).not.toBe('');
    });

    test('should have exactly one H1 element', async () => {
      const h1Count = await writingPage.getH1Count();
      expect(h1Count).toBe(1);
    });

    test('should have proper H1 content', async () => {
      const h1Elements = await writingPage.getH1Elements();
      expect(h1Elements[0]).toBe('Writing');
    });

    test('should have proper heading hierarchy', async () => {
      const hasProperHierarchy = await writingPage.hasProperHeadingHierarchy();
      expect(hasProperHierarchy).toBe(true);
    });

    test('should be responsive with mobile navigation', async () => {
      const isResponsive = await writingPage.isResponsiveDesignPresent();
      expect(isResponsive).toBe(true);
    });
  });

  test.describe('Navigation and Link Validation', () => {
    test('should have logo that links to homepage', async () => {
      await expect(writingPage.logo).toBeVisible();
      await expect(writingPage.logo).toHaveAttribute('href', 'https://xndev.com/');
    });

    test('should have working main navigation links', async () => {
      await expect(writingPage.testingLink).toBeVisible();
      await expect(writingPage.testingLink).toHaveAttribute('href', 'https://xndev.com/testing/');
      
      await expect(writingPage.placementLink).toBeVisible();
      await expect(writingPage.placementLink).toHaveAttribute('href', 'https://xndev.com/placement/');
      
      await expect(writingPage.consultingLink).toBeVisible();
      await expect(writingPage.consultingLink).toHaveAttribute('href', 'https://xndev.com/consulting/');
      
      await expect(writingPage.softwareLink).toBeVisible();
      await expect(writingPage.softwareLink).toHaveAttribute('href', 'https://xndev.com/custom-software/');
      
      await expect(writingPage.blogLink).toBeVisible();
      await expect(writingPage.blogLink).toHaveAttribute('href', 'https://xndev.com/blog/');
    });

    test('should not have broken navigation links', async () => {
      const brokenLinks = await writingPage.getBrokenNavigationLinks();
      expect(brokenLinks.length).toBe(0);
    });

    test('should have footer navigation links working', async () => {
      await expect(writingPage.workWithExcelonLink).toBeVisible();
      await expect(writingPage.workWithExcelonLink).toHaveAttribute('href', 'https://xndev.com/work-with-excelon/');
      
      await expect(writingPage.aboutExcelonLink).toBeVisible();
      await expect(writingPage.aboutExcelonLink).toHaveAttribute('href', 'https://xndev.com/about-excelon/');
      
      await expect(writingPage.contactLink).toBeVisible();
      await expect(writingPage.contactLink).toHaveAttribute('href', 'https://xndev.com/contact/');
    });

    test('should have secure external links', async () => {
      const unsecureLinks = await writingPage.getExternalLinksWithoutSecurity();
      expect(unsecureLinks).toBe(0);
    });
  });

  test.describe('Content and Interactive Elements', () => {
    test('should display main page heading', async () => {
      await expect(writingPage.pageHeading).toBeVisible();
      await expect(writingPage.pageHeading).toContainText('Writing');
    });

    test('should display subheading', async () => {
      await expect(writingPage.subheading).toBeVisible();
      await expect(writingPage.subheading).toContainText('What we do and how we work');
    });

    test('should display main section heading', async () => {
      await expect(writingPage.mainSectionHeading).toBeVisible();
      await expect(writingPage.mainSectionHeading).toContainText('Technical Expertise. Clear Writing. Delivered.');
    });

    test('should display description paragraphs', async () => {
      await expect(writingPage.descriptionParagraph1).toBeVisible();
      await expect(writingPage.descriptionParagraph1).toContainText('From individual articles to campaigns');
      
      await expect(writingPage.descriptionParagraph2).toBeVisible();
      await expect(writingPage.descriptionParagraph2).toContainText('The writers we partner with belong');
    });

    test('should display professional writing team image', async () => {
      await expect(writingPage.professionalWritingImage).toBeVisible();
      await expect(writingPage.professionalWritingImage).toHaveAttribute('alt', 'Professional Writing Team');
    });

    test('should display statistics section', async () => {
      await expect(writingPage.writersCount).toBeVisible();
      await expect(writingPage.customersCount).toBeVisible();
      await expect(writingPage.publicationsCount).toBeVisible();
      await expect(writingPage.coffeeCount).toBeVisible();
    });

    test('should display contact call-to-action button', async () => {
      await expect(writingPage.contactButton).toBeVisible();
      await expect(writingPage.contactButton).toHaveAttribute('href', 'https://xndev.com/contact/');
      await expect(writingPage.contactButton).toContainText('Contact Excelon');
    });
  });

  test.describe('Recent Publications Section', () => {
    test('should display recent publications heading', async () => {
      await expect(writingPage.recentPublicationsHeading).toBeVisible();
      await expect(writingPage.recentPublicationsHeading).toContainText('Recent Publications');
    });

    test('should display publications list', async () => {
      await expect(writingPage.publicationsList).toBeVisible();
      const publicationCount = await writingPage.getPublicationCount();
      expect(publicationCount).toBeGreaterThan(0);
    });

    test('should display first publication with all elements', async () => {
      await expect(writingPage.firstPublicationTitle).toBeVisible();
      await expect(writingPage.firstPublicationLink).toBeVisible();
      await expect(writingPage.firstPublicationExcerpt).toBeVisible();
      await expect(writingPage.firstPublicationReadMore).toBeVisible();
      await expect(writingPage.firstPublicationDate).toBeVisible();
      await expect(writingPage.firstPublicationComments).toBeVisible();
    });

    test('should have working publication links', async () => {
      await expect(writingPage.firstPublicationLink).toHaveAttribute('href', 'https://xndev.com/2025/07/a-new-test-challenge/');
      await expect(writingPage.secondPublicationLink).toHaveAttribute('href', 'https://xndev.com/2025/05/what-happens-when-this-stuff-doesnt-work/');
      await expect(writingPage.thirdPublicationLink).toHaveAttribute('href', 'https://xndev.com/2025/02/ten-thoughts-on-technical-debt/');
    });

    test('should have working read more links', async () => {
      await expect(writingPage.firstPublicationReadMore).toBeVisible();
      await expect(writingPage.firstPublicationReadMore).toHaveAttribute('href', 'https://xndev.com/2025/07/a-new-test-challenge/');
    });
  });

  test.describe('Footer Elements', () => {
    test('should display footer copyright information', async () => {
      await expect(writingPage.footerCopyright).toBeVisible();
      await expect(writingPage.footerCopyright).toContainText('© 2025 Excelon Development');
    });

    test('should have working Rumspeed link', async () => {
      await expect(writingPage.rumspeedLink).toBeVisible();
      await expect(writingPage.rumspeedLink).toHaveAttribute('href', 'https://rumspeed.com');
    });

    test('should display footer navigation', async () => {
      await expect(writingPage.footerNavigation).toBeVisible();
    });
  });

  test.describe('Accessibility and Standards Compliance', () => {
    test('should not have links without descriptive text', async () => {
      const linksWithoutText = await writingPage.getLinksWithoutText();
      expect(linksWithoutText).toBe(0);
    });

    test('should not have images without alt text', async () => {
      const imagesWithoutAlt = await writingPage.getImagesWithoutAltText();
      expect(imagesWithoutAlt).toBe(0);
    });

    test('should have proper page loading', async () => {
      const isLoaded = await writingPage.isPageLoaded();
      expect(isLoaded).toBe(true);
    });
  });

  test.describe('Business Logic and User Experience', () => {
    test('should allow navigation to contact page via CTA button', async ({ page }) => {
      const navigationPromise = page.waitForNavigation();
      await writingPage.clickContactButton();
      await navigationPromise;
      expect(page.url()).toContain('/contact/');
    });

    test('should allow navigation to publication via link', async ({ page }) => {
      const navigationPromise = page.waitForNavigation();
      await writingPage.clickFirstPublication();
      await navigationPromise;
      expect(page.url()).toContain('/2025/07/a-new-test-challenge/');
    });

    test('should allow navigation to homepage via logo', async ({ page }) => {
      const navigationPromise = page.waitForNavigation();
      await writingPage.clickLogo();
      await navigationPromise;
      expect(page.url()).toBe('https://xndev.com/');
    });

    test('should maintain content quality and readability', async () => {
      // Check that main content sections are present
      await expect(writingPage.mainDescription).toBeVisible();
      await expect(writingPage.callToActionDescription).toBeVisible();
      
      // Verify content loads in reasonable time
      await expect(writingPage.pageHeading).toBeVisible({ timeout: 5000 });
    });
  });
});
