# InfiniteScroll 无限滚动

滚动至底部时，加载更多数据。

### 基础用法

在要实现滚动加载的元素上添加`v-infinite-scroll`,并赋值相应的加载方法。

```html
<template>
  <ul
    class="infinite-list"
    v-infinite-scroll="load"
    infinite-scroll-delay = "1000"
    style="height:120px;overflow:auto"
  >
    <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
  </ul>
</template>
```

### Attributes

| 参数                      | 说明                                                   | 类型    | 可选值 | 默认值 |
| ------------------------- | ------------------------------------------------------ | ------- | ------ | ------ |
| infinite-scroll-disabled  | 是否禁用                                               | boolean | -      | false  |
| infinite-scroll-delay     | 节流时延，单位为 ms                                    | number  | -      | 200    |
| infinite-scroll-distance  | 触发加载的距离阈值，单位为 px                          | number  | -      | 0      |
| infinite-scroll-immediate | 是否立即执行加载方法，以防初始状态下内容无法撑满容器。 | boolean | -      | true   |
