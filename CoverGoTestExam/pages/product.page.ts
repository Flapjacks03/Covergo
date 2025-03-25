import { Page, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addToCart(productName: string) {
    await this.page.click(`[data-test="add-to-cart-${productName}"]`);
  }

  async removeFromCart(productName: string) {
    await this.page.click(`[data-test="remove-${productName}"]`);
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }

  async verifyCartItemCount(expectedCount: number) {
    const cartItems = await this.page.locator('.cart_item').count();
    expect(cartItems).toBe(expectedCount);
  }

  async sortProducts(order: string) {
    await this.page.selectOption('[data-test="product_sort_container"]', order);
  }
}