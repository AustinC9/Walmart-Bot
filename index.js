const puppeteer = require('puppeteer-extra');
const stealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(stealthPlugin());
// const chromeLauncher = require('chrome-launcher');

const rand_url = "https://www.walmart.com/ip/Apple-AirTag/475634131?athcpid=475634131&athpgid=AthenaItempage&athcgid=null&athznid=si&athieid=v0&athstid=CS055&athguid=bIurVmQlhio-FBR98nh5DLGK3oFsBZkh8J0g&athancid=null&athposb=0&athena=true";

async function initBrowser(){
    // await chromeLauncher.launch({
    //     startingUrl: 'https://google.com'
    //   }).then(chrome => {
    //     console.log(`Chrome debugging port running on ${chrome.port}`);
    //   });
    const browser = await puppeteer.launch({headless: false, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'})
    const page = await browser.newPage();
    await page.goto(rand_url);
    // await page.setViewport({width: 2300, height:1239});
    console.log("success");
    return page
}
 
async function addToCart(page){
    await page.waitForTimeout(2000);
    await page.evaluate(() => document.getElementsByClassName('w_AH w_AJ w_AO')[0].click());
    await page.waitForTimeout(2000);
    await page.evaluate(() => document.getElementsByClassName('bn bg-transparent br2 db flex flex-column items-center pa0 pointer relative sans-serif white')[0].click());
    await page.waitForTimeout(5000);
    await page.evaluate(() => document.getElementsByClassName('w_AH w_AJ w_AM w_AO')[0].click());
    await page.waitForTimeout(10000);
    // await page.waitForSelector('.email');
    await page.focus('.sign-in-form');
    await page.type('.email', 'austin.carson4@gmail.com')
    await page.waitForTimeout(100);
    await page.type("input[id='password']", 'Soccer1749!');
}
// async function walmartSignIn(page){
//     await page.waitForTimeout(10000);
//     await page.type("input[id='email'", 'austin.carson4@gmail.com');
//     await page.waitForTimeout(100);
//     await page.type("input[id='password'", 'Soccer1749!');
// }

async function checkout(){
    const page = await initBrowser();

    await addToCart(page);
    // await walmartSignIn(page);
}

checkout();
// initBrowser();