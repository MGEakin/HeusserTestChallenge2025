import { Page, Locator } from '@playwright/test';

/**
 * PlacementPage - Page Object Model for XNDEV.COM Placement page
 * 
 * This class provides locators and methods for interacting with elements
 * on the Placement page, following the Page Object Model pattern for
 * maintainable and reusable test code.
 * 
 * Page URL: https://xndev.com/placement/
 * Last Updated: Analysis via MCP server on [current date]
 */
export class PlacementPage {
  readonly page: Page;

  // Header and Navigation Elements
  readonly logo: Locator;
  readonly logoImage: Locator;
  readonly mainNavigation: Locator;
  readonly testingNavLink: Locator;
  readonly placementNavLink: Locator;
  readonly writingNavLink: Locator;
  readonly consultingNavLink: Locator;
  readonly softwareNavLink: Locator;
  readonly blogNavLink: Locator;
  
  // Navigation - Broken/Problematic Links  
  readonly brokenNavLinks: Locator;
  readonly emptyContactTrigger: Locator;
  readonly emptySearchTrigger: Locator;
  readonly emptySideTrigger: Locator;

  // Page Content Elements
  readonly pageTitle: Locator;
  readonly mainH1: Locator;
  readonly subheadingH2: Locator;
  readonly heroImage: Locator;
  
  // Content Sections
  readonly recruitingSection: Locator;
  readonly recruitingHeading: Locator;
  readonly recruitingContent: Locator;
  
  readonly budgetSection: Locator;
  readonly budgetHeading: Locator;
  readonly budgetContent: Locator;
  
  readonly contactSection: Locator;
  readonly contactHeading: Locator;
  readonly contactButton: Locator;

  // Content Paragraphs (for specific content validation)
  readonly staffingParagraph: Locator;
  readonly recruitersExperienceParagraph: Locator;
  readonly contractorsParagraph: Locator;
  readonly bestForLessParagraph: Locator;
  readonly teamAnalysisParagraph: Locator;
  readonly depthExperienceParagraph: Locator;
  readonly typicalRecruitersNote: Locator;

  // Footer Elements
  readonly footer: Locator;
  readonly copyrightText: Locator;
  readonly rumspeedLink: Locator;
  readonly footerLinks: Locator;
  readonly workWithExcelonLink: Locator;
  readonly aboutExcelonLink: Locator;
  readonly footerContactLink: Locator;

  // Social Media Links (Multiple Instances)
  readonly twitterLinks: Locator;
  readonly facebookLinks: Locator;
  readonly linkedinLinks: Locator;
  readonly rssLinks: Locator;

  // Mobile/Responsive Navigation Elements
  readonly mobileNavigation: Locator;
  readonly mobileTestingLink: Locator;
  readonly mobilePlacementLink: Locator;
  readonly mobileWritingLink: Locator;
  readonly mobileConsultingLink: Locator;
  readonly mobileSoftwareLink: Locator;
  readonly mobileBlogLink: Locator;
  readonly mobileAboutTrigger: Locator;
  readonly mobileTrainingLink: Locator;
  readonly mobilePublicationsLink: Locator;
  readonly mobileContactLink: Locator;

  // Sidebar/Mobile Menu Elements
  readonly sidebarLogo: Locator;
  readonly sidebarNavigation: Locator;
  readonly aboutSubmenu: Locator;
  readonly trainingSubmenu: Locator;
  readonly submenuToggles: Locator;

  // Utility/Hidden Elements
  readonly searchOverlay: Locator;
  readonly searchTitle: Locator;
  readonly searchFilters: Locator;
  readonly scrollToTopButton: Locator;
  readonly closeSearchButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Header and Main Navigation
    this.logo = page.locator('.tb-image-logo').first();
    this.logoImage = page.locator('img[alt="Excelon Development"]').first();
    this.mainNavigation = page.locator('#access ul.nav');
    this.testingNavLink = page.locator('a.menu-btn[href*="testing"]').first();
    this.placementNavLink = page.locator('a.menu-btn[href*="placement"]').first();
    this.writingNavLink = page.locator('a.menu-btn[href*="writing"]').first();
    this.consultingNavLink = page.locator('a.menu-btn[href*="consulting"]').first();
    this.softwareNavLink = page.locator('a.menu-btn[href*="custom-software"]').first();
    this.blogNavLink = page.locator('a.menu-btn[href*="blog"]').first();

    // Broken/Problematic Navigation Elements
    this.brokenNavLinks = page.locator('a[href="#"], a[href=""]');
    this.emptyContactTrigger = page.locator('.tb-contact-trigger');
    this.emptySearchTrigger = page.locator('.tb-search-trigger');
    this.emptySideTrigger = page.locator('.tb-side-trigger');

