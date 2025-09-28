// @ts-check
import { test, expect } from '@playwright/test';

test.only('TC_01 : verifylsit box funcitonality', async ({ page }) => {
  
  let URL = 'https://rahulshettyacademy.com/AutomationPractice/';
  await page.goto(URL);

  let pageTile = await page.title();

  //Assertions : verifying something is coming as expected or not 
  await expect(pageTile).toBe('Practice Page');

   //Verify the text Element 
   const radioButtonText = page.getByText('Radio Button Example');
   await expect(radioButtonText).toBeVisible(); 
  
   const SuggesionClassText = page.getByText("Suggession Class Example");
    await expect(SuggesionClassText).toBeVisible();


    const textSwitchExample = page.getByPlaceholder("Enter Your Name")
    await textSwitchExample.fill("Indira");

    //const imageCLick = page.getByAltText("REST API Testing(Automation) from scratch-Rest Assured java");
    //await imageCLick.click();


  }

);
