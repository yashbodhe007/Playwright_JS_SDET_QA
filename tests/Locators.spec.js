import {test,expect} from '@playwright/test'

test('Locators', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');
    await page.locator('id=login2').click();

    await page.locator('#loginusername').fill('yash007');
    await page.locator('#loginpassword').fill('yash007');
    await page.locator('//button[normalize-space()="Log in"]').click();
    await page.locator('//a[@id="logout2"]').isVisible();
    await expect(await page.locator('//a[@id="logout2"]')).toBeVisible();

    
    
    


    





})