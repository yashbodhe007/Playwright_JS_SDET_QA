import {test,expect} from "@playwright/test"

test('HandlingDragAndDrop', async ({page})=>{

    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/')

    const dragEle = await page.locator('//h5[text()="High Tatras"]')
    const dropEle = await page.locator('//div[@id="trash"]')
    
    // //approach 1
    // await dragEle.hover();
    // await page.mouse.down()
    // await dropEle.hover();
    // await page.mouse.up();

    // approch 2
    await dragEle.dragTo(dropEle)

    await page.waitForTimeout(3000)


})

