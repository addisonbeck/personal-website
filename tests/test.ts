import { expect, test } from '@playwright/test';
import name from "../src/lib/data/Name";

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(new RegExp(`${name.full}`));
});
