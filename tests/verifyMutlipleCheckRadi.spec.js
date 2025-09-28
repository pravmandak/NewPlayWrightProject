// @ts-check
import { test, expect } from '@playwright/test';

test('Verify the error message when user enters invalid data', async ({ page }) => {
  let URL = 'https://rahulshettyacademy.com/AutomationPractice/';
  
  
  await page.goto(URL);
  await page.locator('input#checkBoxOption1').check()
  console.log(await page.locator('input#checkBoxOption1').isChecked());

  await page.locator('input#checkBoxOption2').check()
  console.log(await page.locator('input#checkBoxOption2').isChecked());

  await page.locator('input#checkBoxOption3').check()
  console.log(await page.locator('input#checkBoxOption3').isChecked());

  await page.locator('[value="radio1"]').check()
  await page.locator('[value="radio2"]').check()
  await page.locator('[value="radio3"]').check()

  
});
