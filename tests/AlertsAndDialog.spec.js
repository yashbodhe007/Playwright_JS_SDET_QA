import {test,expect} from '@playwright/test'

test('alerts', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //enabling dialog handler
    page.on('dialog', async dialog=>{
        await expect(dialog.message()).toContain('I am an alert box!')
        console.log(dialog.message())
        expect(dialog.type()).toContain('alert')

        await dialog.accept()
        
    })
    //this will make alert to pop
    await page.locator('#alertBtn').click();
})


test.skip('confirmation alert with cancel and ok', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //enabling dialog handler
    page.on('dialog', async dialog=>{
        console.log(dialog.message())
        expect(dialog.type()).toContain('confirm')
        await expect(dialog.message()).toContain('Press a button!')
        await dialog.accept()
        
    })
    //this will make alert to pop
    await page.locator('#confirmBtn').click();
})

test.skip('prompt dialog', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //enabling dialog handler
    page.on('dialog', async dialog=>{
        console.log(dialog.message())
        expect(dialog.type()).toContain('prompt')
        await expect(dialog.message()).toContain('Please enter your name:')
        console.log(dialog.defaultValue())
        await dialog.accept('yash')
        
    })
    //this will make alert to pop
    await page.locator('#promptBtn').click();
    expect(await page.locator('//p[@id="demo"]')).toHaveText('Hello yash! How are you today?S')
})