const fs = require('fs');
const path = require('path');
const join = path.join;
const resolve = (dir) => {
    return join(__dirname, '../', dir);
}

module.exports = {
    resolve,
    getComponentEntries(path) {
        let files = fs.readdirSync(resolve(path));
        const componentEntries = files.reduce((ret, item) => {
            let itemPath = join(path, item);
            const isDir = fs.statSync(itemPath).isDirectory();
            if(isDir) {
                if(item === 'theme-chalk') {
                    itemPath = join(itemPath, 'src');
                    ret[item] = resolve(join(itemPath, 'index.scss'));
                }
                else {
                    ret[item] = resolve(join(itemPath, 'index.js'));
                }
            }
            else {
                const [name] = item.split('.');
                ret[name] = resolve(`${itemPath}`);
            }
            return ret;
        },{})
        return componentEntries;
    }
}