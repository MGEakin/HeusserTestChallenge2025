import { Page, Locator } from '@playwright/test';

export class SoftwarePage {
  readonly page: Page;

  // Header elements
  readonly logo: Locator;
  readonly logoImage: Locator;
  readonly mainNavigation: Locator;
  readonly navigationList: Locator;
  readonly testingLink: Locator;
  readonly placementLink: Locator;
  readonly writingLink: Locator;
  readonly consultingLink: Locator;
  readonly softwareLink: Locator;
  readonly blogLink: Locator;
  readonly socialLink1: Locator;
  readonly socialLink2: Locator;
  readonly searchLink: Locator;

  // Page content elements
  readonly mainContent: Locator;
  readonly pageHeading: Locator;
  readonly h1Heading: Locator;
  readonly subheading: Locator;
  readonly heroImage: Locator;

  // Main content sections
  readonly buildForYouSection: Locator;
  readonly buildForYouHeading: Locator;
  readonly introText1: Locator;
  readonly introText2: Locator;
  readonly introText3: Locator;
  readonly introText4: Locator;
  readonly servicesListHeading: Locator;
  readonly servicesList: Locator;
  readonly webDevelopmentItem: Locator;
  readonly mobileDevelopmentItem: Locator;
  readonly cloudInfrastructureItem: Locator;
  readonly continuousDeliveryItem: Locator;
  readonly systemsIntegrationItem: Locator;
  readonly embeddedSystemsItem: Locator;
  readonly technicalWritingItem: Locator;
  readonly testInfrastructureItem: Locator;
  readonly conclusionText1: Locator;
  readonly conclusionText2: Locator;

  // Call-to-action section
  readonly callToActionHeading: Locator;
  readonly contactButton: Locator;

  // Footer elements
  readonly footer: Locator;
  readonly footerCopyright: Locator;
  readonly rumspeedLink: Locator;
  readonly footerNavigation: Locator;
  readonly workWithExcelonLink: Locator;
  readonly aboutExcelonLink: Locator;
  readonly contactLink: Locator;

  // Mobile navigation
  readonly mobileNavigation: Locator;
  readonly mobileNavigationList: Locator;
  readonly mobileTestingLink: Locator;
  readonly mobilePlacementLink: Locator;
  readonly mobileWritingLink: Locator;
  readonly mobileConsultingLink: Locator;
  readonly mobileSoftwareLink: Locator;
  readonly mobileBlogLink: Locator;
  readonly mobileSocialLink1: Locator;
  readonly mobileSocialLink2: Locator;
  readonly mobileLogoLink: Locator;
  readonly mobileLogoImage: Locator;

  // Mobile menu items
  readonly mobileAboutSection: Locator;
  readonly mobileAboutExpander: Locator;
  readonly mobileTrainingLink: Locator;
  readonly mobileTrainingExpander: Locator;
  readonly mobilePublicationsLink: Locator;
  readonly mobileBlogMenuLink: Locator;
  readonly mobileContactMenuLink: Locator;

