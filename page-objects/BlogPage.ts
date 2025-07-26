import { Page, Locator } from '@playwright/test';

/**
 * BlogPage - Page Object Model for XNDEV.COM Blog page
 * URL: https://xndev.com/blog/
 * 
 * This page object provides comprehensive element selectors and methods
 * for testing the Blog page functionality, structure, and content.
 */
export class BlogPage {
  readonly page: Page;

  // Navigation Elements
  readonly logo: Locator;
  readonly mainNavigation: Locator;
  readonly testingLink: Locator;
  readonly placementLink: Locator;
  readonly writingLink: Locator;
  readonly consultingLink: Locator;
  readonly softwareLink: Locator;
  readonly blogLink: Locator;
  readonly mobileNavigation: Locator;
  readonly mobileMenuToggle: Locator;
  readonly mobileLogo: Locator;

  // Page Structure Elements
  readonly pageHeading: Locator;
  readonly mainContent: Locator;
  readonly sidebar: Locator;
  readonly footer: Locator;

  // Blog Content Elements
  readonly blogPostContainer: Locator;
  readonly blogArticles: Locator;
  readonly firstBlogPost: Locator;
  readonly blogPostTitles: Locator;
  readonly blogPostLinks: Locator;
  readonly blogPostMeta: Locator;
  readonly blogPostAuthors: Locator;
  readonly blogPostDates: Locator;
  readonly blogPostCategories: Locator;
  readonly blogPostExcerpts: Locator;
  readonly readMoreLinks: Locator;
  readonly commentLinks: Locator;

  // Pagination Elements
  readonly pagination: Locator;
  readonly paginationLinks: Locator;
  readonly nextPageLink: Locator;
  readonly lastPageLink: Locator;
  readonly currentPageIndicator: Locator;

  // Sidebar Elements  
  readonly sidebarWidgets: Locator;
  readonly coffeeMugWidget: Locator;
  readonly coffeeMugHeading: Locator;
  readonly coffeeMugImage: Locator;
  readonly coffeeMugLink: Locator;
  readonly publicationWidget: Locator;
  readonly publicationHeading: Locator;
  readonly publicationLink: Locator;

  // Footer Elements
  readonly footerNavigation: Locator;
  readonly footerContactLink: Locator;
  readonly footerAboutLink: Locator;
  readonly footerWorkLink: Locator;
  readonly rumspeedLink: Locator;
  readonly copyrightText: Locator;

  constructor(page: Page) {
    this.page = page;

    // Navigation Elements
    this.logo = page.locator('header .site-branding a');
    this.mainNavigation = page.locator('#access nav');
    this.testingLink = page.locator('#access nav a[href*="testing"]');
    this.placementLink = page.locator('#access nav a[href*="placement"]');
    this.writingLink = page.locator('#access nav a[href*="writing"]');
    this.consultingLink = page.locator('#access nav a[href*="consulting"]');
    this.softwareLink = page.locator('#access nav a[href*="custom-software"]');
    this.blogLink = page.locator('#access nav a[href*="blog"]');
    this.mobileNavigation = page.locator('.mobile-nav');
    this.mobileMenuToggle = page.locator('.mobile-menu-toggle');
    this.mobileLogo = page.locator('.mobile-nav a img');

    // Page Structure Elements
    this.pageHeading = page.locator('h1').first();
    this.mainContent = page.locator('main');
    this.sidebar = page.locator('.sidebar, aside, .widget-area');
    this.footer = page.locator('footer, .site-footer, contentinfo');

    // Blog Content Elements
    this.blogPostContainer = page.locator('#content, .blog-posts, .posts-container');
    this.blogArticles = page.locator('article');
    this.firstBlogPost = page.locator('article').first();
    this.blogPostTitles = page.locator('article h2');
    this.blogPostLinks = page.locator('article h2 a');
    this.blogPostMeta = page.locator('article .entry-meta');
    this.blogPostAuthors = page.locator('article .entry-meta a[href*="author"]');
    this.blogPostDates = page.locator('article time');
    this.blogPostCategories = page.locator('article .entry-meta a[href*="category"]');
    this.blogPostExcerpts = page.locator('article .entry-summary p, article .entry-content p').first();
    this.readMoreLinks = page.locator('article a:has-text("Read More")');
    this.commentLinks = page.locator('article a[href*="comments"], article a[href*="#respond"]');

    // Pagination Elements
    this.pagination = page.locator('.pagination, .page-navigation, .posts-navigation');
    this.paginationLinks = page.locator('.pagination a, .page-navigation a');
    this.nextPageLink = page.locator('.pagination a:has-text("›"), .pagination a:has-text("Next")');
    this.lastPageLink = page.locator('.pagination a:has-text("»"), .pagination a:has-text("Last")');
    this.currentPageIndicator = page.locator('.pagination .current, .pagination .page-numbers.current');

    // Sidebar Elements
    this.sidebarWidgets = page.locator('.sidebar .widget, aside .widget');
    this.coffeeMugWidget = page.locator('.widget:has-text("Coffee Mug")');
    this.coffeeMugHeading = page.locator('h3:has-text("Awesome Coffee Mug")');
    this.coffeeMugImage = page.locator('img[alt*="Coffee"], img[src*="coffee"]');
    this.coffeeMugLink = page.locator('a[href*="cafepress"]');
    this.publicationWidget = page.locator('.widget:has-text("Publication")');
    this.publicationHeading = page.locator('h3:has-text("Latest Publication")');
    this.publicationLink = page.locator('a:has-text("Get it today")');

    // Footer Elements
    this.footerNavigation = page.locator('footer nav, .site-footer nav');
    this.footerContactLink = page.locator('footer a[href*="contact"]');
    this.footerAboutLink = page.locator('footer a[href*="about"]');
    this.footerWorkLink = page.locator('footer a[href*="work-with-excelon"]');
    this.rumspeedLink = page.locator('footer a[href*="rumspeed"]');
    this.copyrightText = page.locator('footer p:has-text("©"), footer p:has-text("2025")');
  }

