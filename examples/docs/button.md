# Button 按钮

### 基础用法

包含`type`、`plain`、`round`和`circle`属性来定义 Button 的样式

```html
<div>
  <mf-button>默认按钮</mf-button>
  <mf-button type="primary">主要按钮</mf-button>
  <mf-button type="green">绿色按钮</mf-button>
  <mf-button type="yellow">黄色按钮</mf-button>
  <mf-button type="red">红色按钮</mf-button>
  <mf-button type="blue">蓝色按钮</mf-button>
</div>

<div>
  <mf-button plain>默认按钮</mf-button>
  <mf-button type="primary" plain>主要按钮</mf-button>
  <mf-button type="green" plain>绿色按钮</mf-button>
  <mf-button type="yellow" plain>黄色按钮</mf-button>
  <mf-button type="red" plain>红色按钮</mf-button>
  <mf-button type="blue" plain>蓝色按钮</mf-button>
</div>

<div>
  <mf-button round>默认按钮</mf-button>
  <mf-button type="primary" round>主要按钮</mf-button>
  <mf-button type="green" round>绿色按钮</mf-button>
  <mf-button type="yellow" round>黄色按钮</mf-button>
  <mf-button type="red" round>红色按钮</mf-button>
  <mf-button type="blue" round>蓝色按钮</mf-button>
</div>

<div>
  <mf-button icon="mf-icon-search" circle></mf-button>
  <mf-button type="primary" icon="mf-icon-clear" circle></mf-button>
  <mf-button type="green" icon="mf-icon-rest" circle></mf-button>
  <mf-button type="yellow" icon="mf-icon-bank" circle></mf-button>
  <mf-button type="red" icon="mf-icon-delete" circle></mf-button>
  <mf-button type="blue" icon="mf-icon-lock" circle></mf-button>
</div>
```

### 禁用状态

```html
<mf-button disabled>默认按钮</mf-button>
<mf-button type="primary" disabled>主要按钮</mf-button>
<mf-button type="green" disabled>绿色按钮</mf-button>
<mf-button type="yellow" disabled>黄色按钮</mf-button>
<mf-button type="red" disabled>红色按钮</mf-button>
<mf-button type="blue" disabled>蓝色按钮</mf-button>
```

### 文字按钮

没有背景和边框的按钮

```html
<mf-button type="text">文字按钮</mf-button>
<mf-button type="text" disabled>文字按钮</mf-button>
```

### 图标按钮

```html
<mf-button icon="mf-icon-search"></mf-button>
<mf-button type="primary" icon="mf-icon-search">搜索</mf-button>
<mf-button type="red" icon="mf-icon-delete" plain>删除</mf-button>
```

### 不同尺寸

有三种不同的尺寸，默认为`medium`尺寸

```html
<div>
  <mf-button size="large">大号按钮</mf-button>
  <mf-button>默认按钮</mf-button>
  <mf-button size="small">小型按钮</mf-button>
</div>

<div>
  <mf-button size="large" round>大号按钮</mf-button>
  <mf-button round>默认按钮</mf-button>
  <mf-button size="small" round>小型按钮</mf-button>
</div>
```

### Attributes

| 参数     | 说明         | 类型    | 可选值                                       | 默认值 |
| -------- | ------------ | ------- | -------------------------------------------- | ------ |
| size     | 尺寸         | string  | large / medium / small                       | —      |
| type     | 类型         | string  | primary / green / yellow / red / blue / text | —      |
| plain    | 是否朴素按钮 | boolean | —                                            | false  |
| round    | 是否圆角按钮 | boolean | —                                            | false  |
| circle   | 是否圆形按钮 | boolean | —                                            | false  |
| disabled | 是否禁用状态 | boolean | —                                            | false  |
| icon     | 图标类名     | string  | —                                            | —      |
