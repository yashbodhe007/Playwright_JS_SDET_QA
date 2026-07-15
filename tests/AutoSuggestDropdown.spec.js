import {test,expect} from '@playwright/test'

test('AutoSuggestDropdown', async ({page}, testInfo)=>{

    await page.goto('https://www.redbus.in/')
    await page.locator('//label[text()="From"]').fill('delhi')
    await page.waitForSelector('//div[@aria-label="Search suggestions list"]/descendant::div[@role="heading"]')
    const cityOptions = await page.locator('//div[@aria-label="Search suggestions list"]/descendant::div[@role="heading"]')
    console.log(await cityOptions.allTextContents())
    console.log('=================================================================================')
    console.log(await cityOptions.all())
    console.log('=================================================================================')
    console.log(await cityOptions.count())
    console.log('=================================================================================')
    for(let  i =0; i< await cityOptions.count(); i++){
        const city = await cityOptions.nth(i).textContent()
        if(city?.trim() === 'Pune'){
            await cityOptions.nth(i).click();
            await page.screenshot({path: 'Pune.png'})
            await page.waitForTimeout(7000);
            
            const screenshot = await page.screenshot();

            await testInfo.attach('Google Home Page', {
                body: screenshot,
                contentType: 'image/png'
            });
            break


        }

        

    }

    



    // const cityOptions = await page.$$('//div[@aria-label="Search suggestions list"]/descendant::div[@role="heading"]')
    // console.log(cityOptions.length);
    // console.log(await cityOptions[1].textContent());
   



    //  console.log(cityOptions.count());
    // for(const cityOption of cityOptions ){

    //     const cities = await cityOption.textContent()
    //     console.log(cities);
        
    // }






})