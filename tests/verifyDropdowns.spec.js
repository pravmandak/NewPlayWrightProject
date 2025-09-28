// @ts-check
import { test, expect } from '@playwright/test';

test('TC_01 : verifylsit box funcitonality', async ({ page }) => {
  
  let URL = 'https://rahulshettyacademy.com/AutomationPractice/';
  await page.goto(URL);

  //Locators / Elements Declaration 

  const dropdown  =  await page.locator('#dropdown-class-example>option');
  await page.waitForTimeout(3000);

  //I want to check one options is there or not
  await expect(dropdown).toHaveText(['Select','Option1','Option2','Option3']);




  // @ts-check

  test.only('TC_01 : verifylsit box funcitonality', async ({ page }) => {
    let URL = 'https://rahulshettyacademy.com/AutomationPractice/';
    await page.goto(URL);

    //Locators / Elements Declaration 
    const dropdown  =  await page.locator('#dropdown-class-example>option');
    await page.waitForTimeout(3000);

    //I want to check one options is there or not
    await expect(dropdown).toHaveText(['Select','Option1','Option2','Option3']);
  });

  // Test to verify selecting each option in the dropdown
  test('TC_02 : verify selecting each dropdown option', async ({ page }) => {
    let URL = 'https://rahulshettyacademy.com/AutomationPractice/';
    await page.goto(URL);

    const dropdown = page.locator('#dropdown-class-example');
    
    // Select Option1 and verify
    await dropdown.selectOption('option1');
    const selected1 = await dropdown.inputValue();
    expect(selected1).toBe('option1');

    // Select Option2 and verify
    await dropdown.selectOption('option2');
    const selected2 = await dropdown.inputValue();
    expect(selected2).toBe('option2');

    // Select Option3 and verify
    await dropdown.selectOption('option3');
    const selected3 = await dropdown.inputValue();
    expect(selected3).toBe('option3');
  });

  // Test to verify default selected option
  test('TC_03 : verify default selected option is Select', async ({ page }) => {
    let URL = 'https://rahulshettyacademy.com/AutomationPractice/';
    await page.goto(URL);

    const dropdown = page.locator('#dropdown-class-example');
    const selected = await dropdown.inputValue();
    expect(selected).toBe('');
  });

  // Test to verify dropdown is visible and enabled
  test('TC_04 : verify dropdown is visible and enabled', async ({ page }) => {
    let URL = 'https://rahulshettyacademy.com/AutomationPractice/';
    await page.goto(URL);

    const dropdown = page.locator('#dropdown-class-example');
    await expect(dropdown).toBeVisible();
    await expect(dropdown).toBeEnabled();

});
  });