    // Main Page Content
    this.pageTitle = page.locator('title');
    this.mainH1 = page.locator('h1.elementor-heading-title').first();
    this.subheadingH2 = page.locator('h2.elementor-headline').first();
    this.heroImage = page.locator('img[src*="excelon-consulting-services"]');

    // Content Sections
    this.recruitingSection = page.locator('text=Recruiting and Contract Staff').locator('..');
    this.recruitingHeading = page.locator('h2:has-text("Recruiting and Contract Staff")');
    this.recruitingContent = page.locator('text=Sometimes you know what you need').locator('..');

    this.budgetSection = page.locator('text=Outstanding IT help without busting your budget').locator('..');
    this.budgetHeading = page.locator('h2:has-text("Outstanding IT help without busting your budget")');
    this.budgetContent = page.locator('text=Our general style is to identify').locator('..');

    this.contactSection = page.locator('text=Do you have a project that requires both technical expertise').locator('..');
    this.contactHeading = page.locator('h2:has-text("Do you have a project that requires both technical expertise")');
    this.contactButton = page.locator('a.elementor-button[href*="contact"]');

    // Specific Content Paragraphs
    this.staffingParagraph = page.locator('text=Sometimes you know what you need — more people');
    this.recruitersExperienceParagraph = page.locator('text=Our technical recruiters have actually done software development');
    this.contractorsParagraph = page.locator('text=Our contractors can work on what you need');
    this.bestForLessParagraph = page.locator('text=With Excelon, you really can get the best for less');
    this.teamAnalysisParagraph = page.locator('text=Our general style is to identify the top things');
    this.depthExperienceParagraph = page.locator('text=Typical recruiters simply do not have the depth');
    this.typicalRecruitersNote = page.locator('text=No one every accused us of being typical recruiters');

    // Footer Elements
    this.footer = page.locator('footer, .footer, contentinfo');
    this.copyrightText = page.locator('text=© 2025 Excelon Development');
    this.rumspeedLink = page.locator('a[href*="rumspeed"]');
    this.footerLinks = page.locator('footer ul, contentinfo ul').first();
    this.workWithExcelonLink = page.locator('a[href*="work-with-excelon"]');
    this.aboutExcelonLink = page.locator('a[href*="about-excelon"]');
    this.footerContactLink = page.locator('footer a[href*="contact"], contentinfo a[href*="contact"]');

    // Social Media Links (Multiple instances detected)
    this.twitterLinks = page.locator('a[href*="twitter"]');
    this.facebookLinks = page.locator('a[href*="facebook"]');
    this.linkedinLinks = page.locator('a[href*="linkedin"]');
    this.rssLinks = page.locator('a[href*="feed"]');

    // Mobile/Responsive Navigation
    this.mobileNavigation = page.locator('#sticky-menu');
    this.mobileTestingLink = page.locator('#sticky-menu a[href*="testing"]');
    this.mobilePlacementLink = page.locator('#sticky-menu a[href*="placement"]');
    this.mobileWritingLink = page.locator('#sticky-menu a[href*="writing"]');
    this.mobileConsultingLink = page.locator('#sticky-menu a[href*="consulting"]');
    this.mobileSoftwareLink = page.locator('#sticky-menu a[href*="custom-software"]');
    this.mobileBlogLink = page.locator('#sticky-menu a[href*="blog"]');

    // Sidebar/Mobile Menu
    this.sidebarLogo = page.locator('#slide-out .tb-image-logo');
    this.sidebarNavigation = page.locator('#slide-out .nav');
    this.mobileAboutTrigger = page.locator('a.menu-btn:has-text("About")');
    this.mobileTrainingLink = page.locator('a.menu-btn[href*="training"]');
    this.mobilePublicationsLink = page.locator('a.menu-btn[href*="publications"]');
    this.mobileContactLink = page.locator('#slide-out a[href*="contact"]');
    this.aboutSubmenu = page.locator('.submenu:has(a[href*="about-excelon"])');
    this.trainingSubmenu = page.locator('.submenu:has(a[href*="training"])');
    this.submenuToggles = page.locator('.submenu-toggle');

