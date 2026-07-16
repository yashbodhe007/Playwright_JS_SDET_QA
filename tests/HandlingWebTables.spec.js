import {test,expect} from '@playwright/test'

test('HandlingWebTables', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // access table element for table tag
    const webTable = await page.locator('#productTable')

    // access total number of columns
    const webTableColumns = await webTable.locator('thead tr th')
    console.log('num of columns :' , await webTableColumns.count())
    expect(await webTableColumns.count()).toBe(4)

    // access total number of rows
    const webTableRows = await webTable.locator('tbody tr')
    console.log('num of rows :' , await webTableRows.count())
    expect(await webTableRows.count()).toBe(5);
    
    // //    check checkbox for 	Smartwatchproduct row
    // const 	SmartwatchProductRow = webTableRows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Smartwatch'
    // })

    // // check checkbox for SmartwatchProductRow
    // await SmartwatchProductRow.locator('input').check();
    // await page.waitForTimeout(3000);

    // select multiple product using resueable method
    await selectProduct(webTableRows, page, 'Laptop')
    await selectProduct(webTableRows, page, 'Smartphone')
    await selectProduct(webTableRows, page, 'Tablet')

    // // pring all data from table in console
    for(let i=0 ; i< await webTableRows.count(); i++){
        const row = await webTableRows.nth(i);
        const td =  row.locator('td');
        for(let j=0; j<await td.count()-1; j++){
            console.log(await td.nth(j).textContent())
        }

    // }

    // get data from all tables from all pages
    const allPagesOfWebtable = await page.locator('#pagination li');
    const pageCount = await page.locator('#pagination li').count();
    console.log('page count ' , pageCount)

    for(let a=0 ; a<await pageCount; a++){
        await allPagesOfWebtable.nth(a).click()
        for(let i=0 ; i< await webTableRows.count(); i++){
        const row = await webTableRows.nth(i);
        const td =  row.locator('td');
            for(let j=0; j<await td.count()-1; j++){
            console.log(await td.nth(j).textContent())
            }
            console.log('==============================================')
        }

    }

    await page.waitForTimeout(2000);

})

async function selectProduct(webTableRows, page, productName){
    const 	SmartwatchProductRow = webTableRows.filter({
        has: page.locator('td'),
        hasText: productName
    })

    // check checkbox for SmartwatchProductRow
    await SmartwatchProductRow.locator('input').check();
    
}