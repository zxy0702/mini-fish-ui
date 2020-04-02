const pub = require('./config.pub');
module.exports = {
    runtimeCompiler: true,
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'mini-fish-ui',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },
    configureWebpack: {
        resolve: pub.resolve
    },
    chainWebpack: config => {
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader(require.resolve("../examples/config/markdownLoader"))
            .options({
                html: true
            });
    }
}