  constructor(page: Page) {
    this.page = page;

    // Header elements
    this.logo = page.locator('a:has(img[alt="Excelon Development"])').first();
    this.logoImage = page.locator('img[alt="Excelon Development"]').first();
    this.mainNavigation = page.locator('nav').first();
    this.navigationList = page.locator('nav ul').first();
    this.testingLink = page.locator('nav').getByRole('link', { name: 'Testing' });
    this.placementLink = page.locator('nav').getByRole('link', { name: 'Placement' });
    this.writingLink = page.locator('nav').getByRole('link', { name: 'Writing' });
    this.consultingLink = page.locator('nav').getByRole('link', { name: 'Consulting' });
    this.softwareLink = page.locator('nav').getByRole('link', { name: 'Software' });
    this.blogLink = page.locator('nav').getByRole('link', { name: 'Blog' });
    this.socialLink1 = page.locator('nav a[href="#"]').first();
    this.socialLink2 = page.locator('nav a[href="#"]').nth(1);
    this.searchLink = page.locator('nav a[href="#"]').last();

    // Page content elements
    this.mainContent = page.locator('main');
    this.pageHeading = page.getByRole('heading', { name: 'Custom Software', level: 2 });
    this.h1Heading = page.locator('h1.entry-title');
    this.subheading = page.getByRole('heading', { name: 'What we do and how we work', level: 2 });
    this.heroImage = page.locator('article img').first();

    // Main content sections
    this.buildForYouSection = page.locator('div:has(h4:has-text("Let Us Build it For You"))');
    this.buildForYouHeading = page.getByRole('heading', { name: 'Let Us Build it For You', level: 4 });
    this.introText1 = page.locator('text=Sometimes you know what you want, and you just need someone to write it');
    this.introText2 = page.locator('text=Hire the fancy-name consultants with the big signs');
    this.introText3 = page.locator('text=While we let you dream, let\'s talk about how our developers work');
    this.introText4 = page.locator('text=Our recent projects include:');
    this.servicesListHeading = page.locator('text=Our recent projects include:');
    this.servicesList = page.locator('ul:has(li:has-text("Web Development"))');
    this.webDevelopmentItem = page.locator('li:has-text("Web Development")');
    this.mobileDevelopmentItem = page.locator('li:has-text("Mobile (iOS and Android) Development")');
    this.cloudInfrastructureItem = page.locator('li:has-text("Cloud Infrastructure Development")');
    this.continuousDeliveryItem = page.locator('li:has-text("Continuous Delivery / Deploy Pipeline Work")');
    this.systemsIntegrationItem = page.locator('li:has-text("Systems Integration")');
    this.embeddedSystemsItem = page.locator('li:has-text("Real Time Embedded System Development")');
    this.technicalWritingItem = page.locator('li:has-text("Technical Writing and Documentation")');
    this.testInfrastructureItem = page.locator('li:has-text("Test Infrastructure Development")');
    this.conclusionText1 = page.locator('text=Hire us to get custom software developed for a fair price');
    this.conclusionText2 = page.locator('text=Let\'s work together.');

    // Call-to-action section
    this.callToActionHeading = page.getByRole('heading', { name: 'Do you have a project that requires both technical expertise and strong, clear communications ability?', level: 2 });
    this.contactButton = page.getByRole('link', { name: 'Contact Excelon' });

    // Footer elements
    this.footer = page.locator('footer');
    this.footerCopyright = page.locator('footer p').first();
    this.rumspeedLink = page.getByRole('link', { name: 'Rumspeed' });
    this.footerNavigation = page.locator('footer ul');
    this.workWithExcelonLink = page.getByRole('link', { name: 'Work with Excelon' });
    this.aboutExcelonLink = page.getByRole('link', { name: 'About Excelon' });
    this.contactLink = page.locator('footer').getByRole('link', { name: 'Contact' });

    // Mobile navigation
    this.mobileNavigation = page.locator('div:has(ul)').nth(1);
    this.mobileNavigationList = page.locator('div:has(ul) ul').first();
    this.mobileTestingLink = page.locator('div:has(ul)').getByRole('link', { name: 'Testing' }).first();
    this.mobilePlacementLink = page.locator('div:has(ul)').getByRole('link', { name: 'Placement' }).first();
    this.mobileWritingLink = page.locator('div:has(ul)').getByRole('link', { name: 'Writing' }).first();
    this.mobileConsultingLink = page.locator('div:has(ul)').getByRole('link', { name: 'Consulting' }).first();
    this.mobileSoftwareLink = page.locator('div:has(ul)').getByRole('link', { name: 'Software' }).first();
    this.mobileBlogLink = page.locator('div:has(ul)').getByRole('link', { name: 'Blog' }).first();
    this.mobileSocialLink1 = page.locator('div:has(ul) a[href="#"]').first();
    this.mobileSocialLink2 = page.locator('div:has(ul) a[href="#"]').nth(1);
    this.mobileLogoLink = page.locator('div:has(ul) a:has(img[alt="Excelon Development"])').first();
    this.mobileLogoImage = page.locator('div:has(ul) img[alt="Excelon Development"]').first();

    // Mobile menu items
    this.mobileAboutSection = page.locator('text="About"');
    this.mobileAboutExpander = page.getByRole('link', { name: '+' }).first();
    this.mobileTrainingLink = page.locator('div:not(nav)').getByRole('link', { name: 'Training' });
    this.mobileTrainingExpander = page.getByRole('link', { name: '+' }).nth(1);
    this.mobilePublicationsLink = page.getByRole('link', { name: 'Publications' });
    this.mobileBlogMenuLink = page.locator('div:not(nav)').getByRole('link', { name: 'Blog' });
    this.mobileContactMenuLink = page.locator('div:not(nav)').getByRole('link', { name: 'Contact' });
  }

  async navigateTo() {
    await this.page.goto('https://xndev.com/custom-software/');
  }

  async clickLogo() {
    await this.logo.click();
  }

  async navigateToTesting() {
    await this.testingLink.click();
  }

  async navigateToPlacement() {
    await this.placementLink.click();
  }

