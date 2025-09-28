// @ts-check
import { test, expect } from '@playwright/test';

test('Verify Facebook Title', async ({ page }) => {
  await page.goto('https://www.Bookmyshow.com');
  
  let  expectedTitle = await page.title();  //Google
  
  if(expectedTitle == 'Facebook – log in or sign up'){
    console.log("Yes URL launched successfully & user landed on FB ")
  }
  else if(expectedTitle=="Google"){
    console.log("user launced Google site")
  }
  else if(expectedTitle=="BookMyShow"){
    console.log("user launced Book My sow site")
  }


});  
