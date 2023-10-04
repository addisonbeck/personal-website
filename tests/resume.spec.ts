import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/resume');
  await expect(page).toHaveTitle(/Resume/);
});
