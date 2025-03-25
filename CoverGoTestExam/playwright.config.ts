import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,  // Run in UI mode
    baseURL: 'https://www.saucedemo.com/',
    screenshot: 'only-on-failure',
    trace: 'on',
  },
});