  // Navigation Methods
  async navigateToTesting(): Promise<void> {
    await this.testingLink.click();
  }

  async navigateToPlacement(): Promise<void> {
    await this.placementLink.click();
  }

  async navigateToWriting(): Promise<void> {
    await this.writingLink.click();
  }

  async navigateToConsulting(): Promise<void> {
    await this.consultingLink.click();
  }

  async navigateToSoftware(): Promise<void> {
    await this.softwareLink.click();
  }

  async navigateToHome(): Promise<void> {
    await this.logo.click();
  }

  async navigateToContact(): Promise<void> {
    await this.footerContactLink.click();
  }

  // Blog Content Methods
  async getBlogPostCount(): Promise<number> {
    return await this.blogArticles.count();
  }

  async getBlogPostTitles(): Promise<string[]> {
    return await this.blogPostTitles.allTextContents();
  }

  async getFirstBlogPostTitle(): Promise<string> {
    return await this.blogPostTitles.first().textContent() || '';
  }

  async getBlogPostAuthors(): Promise<string[]> {
    return await this.blogPostAuthors.allTextContents();
  }

  async getBlogPostDates(): Promise<string[]> {
    return await this.blogPostDates.allTextContents();
  }

  async clickFirstBlogPost(): Promise<void> {
    await this.blogPostLinks.first().click();
  }

  async clickReadMore(index: number = 0): Promise<void> {
    await this.readMoreLinks.nth(index).click();
  }

  async getBlogPostCategories(): Promise<string[]> {
    return await this.blogPostCategories.allTextContents();
  }

  // Pagination Methods
  async hasPagination(): Promise<boolean> {
    return await this.pagination.isVisible();
  }

  async getPaginationLinks(): Promise<string[]> {
    return await this.paginationLinks.allTextContents();
  }

  async navigateToNextPage(): Promise<void> {
    await this.nextPageLink.click();
  }

  async navigateToLastPage(): Promise<void> {
    await this.lastPageLink.click();
  }

  async navigateToPage(pageNumber: string): Promise<void> {
    await this.paginationLinks.filter({ hasText: pageNumber }).click();
  }

  // Sidebar Methods
  async getSidebarWidgetCount(): Promise<number> {
    return await this.sidebarWidgets.count();
  }

  async clickCoffeeMugLink(): Promise<void> {
    await this.coffeeMugLink.click();
  }

  async clickPublicationLink(): Promise<void> {
    await this.publicationLink.click();
  }

  // Validation Methods
  async hasProperPageTitle(): Promise<boolean> {
    const title = await this.page.title();
    return title.includes('Blog') && title.includes('Excelon Development');
  }

  async hasMetaDescription(): Promise<boolean> {
    const metaDesc = await this.page.locator('meta[name="description"]').getAttribute('content');
    return !!metaDesc && metaDesc.length > 0;
  }

  async getMetaDescription(): Promise<string> {
    return await this.page.locator('meta[name="description"]').getAttribute('content') || '';
  }

