const { Builder, By, until } = require('selenium-webdriver');
const assert = require ('assert');
const chrome = require('selenium-webdriver/chrome');

describe('Login Sukses', function() {
    let driver;
    this.timeout(60000);
    it('Login dengan password dan username valid', async function(){
        //Membuka Chrome
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.saucedemo.com/');
        //Input Login
        let inputUsername = await driver.findElement(By.xpath('//*[@id="user-name"]'))
        let inputPassword = await driver.findElement(By.css('[data-test="password"]'))
        let buttonLogin = await driver.findElement(By.className("submit-button"))
        //Actions Username, password, dan button login
        await inputUsername.sendKeys('standard_user')
        await inputPassword.sendKeys('secret_sauce')
        await buttonLogin.click()
        //Assertion & Validation apakah benar masuk kedalam inventory_list
         await driver.wait(until.elementLocated(By.className('inventory_list')),10000);
         //mengecek apakah benar titlenya Swag Labs
         const title = await driver.getTitle();
         assert.strictEqual(title, 'Swag Labs');
    });
});