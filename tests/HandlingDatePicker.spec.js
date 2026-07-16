import {test, expect} from '@playwright/test'

test('HandlingDatePicker', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const date = "24";
    const month = "July"
    const year = "2028"
    await page.locator('#datepicker').click();
    while(true){
        const selectedMonth = await page.locator(".ui-datepicker-month").textContent();
        const selectedYear = await page.locator(".ui-datepicker-year").textContent();

        if(selectedMonth===month && selectedYear ===year){

            break;
        }
        await page.locator('.ui-icon-circle-triangle-e').click();


    }

    // const dates = await page.$$('//table[@class="ui-datepicker-calendar"]/tbody/tr/td/a')

    // for(const dt of dates){

    //     if(await dt.textContent()==date){
    //         await dt.click()
    //         break
    //     }

    // }

    // we want to directly select date
    await page.locator(`//td[@data-handler="selectDay"]/a[text()="${date}"]`).click()
    
    await page.waitForTimeout(5000);


})