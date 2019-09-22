const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const withPurgeCss = require('next-purgecss')

module.exports = withPlugins([
    [withCSS],
    [withImages],
    [withPurgeCss]
])