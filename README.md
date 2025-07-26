# XNDEV.COM Bug Hunter 🐛

A TypeScript Playwright test automation framework designed to systematically find bugs and development issues on the XNDEV.COM website. This framework follows the Page Object Model pattern and integrates with Playwright MCP server for enhanced browser automation.

## 🎯 Project Goals

- **Find bugs** on the XNDEV.com website (currently under construction)
- **Demonstrate issues** to the development team with failing tests  
- **Show expected behavior** through test specifications
- **Track bug fixes** by monitoring test status changes from fail to pass

## 🔍 Bug Types We Hunt

- **Broken Links**: Links with no URL or invalid destinations
- **SEO Issues**: Missing meta descriptions, improper H1 tags, poor heading hierarchy
- **Accessibility Problems**: Links without descriptive text, poor semantic structure
- **HTML Standards Violations**: Multiple H1 tags, improper element usage
- **Development Practices**: Console errors, strict mode violations

## 🏗️ Project Structure

```
├── .github/
│   └── copilot-instructions.md    # Copilot workspace instructions
├── page-objects/                  # Page Object Model classes
│   ├── HomePage.ts               # Homepage page object
│   ├── TestingPage.ts            # Testing page page object  
│   ├── PlacementPage.ts          # Placement page page object
│   ├── ConsultingPage.ts         # Consulting page page object
│   ├── BlogPage.ts               # Blog page page object
│   ├── SoftwarePage.ts           # Software page page object
│   └── WritingPage.ts            # Writing page page object
├── tests/                        # Test files
│   ├── homepage-navigation.spec.ts     # Homepage navigation tests
│   ├── homepage-seo-standards.spec.ts  # Homepage SEO and HTML standards tests
│   ├── testing-page.spec.ts           # Testing page comprehensive tests
│   ├── placement-page.spec.ts         # Placement page comprehensive tests
│   ├── consulting-page.spec.ts        # Consulting page comprehensive tests
│   ├── blog-page.spec.ts              # Blog page comprehensive tests
│   ├── software-page.spec.ts          # Software page comprehensive tests
│   └── writing-page.spec.ts           # Writing page comprehensive tests
├── utils/                        # Utility functions and helpers
│   └── BugDetectionUtils.ts      # Bug detection utility methods
├── .vscode/                      # VS Code configuration
│   └── tasks.json               # VS Code tasks for test execution
├── playwright.config.ts          # Playwright configuration
├── tsconfig.json                 # TypeScript configuration
├── Bug-Report.md                 # Detailed bug tracking (79 bugs documented)
├── The-Tests.md                  # Sequential test case documentation (TC-001 through TC-187)
├── prompts.md                    # User request tracking and project history
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Install Chromium browser for testing
npx playwright install chromium
```

### Running Tests
```bash
# Run all tests
npm test

# Run tests with visible browser
npm run test:headed

# Debug tests
npm run test:debug

# Run tests with UI mode
npm run test:ui

# View test report
npm run report
```

## 🐛 Current Bug Status

As of July 26, 2025, we've identified **79 confirmed bugs** on XNDEV.COM across 7 pages tested:

### 🔴 Critical Priority Bugs (13)
- **BUG-001, BUG-009, BUG-021, BUG-034, BUG-041, BUG-048, BUG-070**: Site-wide broken navigation links (3-11 per page)
- **BUG-004, BUG-039**: Homepage and Consulting page H1 shows "Search results" instead of proper title
- **BUG-013, BUG-017, BUG-032, BUG-046, BUG-057, BUG-068**: Multiple H1 elements (HTML violation across 6 pages)

### 🟡 High Priority Bugs (28)  
- **BUG-002**: 13 broken links throughout homepage
- **BUG-003, BUG-014, BUG-022, BUG-035, BUG-042, BUG-052, BUG-064, BUG-077**: Links without accessible text (7-22 per page)
- **BUG-005, BUG-010, BUG-019, BUG-033, BUG-040, BUG-056, BUG-067**: Missing meta descriptions (site-wide SEO issue - 7 pages)
- **BUG-006, BUG-058, BUG-069**: Poor heading hierarchy structure
- **BUG-015, BUG-024**: Images missing alt text for accessibility
- **BUG-076, BUG-078**: Publication and navigation links causing strict mode violations
- **BUG-066**: Blog page content access timeout issues

### 🟢 Medium Priority Bugs (38)
- **BUG-016, BUG-027, BUG-036, BUG-071, BUG-075**: Multiple social media link instances (strict mode issues)
- **BUG-029, BUG-038, BUG-045, BUG-055, BUG-073, BUG-074, BUG-079**: Content quality validation timeouts and structure issues  
- **BUG-031, BUG-037, BUG-044, BUG-053, BUG-065, BUG-072**: External link security vulnerabilities
- **BUG-047, BUG-059**: Missing semantic main content elements
- **BUG-049, BUG-050**: Missing introduction and conclusion content
- **BUG-051**: Service title text spacing issue
- **BUG-054**: Improper heading hierarchy
- **BUG-060**: Navigation selector issues
- **BUG-061**: Sidebar widget structure issues
- **BUG-062**: Coffee mug link selector ambiguity
- **BUG-063**: Rumspeed link URL format inconsistency
- Various UX and technical implementation improvements

