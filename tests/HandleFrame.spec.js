import {test, expect} from "@playwright/test";

test('HandleFrame' , async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    
    // to find total numbers of frame in any page we can use
    const arrOfFrames = await page.frames();
    console.log(arrOfFrames.length) 

    for (const frame of page.frames()) {
    console.log(frame.url());
    // print so that we can get exact url to pass in next code
    }

    // //approach - using name or url of frame or i frmae
    // const frame1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1'})

    // //<input type="text" name="mytext1" size="25"> this is input element in frame 1
    // await frame1.fill('[name="mytext1"]' , 'yash');

    // await page.waitForTimeout(3000)


    // approach - using frame locator

    const inputFrame1 = await page.frameLocator('//frame[@src="frame_1.html"]').locator('//input[@name="mytext1"]')
    await inputFrame1.fill('yash')
    await page.waitForTimeout(3000);
})