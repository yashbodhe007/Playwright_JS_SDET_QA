// @ts-check
// import { from } from "node:stream/iter";
import {test, expect} from "@playwright/test";

test('Home Page' , async({page})=>{

    // navigate to URL
    await page.goto('https://www.demoblaze.com/index.html');
    const url  = await page.url();
    // get page title
    const pageTitle = await page.title();
    console.log(pageTitle);

    /*Assertions
        Introduction - 
            Playwright includes test assertions in the form of expect function. 
            To make an assertion, call expect(value) and choose a matcher that reflects 
            the expectation
        
    */
    await expect(page).toHaveTitle('STORE');
    await page.close();


})
