import { Page, Locator } from '@playwright/test';

export class TestingPage {
  readonly page: Page;
  
  // Header elements
  readonly logo: Locator;
  readonly logoImage: Locator;
  readonly mainNavigation: Locator;
  readonly testingNavLink: Locator;
  readonly placementNavLink: Locator;
  readonly writingNavLink: Locator;
  readonly consultingNavLink: Locator;
  readonly softwareNavLink: Locator;
  readonly blogNavLink: Locator;
  
  // Social media links (hidden until triggered)
  readonly twitterLink: Locator;
  readonly facebookLink: Locator;
  readonly linkedinLink: Locator;
  readonly rssLink: Locator;
  
  // Main content headings
  readonly mainHeading: Locator;
  readonly subHeading: Locator;
  readonly testingServicesHeading: Locator;
  readonly taglineHeading: Locator;
  readonly visualizeHeading: Locator;
  readonly ctaHeading: Locator;
  
  // Content sections
  readonly heroSection: Locator;
  readonly testingServicesSection: Locator;
  readonly visualizeSection: Locator;
  readonly ctaSection: Locator;
  
  // Key paragraphs and content
  readonly quoteBlockquote: Locator;
  readonly contextDrivenLink: Locator;
  readonly resourcesImage: Locator;
  readonly contactButton: Locator;
  
  // Footer elements
  readonly footer: Locator;
  readonly footerCopyright: Locator;
  readonly rumspeedLink: Locator;
  readonly workWithExcelonLink: Locator;
  readonly aboutExcelonLink: Locator;
  readonly contactFooterLink: Locator;
  
  // Mobile/responsive elements
  readonly mobileNavTrigger: Locator;
  readonly searchTrigger: Locator;
  readonly sideTrigger: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // Header elements
    this.logo = page.getByRole('link', { name: 'Excelon Development' }).first();
    this.logoImage = page.getByRole('img', { name: 'Excelon Development' }).first();
    this.mainNavigation = page.getByRole('navigation').first();
    this.testingNavLink = page.getByRole('link', { name: 'Testing' }).first();
    this.placementNavLink = page.getByRole('link', { name: 'Placement' }).first();
    this.writingNavLink = page.getByRole('link', { name: 'Writing' }).first();
    this.consultingNavLink = page.getByRole('link', { name: 'Consulting' }).first();
    this.softwareNavLink = page.getByRole('link', { name: 'Software' }).first();
    this.blogNavLink = page.getByRole('link', { name: 'Blog' }).first();
    
    // Social media links (these have titles but no visible text)
    this.twitterLink = page.locator('a[title="Twitter"]');
    this.facebookLink = page.locator('a[title="Facebook"]');
    this.linkedinLink = page.locator('a[title="LinkedIn"]');
    this.rssLink = page.locator('a[title="RSS Feed"]');
    
    // Main content headings
    this.mainHeading = page.getByRole('heading', { name: 'TESTING', level: 1 });
    this.subHeading = page.getByRole('heading', { name: 'What we do and how we work', level: 2 });
    this.testingServicesHeading = page.getByRole('heading', { name: 'Testing Services', level: 2 });
    this.taglineHeading = page.getByRole('heading', { name: 'Fast, accurate feedback that matters.', level: 3 });
    this.visualizeHeading = page.getByRole('heading', { name: 'Visualize and Communicate', level: 2 });
    this.ctaHeading = page.getByRole('heading', { name: 'Do you have a project that requires both technical expertise and strong, clear communications ability?', level: 2 });
    
    // Content sections
    this.heroSection = page.locator('article').first();
    this.testingServicesSection = page.locator('text="Testing Services"').locator('..').locator('..');
    this.visualizeSection = page.locator('text="Visualize and Communicate"').locator('..').locator('..');
    this.ctaSection = page.locator('text="Contact Excelon"').locator('..').locator('..');
    
    // Key content elements
    this.quoteBlockquote = page.getByText('"You think testing is your ally? You merely adopted the field. We were born in it, molded by it."');
    this.contextDrivenLink = page.getByRole('link', { name: 'context-driven' });
    this.resourcesImage = page.getByRole('img', { name: 'excelon download resources' });
    this.contactButton = page.getByRole('link', { name: 'Contact Excelon' });
    
    // Footer elements
    this.footer = page.getByRole('contentinfo');
    this.footerCopyright = page.getByText('© 2025 Excelon Development | Site by');
    this.rumspeedLink = page.getByRole('link', { name: 'Rumspeed' });
    this.workWithExcelonLink = page.getByRole('link', { name: 'Work with Excelon' });
    this.aboutExcelonLink = page.getByRole('link', { name: 'About Excelon' });
    this.contactFooterLink = this.footer.getByRole('link', { name: 'Contact' });
    
    // Mobile/responsive elements  
    this.mobileNavTrigger = page.locator('.btn-navbar.tb-nav-trigger');
    this.searchTrigger = page.locator('.tb-search-trigger');
    this.sideTrigger = page.locator('.tb-side-trigger');
  }

  async navigateToTestingPage() {
    await this.page.goto('/testing/');
  }

  async getPageTitle() {
    return await this.page.title();
  }

  async clickContactButton() {
    await this.contactButton.click();
  }

  async clickContextDrivenLink() {
    await this.contextDrivenLink.click();
  }

  async clickSocialMediaLink(platform: 'twitter' | 'facebook' | 'linkedin' | 'rss') {
    switch (platform) {
      case 'twitter':
        await this.twitterLink.click();
        break;
      case 'facebook':
        await this.facebookLink.click();
        break;
      case 'linkedin':
        await this.linkedinLink.click();
        break;
      case 'rss':
        await this.rssLink.click();
        break;
    }
  }

  // Bug detection methods
  async getEmptyNavigationLinks() {
    const emptyLinks = await this.page.locator('nav a[href="#"]').all();
    return emptyLinks;
  }

  async getMetaDescription() {
    const metaElement = this.page.locator('meta[name="description"]');
    const hasMetaDescription = await metaElement.count() > 0;
    
    if (hasMetaDescription) {
      return await metaElement.getAttribute('content');
    }
    return null;
  }

  async getAllH1Elements() {
    return await this.page.locator('h1').all();
  }

  async getH1Count() {
    return await this.page.locator('h1').count();
  }

  async getH1Texts() {
    const h1Elements = await this.page.locator('h1').all();
    const texts = [];
    for (const h1 of h1Elements) {
      texts.push(await h1.textContent());
    }
    return texts;
  }

  async getBrokenLinks() {
    return await this.page.locator('a[href="#"], a[href=""], a:not([href])').all();
  }

  async getLinksWithoutText() {
    const allLinks = await this.page.locator('a').all();
    const linksWithoutText: string[] = [];
    
    for (const link of allLinks) {
      const text = await link.textContent();
      const href = await link.getAttribute('href');
      if (!text?.trim()) {
        linksWithoutText.push(`Link with href="${href}" has no text content`);
      }
    }
    
    return linksWithoutText;
  }

  async checkImageAltTexts() {
    const images = await this.page.locator('img').all();
    const imagesWithoutAlt: string[] = [];
    
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      const src = await img.getAttribute('src');
      if (!alt || alt.trim() === '') {
        imagesWithoutAlt.push(`Image with src="${src}" has no alt text`);
      }
    }
    
    return imagesWithoutAlt;
  }
}
