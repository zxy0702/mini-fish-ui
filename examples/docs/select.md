# Select 选择器

使用模拟的增强下拉选择器来代替浏览器原生的选择器。选择器支持单选、多选操作。

### 基础用法

基础单选

```html
<mf-select placeholder="请选择" v-model="value">
  <mf-option
    v-for="item in options"
    :label="item.label"
    :value="item.value"
  ></mf-option>
</mf-select>
```

### 禁用

在`mf-select`中，设置`disabled`禁用整个选择器
在`mf-option`中，设置`disabled`值为 true 禁用改选项

```html
<mf-select placeholder="请选择" disabled v-model="value">
  <mf-option
    v-for="item in options"
    :label="item.label"
    :value="item.value"
  ></mf-option>
</mf-select>

<mf-select placeholder="请选择" v-model="value">
  <mf-option
    v-for="item in options"
    :label="item.label"
    :value="item.value"
    :disabled="item.disabled"
  ></mf-option>
</mf-select>
```

### 可清空

设置属性`clearable`可以清空已选项，仅适用于单选模式。

```html
<mf-select placeholder="请选择" clearable v-model="value">
  <mf-option
    v-for="item in options"
    :label="item.label"
    :value="item.value"
  ></mf-option>
</mf-select>
```

### 多选

基础多选，用 Tag 展示已选项

```html
<mf-select placeholder="请选择" multiple v-model="value">
  <mf-option
    v-for="item in options"
    :label="item.label"
    :value="item.value"
  ></mf-option>
</mf-select>
```

### 自定义模板

对选项内容可以进行自定义

```html
<mf-select placeholder="请选择" v-model="value">
  <mf-option v-for="item in options" :label="item.label" :value="item.value">
    <span style="float: left">{{ item.label }}</span>
    <span style="float: right; color: #8492a6; font-size: 13px"
      >{{ item.value }}</span
    >
  </mf-option>
</mf-select>
```

### Select Attributes

| 参数            | 说明             | 类型                      | 可选值            | 默认值 |
| --------------- | ---------------- | ------------------------- | ----------------- | ------ |
| value / v-model | 绑定值           | boolean / string / number | —                 | —      |
| multiple        | 是否多选         | boolean                   | —                 | false  |
| disabled        | 是否禁用         | boolean                   | —                 | false  |
| size            | 输入框尺寸       | string                    | medium/small/mini | —      |
| clearable       | 是否可以清空选项 | boolean                   | —                 | false  |
| placeholder     | 占位符           | string                    | —                 | 请选择 |

### Select Events

| 事件名称       | 说明                                     | 回调参数                      |
| -------------- | ---------------------------------------- | ----------------------------- |
| change         | 选中值发生变化时触发                     | 目前的选中值                  |
| visible-change | 下拉框出现/隐藏时触发                    | 出现则为 true，隐藏则为 false |
| remove-tag     | 多选模式下移除 tag 时触发                | 移除的 tag 值                 |
| clear          | 可清空的单选模式下用户点击清空按钮时触发 | —                             |
| blur           | 当 input 失去焦点时触发                  | (event: Event)                |
| focus          | 当 input 获得焦点时触发                  | (event: Event)                |

### Option Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选项的值 | string/number/object | — | — |
| label | 选项的标签，若不设置则默认与 `value` 相同 | string/number | — | — |
| disabled | 是否禁用该选项 | boolean | — | false |
