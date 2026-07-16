import {test, expect} from '@playwright/test'

test("handling InputBoxRadioButtonCheckbox", async ({page})=>{

    await page.goto('https://demoqa.com/');

    await page.locator('//div[@class="card-body"]/h5[text()="Elements"]').click();
    await page.locator('//span[text()="Text Box"]').click();

    const input_FullName = await page.getByPlaceholder('Full Name');
    await input_FullName.isVisible();
    await input_FullName.isEnabled();
    await input_FullName.isEditable();

    await expect(await input_FullName).toBeEmpty();
    await expect(await input_FullName.isVisible()).toBeTruthy();

    await input_FullName.fill('yash');
    // await page.waitForTimeout(3000);
    await expect(await input_FullName.isHidden()).toBeFalsy();

    await page.locator('//a/span[text()="Check Box"]').click();
    const checkbox = await page.getByRole('checkbox');
    await page.waitForTimeout(2000);
    await checkbox.check();
    await page.waitForTimeout(2000);

    await checkbox.isChecked();
    console.log("============================================================================")
    console.log(await expect(checkbox).toBeChecked());
    console.log("============================================================================")
    await expect(checkbox.isChecked).toBeTruthy();

    












})