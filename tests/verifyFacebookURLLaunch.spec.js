// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https:www.facebook.com');
  await page.getByTestId('royal-email').fill("praveen");
  await page.locator('#pass').fill("praveen");
  await page.getByText('Log in').click
});
