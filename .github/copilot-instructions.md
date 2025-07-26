<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# XNDEV.COM Bug Hunter - Copilot Instructions

## Project Overview
This is a Playwright TypeScript test automation framework designed specifically for finding bugs and development issues on the XNDEV.COM website. The framework follows the Page Object Model pattern and integrates with Playwright MCP server for enhanced browser automation.

## Key Guidelines

### Testing Philosophy
- **Bug-First Approach**: Tests are designed to identify bugs and development issues
- **Failure is Expected**: When bugs are found, tests should fail until the issues are fixed
- **Single Behavior Testing**: Each test should verify only one behavior for better isolation
- **Page Object Model**: Use POM pattern for maintainable and reusable code

### Code Standards
- Use TypeScript for all test files and page objects
- Follow Playwright best practices for reliable, non-flaky tests
- Use proper wait strategies and locators
- Include meaningful assertions with clear error messages
- Test only with Chromium browser as specified

### Bug Detection Focus
- **Broken Links**: Links with no URL or invalid destinations
- **HTML Standards Violations**: Multiple H1 tags, accessibility issues
- **Development Practices**: Strict mode violations, console errors
- **UI/UX Issues**: Missing elements, incorrect layouts, broken functionality

### File Organization
- `/page-objects/`: Page Object Model classes for each page
- `/tests/`: Test files organized by feature or page
- `/utils/`: Utility functions and helpers
- Documentation in root: README files for tests, bugs, and prompts

### Playwright MCP Server Integration
- Use MCP server for page analysis before writing tests
- Navigate and interact with elements using MCP server
- Document page elements and their properties
- Ensure tests are based on actual page structure, not assumptions

When generating code, prioritize:
1. Reliable element selection using best practices
2. Comprehensive error handling and reporting
3. Clear test descriptions and documentation
4. Maintainable and scalable code structure
