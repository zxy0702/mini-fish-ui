# Grid 栅格布局

采用 24 栅格系统，将区域进行 24 等分。包含常规模式和 flex 模式（通过`mf-row`的`flex`开启)。

### 基础布局

水平排列的布局，`mf-col`必须放在`mf-row`里面

```html
<mf-row>
  <mf-col :span="24"><div class="grid-content"></div></mf-col>
</mf-row>
<mf-row>
  <mf-col :span="12"><div class="grid-content"></div></mf-col>
  <mf-col :span="12"><div class="grid-content"></div></mf-col>
</mf-row>
<mf-row>
  <mf-col :span="8"><div class="grid-content"></div></mf-col>
  <mf-col :span="8"><div class="grid-content"></div></mf-col>
  <mf-col :span="8"><div class="grid-content"></div></mf-col>
</mf-row>
<mf-row>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
</mf-row>
<mf-row>
  <mf-col :span="4"><div class="grid-content"></div></mf-col>
  <mf-col :span="4"><div class="grid-content"></div></mf-col>
  <mf-col :span="4"><div class="grid-content"></div></mf-col>
  <mf-col :span="4"><div class="grid-content"></div></mf-col>
  <mf-col :span="4"><div class="grid-content"></div></mf-col>
  <mf-col :span="4"><div class="grid-content"></div></mf-col>
</mf-row>
```

### 分栏间隔

通过给`mf-row` 添加`gutter`属性，可以给下属的`mf-col`添加间距

```html
<mf-row :gutter="20">
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
</mf-row>
```

### 分栏偏移

通过设置`offset`属性，偏移指定的栏数

```html
<mf-row :gutter="20">
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6" :offset="6"><div class="grid-content"></div></mf-col>
</mf-row>
<mf-row :gutter="20">
  <mf-col :span="6" :offset="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6" :offset="6"><div class="grid-content"></div></mf-col>
</mf-row>
<mf-row :gutter="20">
  <mf-col :span="12" :offset="6"><div class="grid-content"></div></mf-col>
</mf-row>
```

### 对齐方式

添加`flex`属性开启 flex 模式，设置参数`justify`、`align`为不同对齐方式，来定义子元素的排布方式

```html
<mf-row flex>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
</mf-row>
<mf-row flex justify="center">
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
</mf-row>
<mf-row flex justify="end">
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
</mf-row>
<mf-row flex justify="space-between">
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
</mf-row>
<mf-row flex justify="space-around">
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
</mf-row>

<mf-row flex align="bottom" style="height:100px">
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
  <mf-col :span="6"><div class="grid-content"></div></mf-col>
</mf-row>
```

### 响应式布局

参照了 Bootstrap 的 响应式设计，置了五个响应尺寸：xs、sm、md、lg 和 xl。

```html
<mf-row :gutter="10">
  <mf-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
    ><div class="grid-content"></div
  ></mf-col>
  <mf-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
    ><div class="grid-content"></div
  ></mf-col>
  <mf-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
    ><div class="grid-content"></div
  ></mf-col>
  <mf-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
    ><div class="grid-content"></div
  ></mf-col>
</mf-row>
```

### Row Attributes

| 参数    | 说明                             | 类型    | 可选值                                      | 默认值 |
| ------- | -------------------------------- | ------- | ------------------------------------------- | ------ |
| gutter  | 栅格间隔                         | number  | —                                           | 0      |
| flex    | 开启 flex 布局，现代浏览器下有效 | boolean | —                                           | false  |
| justify | flex 布局下的水平排列方式        | string  | start/end/center/space-around/space-between | start  |
| align   | flex 布局下的垂直排列方式        | string  | top/middle/bottom                           | top    |

### Col Attributes

| 参数   | 说明                                   | 类型                                        | 可选值 | 默认值 |
| ------ | -------------------------------------- | ------------------------------------------- | ------ | ------ |
| span   | 栅格占据的列数                         | number                                      | —      | 24     |
| offset | 栅格左侧的间隔格数                     | number                                      | —      | 0      |
| xs     | `<768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| sm     | `≥768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| md     | `≥992px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| lg     | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| xl     | `≥1920px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
