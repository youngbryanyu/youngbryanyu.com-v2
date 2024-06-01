/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://youngbryanyu.com',
    generateRobotsTxt: true,

    /* Unused pages to exclude */
    exclude: ['/articles', '/speaking', '/thank-you', '/uses'],

    /* Custom sitemap transform function */
    transform: async (config, path) => {
        /* Default priority for each page */
        let priority = 0.5; 

        /* Set priority to 1 for home page */
        if (path === '/') {
            priority = 1.0;
        }

        return {
            loc: path, /* The URL of the page */
            changefreq: 'daily', /* Change frequency */
            priority, /* Priority */
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined, /* Last modified time */
        }
    },
}