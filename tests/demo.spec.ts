import { test, expect } from '@playwright/test';

test('First test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/writing-tests');
  await page.screenshot({path: `tests-img/playwriting.png`})
  await expect(page.url()).toContain("writing");
});
