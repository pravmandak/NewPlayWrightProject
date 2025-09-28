// @ts-check
import { test, expect } from '@playwright/test';

test.only('TC_01 : verifylsit box funcitonality', async ({ page }) => {
  
  let URL = 'https://practice.expandtesting.com/register#google_vignette';
  await page.goto(URL);

  //using lable locator
  const logo = page.getByAltText("Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman.")
  await expect(logo).toBeVisible();

  const registlink = page.getByTestId("register");
  await expect(registlink).toBeVisible();


  await page.getByAltText("test1").click   //Reusability 

  await page.getByAltText("test1").click 

  await page.getByAltText("test1").click 

  await page.getByAltText("test1").click 



  const test2 = page.getByAltText("test5");  // maintainable 
  
  
  test2.click()
test2.click()
  }

);
