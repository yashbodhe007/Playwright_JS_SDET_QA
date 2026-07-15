import {test, expect} from "@playwright/test";

test('HandleInnerFrame' , async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    
    // to find total numbers of frame in any page we can use
    const arrOfFrames = await page.frames();
    console.log(arrOfFrames.length)
    
    // main frame
    const frame3 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3'});
    console.log(await frame3.childFrames().length) // only1
    
    
    // all inner frames
    const innerframe = await frame3.childFrames();
    // specific frame needed by index and locator action
    await innerframe[0].locator("//*[text()='Hi, I am the UI.Vision IDE']/ancestor::div/label/descendant::div[@id='i6']").check();
    await page.waitForTimeout(3000);
 
})