import puppeteer from 'puppeteer'

let browser
let page

export async function getBrowser(){
  if(browser) return browser

  browser = await await puppeteer.launch({ headless: false });

  return browser
}

export async function getPage(){
  if(page) return page
  page = await (await getBrowser()).newPage()

  return page
}
