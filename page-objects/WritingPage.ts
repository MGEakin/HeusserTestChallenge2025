import { Page, Locator } from '@playwright/test';

export class WritingPage {
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
  readonly mainSectionHeading: Locator;
  readonly mainDescription: Locator;
  readonly descriptionParagraph1: Locator;
  readonly descriptionParagraph2: Locator;
  readonly professionalWritingImage: Locator;

  // Statistics section
  readonly statisticsSection: Locator;
  readonly writersCount: Locator;
  readonly customersCount: Locator;
  readonly publicationsCount: Locator;
  readonly coffeeCount: Locator;

  // Recent Publications section
  readonly recentPublicationsHeading: Locator;
  readonly publicationsList: Locator;
  readonly firstPublication: Locator;
  readonly firstPublicationTitle: Locator;
  readonly firstPublicationLink: Locator;
  readonly firstPublicationExcerpt: Locator;
  readonly firstPublicationReadMore: Locator;
  readonly firstPublicationDate: Locator;
  readonly firstPublicationComments: Locator;

  readonly secondPublication: Locator;
  readonly secondPublicationTitle: Locator;
  readonly secondPublicationLink: Locator;
  readonly secondPublicationReadMore: Locator;

  readonly thirdPublication: Locator;
  readonly thirdPublicationTitle: Locator;
  readonly thirdPublicationLink: Locator;
  readonly thirdPublicationReadMore: Locator;

  readonly fourthPublication: Locator;
  readonly fourthPublicationTitle: Locator;
  readonly fourthPublicationLink: Locator;
  readonly fourthPublicationReadMore: Locator;

  readonly fifthPublication: Locator;
  readonly fifthPublicationTitle: Locator;
  readonly fifthPublicationLink: Locator;
  readonly fifthPublicationReadMore: Locator;

  readonly sixthPublication: Locator;
  readonly sixthPublicationTitle: Locator;
  readonly sixthPublicationLink: Locator;
  readonly sixthPublicationReadMore: Locator;

  // Call-to-action section
  readonly callToActionHeading: Locator;
  readonly callToActionDescription: Locator;
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
    this.pageHeading = page.getByRole('heading', { name: 'Writing', level: 1 });
    this.subheading = page.getByRole('heading', { name: 'What we do and how we work', level: 2 }).first();
    this.heroImage = page.locator('main img').first();
    this.mainSectionHeading = page.getByRole('heading', { name: 'Technical Expertise. Clear Writing. Delivered.', level: 2 });
    this.mainDescription = page.locator('main article').first();
    this.descriptionParagraph1 = page.locator('main p').first();
    this.descriptionParagraph2 = page.locator('main p').nth(1);
    this.professionalWritingImage = page.locator('img[alt="Professional Writing Team"]');

    // Statistics section
    this.statisticsSection = page.locator('div:has-text("Writers")').first();
    this.writersCount = page.locator('div:has-text("Writers")').first();
    this.customersCount = page.locator('div:has-text("Customers")').first();
    this.publicationsCount = page.locator('div:has-text("Publications")').first();
    this.coffeeCount = page.locator('div:has-text("Cups of Coffee")').first();

    // Recent Publications section
    this.recentPublicationsHeading = page.getByRole('heading', { name: 'Recent Publications', level: 2 });
    this.publicationsList = page.locator('main ul').first();
    this.firstPublication = page.locator('main li').first();
    this.firstPublicationTitle = page.getByRole('heading', { name: 'A new test challenge!', level: 3 });
    this.firstPublicationLink = page.getByRole('link', { name: 'A new test challenge!' });
    this.firstPublicationExcerpt = page.locator('main li').first().locator('p').first();
    this.firstPublicationReadMore = page.getByRole('link', { name: 'Read more about A new test challenge!' });
    this.firstPublicationDate = page.locator('text="July 24, 2025"');
    this.firstPublicationComments = page.locator('text="• No Comments"').first();

    this.secondPublication = page.locator('main li').nth(1);
    this.secondPublicationTitle = page.getByRole('heading', { name: 'What happens when this stuff doesn\'t work?', level: 3 });
    this.secondPublicationLink = page.getByRole('link', { name: 'What happens when this stuff doesn\'t work?' });
    this.secondPublicationReadMore = page.getByRole('link', { name: 'Read more about What happens when this stuff doesn\'t work?' });

    this.thirdPublication = page.locator('main li').nth(2);
    this.thirdPublicationTitle = page.getByRole('heading', { name: 'Ten Thoughts on Technical Debt', level: 3 });
    this.thirdPublicationLink = page.getByRole('link', { name: 'Ten Thoughts on Technical Debt' });
    this.thirdPublicationReadMore = page.getByRole('link', { name: 'Read more about Ten Thoughts on Technical Debt' });

