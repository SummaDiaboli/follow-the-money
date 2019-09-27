/* const { PHASE_PRODUCTION_SERVER } =
    process.env.NODE_ENV === 'development'
        ? {}
        : !process.env.NOW_REGION
            ? require('next/constants')
            : require('next-server/constants'); */

const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const withPurgeCss = require('next-purgecss')


//if (process.env.NODE_ENV === 'development') {
//    module.exports = {}
//} else {
    module.exports =
        withPlugins([
            [withCSS],
            [withImages],
            [withPurgeCss]
        ])

//}


