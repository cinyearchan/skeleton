// start puppeteer, script.js() -> template
const puppeteer = require('puppeteer')

class Skeleton {
  constructor(options) {
    this.options = options
  }

  async init() {
    this.browser = await puppeteer.launch({
      headless: false
    })

    console.log('init')
  }

  async createNewPage() {
    let { device } = this.options
    let page = await this.browser.newPage()
    await page.emulate(puppeteer.devices[device])
    return page
  }

  async getHTML(domain) {
    let page = await this.createNewPage()
    let response = await page.goto(domain, { waitUntil: 'networkidle2' })

    if (response && !response.ok) {
      throw new Error('cant\'t find the page')
    }
  }


}

module.exports = Skeleton
