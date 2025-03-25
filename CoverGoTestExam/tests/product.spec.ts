import { test, expect } from '../utils/fixtures';

test.describe('Product Page Tests', () => {

  test('TestCase6 - Verify adding multiple products to the cart', async ({ loginPage, productPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await productPage.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await productPage.page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
    
    await productPage.page.click('.shopping_cart_link');
    const cartItems = await productPage.page.locator('.cart_item').count();
    expect(cartItems).toBe(2);
  });

  test('TestCase7 - Verify removing products from the cart', async ({ loginPage, productPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await productPage.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await productPage.page.click('.shopping_cart_link');
    await productPage.page.click('[data-test="remove-sauce-labs-backpack"]');

    const cartItems = await productPage.page.locator('.cart_item').count();
    expect(cartItems).toBe(0);
  });

});