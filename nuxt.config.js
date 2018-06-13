/**
 * @file nuxt 配置文件
 * @author zxq
 */

module.exports = {
    // Headers of the page
    head: {
        title: 'starter',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Nuxt.js project'
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },
    // Global CSS
    css: ['~client/assets/css/main.css'],
    // Customize the progress-bar color
    loading: {
        color: '#3B8070'
    },
    // Build configuration
    build: {},
    dir: {
        assets: 'client/assets',
        layouts: 'client/layouts',
        middleware: 'middleware',
        pages: 'client/pages',
        static: 'client/static',
        store: 'store'
    }
};
