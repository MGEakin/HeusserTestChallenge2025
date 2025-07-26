# Prompt 01 - Initial Project Requirements

**Date**: July 26, 2025  
**User**: Matthew Eakin - ISTBQ Certified Software Development Engineer in Test (SDET)

## Project Overview

Build a stand-alone TypeScript Playwright test automation framework with a Playwright MCP server built in. The target website for testing is **XNDEV.COM**.

## Primary Goals

### 1. Comprehensive Regression Suite
Build a comprehensive regression suite of Playwright tests to thoroughly test the entire website.

### 2. Bug Discovery and Documentation
Find bugs on the XNDEV.com website. The website is currently under construction. We need to find bugs to show the development team what they need to work on next.

## Bug-First Testing Approach

When you find a bug, write a test of how the functionality should work. When executed, the test will fail. When the bug is fixed, we can rerun the test and it will pass.

### Examples of Bugs to Look For:

1. **Broken Links**: A link web element with no URL listed. Write a test which clicks on the link and takes you to another page. Verify the new page. At this point we might not know the intended page. That's OK. Any page other than the current page will be OK for our test. Once the actual page is determined, the test can be updated with the new URL and executed.

2. **Bad Development Practices**: 
   - Having 2 H1's on a webpage is not good development practice and should be considered a bug
   - Strict mode violations
   - Invisible broken links
   
   Again, when you find a bug, write a test of how the functionality should work. When executed, the test will fail. That is OK as it shows the development team what they need to work on next.

## Framework Requirements

### Architecture
- **Page Object Model**: Create a page object model for each page
- **Browser**: Test using only Chromium
- **Language**: TypeScript
- **Framework**: Playwright with MCP server integration

### Documentation Requirements

Create the following README files:

1. **"The Tests"**: Document all tests created including:
   - Brief description of each test case
   - Expected results of the test
   - Current status: pass, fail, not executed yet

2. **"Bug-Report"**: As bugs are found, document them in this file

3. **"Prompts"**: Track all prompts provided. Start with this prompt. As additional prompts are added, include them as "Additional User Requests"

## Guidelines

- Follow the guidelines in `copilot-instructions-playwright.md`
- Focus on finding bugs and development issues
- Tests should fail when bugs are present and pass when bugs are fixed
- Document everything thoroughly for the development team

## Additional User Requests

### Prompt 02 - Testing Page Analysis and Test Creation
**Date**: July 26, 2025

Using the playwright MCP server, open XNDEV.COM and click on the Testing tab. Analyze the Testing page and add or update all elements found to the TestingPage page object. Create or update functional tests for the page and put them in the functional test file.

- Update the list of tests with the latest test once completed
- Make sure you follow the guidelines in copilot-instructions-playwright.md
- As Bugs are found, document them in the Bug-Report.md file

### Prompt 03 - Home Page Analysis and Test Creation
**Date**: July 26, 2025

Using the playwright MCP server, open XNDEV.COM. Analyze the Home page and add or update all elements found to the HomePage page object. Create or update functional tests for the page and put them in the functional test file.

- Ensure all tests adhere to ISTQB testing standards
- Update the list of tests with the latest test once completed
- Make sure you follow the guidelines in copilot-instructions.md
- As Bugs are found, document them in the Bug-Report.md file

### Prompt 04 - Placement Page Analysis and Test Creation
**Date**: July 26, 2025

Using the playwright MCP server, open XNDEV.COM and click on the Placement tab. Analyze the Placement page and add or update all elements found to the PlacementPage page object. Create or update functional tests for the page and put them in the functional test file.

- Ensure all tests adhere to ISTQB testing standards
- Update the list of tests with the latest test once completed
- Make sure you follow the guidelines in copilot-instructions.md
- As Bugs are found, document them in the Bug-Report.md file

### Prompt 05 - Writing Page Analysis and Test Creation
**Date**: July 26, 2025

Using the playwright MCP server, open XNDEV.COM and click on the Writing tab. Analyze the Writing page and add or update all elements found to the WritingPage page object. Create or update functional tests for the page and put them in the functional test file.

- Ensure all tests adhere to ISTQB testing standards
- Update the list of tests with the latest test once completed
- Make sure you follow the guidelines in copilot-instructions.md
- As Bugs are found, document them in the Bug-Report.md file

### Prompt 06 - Consulting Page Analysis and Test Creation
**Date**: July 26, 2025

Using the playwright MCP server, open XNDEV.COM and click on the Consulting tab. Analyze the Consulting page and add or update all elements found to the ConsultingPage page object. Create or update functional tests for the page and put them in the functional test file.

- Ensure all tests adhere to ISTQB testing standards
- Update the list of tests with the latest test once completed
- Make sure you follow the guidelines in copilot-instructions.md
- As Bugs are found, document them in the Bug-Report.md file

### Prompt 07 - Software Page Analysis and Test Creation
**Date**: July 26, 2025

Using the playwright MCP server, open XNDEV.COM and click on the Software tab. Analyze the Software page and add or update all elements found to the SoftwarePage page object. Create or update functional tests for the page and put them in the functional test file.

- Ensure all tests adhere to ISTQB testing standards
- Update the list of tests with the latest test once completed
- Make sure you follow the guidelines in copilot-instructions.md
- As Bugs are found, document them in the Bug-Report.md file

### Prompt 08 - Blog Page Analysis and Test Creation
**Date**: July 26, 2025

Using the playwright MCP server, open XNDEV.COM and click on the Blog tab. Analyze the Blog page and add or update all elements found to the BlogPage page object. Create or update functional tests for the page and put them in the functional test file.

- Ensure all tests adhere to ISTQB testing standards
- Update the list of tests with the latest test once completed
- Make sure you follow the guidelines in copilot-instructions.md
- As Bugs are found, document them in the Bug-Report.md file

*Future prompts will be documented here as they are provided*
