# Layout 布局容器

采用 flex 布局，`mf-layout`的子元素只能是后四者，后四者的父元素也只能是`mf-layout`

- `mf-layout`: 布局容器，可嵌套`mf-header`、`mf-aside`、`mf-main`、`mf-footer`和本身
- `mf-header`: 顶栏布局
- `mf-aside`: 侧边栏
- `mf-main`：主要内容区域
- `mf-footer`：底部布局

### 常见页面布局

```html
<mf-layout>
  <mf-header>header</mf-header>
  <mf-main>main</mf-main>
</mf-layout>

<mf-layout>
  <mf-header>header</mf-header>
  <mf-main>main</mf-main>
  <mf-footer>footer</mf-footer>
</mf-layout>

<mf-layout>
  <mf-header>header</mf-header>
  <mf-layout>
    <mf-aside>aisde</mf-aside>
    <mf-main>main</mf-main>
  </mf-layout>
</mf-layout>

<mf-layout>
  <mf-header>header</mf-header>
  <mf-layout>
    <mf-aside>aisde</mf-aside>
    <mf-layout>
      <mf-main>main</mf-main>
      <mf-footer>footer</mf-footer>
    </mf-layout>
  </mf-layout>
</mf-layout>

<mf-layout>
  <mf-header>header</mf-header>
  <mf-layout>
    <mf-aside>aisde</mf-aside>
    <mf-main>main</mf-main>
  </mf-layout>
  <mf-footer>footer</mf-footer>
</mf-layout>
```

### Header Attributes

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 顶栏布局 | String | —      | 50px   |

### Aside Attributes

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| width | 侧边栏布局 | String | —      | 200px  |

### Footer Attributes

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 底部布局 | String | —      | 50px   |