  async navigateToWriting() {
    await this.writingLink.click();
  }

  async navigateToConsulting() {
    await this.consultingLink.click();
  }

  async navigateToBlog() {
    await this.blogLink.click();
  }

  async clickContactButton() {
    await this.contactButton.click();
  }

  async clickFooterContact() {
    await this.contactLink.click();
  }

  async clickRumspeedLink() {
    await this.rumspeedLink.click();
  }

  // Validation methods
  async isPageLoaded(): Promise<boolean> {
    return await this.pageHeading.isVisible();
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async getPageUrl(): Promise<string> {
    return this.page.url();
  }

  async getMetaDescription(): Promise<string | null> {
    return await this.page.locator('meta[name="description"]').getAttribute('content');
  }

  async getH1Count(): Promise<number> {
    return await this.page.locator('h1').count();
  }

  async getH1Elements(): Promise<string[]> {
    const h1Elements = await this.page.locator('h1').all();
    const texts = [];
    for (const element of h1Elements) {
      texts.push(await element.textContent() || '');
    }
    return texts;
  }

  async getH2Count(): Promise<number> {
    return await this.page.locator('h2').count();
  }

  async getH4Count(): Promise<number> {
    return await this.page.locator('h4').count();
  }

  async getParagraphCount(): Promise<number> {
    return await this.page.locator('p').count();
  }

  async getServicesListItems(): Promise<string[]> {
    const items = await this.servicesList.locator('li').all();
    const texts = [];
    for (const item of items) {
      texts.push(await item.textContent() || '');
    }
    return texts;
  }

  async getServicesListCount(): Promise<number> {
    return await this.servicesList.locator('li').count();
  }

  async getAllNavigationLinks(): Promise<string[]> {
    const links = await this.navigationList.locator('a').all();
    const urls = [];
    for (const link of links) {
      const href = await link.getAttribute('href');
      if (href) urls.push(href);
    }
    return urls;
  }

  async getBrokenNavigationLinks(): Promise<string[]> {
    const links = await this.getAllNavigationLinks();
    return links.filter(link => link === '#' || link === '' || !link || link.endsWith('#'));
  }

  async getLinksWithoutText(): Promise<number> {
    const links = await this.page.locator('a').all();
    let linksWithoutText = 0;
    for (const link of links) {
      const text = await link.textContent();
      const hasVisibleText = text && text.trim().length > 0;
      const hasAriaLabel = await link.getAttribute('aria-label');
      const hasTitle = await link.getAttribute('title');
      
      if (!hasVisibleText && !hasAriaLabel && !hasTitle) {
        linksWithoutText++;
      }
    }
    return linksWithoutText;
  }

  async getImagesWithoutAltText(): Promise<number> {
    const images = await this.page.locator('img').all();
    let imagesWithoutAlt = 0;
    for (const img of images) {
      const altText = await img.getAttribute('alt');
      if (!altText || altText.trim() === '') {
        imagesWithoutAlt++;
      }
    }
    return imagesWithoutAlt;
  }

  async hasProperHeadingHierarchy(): Promise<boolean> {
    const h1Count = await this.getH1Count();
    const h2Count = await this.getH2Count();
    return h1Count === 1 && h2Count > 0;
  }

  async isResponsiveDesignPresent(): Promise<boolean> {
    return await this.mobileNavigation.isVisible();
  }

  async getExternalLinksWithoutSecurity(): Promise<number> {
    const links = await this.page.locator('a').all();
    let unsecureLinks = 0;
    for (const link of links) {
      const href = await link.getAttribute('href');
      const target = await link.getAttribute('target');
      const rel = await link.getAttribute('rel');
      
      if (href && href.startsWith('http') && !href.includes('xndev.com')) {
        if (target === '_blank' && (!rel || !rel.includes('noopener'))) {
          unsecureLinks++;
        }
      }
    }
    return unsecureLinks;
  }

  async hasQualityContent(): Promise<boolean> {
    const servicesCount = await this.getServicesListCount();
    const hasMainSections = await this.buildForYouHeading.isVisible() && 
                            await this.callToActionHeading.isVisible();
    return servicesCount >= 8 && hasMainSections;
  }

  async getMainContentText(): Promise<string> {
    return await this.mainContent.textContent() || '';
  }

  async hasProperH1Content(): Promise<boolean> {
    const h1Elements = await this.getH1Elements();
    return h1Elements.length === 1 && 
           h1Elements[0] !== 'Search results' && 
           h1Elements[0].toLowerCase().includes('software');
  }
}
