import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async proceedToCheckout() {
    await this.page.click('[data-test="checkout"]');
  }
}