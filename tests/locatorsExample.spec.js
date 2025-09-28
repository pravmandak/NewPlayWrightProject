// @ts-check
import { test, expect } from '@playwright/test';

test('TC_01 : verifylsit box funcitonality', async ({ page }) => {
  
  let URL = 'https://rahulshettyacademy.com/AutomationPractice/';
  await page.goto(URL);

  let pageTile = await page.title();

  //Assertions : verifying something is coming as expected or not 
  await expect(pageTile).toBe('Practice Page');

  //Verify the header 
  await page.getByRole("heading", {name:'Practice Page'}).isVisible();

   //clciking the checkbox using getByRole process issue here
  const checkBox1 =  page.getByRole('checkbox', { name: ' Option1         ' });
   await checkBox1.check();
 
  
  //clicking a buton using getByRole process
   const buttonOpenWin =  page.getByRole('button',{name : 'Open Window'});
   await buttonOpenWin.click();

  
   //clicking a link using getByRole process
   const link = page.getByRole('link', { name: 'Open Tab' });
   await link.click();

}
);
