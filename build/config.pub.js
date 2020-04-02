const {resolve} = require('./utils');

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'examples': resolve('examples'),
            'packages': resolve('packages'),
            'mini-fish-ui': resolve('packages/index.js')
        }
    }
}