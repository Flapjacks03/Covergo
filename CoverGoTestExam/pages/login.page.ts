import { Page, expect } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}
  
    async goto() {
      await this.page.goto('https://www.saucedemo.com/');
    }
  
    async login(username: string, password: string) {
      await this.page.fill('[data-test="username"]', username);
      await this.page.fill('[data-test="password"]', password);
      await this.page.click('[data-test="login-button"]');
      await this.page.waitForSelector('.shopping_cart_link'); // Ensure login success
    }

    async verifyErrorMessage(errorText: string) {
        const errorMsg = this.page.locator('.error-message-container');
        await expect(errorMsg).toBeVisible();
        await expect(errorMsg).toHaveText(errorText);
      }
  
    async logout() {
      await this.page.click('#react-burger-menu-btn'); // Open menu
      await this.page.waitForSelector('#logout_sidebar_link'); // Wait for logout option
      await this.page.click('#logout_sidebar_link'); // Click logout
      await this.page.waitForSelector('[data-test="login-button"]'); // Ensure logout success
    }

  }