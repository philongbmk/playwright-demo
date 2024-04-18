import {test, expect, Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('login test', async() => {
    const browser:Browser = await chromium.launch({headless: false});
    const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    const emailId:Locator = await page.locator('#input-email');
    const password:Locator = await page.locator('#input-password');
    const loginButton:Locator = await page.locator("[value='Login']");

    await emailId.fill('longnp.bmk92@gmail.com');
    await password.fill('long1992');
    await loginButton.click();

    const title = await page.title();
    
    expect(title).toEqual('My Account');

    await page.screenshot({path: `tests-img/login.png`})
    browser.close();
})