// @ts-check
import { test, expect } from '@playwright/test';

test('TC_01 : Verify user should able to select all the check boxes', async ({ page }) => {
  
  let URL = 'https://rahulshettyacademy.com/AutomationPractice/';
  await page.goto(URL);

  //Locators / Elements Declaration 

  const checkBox1  =  await page.locator('input#checkBoxOption1');
  const checkBox2  =  await page.locator('input#checkBoxOption2');
   const checkBox3  =  await page.locator('input#checkBoxOption3');

await expect (await checkBox1.isChecked()).toBeFalsy();  //correct because checkbox unchecked

////await checkBox1.check();  //yes this line will mark the check box

//await expect (await checkBox1.isChecked()).toBeTruthy();

await checkBox2.check();  //yes this line will mark the check box

await expect (await checkBox2.isChecked()).toBeTruthy();

await checkBox2.uncheck();

await expect (await checkBox2.isChecked()).toBeFalsy();

//await checkBox3.check();  //yes this line will mark the check box

//await expect (await checkBox3.isChecked()).toBeTruthy();

}
 );
