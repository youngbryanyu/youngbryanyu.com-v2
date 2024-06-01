/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://youngbryanyu.com',
    generateRobotsTxt: true,

    /* Unused pages to exclude */
    exclude: ['/articles', '/speaking', '/thank-you', '/uses'],
}