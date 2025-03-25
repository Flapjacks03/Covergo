import { test, expect } from '../utils/fixtures';

test.describe('Login Test', () => {
  
  test('TestCase1 - Successful login with valid credentials', async ({ loginPage  }) => {
    // Login with valid credentials
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    
    // Verify login success
    await expect(loginPage.page ).toHaveURL(/inventory\.html/);
    await expect(loginPage.page .locator('.inventory_list')).toBeVisible();
  });

  test('TestCase2 - Successful logout with valid credentials', async ({ loginPage  }) => {
    // Login with valid credentials
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    
    // Verify login success
    await expect(loginPage.page ).toHaveURL(/inventory\.html/);
    await expect(loginPage.page .locator('.inventory_list')).toBeVisible();

    await loginPage.logout();
  });

  test('Testcase3 - Failed login with invalid credentials', async ({ loginPage  }) => {
    await loginPage.goto();
    
    // Enter wrong credentials
    await loginPage.page.fill('#user-name', 'wrong_user');
    await loginPage.page.fill('#password', 'wrong_password');
    await loginPage.page.click('#login-button');
    
    // Verify error message
    const errorMsg = loginPage.page.locator('.error-message-container');
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toHaveText(/Epic sadface: Username and password do not match any user in this service/);
  });

  test('Testcase4 - Failed login with password with whitespaces in between', async ({ loginPage }) => {
    await loginPage.goto();
    
    // Enter wrong credentials
    await loginPage.page.fill('#user-name', 'wrong_user_123ASD');
    await loginPage.page.fill('#password', 'wrong          password');
    await loginPage.page.click('#login-button');
    
    // Verify error message
    const errorMsg = loginPage.page.locator('.error-message-container');
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toHaveText(/Epic sadface: Username and password do not match any user in this service/);
  });

  test('Testcase5 - Failed login with password as symbols and numeric', async ({ loginPage }) => {
    await loginPage.goto();
    
    // Enter wrong credentials
    await loginPage.page.fill('#user-name', 'wrong_user_123ASD');
    await loginPage.page.fill('#password', '!@#$%^&*()1234567889');
    await loginPage.page.click('#login-button');
    
    // Verify error message
    const errorMsg = loginPage.page.locator('.error-message-container');
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toHaveText(/Epic sadface: Username and password do not match any user in this service/);
  });

});