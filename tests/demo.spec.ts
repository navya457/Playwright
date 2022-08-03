import { test, expect, Page } from '@playwright/test';
var data=require('./data/data.json')

test.beforeEach(async ({ page }) => {

  await page.goto('https://www.browserstack.com/');

});

test.describe.serial('Demo Test', () => {

    test('Verify Login Error Message', async ({ page }) => {
     
        await page.waitForSelector('text=Sign in',{state:'visible'});

        await page.locator('text=Sign in').first().click();

        await page.waitForSelector('#user_email_login')
        await page.locator('#user_email_login').type(data.email);
        console.log(data.email);

        await page.locator('#user_password').type('examplepassword');

        await page.locator('#user_submit').click();

       // const errorMessage = await (await page.locator("//input[@id='user_password']/../div[@class='error-msg']").textContent()).trim();
       
        const errorMessage = await (await page.locator("#bs-alert-text-id").textContent()).trim();

        console.log("Browserstack Login Error Message: "+errorMessage);

        //expect(errorMessage).toBe('Invalid password');

    });
    

});