  async hasProperH1Content(): Promise<boolean> {
    const h1Text = await this.pageHeading.textContent();
    return h1Text?.trim() === 'Blog';
  }

  async getH1Count(): Promise<number> {
    return await this.page.locator('h1').count();
  }

  async getH1Contents(): Promise<string[]> {
    return await this.page.locator('h1').allTextContents();
  }

  async hasMultipleH1Elements(): Promise<boolean> {
    return await this.getH1Count() > 1;
  }

  async getBrokenNavigationLinks(): Promise<string[]> {
    const brokenLinks: string[] = [];
    const navLinks = this.page.locator('#access nav a');
    const linkCount = await navLinks.count();
    
    for (let i = 0; i < linkCount; i++) {
      const href = await navLinks.nth(i).getAttribute('href');
      const text = await navLinks.nth(i).textContent();
      if (!href || href === '#' || href === 'null' || !text?.trim()) {
        brokenLinks.push(href || 'empty href');
      }
    }
    return brokenLinks;
  }

  async getImagesWithoutAlt(): Promise<number> {
    const imagesWithoutAlt = this.page.locator('img:not([alt])');
    return await imagesWithoutAlt.count();
  }

  async getLinksWithoutText(): Promise<number> {
    const allLinks = this.page.locator('a');
    let linksWithoutText = 0;
    const linkCount = await allLinks.count();
    
    for (let i = 0; i < linkCount; i++) {
      const link = allLinks.nth(i);
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute('aria-label');
      const title = await link.getAttribute('title');
      const hasImageWithAlt = await link.locator('img[alt]').count() > 0;
      
      if (!text?.trim() && !ariaLabel && !title && !hasImageWithAlt) {
        linksWithoutText++;
      }
    }
    return linksWithoutText;
  }

  async getExternalLinksWithoutSecurity(): Promise<number> {
    const externalLinks = this.page.locator('a[href^="http"]:not([href^="https://xndev.com"])');
    let unsecureLinks = 0;
    const linkCount = await externalLinks.count();
    
    for (let i = 0; i < linkCount; i++) {
      const rel = await externalLinks.nth(i).getAttribute('rel');
      if (!rel || !rel.includes('noopener')) {
        unsecureLinks++;
      }
    }
    return unsecureLinks;
  }

  async hasProperHeadingHierarchy(): Promise<boolean> {
    const h1Count = await this.page.locator('h1').count();
    const h2Count = await this.page.locator('h2').count();
    
    // Should have exactly one H1 and multiple H2s for blog posts
    if (h1Count !== 1) return false;
    if (h2Count < 1) return false;
    
    // Check if H1 comes before H2s
    const firstH1 = this.page.locator('h1').first();
    const firstH2 = this.page.locator('h2').first();
    
    if (await firstH1.isVisible() && await firstH2.isVisible()) {
      const h1Box = await firstH1.boundingBox();
      const h2Box = await firstH2.boundingBox();
      
      if (h1Box && h2Box) {
        return h1Box.y < h2Box.y;
      }
    }
    
    return true;
  }

  async getMainContentText(): Promise<string> {
    return await this.mainContent.textContent() || '';
  }

  async hasQualityBlogContent(): Promise<boolean> {
    const postCount = await this.getBlogPostCount();
    const hasPagination = await this.hasPagination();
    const hasReadMoreLinks = await this.readMoreLinks.count() > 0;
    
    return postCount >= 5 && (hasPagination || hasReadMoreLinks);
  }

  async hasSidebarContent(): Promise<boolean> {
    const widgetCount = await this.getSidebarWidgetCount();
    return widgetCount >= 2;
  }

  async isBlogPostContentComplete(): Promise<boolean> {
    const titles = await this.getBlogPostTitles();
    const authors = await this.getBlogPostAuthors();
    const dates = await this.getBlogPostDates();
    
    return titles.length > 0 && authors.length > 0 && dates.length > 0;
  }

  async hasValidPagination(): Promise<boolean> {
    if (!await this.hasPagination()) return true; // Pagination is optional
    
    const paginationLinks = await this.getPaginationLinks();
    return paginationLinks.length >= 3; // Should have at least current, next, and other pages
  }

  async hasWorkingSearchFunctionality(): Promise<boolean> {
    // Check if there's search functionality (not always present on blog pages)
    const searchForm = this.page.locator('form[role="search"], .search-form');
    return await searchForm.count() === 0 || await searchForm.isVisible();
  }

  async hasResponsiveDesignElements(): Promise<boolean> {
    return await this.mobileNavigation.count() > 0;
  }
}
