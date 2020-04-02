const {resolve, getComponentEntries} = require('./utils');
const pub = require('./config.pub');

module.exports = {
    outputDir: resolve('lib'),
    configureWebpack: {
        entry: {
            ...getComponentEntries('packages'),
        },
        output: {
            filename: '[name]/index.js',
            libraryTarget: 'commonjs2',
            libraryExport: 'default',
            library: 'mini-fish-ui'
        },
        resolve: pub.resolve
    },
    css: {
        sourceMap: true,
        extract: {
            filename: '[name]/style.css'
        }
    },
    chainWebpack: config => {
        config.optimization.delete('splitChunks')
        config.plugins.delete('copy')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
        config.plugins.delete('html')
        config.plugins.delete('hmr')
        config.entryPoints.delete('app')
    }
}