// @ts-check
import { test, expect } from '@playwright/test';

test('Verify login funcitonality is working fine', async ({ page }) => {
  await page.goto('https://www.facebook.com');
  
  let  expectedTitle = await page.title();  //Google
  
  if(expectedTitle == 'Facebook – log in or sign up'){
    console.log("Yes URL launched successfully & user landed on FB ")
  }
  
  await page.locator("input[id='email']").fill("Praveen");
  await page.locator("input[id='pass']").fill("Hello@123");
  await page.locator("button[name='login']").click();

});  
