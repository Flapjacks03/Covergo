import { test, expect } from '../utils/fixtures';


test.describe('Cart Tests', () => {

  test('TestCase8 - Verify cart persists after a page refresh', async ({ loginPage, cartPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await cartPage.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await cartPage.page.reload();

    await cartPage.page.click('.shopping_cart_link');
    const cartItems = await cartPage.page.locator('.cart_item').count();
    expect(cartItems).toBe(1);
  });

});
