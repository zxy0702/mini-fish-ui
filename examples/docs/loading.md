# Loading 加载

当区块正在获取数据中时可使用，适当的等待动画可以提升用户体验。

### 区域加载
在容器加载数据时显示
```html
<p v-loading="loading" style="height:200px" loading-text="加载中...">
  这是一句话
</p>
```

### 全屏加载
当使用指令方式时，全屏遮罩需要添加body修饰符（遮罩会插入至 body 上）；当使用服务方式时，遮罩默认即为全屏，无需额外设置。
```html
<mf-button v-loading.body="directiveLoading" @click="openDirectiveLoading()">指令方式</mf-button>
<mf-button @click="openServiceLoading()">服务方式</mf-button>

<script>
    export default {
        data() {
            return {
                directiveLoading: false
            }
        },
        methods: {
          openDirectiveLoading() {
              this.directiveLoading = true;
              setTimeout(()=> {
                  this.directiveLoading = false;
              },2000);
          },
          openServiceLoading() {
              const load= this.$loading({
                  text: 'Loading'
              });
              setTimeout(()=> {
                  load.close();
              },2000);
          }
      }
    }
</script>
```

### Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| target | Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 `document.querySelector`以获取到对应 DOM 节点 | object/string | — | document.body |
| body | 同 `v-loading` 指令中的 `body` 修饰符 | boolean | — | false |
| text | 显示在加载图标下方的加载文案 | string | — | — |
| background | 遮罩背景色 | string | — | — |