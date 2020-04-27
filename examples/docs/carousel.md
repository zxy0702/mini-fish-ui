# Carousel 轮播图

结合使用`mf-carousel`和`mf-carousel-item`标签使用轮播图，幻灯片的内容放在`mf-carousel-item`标签中。

### 基础用法

默认情况下，鼠标滑过底部指示器会触发切换。

```html
<mf-carousel height="150px">
  <mf-carousel-item v-for="item in 3" :key="item">
    <h3 class="small">{{ item }}</h3>
  </mf-carousel-item>
</mf-carousel>
```

### 点击切换

设置`trigger`属性为`click`，可以达到点击触发的效果。

```html
<mf-carousel height="150px" trigger="click">
  <mf-carousel-item v-for="item in 4" :key="item">
    <h3 class="small">{{ item }}</h3>
  </mf-carousel-item>
</mf-carousel>
```

### 指示器

可以将指示器的位置设置在容器外部

```html
<mf-carousel height="150px" indicator-position="outside">
  <mf-carousel-item v-for="item in 4" :key="item">
    <h3 class="small">{{ item }}</h3>
  </mf-carousel-item>
</mf-carousel>
```

### 方向

设置`direction`属性为`vertical`使轮播图在垂直方向上显示。

```html
<mf-carousel height="150px" direction="vertical">
  <mf-carousel-item v-for="item in 4" :key="item">
    <h3 class="small">{{ item }}</h3>
  </mf-carousel-item>
</mf-carousel>
```

### 卡片

设置`type`属性为`card`，使用卡片风格。

```html
<mf-carousel height="200px" type="card">
  <mf-carousel-item v-for="(item,index) in 5" :key="index">
    <h3 class="small">{{ item }}</h3>
  </mf-carousel-item>
</mf-carousel>
```

### Carousel Attributes

| 参数               | 说明                           | 类型    | 可选值              | 默认值     |
| ------------------ | ------------------------------ | ------- | ------------------- | ---------- |
| height             | 轮播图的高度                   | string  | —                   | —          |
| initial-index      | 初始状态激活的幻灯片的索引     | number  | —                   | 0          |
| trigger            | 指示器的触发方式               | string  | click               | —          |
| autoplay           | 是否自动切换                   | boolean | —                   | true       |
| interval           | 自动切换的时间间隔，单位为毫秒 | number  | —                   | 3000       |
| indicator-position | 指示器的位置                   | string  | outside/none        | —          |
| arrow              | 切换箭头的显示时机             | string  | always/hover/never  | hover      |
| type               | 轮播图的类型                   | string  | card                | —          |
| loop               | 是否循环显示                   | boolean | -                   | true       |
| direction          | 轮播图展示的方向               | string  | horizontal/vertical | horizontal |

### Carousel Events

| 事件名称 | 说明             | 回调参数                       |
| -------- | ---------------- | ------------------------------ |
| change   | 幻灯片切换时触发 | 当前幻灯片索引，原幻灯片的索引 |

### Carousel Methods

| 方法名 | 说明               | 参数 |
| ------ | ------------------ | ---- |
| prev   | 切换至上一张幻灯片 | —    |
| next   | 切换至下一张幻灯片 | —    |

### Carousel-Item Attributes

| 参数  | 说明                       | 类型          | 可选值 | 默认值 |
| ----- | -------------------------- | ------------- | ------ | ------ |
| label | 该幻灯片所对应指示器的文本 | string/number | —      | —      |
