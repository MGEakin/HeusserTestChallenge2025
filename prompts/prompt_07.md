# Prompt 07 - Software Page Analysis and Test Creation

**Date**: July 26, 2025  
**User**: Matthew Eakin - ISTBQ Certified Software Development Engineer in Test (SDET)

## Task Overview

Using the Playwright MCP server, open XNDEV.COM and click on the Software tab. Analyze the Software page and create comprehensive test coverage following ISTQB testing standards.

## Specific Requirements

### 1. Page Object Analysis
- Open XNDEV.COM using the Playwright MCP server
- Navigate to the Software tab
- Analyze all elements found on the Software page
- Add or update all elements found to the SoftwarePage page object

### 2. Test Creation
- Create or update functional tests for the Software page
- Put all tests in the functional test file
- **Ensure all tests adhere to ISTQB testing standards**
- Follow the bug-first testing approach established in Prompt 01

### 3. Documentation Updates
- Update the list of tests with the latest test once completed
- Follow the guidelines in `copilot-instructions.md`
- As bugs are found, document them in the `Bug-Report.md` file

## ISTQB Testing Standards Focus

Ensure tests follow ISTQB principles:
- **Test Design Techniques**: Equivalence partitioning, boundary value analysis
- **Test Documentation**: Clear test objectives, preconditions, test steps, expected results
- **Defect Management**: Proper bug classification and documentation
- **Test Coverage**: Functional, structural, and risk-based testing approaches

## Testing Focus Areas

Based on the bug-first approach from Prompt 01, look for:
- Broken links and navigation issues
- Multiple H1 elements (HTML standards violation)
- Strict mode violations
- Invisible broken links
- Accessibility issues (WCAG compliance)
- SEO problems (meta descriptions, proper heading hierarchy)
- Development practice violations
- Software service listings and descriptions
- Technical capability presentations
- Portfolio and case study functionality
- Technology stack information accuracy

## Expected Deliverables

1. **Updated SoftwarePage.ts** - Page object with all discovered elements
2. **Updated/Created Test File** - Functional tests for the Software page following ISTQB standards
3. **Updated Test Documentation** - Current test list with new tests
4. **Bug Documentation** - Any bugs found documented in Bug-Report.md with proper classification

## Guidelines Compliance

- Follow copilot-instructions.md guidelines
- Use TypeScript and Playwright
- Test only with Chromium browser
- Implement Page Object Model pattern
- Document bugs for development team action
- Adhere to ISTQB testing methodology and documentation standards