### ✅ Good Implementations Found (20+)
- **Page H1s**: Properly implemented when not duplicated (Testing, Placement, Writing, Software, Blog pages)
- **External links**: Secure with proper target="_blank" and rel="noopener" (on most pages)
- **Contact buttons**: Function correctly across all 7 pages
- **Navigation functionality**: Core links work properly
- **Footer elements**: Properly implemented across pages
- **Content structure**: Good H2 hierarchy (no duplicates)
- **Social media**: Proper titles and functionality
- **Responsive design**: Mobile elements present on all pages
- **Page titles**: Correctly formatted
- **Call-to-action**: Effective positioning and messaging

See `Bug-Report.md` for detailed bug descriptions and `The-Tests.md` for test case details.

## 📊 Test Results Summary

- **Total Tests**: 187 test cases (across 8 test files)
- **Test Coverage**: 7 pages tested (Homepage, Testing, Placement, Consulting, Blog, Software, Writing)
- **Bug Detection**: 79 confirmed bugs identified and documented
- **Bug Categories**: 13 Critical, 28 High Priority, 38 Medium Priority

### Test Distribution by Page
- **Homepage Tests**: TC-001 through TC-026 (26 test cases)
- **Testing Page Tests**: TC-027 through TC-055 (29 test cases) 
- **Placement Page Tests**: TC-056 through TC-081 (26 test cases)
- **Consulting Page Tests**: TC-082 through TC-109 (28 test cases)
- **Blog Page Tests**: TC-110 through TC-139 (30 test cases)
- **Software Page Tests**: TC-140 through TC-163 (24 test cases)
- **Writing Page Tests**: TC-164 through TC-187 (24 test cases)

### Key Insights for Development Team

1. **Site-wide Template Issues**: Navigation and meta description problems affect ALL 7 pages tested
2. **HTML Standards Violations**: Multiple H1 elements found on 6 of 7 pages  
3. **Accessibility Gaps**: Consistent violations including 7-22 links without text content per page
4. **Inconsistent Implementation**: Team knows correct implementation (some H1s work) but inconsistent application
5. **Good Security Practices**: External links properly secured across most pages
6. **Working Core Features**: Contact functionality and basic navigation work correctly on all pages
7. **Responsive Design**: Mobile navigation elements properly implemented across all pages

The test framework provides comprehensive coverage across XNDEV.COM, identifying specific bugs that need fixing while confirming working functionality across all pages.

## 🧪 Test Categories & Coverage

Each page includes comprehensive tests for:
- **Navigation & Links**: Verify all navigation elements, broken link detection
- **Content Validation**: Page structure, H1/H2 hierarchy, content presence
- **Accessibility**: Alt text, link text, semantic HTML validation
- **SEO Elements**: Meta descriptions, page titles, URL structure
- **External Integrations**: Contact forms, social media links, external resources
- **Technical Standards**: HTML validation, React strict mode compliance

All test cases are documented in `The-Tests.md` with detailed descriptions and expected outcomes.

## 🛠️ Framework Features

- **TypeScript Support**: Full type safety and modern JavaScript features
- **Page Object Model**: Maintainable and reusable page interactions
- **Playwright MCP Integration**: Enhanced browser automation capabilities  
- **Comprehensive Reporting**: HTML reports with screenshots on failure
- **Bug Documentation**: Automatic bug tracking through failing tests
- **Accessibility Focus**: Tests for screen reader compatibility and semantic HTML

## 🎭 Browser Support

Currently configured to test with **Chromium only** as requested. Configuration can be expanded to include:
- Firefox
- WebKit (Safari)
- Mobile browsers

## 📝 Test Philosophy

### Bug-First Approach
Tests are designed to **fail when bugs exist** and **pass when bugs are fixed**. This approach:
- Clearly demonstrates issues to developers
- Provides executable specifications for expected behavior
- Creates regression protection once bugs are fixed

### Single Behavior Testing
Each test validates only one behavior for:
- Better bug isolation
- Easier debugging
- Clearer failure messages
- Focused fixes

## 🤝 Contributing

When adding new tests:
1. Follow the Page Object Model pattern
2. Create tests that fail for bugs, pass when fixed
3. Document findings in `Bug-Report.md`
4. Update `The-Tests.md` with new test cases
5. Use descriptive test names and error messages

## 📞 Contact

**Project Lead**: Matthew Eakin (ISTQB Certified SDET)
**Target Website**: https://xndev.com

---

*This framework demonstrates how systematic testing can identify development issues and provide clear specifications for fixes. Each failing test represents a bug that needs attention, and each passing test confirms working functionality.*