    // Utility Elements
    this.searchOverlay = page.locator('#jetpack-instant-search__overlay');
    this.searchTitle = page.locator('#jetpack-instant-search__overlay-title');
    this.searchFilters = page.locator('.jetpack-instant-search__search-filters-title');
    this.scrollToTopButton = page.locator('.tb-scroll-to-top');
    this.closeSearchButton = page.locator('.close-search');
  }

  /**
   * Navigate to the Placement page
   */
  async goto(): Promise<void> {
    await this.page.goto('https://xndev.com/placement/');
  }

  /**
   * Get the page title
   */
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Get the main H1 text
   */
  async getMainHeading(): Promise<string> {
    return await this.mainH1.textContent() || '';
  }

  /**
   * Check if Contact button is functional
   */
  async isContactButtonFunctional(): Promise<boolean> {
    const href = await this.contactButton.getAttribute('href');
    return href !== null && href.includes('contact') && !href.includes('#');
  }

  /**
   * Click the Contact button
   */
  async clickContactButton(): Promise<void> {
    await this.contactButton.click();
  }

  /**
   * Get all H1 elements on the page (for HTML standards validation)
   */
  async getAllH1Elements(): Promise<string[]> {
    const h1Elements = await this.page.locator('h1').all();
    const h1Texts: string[] = [];
    
    for (const h1 of h1Elements) {
      const text = await h1.textContent();
      if (text) {
        h1Texts.push(text.trim());
      }
    }
    
    return h1Texts;
  }

  /**
   * Get all H2 elements on the page
   */
  async getAllH2Elements(): Promise<string[]> {
    const h2Elements = await this.page.locator('h2').all();
    const h2Texts: string[] = [];
    
    for (const h2 of h2Elements) {
      const text = await h2.textContent();
      if (text) {
        h2Texts.push(text.trim());
      }
    }
    
    return h2Texts;
  }

  /**
   * Check for broken navigation links
   */
  async getBrokenNavigationLinks(): Promise<Array<{href: string, text: string}>> {
    const brokenLinks = await this.brokenNavLinks.all();
    const results: Array<{href: string, text: string}> = [];
    
    for (const link of brokenLinks) {
      const href = await link.getAttribute('href') || '';
      const text = await link.textContent() || '';
      if (href === '#' || href === '' || href === 'null') {
        results.push({ href, text: text.trim() });
      }
    }
    
    return results;
  }

  /**
   * Check meta description presence and quality
   */
  async getMetaDescription(): Promise<string | null> {
    const metaDesc = await this.page.locator('meta[name="description"]').getAttribute('content');
    return metaDesc;
  }

  /**
   * Get all links without text content (accessibility issue)
   */
  async getLinksWithoutText(): Promise<Array<{href: string, text: string}>> {
    const allLinks = await this.page.locator('a').all();
    const linksWithoutText: Array<{href: string, text: string}> = [];
    
    for (const link of allLinks) {
      const text = await link.textContent();
      const href = await link.getAttribute('href');
      
      if ((!text || text.trim() === '') && href) {
        linksWithoutText.push({
          href: href,
          text: text?.trim() || ''
        });
      }
    }
    
    return linksWithoutText;
  }

  /**
   * Validate images have proper alt attributes
   */
  async getImagesWithoutAltText(): Promise<Array<{src: string, alt: string}>> {
    const allImages = await this.page.locator('img').all();
    const imagesWithoutAlt: Array<{src: string, alt: string}> = [];
    
    for (const img of allImages) {
      const src = await img.getAttribute('src');
      const alt = await img.getAttribute('alt');
      
      if (src && (!alt || alt.trim() === '')) {
        imagesWithoutAlt.push({
          src: src,
          alt: alt || ''
        });
      }
    }
    
    return imagesWithoutAlt;
  }

  /**
   * Check if multiple instances of social media links exist (strict mode violation)
   */
  async getSocialMediaLinkCounts(): Promise<{twitter: number, facebook: number, linkedin: number, rss: number}> {
    const twitterCount = await this.twitterLinks.count();
    const facebookCount = await this.facebookLinks.count();
    const linkedinCount = await this.linkedinLinks.count();
    const rssCount = await this.rssLinks.count();
    
    return {
      twitter: twitterCount,
      facebook: facebookCount,
      linkedin: linkedinCount,
      rss: rssCount
    };
  }

  /**
   * Verify navigation link functionality
   */
  async verifyNavigationLinkFunctionality(): Promise<{working: string[], broken: string[]}> {
    const links = [
      { name: 'Testing', locator: this.testingNavLink },
      { name: 'Placement', locator: this.placementNavLink },
      { name: 'Writing', locator: this.writingNavLink },
      { name: 'Consulting', locator: this.consultingNavLink },
      { name: 'Software', locator: this.softwareNavLink },
      { name: 'Blog', locator: this.blogNavLink }
    ];
    
    const working: string[] = [];
    const broken: string[] = [];
    
    for (const link of links) {
      const href = await link.locator.getAttribute('href');
      if (href && !href.includes('#') && href !== '' && href !== 'null') {
        working.push(link.name);
      } else {
        broken.push(link.name);
      }
    }
    
    return { working, broken };
  }

  /**
   * Check if responsive navigation elements are present
   */
  async areResponsiveElementsPresent(): Promise<boolean> {
    const mobileNavVisible = await this.mobileNavigation.count() > 0;
    const sidebarNavVisible = await this.sidebarNavigation.count() > 0;
    return mobileNavVisible || sidebarNavVisible;
  }
}
