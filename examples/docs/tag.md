# Tag 标签

### 基础用法

五种颜色的标签，并有`dark`、`light`和`plain`三种风格，默认风格为`light`

```html
<div>
  <mf-tag>默认标签</mf-tag>
  <mf-tag type="green">绿色标签</mf-tag>
  <mf-tag type="yellow">黄色标签</mf-tag>
  <mf-tag type="red">红色标签</mf-tag>
  <mf-tag type="blue">蓝色标签</mf-tag>
</div>

<div>
  <mf-tag effect="dark">默认标签</mf-tag>
  <mf-tag type="green" effect="dark">绿色标签</mf-tag>
  <mf-tag type="yellow" effect="dark">黄色标签</mf-tag>
  <mf-tag type="red" effect="dark">红色标签</mf-tag>
  <mf-tag type="blue" effect="dark">蓝色标签</mf-tag>
</div>

<div>
  <mf-tag effect="plain">默认标签</mf-tag>
  <mf-tag type="green" effect="plain">绿色标签</mf-tag>
  <mf-tag type="yellow" effect="plain">黄色标签</mf-tag>
  <mf-tag type="red" effect="plain">红色标签</mf-tag>
  <mf-tag type="blue" effect="plain">蓝色标签</mf-tag>
</div>
```

### 可删除标签

设置`closeable`属性定义标签是否可删除

```html
<mf-tag effect="dark" closeable>默认标签</mf-tag>
<mf-tag type="green" closeable>绿色标签</mf-tag>
<mf-tag type="yellow" effect="dark" closeable>黄色标签</mf-tag>
<mf-tag type="red" effect="plain" closeable>红色标签</mf-tag>
<mf-tag type="blue" closeable>蓝色标签</mf-tag>
```

### 不同尺寸

```html
<mf-tag size="large" closeable>大号标签</mf-tag>
<mf-tag closeable>默认标签</mf-tag>
<mf-tag size="small" closeable>小型标签</mf-tag>
```

### Attributes

| 参数      | 说明       | 类型    | 可选值                                | 默认值 |
| --------- | ---------- | ------- | ------------------------------------- | ------ |
| size      | 尺寸       | string  | large / medium / small                | —      |
| type      | 类型       | string  | primary / green / yellow / red / blue | —      |
| effect    | 风格       | String  | dark/light/plain                      | light  |
| closeable | 是否可关闭 | boolean | —                                     | false  |

### Events

| 事件名称 | 说明                 | 回调参数 |
| -------- | -------------------- | -------- |
| close    | 关闭标签时触发的事件 | —        |
