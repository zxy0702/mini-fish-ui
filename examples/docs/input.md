# Input 输入框

### 基础用法

```html
<mf-input
  v-model="input"
  type="number"
  min="0"
  placeholder="请输入内容"
></mf-input>
```

### 禁用状态

`disabled`属性指定是否禁用`input`组件

```html
<mf-input v-model="input" placeholder="请输入内容" disabled></mf-input>
```

### 可清空输入框

`clearable`属性

```html
<mf-input v-model="input" placeholder="请输入内容" clearable></mf-input>
```

### 密码输入框

使用`showPassword`属性并且`type="password"`时生效

```html
<mf-input
  type="password"
  v-model="input"
  placeholder="请输入内容"
  showPassword
></mf-input>
```

### 图标输入框

`prefix-icon`属性设置图标在前面，`suffix-icon`属性设置图标在后面

```html
<mf-input placeholder="请输入内容" prefix-icon="mf-icon-user"></mf-input>
<mf-input placeholder="请输入内容" suffix-icon="mf-icon-search"></mf-input>
```

### 不同尺寸

```html
<mf-input
  placeholder="请输入内容"
  prefix-icon="mf-icon-user"
  size="large"
></mf-input>
<mf-input placeholder="请输入内容" prefix-icon="mf-icon-user"></mf-input>
<mf-input
  placeholder="请输入内容"
  prefix-icon="mf-icon-user"
  size="small"
></mf-input>
```

### Attributes

| 参数          | 说明                   | 类型    | 可选值                 | 默认值 |
| ------------- | ---------------------- | ------- | ---------------------- | ------ |
| type          | 类型                   | string  | 原生 input 的 type 值  | text   |
| value/v-model | 绑定值                 | string  | —                      | —      |
| placeholder   | 占位文本               | string  | —                      | —      |
| maxlength     | 原生属性，最大输入长度 | number  | —                      | —      |
| minlength     | 原生属性，最小输入长度 | number  | —                      | —      |
| disabled      | 禁用                   | boolean | —                      | false  |
| readonly      | 是否只读               | boolean | —                      | false  |
| clearable     | 是否可清空输入框       | boolean | —                      | false  |
| show-password | 是否显示切换密码图标   | boolean | —                      | —      |
| prefix-icon   | 前缀图标               | string  | —                      | —      |
| suffix-icon   | 后缀图标               | string  | —                      | —      |
| size          | 尺寸                   | string  | large / medium / small | medium |

### Events

| 事件名称 | 说明                                    | 回调参数 |
| -------- | --------------------------------------- | -------- |
| input    | 输入时触发                              | —        |
| foucs    | 获得焦点时触发                          | —        |
| blur     | 失去焦点时触发                          | —        |
| change   | 输入框失焦且 input 值改变时触发         | —        |
| clear    | 点击`clearable`属性生成的清空按钮时触发 | —        |
