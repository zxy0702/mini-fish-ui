# mini-fish-ui

`mini-fish-ui`是一款基于`Vue2.0`,仿`element ui`的前端UI组件库。

### 安装使用

`npm install mini-fish-ui`

#### 完整引入
在`main.js`中引入
```javascript
import Vue from 'vue';
import miniFishUI from 'mini-fish-ui';
import 'mini-fish-ui/lib/theme-chalk/index.css';

Vue.use(miniFishUI);
```

#### 按需引入

安装`babel-plugin-component`：

```javascript
npm install babel-plugin-component -D
```

修改`.babelrc`文件：

```
{
    "presets": [
        "@vue/app",
        [
            "@babel/preset-env",
            {
                "modules": false
            }
        ]
    ],
    "plugins": [
        [
            "component",
            {
                "libraryName": "mini-fish-ui",
                "styleLibrary": {
                    "name": "theme-chalk",
                    "base": false,
                    "path": "[module].css"
                }
            }
        ]
    ]
}
```