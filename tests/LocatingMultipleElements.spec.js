import {test , expect} from '@playwright/test'

test('Locate multiple webelement' , async ({page})=>{
    
    await page.goto('https://www.demoblaze.com/index.html');
    await page.locator('id=login2').click();

    await page.locator('#loginusername').fill('yash007');
    await page.locator('#loginpassword').fill('yash007');
    await page.locator('//button[normalize-space()="Log in"]').click();
    await page.locator('//a[@id="logout2"]').isVisible();

    const links = await page.$$('a');
    
    // for(const link of links){
    //     console.log(await link.textContent())
    // }


    //    all products names
    page.waitForSelector('//*[@id="tbodyid"]//h4/a');
    const productNames = await page.locator('//*[@id="tbodyid"]//h4/a').allTextContents();
    for(const productname of productNames){
        console.log(productname);
    }


})