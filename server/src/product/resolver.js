const puppeteer = require('puppeteer')
const { Product } = require('./model')
const { RESOURCE_NOT_FOUND_CODE } = require('../../../commons/exceptions')

const productReferenceResolver = async (_, { productReference }) => {
    let product = await getProductFromDatabase(productReference)
    if (product) {
        return product
    }
    return getProductFromDatabaseScrapper(productReference)
}

const getProductFromDatabase =  async (reference) => {
    return Product.query().where('reference', reference).first();
}

const getProductFromDatabaseScrapper =  async (reference) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.amazon.com/dp/${reference}`);
    try {
        const dimensions = await page.$eval('#prodDetails > div.wrapper.USlocale > div.column.col1 > div > div.content.pdClearfix > div > div > table > tbody > tr:nth-child(2) > td.value',
            el => el.textContent)
        const rank = await page.$eval('#SalesRank > td.value', nodes => nodes.innerText)
        const name = await page.$eval('#productTitle', nodes => nodes.innerText)
        const category = await page.$eval('#wayfinding-breadcrumbs_feature_div > ul > li:nth-child(1) > span > a', nodes => nodes.innerText)
        await browser.close();
        return await Product.query().insertGraph({rank, name, category, dimensions, reference})
    } catch(ex) {
        throw new Error(RESOURCE_NOT_FOUND_CODE)
    }
}

const MutationResolvers = {
    searchProduct: productReferenceResolver
}

module.exports = { MutationResolvers }
