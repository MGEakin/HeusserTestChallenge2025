import { Page, Locator } from '@playwright/test';

export class ConsultingPage {
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
  readonly subheading: Locator;
  readonly heroImage: Locator;

  // Main content sections
  readonly excelonDifferenceSection: Locator;
  readonly excelonDifferenceHeading: Locator;
  readonly introParagraph1: Locator;
  readonly introParagraph2: Locator;
  readonly processParagraph1: Locator;
  readonly processParagraph2: Locator;
  readonly observationParagraph: Locator;
  readonly recommendationsParagraph: Locator;
  readonly consultingTimeframeParagraph: Locator;

  // Software practitioners section
  readonly practitionersSection: Locator;
  readonly practitionersHeading: Locator;
  readonly practitionersParagraph1: Locator;
  readonly practitionersParagraph2: Locator;
  readonly practitionersParagraph3: Locator;
  readonly technicalWritingImage: Locator;

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
    this.mainContent = page.locator('article');
    this.pageHeading = page.getByRole('heading', { name: 'Consulting', level: 2 });
    this.subheading = page.getByRole('heading', { name: 'What we do and how we work', level: 2 });
    this.heroImage = page.locator('article img').first();

    // Main content sections
    this.excelonDifferenceSection = page.locator('div:has(h4:has-text("The Excelon Difference"))');
    this.excelonDifferenceHeading = page.getByRole('heading', { name: 'The Excelon Difference', level: 4 });
    this.introParagraph1 = page.locator('article p:has-text("Sometimes you don\'t need new staff")');
    this.introParagraph2 = page.locator('article p:has-text("Great.")');
    this.processParagraph1 = page.locator('article p:has-text("At Excelon, we do consulting")');
    this.processParagraph2 = page.locator('article p:has-text("Before the assignment begins")');
    this.observationParagraph = page.locator('article p:has-text("During our visit we take")');
    this.recommendationsParagraph = page.locator('article p:has-text("Our recommendations are grounded")');
    this.consultingTimeframeParagraph = page.locator('article p:has-text("Most of our consulting sessions")');

    // Software practitioners section
    this.practitionersSection = page.locator('div:has(h2:has-text("Our consultants are all software practitioners"))');
    this.practitionersHeading = page.getByRole('heading', { name: 'Our consultants are all software practitioners.', level: 2 });
    this.practitionersParagraph1 = page.locator('article p:has-text("We\'re not like most recruiting")');
    this.practitionersParagraph2 = page.locator('article p:has-text("When it comes to software")');
    this.practitionersParagraph3 = page.locator('article p:has-text("Whether you want to compress")');
    this.technicalWritingImage = page.locator('img[alt="technical writing"]');

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
    await this.page.goto('https://xndev.com/consulting/');
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

  async navigateToSoftware() {
    await this.softwareLink.click();
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
    return await this.page.locator('article p').count();
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
    return links.filter(link => link === '#' || link === '' || !link);
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
    const paragraphCount = await this.getParagraphCount();
    const hasMainSections = await this.excelonDifferenceHeading.isVisible() && 
                            await this.practitionersHeading.isVisible();
    return paragraphCount >= 7 && hasMainSections;
  }

  async getMainContentText(): Promise<string> {
    return await this.mainContent.textContent() || '';
  }
}
