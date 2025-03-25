# Covergo
Senior Software QA Engineer (Automation) Take Home Task

This repository contains automated UI tests for [SauceDemo](https://www.saucedemo.com/) using **Playwright** with **TypeScript**. The tests cover login, product filtering, cart functionality, and checkout.

## 📦 **Project Structure**

- `tests/` → Contains Playwright test cases  
- `pages/` → Page Object Model (POM) files for modular tests  
- `utils/` → Utility functions for reusable logic  
- `playwright.config.ts` → Playwright configuration file  

---

## 🚀 **Setup Instructions**  

### ** Prerequisites**  
Ensure you have the following installed:  
- **Node.js** (v16 or later) → [Download here](https://nodejs.org/)  
- **Git** (optional, for version control)  


1. Clone the Repository**  
    1.1. command shell: git clone https://github.com/your-username/playwright-tests.git
    1.2. command shell: cd playwright-tests

2. Install Dependencies
    2.1 command shell: npm install

3. Install Playwright Browsers
    3.1. command: npx playwright install
    
4. Run Tests
    4.1. Run All Tests
    command: npx playwright test

    4.2. Run a Specific Test File
    command shell: npx playwright test tests/product.spec.ts

    4.3. Run Tests in Headed Mode (For Debugging)
    command shell: npx playwright test --headed

    4.4. Run Tests in Debug Mode
    command shell: npx playwright test --debug
    
    4.5 Run Tests in a Specific Browser
    command shell: npx playwright test --browser=chromium  # Use `firefox` or `webkit` for other browsers
    
    4.6 Run Tests with a Specific Tag
    If your tests have tags like @smoke, run them like this:
    command shell: npx playwright test --grep @smoke

    4.7 Run Tests on UI
    command shell: npx playwright test --ui

5. Generate Test Reports
    5.1 Generate HTML Report
    command shell: npx playwright test --reporter=html
    command shell: npx playwright show-report

6. Generate JSON Report
    command shell: npx playwright test --reporter=json > report.json