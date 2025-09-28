// @ts-check
import { test, expect } from '@playwright/test';

test('Verify the error message when user enters invalid data', async ({ page }) => {
  let URL = 'https://rahulshettyacademy.com/loginpagePractise/';
  
  let name ="Praveen";
  
  await page.goto(URL);
  await page.locator('input#username').fill(name.trim());
  await page.locator('input#password').fill('test');
  await page.locator('[name="terms"]').check();
  await page.locator('input#signInBtn').click();
  await page.locator('[value="Sign In"]').click();

});
