import {test,expect} from '@playwright/test'

test('handle dropdown', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //multiple ways to select options from dropdowns
    // //when select tag is available and multiple option tag with values under it
    // await page.locator('#country').selectOption({label: 'India'});//label//visible text
    // await page.locator('#country').selectOption('India');//visible text

    // //select by value attribute under select tag
    // await page.locator('#country').selectOption({value: 'uk'}); //for united kingdom
    
    // select by index starts from 0 to n
    // await page.locator('#country').selectOption({index:  2});

    //Assertions
    //check no of options in select tag
    // const options = await page.locator('#country option');
    // console.log(options);
    // await expect(options).toHaveCount(10); checks with no of locators

    // const options1 = await page.$$('#country option');
    // console.log(options1);
    // await expect(options1.length).toBe(10);   // tobe() chck with string, int here it was int 

    //check if value is present in dropdown or not
    const content = await page.locator('#country').textContent();
    console.log(content)
    await expect(content.includes('India')).toBeTruthy();






    await page.waitForTimeout(2000);

})