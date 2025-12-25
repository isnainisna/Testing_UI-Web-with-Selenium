const { Builder, By, until } = require('selenium-webdriver');
const assert = require ('assert');
const chrome = require('selenium-webdriver/chrome');

describe('Login Sukses', function() {
    let driver;
    this.timeout(60000);
    it('Login dan Sortir Produk Z ke A', async function() {
            //Membuka Chrome
            driver = await new Builder().forBrowser('chrome').build();        
            //Membuka Website
            await driver.get('https://www.saucedemo.com/');
            //Proses Login
            await driver.findElement(By.id('user-name')).sendKeys('standard_user');
            await driver.findElement(By.id('password')).sendKeys('secret_sauce');
            await driver.findElement(By.id('login-button')).click();
            //Memastikan apakh sudah masuk ke halaman produk (Tunggu sampai list produk muncul)
            await driver.wait(until.elementLocated(By.className('inventory_list')), 60000);
            //Proses Klik Dropdown Sortir dan Pilih "Name (A to Z)"
            // Kita langsung tembak ke option dengan value "az"
            await driver.findElement(By.css('option[value="az"]')).click();
            // 6. Ambil teks dari produk pertama yang muncul setelah disortir
            let produkPertama = await driver.findElement(By.className('inventory_item_name')).getText();
            // 7. Assert (Validasi): cek produk pertama"
            assert.strictEqual(produkPertama, 'Sauce Labs Backpack');
        });
        });