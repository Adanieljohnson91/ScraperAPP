const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function searchWebpage(url){
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.content();
    console.log(html);
    const $ = cheerio.load(html)
}

export default searchWebpage;