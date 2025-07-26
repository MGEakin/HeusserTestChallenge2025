import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly mainNavigation: Locator;
  readonly testingLink: Locator;
  readonly placementLink: Locator;
  readonly writingLink: Locator;
  readonly consultingLink: Locator;
  readonly softwareLink: Locator;
  readonly blogLink: Locator;
  readonly learnMoreButtons: Locator;
  readonly footer: Locator;
  readonly footerLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // Header elements
    this.logo = page.getByRole('link', { name: 'Excelon Development' }).first();
    this.mainNavigation = page.getByRole('navigation').first();
    this.testingLink = page.getByRole('link', { name: 'Testing' }).first();
    this.placementLink = page.getByRole('link', { name: 'Placement' }).first();
    this.writingLink = page.getByRole('link', { name: 'Writing' }).first();
    this.consultingLink = page.getByRole('link', { name: 'Consulting' }).first();
    this.softwareLink = page.getByRole('link', { name: 'Software' }).first();
    this.blogLink = page.getByRole('link', { name: 'Blog' }).first();
    
    // Main content elements
    this.learnMoreButtons = page.getByRole('link', { name: 'Learn More' });
    
    // Footer elements
    this.footer = page.getByRole('contentinfo');
    this.footerLinks = this.footer.getByRole('link');
  }

  async navigateToHome() {
    await this.page.goto('/');
  }

  async clickTestingLink() {
    await this.testingLink.click();
  }

  async clickPlacementLink() {
    await this.placementLink.click();
  }

  async clickWritingLink() {
    await this.writingLink.click();
  }

  async clickConsultingLink() {
    await this.consultingLink.click();
  }

  async clickSoftwareLink() {
    await this.softwareLink.click();
  }

  async clickBlogLink() {
    await this.blogLink.click();
  }

  async getPageTitle() {
    return await this.page.title();
  }

  async getPageUrl() {
    return this.page.url();
  }

  // Check for broken links in navigation
  async getEmptyNavigationLinks() {
    const emptyLinks = await this.page.locator('nav a[href="#"]').all();
    return emptyLinks;
  }

  // Get all H1 elements to check for multiple H1s (bad practice)
  async getAllH1Elements() {
    return await this.page.locator('h1').all();
  }

  // Check for links with empty text or href
  async getBrokenLinks() {
    return await this.page.locator('a[href="#"], a[href=""], a:not([href])').all();
  }
}
