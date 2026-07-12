import {test,expect} from '@playwright/test'

test('Built-in Locators', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {timeout: 500000} );
    // const companyLogo = await page.getByAltText('company-branding');
    // await expect(companyLogo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button', {type: 'submit'}).click();

    await expect(await page.getByText('manda user')).toBeVisible();
    
    await page.pause();

})