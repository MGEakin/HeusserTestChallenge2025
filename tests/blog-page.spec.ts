import { test, expect } from '@playwright/test';
import { BlogPage } from '../page-objects/BlogPage';

/**
 * Blog Page Tests - XNDEV.COM Blog Page
 * URL: https://xndev.com/blog/
 * 
 * Comprehensive test suite following ISTQB testing standards.
 * Tests are designed with bug-first approach to identify issues.
 * Each test validates a single behavior for better isolation.
 */

test.describe('Blog Page Tests', () => {
  let blogPage: BlogPage;

  test.beforeEach(async ({ page }) => {
    blogPage = new BlogPage(page);
    await page.goto('https://xndev.com/blog/');
  });

  test.describe('Page Structure and SEO Validation', () => {
    test('TC-119: should have proper page title', async () => {
      const hasProperTitle = await blogPage.hasProperPageTitle();
      expect(hasProperTitle).toBe(true);
    });

    test('TC-120: should have meta description for SEO', async () => {
      const hasMetaDesc = await blogPage.hasMetaDescription();
      expect(hasMetaDesc).toBe(true);
    });

    test('TC-121: should have proper heading hierarchy', async () => {
      const hasProperHierarchy = await blogPage.hasProperHeadingHierarchy();
      expect(hasProperHierarchy).toBe(true);
    });

    test('TC-122: should have correct H1 content', async () => {
      const hasProperH1 = await blogPage.hasProperH1Content();
      expect(hasProperH1).toBe(true);
    });

    test('TC-123: should not have multiple H1 elements issue', async () => {
      const h1Count = await blogPage.getH1Count();
      const h1Contents = await blogPage.getH1Contents();
      
      // Document the multiple H1 bug if it exists
      if (h1Count > 1) {
        const searchResultsH1 = h1Contents.find(h1 => h1 === 'Search results');
        expect(searchResultsH1).toBeUndefined(); // This should fail, documenting the bug
      }
      expect(h1Count).toBe(1);
    });

    test('TC-124: should have proper page structure', async () => {
      await expect(blogPage.mainContent).toBeVisible();
      await expect(blogPage.pageHeading).toBeVisible();
      await expect(blogPage.footer).toBeVisible();
    });
  });

  test.describe('Navigation and Link Validation', () => {
    test('TC-125: should have functional main navigation', async () => {
      await expect(blogPage.mainNavigation).toBeVisible();
      await expect(blogPage.logo).toBeVisible();
    });

    test('TC-126: should not have broken navigation links', async () => {
      const brokenLinks = await blogPage.getBrokenNavigationLinks();
      expect(brokenLinks.length).toBe(0);
    });

    test('TC-127: should have accessible logo and navigation', async () => {
      await expect(blogPage.logo).toBeVisible();
      await expect(blogPage.mainNavigation).toBeVisible();
    });

    test('TC-128: should navigate to Testing page', async () => {
      await blogPage.navigateToTesting();
      await expect(blogPage.page).toHaveURL(/.*testing.*/);
    });

    test('TC-129: should navigate to Placement page', async () => {
      await blogPage.navigateToPlacement();
      await expect(blogPage.page).toHaveURL(/.*placement.*/);
    });

    test('TC-130: should navigate to Writing page', async () => {
      await blogPage.navigateToWriting();
      await expect(blogPage.page).toHaveURL(/.*writing.*/);
    });

    test('TC-131: should navigate to Consulting page', async () => {
      await blogPage.navigateToConsulting();
      await expect(blogPage.page).toHaveURL(/.*consulting.*/);
    });

    test('TC-132: should navigate to Software page', async () => {
      await blogPage.navigateToSoftware();
      await expect(blogPage.page).toHaveURL(/.*custom-software.*/);
    });

    test('TC-133: should navigate home when logo is clicked', async () => {
      await blogPage.navigateToHome();
      await expect(blogPage.page).toHaveURL('https://xndev.com/');
    });
  });

  test.describe('Blog Content Validation', () => {
    test('TC-134: should display blog posts', async () => {
      const postCount = await blogPage.getBlogPostCount();
      expect(postCount).toBeGreaterThan(0);
      await expect(blogPage.blogArticles.first()).toBeVisible();
    });

    test('TC-135: should have blog post titles', async () => {
      const titles = await blogPage.getBlogPostTitles();
      expect(titles.length).toBeGreaterThan(0);
      expect(titles[0]).toBeTruthy();
    });

    test('TC-136: should have blog post metadata', async () => {
      await expect(blogPage.blogPostAuthors.first()).toBeVisible();
      await expect(blogPage.blogPostDates.first()).toBeVisible();
    });

    test('TC-137: should have functional blog post links', async () => {
      await expect(blogPage.blogPostLinks.first()).toBeVisible();
      const firstPostTitle = await blogPage.getFirstBlogPostTitle();
      expect(firstPostTitle).toBeTruthy();
    });

    test('TC-138: should display blog post categories', async () => {
      await expect(blogPage.blogPostCategories.first()).toBeVisible();
      const categories = await blogPage.getBlogPostCategories();
      expect(categories.length).toBeGreaterThan(0);
    });

    test('TC-139: should have read more links', async () => {
      const readMoreCount = await blogPage.readMoreLinks.count();
      expect(readMoreCount).toBeGreaterThan(0);
    });

    test('TC-140: should have complete blog content structure', async () => {
      const isComplete = await blogPage.isBlogPostContentComplete();
      expect(isComplete).toBe(true);
    });

    test('TC-141: should have quality blog content', async () => {
      const hasQualityContent = await blogPage.hasQualityBlogContent();
      expect(hasQualityContent).toBe(true);
    });
  });

  test.describe('Pagination Validation', () => {
    test('TC-142: should have pagination controls', async () => {
      const hasPagination = await blogPage.hasPagination();
      expect(hasPagination).toBe(true);
    });

    test('TC-143: should have functional pagination links', async () => {
      const paginationLinks = await blogPage.getPaginationLinks();
      expect(paginationLinks.length).toBeGreaterThan(2);
    });

    test('TC-144: should have valid pagination structure', async () => {
      const hasValidPagination = await blogPage.hasValidPagination();
      expect(hasValidPagination).toBe(true);
    });

    test('TC-145: should navigate to next page', async () => {
      const initialUrl = blogPage.page.url();
      await blogPage.navigateToNextPage();
      await expect(blogPage.page).not.toHaveURL(initialUrl);
    });

    test('TC-146: should navigate to specific page number', async () => {
      await blogPage.navigateToPage('2');
      await expect(blogPage.page).toHaveURL(/.*page\/2.*/);
    });
  });

  test.describe('Sidebar and Widget Validation', () => {
    test('TC-147: should have sidebar content', async () => {
      const hasSidebar = await blogPage.hasSidebarContent();
      expect(hasSidebar).toBe(true);
    });

    test('TC-148: should display coffee mug widget', async () => {
      await expect(blogPage.coffeeMugHeading).toBeVisible();
      await expect(blogPage.coffeeMugWidget).toBeVisible();
    });

    test('TC-149: should have functional coffee mug link', async () => {
      await expect(blogPage.coffeeMugLink).toBeVisible();
      const href = await blogPage.coffeeMugLink.getAttribute('href');
      expect(href).toContain('cafepress');
    });

    test('TC-150: should display latest publication widget', async () => {
      await expect(blogPage.publicationHeading).toBeVisible();
      await expect(blogPage.publicationWidget).toBeVisible();
    });

    test('TC-151: should have functional publication link', async () => {
      await expect(blogPage.publicationLink).toBeVisible();
      const href = await blogPage.publicationLink.getAttribute('href');
      expect(href).toBeTruthy();
    });

    test('TC-152: should have coffee mug image with alt text', async () => {
      await expect(blogPage.coffeeMugImage).toBeVisible();
      const alt = await blogPage.coffeeMugImage.getAttribute('alt');
      expect(alt).toBeTruthy();
    });
  });

  test.describe('Footer Validation', () => {
    test('TC-153: should have complete footer elements', async () => {
      await expect(blogPage.footer).toBeVisible();
      await expect(blogPage.copyrightText).toBeVisible();
      await expect(blogPage.rumspeedLink).toBeVisible();
    });

    test('TC-154: should have functional footer navigation', async () => {
      await expect(blogPage.footerContactLink).toBeVisible();
      await expect(blogPage.footerAboutLink).toBeVisible();
      await expect(blogPage.footerWorkLink).toBeVisible();
    });

    test('TC-155: should navigate to contact from footer', async () => {
      await blogPage.navigateToContact();
      await expect(blogPage.page).toHaveURL(/.*contact.*/);
    });

    test('TC-156: should have functional Rumspeed link', async () => {
      await expect(blogPage.rumspeedLink).toBeVisible();
      const href = await blogPage.rumspeedLink.getAttribute('href');
      expect(href).toBe('https://rumspeed.com/');
    });
  });

  test.describe('Accessibility and Security Validation', () => {
    test('TC-157: should not have images without alt text', async () => {
      const imagesWithoutAlt = await blogPage.getImagesWithoutAlt();
      expect(imagesWithoutAlt).toBe(0);
    });

    test('TC-158: should not have links without accessible text', async () => {
      const linksWithoutText = await blogPage.getLinksWithoutText();
      expect(linksWithoutText).toBe(0);
    });

    test('TC-159: should have secure external links', async () => {
      const unsecureLinks = await blogPage.getExternalLinksWithoutSecurity();
      expect(unsecureLinks).toBe(0);
    });

    test('TC-160: should have responsive design elements', async () => {
      const hasResponsive = await blogPage.hasResponsiveDesignElements();
      expect(hasResponsive).toBe(true);
    });

    test('TC-161: should have proper heading hierarchy for accessibility', async () => {
      const hasProperHierarchy = await blogPage.hasProperHeadingHierarchy();
      expect(hasProperHierarchy).toBe(true);
    });
  });

  test.describe('Mobile Navigation Validation', () => {
    test('TC-162: should have mobile navigation elements', async () => {
      const mobileNavCount = await blogPage.mobileNavigation.count();
      expect(mobileNavCount).toBeGreaterThan(0);
    });

    test('TC-163: should have mobile logo with proper accessibility', async () => {
      const mobileLogoCount = await blogPage.mobileLogo.count();
      if (mobileLogoCount > 0) {
        const alt = await blogPage.mobileLogo.getAttribute('alt');
        expect(alt).toBeTruthy();
      }
    });
  });

  test.describe('Blog Functionality and User Experience', () => {
    test('TC-164: should allow navigation to individual blog posts', async () => {
      const initialUrl = blogPage.page.url();
      await blogPage.clickFirstBlogPost();
      await expect(blogPage.page).not.toHaveURL(initialUrl);
    });

    test('TC-165: should have working read more functionality', async () => {
      const readMoreCount = await blogPage.readMoreLinks.count();
      if (readMoreCount > 0) {
        const initialUrl = blogPage.page.url();
        await blogPage.clickReadMore(0);
        await expect(blogPage.page).not.toHaveURL(initialUrl);
      }
    });

    test('TC-166: should display author information correctly', async () => {
      const authors = await blogPage.getBlogPostAuthors();
      expect(authors.length).toBeGreaterThan(0);
      expect(authors[0]).toContain('Matt Heusser');
    });

    test('TC-167: should display post dates in proper format', async () => {
      const dates = await blogPage.getBlogPostDates();
      expect(dates.length).toBeGreaterThan(0);
      expect(dates[0]).toMatch(/\w+ \d{1,2}, \d{4}/); // Format: "Month DD, YYYY"
    });

    test('TC-168: should have blog posts in chronological order', async () => {
      const dates = await blogPage.getBlogPostDates();
      if (dates.length >= 2) {
        const firstDate = new Date(dates[0]);
        const secondDate = new Date(dates[1]);
        expect(firstDate.getTime()).toBeGreaterThanOrEqual(secondDate.getTime());
      }
    });

    test('TC-169: should have proper blog archive structure', async () => {
      const postCount = await blogPage.getBlogPostCount();
      const hasPagination = await blogPage.hasPagination();
      
      // If there are many posts, pagination should be present
      if (postCount >= 10) {
        expect(hasPagination).toBe(true);
      }
    });

    test('TC-170: should maintain consistent post layout', async () => {
      const postCount = await blogPage.getBlogPostCount();
      const titleCount = await blogPage.blogPostTitles.count();
      const metaCount = await blogPage.blogPostMeta.count();
      
      expect(titleCount).toBe(postCount);
      expect(metaCount).toBe(postCount);
    });

    test('TC-171: should have functional category links', async () => {
      const categoryCount = await blogPage.blogPostCategories.count();
      if (categoryCount > 0) {
        const href = await blogPage.blogPostCategories.first().getAttribute('href');
        expect(href).toContain('category');
      }
    });

    test('TC-172: should communicate blog value proposition', async () => {
      const mainContentText = await blogPage.getMainContentText();
      expect(mainContentText.length).toBeGreaterThan(100);
      
      // Check for presence of technical content indicators
      const hasTechnicalContent = 
        mainContentText.toLowerCase().includes('software') ||
        mainContentText.toLowerCase().includes('testing') ||
        mainContentText.toLowerCase().includes('development') ||
        mainContentText.toLowerCase().includes('agile');
      
      expect(hasTechnicalContent).toBe(true);
    });
  });
});
