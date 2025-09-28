// @ts-check
import { test, expect } from '@playwright/test';

test('TC_01 : Verify checkbox', async ({ page }) => {
  
 /*
    await expect(true).toBeTruthy();  /// working fine / correct
    await expect(false).toBeTruthy();  //incorrect 

    await expect(true).toBeFalsy();  //incorrect
    await expect(false).toBeFalsy(); //corrrect
*/

let A = 10;
let B = 20;

await expect (A>B).toBeTruthy();  // false
await expect (A<B).toBeTruthy();  // correct

await expect (A>B).toBeFalsy(); //cprrect
await expect (A<B).toBeFalsy(); //incorrect 


}
 );
