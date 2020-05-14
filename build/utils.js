const fs = require('fs');
const path = require('path');
const join = path.join;
const resolve = (dir) => {
    return join(__dirname, '../', dir);
}

const getComponentEntries = function (path) {
    let itemPath;
    let files = fs.readdirSync(resolve(path));
    const componentEntries = files.reduce((ret, item) => {
        itemPath = join(path, item);
        const isDir = fs.statSync(itemPath).isDirectory();
        if (isDir) {
            // if(item == 'theme-chalk') {
            //     itemPath = join(path, 'theme-chalk/src');
            //     getStyleEntries(ret,itemPath);
            // }
            // else {
            //     ret[item] = resolve(join(itemPath, 'index.js'));
            // }
            if(item !== 'theme-chalk') {
                ret[item] = resolve(join(itemPath, 'index.js'));
            }
        }
        else {
            const [name] = item.split('.');
            ret[name] = resolve(`${itemPath}`);
        }
        return ret;
    }, {});
    console.dir(componentEntries);
    return componentEntries;
}

const getStyleEntries = function(componentEntries,path) {
    let files = fs.readdirSync(resolve(path));
    const styleEntries = files.reduce((ret, item) => {
        let itemPath = join(path, item);
        const isDir = fs.statSync(itemPath).isDirectory();
        if(!isDir) {
            const [name] = item.split('.');
            if(ret[name]) {
                ret[name] = [ret[name],resolve(`${itemPath}`)]
            }
            else {
                ret[name] = resolve(`${itemPath}`);
            }
        }
        return ret;
    }, componentEntries);
    return styleEntries;
}

module.exports = {
    resolve,
    getComponentEntries
}