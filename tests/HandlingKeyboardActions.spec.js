import {test, expect} from '@playwright/test'

test('HandlingKeyboardActions.spec.js', async ({page})=>{

    await page.goto('https://gotranscript.com/text-compare')

    await page.getByPlaceholder('Paste one version of the text here.').fill('yash')

    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    
    //for TAB we can do in 2 ways
    // await page.keyboard.press('Tab')
    // or
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')


    await page.keyboard.press('Control+V')

    await page.waitForTimeout(4000);

})