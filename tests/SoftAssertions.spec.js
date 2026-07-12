import {test,expect}  from '@playwright/test'

test('soft assertion' , async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');
    
    //hardassertion
    // await expect(page).toHaveTitle('STORE123');
    // console.log('this will not exe if hard assertion fail')

    //softAssertion
    await expect.soft(page).toHaveTitle('STORE123');
    console.log('this will exe even  if soft  assertion fail')   




})