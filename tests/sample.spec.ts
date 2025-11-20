
import { test } from "@playwright/test";

test("Test to launch a browser", async({page}) => { 
    
   await page.goto(`http://leaftaps.com/opentaps/control/main`);

   await page.locator(`.inputLogin`).first().fill(`democsr`);

   //await page.locator(`.inputLogin`).nth(0).fill(`democsr`);

   await page.locator(`#password`).fill(`crmsfa`);

   await page.locator(`.decorativeSubmit`).click();

   await page.waitForTimeout(3000)


   })