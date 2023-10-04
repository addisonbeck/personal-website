import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/contact');
  await expect(page).toHaveTitle(/Contact/);
});
