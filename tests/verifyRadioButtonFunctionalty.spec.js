// @ts-check
import { test, expect } from '@playwright/test';

test('TC_01 : Verify user should able to select all the Radio button', async ({ page }) => {
  
  let URL = 'https://rahulshettyacademy.com/AutomationPractice/';
  await page.goto(URL);

  //Locators / Elements Declaration 

  const radbutton1  =  await page.locator('[value="radio1"]');
  const radbutton2  =  await page.locator('[value="radio2"]');

  await radbutton1.check();

  await expect(radbutton1.isChecked()).toBeTruthy();

  await radbutton2.click();

  await expect(radbutton2.isChecked()).toBeTruthy();



}
 );
