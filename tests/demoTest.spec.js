import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const name = await page.innerText('.navbar__title');
  expect(name).toBe('Playwright');
});
test('checking Getting Started link test', async ({ page }) => {
    const gettingStartedLnk = await page.locator(`//a[contains(text(), "Getting started")]`).click();
  });
  test('checking API reference link test', async ({ page }) => {
    const apiReference = page.locator(`//a[contains(text(), "API reference")]`).click();
  });