    this.fourthPublication = page.locator('main li').nth(3);
    this.fourthPublicationTitle = page.getByRole('heading', { name: 'The (lack of?) Evidence for Klarna\'s use of AI', level: 3 });
    this.fourthPublicationLink = page.getByRole('link', { name: 'The (lack of?) Evidence for Klarna\'s use of AI' });
    this.fourthPublicationReadMore = page.getByRole('link', { name: 'Read more about The (lack of?) Evidence for Klarna\'s use of AI' });

    this.fifthPublication = page.locator('main li').nth(4);
    this.fifthPublicationTitle = page.getByRole('heading', { name: 'A new turing test', level: 3 });
    this.fifthPublicationLink = page.getByRole('link', { name: 'A new turing test' });
    this.fifthPublicationReadMore = page.getByRole('link', { name: 'Read more about A new turing test' });

    this.sixthPublication = page.locator('main li').nth(5);
    this.sixthPublicationTitle = page.getByRole('heading', { name: 'A Quick bit on why/what Scrum improved', level: 3 });
    this.sixthPublicationLink = page.getByRole('link', { name: 'A Quick bit on why/what Scrum improved' });
    this.sixthPublicationReadMore = page.getByRole('link', { name: 'Read more about A Quick bit on why/what Scrum improved' });

    // Call-to-action section
    this.callToActionHeading = page.getByRole('heading', { name: 'Do you have a writing project that requires both technical expertise and strong, clear communications ability?', level: 2 });
    this.callToActionDescription = page.locator('main p').last();
    this.contactButton = page.getByRole('link', { name: 'Contact Excelon' });

    // Footer elements
    this.footer = page.locator('footer');
    this.footerCopyright = page.locator('footer p').first();
    this.rumspeedLink = page.getByRole('link', { name: 'Rumspeed' });
    this.footerNavigation = page.locator('footer ul');
    this.workWithExcelonLink = page.getByRole('link', { name: 'Work with Excelon' });
    this.aboutExcelonLink = page.getByRole('link', { name: 'About Excelon' });
    this.contactLink = page.getByRole('link', { name: 'Contact' });

    // Mobile navigation
    this.mobileNavigation = page.locator('div:has(ul)').nth(1);
    this.mobileNavigationList = page.locator('div:has(ul) ul').first();
    this.mobileTestingLink = page.locator('div:has(ul)').getByRole('link', { name: 'Testing' });
    this.mobilePlacementLink = page.locator('div:has(ul)').getByRole('link', { name: 'Placement' });
    this.mobileWritingLink = page.locator('div:has(ul)').getByRole('link', { name: 'Writing' });
    this.mobileConsultingLink = page.locator('div:has(ul)').getByRole('link', { name: 'Consulting' });
    this.mobileSoftwareLink = page.locator('div:has(ul)').getByRole('link', { name: 'Software' });
    this.mobileBlogLink = page.locator('div:has(ul)').getByRole('link', { name: 'Blog' });
    this.mobileSocialLink1 = page.locator('div:has(ul) a[href="#"]').first();
    this.mobileSocialLink2 = page.locator('div:has(ul) a[href="#"]').nth(1);
    this.mobileLogoLink = page.locator('div:has(ul) a:has(img[alt="Excelon Development"])');
    this.mobileLogoImage = page.locator('div:has(ul) img[alt="Excelon Development"]');

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
    await this.page.goto('https://xndev.com/writing/');
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

  async navigateToConsulting() {
    await this.consultingLink.click();
  }

  async navigateToSoftware() {
    await this.softwareLink.click();
  }

  async navigateToBlog() {
    await this.blogLink.click();
  }

  async clickFirstPublication() {
    await this.firstPublicationLink.click();
  }

  async clickReadMoreFirstPublication() {
    await this.firstPublicationReadMore.click();
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

  async getPublicationCount(): Promise<number> {
    return await this.publicationsList.locator('li').count();
  }

  async getFirstPublicationTitle(): Promise<string> {
    return await this.firstPublicationTitle.textContent() || '';
  }

  async getStatisticsData(): Promise<{writers: string, customers: string, publications: string, coffee: string}> {
    return {
      writers: await this.writersCount.textContent() || '',
      customers: await this.customersCount.textContent() || '',
      publications: await this.publicationsCount.textContent() || '',
      coffee: await this.coffeeCount.textContent() || ''
    };
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
    const h2Count = await this.page.locator('h2').count();
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
}
