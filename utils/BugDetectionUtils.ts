import { Page, Locator } from "@playwright/test";

export interface HeadingInfo {
  level: number;
  text: string;
  visible: boolean;
  position: number;
}

export interface LinkWithoutTextInfo {
  href: string;
  element: Locator;
}

export class BugDetectionUtils {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Check for broken navigation links across any page
   */
  async getBrokenNavigationLinks() {
    return await this.page
      .locator('nav a[href="#"], nav a[href=""], nav a:not([href])')
      .all();
  }

  /**
   * Check for links without text content (accessibility issue)
   */
  async getLinksWithoutText(): Promise<LinkWithoutTextInfo[]> {
    const allLinks = await this.page.locator("a").all();
    const linksWithoutText: LinkWithoutTextInfo[] = [];

    for (const link of allLinks) {
      const text = await link.textContent();
      const href = await link.getAttribute("href");
      if (!text?.trim()) {
        linksWithoutText.push({ href: href || "no href", element: link });
      }
    }

    return linksWithoutText;
  }

  /**
   * Check for meta description
   */
  async hasMetaDescription() {
    const metaElement = this.page.locator('meta[name="description"]');
    return (await metaElement.count()) > 0;
  }

  /**
   * Get meta description content
   */
  async getMetaDescription() {
    const hasMetaDescription = await this.hasMetaDescription();
    if (hasMetaDescription) {
      return await this.page
        .locator('meta[name="description"]')
        .getAttribute("content");
    }
    return null;
  }

  /**
   * Check heading hierarchy
   */
  async getHeadingHierarchy(): Promise<HeadingInfo[]> {
    return await this.page.evaluate(() => {
      interface HeadingInfo {
        level: number;
        text: string;
        visible: boolean;
        position: number;
      }

      const allHeadings: HeadingInfo[] = [];
      for (let i = 1; i <= 6; i++) {
        const elements = document.querySelectorAll(`h${i}`);
        elements.forEach((el: Element, index) => {
          const rect = el.getBoundingClientRect();
          allHeadings.push({
            level: i,
            text: el.textContent?.trim() || "",
            visible: (el as HTMLElement).offsetParent !== null,
            position: rect.top,
          });
        });
      }

      return allHeadings
        .filter((h) => h.visible)
        .sort((a, b) => a.position - b.position);
    });
  }

  /**
   * Check for console errors
   */
  async getConsoleErrors() {
    const errors: string[] = [];

    this.page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });

    return errors;
  }

  /**
   * Check for external links without proper security attributes
   */
  async getInsecureExternalLinks() {
    return await this.page.evaluate(() => {
      const externalLinks = Array.from(
        document.querySelectorAll("a[href]"),
      ).filter((link: any) => {
        const href = link.getAttribute("href");
        return (
          href &&
          href.startsWith("http") &&
          !href.includes(window.location.hostname)
        );
      });

      return externalLinks.map((link: any) => ({
        href: link.getAttribute("href"),
        target: link.getAttribute("target"),
        rel: link.getAttribute("rel"),
        text: link.textContent?.trim() || "No text",
        hasProperSecurity:
          link.getAttribute("target") === "_blank" &&
          link.getAttribute("rel")?.includes("noopener"),
      }));
    });
  }
}
