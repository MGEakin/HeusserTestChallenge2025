# Prompt 02 - Testing Page Analysis and Test Creation

**Date**: July 26, 2025  
**User**: Matthew Eakin - ISTBQ Certified Software Development Engineer in Test (SDET)

## Task Overview

Using the Playwright MCP server, open XNDEV.COM and click on the Testing tab. Analyze the Testing page and create comprehensive test coverage.

## Specific Requirements

### 1. Page Object Analysis
- Open XNDEV.COM using the Playwright MCP server
- Navigate to the Testing tab
- Analyze all elements found on the Testing page
- Add or update all elements found to the TestingPage page object

### 2. Test Creation
- Create or update functional tests for the Testing page
- Put all tests in the functional test file
- Follow the bug-first testing approach established in Prompt 01

### 3. Documentation Updates
- Update the list of tests with the latest test once completed
- Follow the guidelines in `copilot-instructions-playwright.md`
- As bugs are found, document them in the `Bug-Report.md` file

## Testing Focus Areas

Based on the bug-first approach from Prompt 01, look for:
- Broken links
- Multiple H1 elements
- Strict mode violations
- Invisible broken links
- Accessibility issues
- SEO problems
- Development practice violations

## Expected Deliverables

1. **Updated TestingPage.ts** - Page object with all discovered elements
2. **Updated/Created Test File** - Functional tests for the Testing page
3. **Updated Test Documentation** - Current test list with new tests
4. **Bug Documentation** - Any bugs found documented in Bug-Report.md

## Guidelines Compliance

- Follow copilot-instructions-playwright.md guidelines
- Use TypeScript and Playwright
- Test only with Chromium browser
- Implement Page Object Model pattern
- Document bugs for development team action
