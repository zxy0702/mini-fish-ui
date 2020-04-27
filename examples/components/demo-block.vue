<template>
  <div class="demo-block">
    <div id="example"></div>
    <div v-show="isShowCode" v-highlight>
      <slot class="highlight"></slot>
    </div>
    <button class="show-button" @click="changeShow">{{isShowCode? '隐藏代码': '显示代码'}}</button>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "demo-block",
  data() {
    return {
      isShowCode: false
    };
  },
  mounted() {
    var componentCotent = Vue.extend({
      template: `<div class="example">${this.htmlContent}</div>`,
      data() {
        return {
          value: "",
          input: "",
          loading: true,
          directiveLoading: false,
          count: 5,
          options: [
            {
              value: "选项1",
              label: "HTML"
            },
            {
              value: "选项2",
              label: "Css",
              disabled: true
            },
            {
              value: "选项3",
              label: "JavaScript"
            },
            {
              value: "选项4",
              label: "Vue.js"
            },
            {
              value: "选项5",
              label: "webpack"
            }
          ]
        };
      },
      watch:{
          value(newVal) {
              console.log(newVal);
          }
      },
      methods: {
        openDirectiveLoading() {
          this.directiveLoading = true;
          setTimeout(() => {
            this.directiveLoading = false;
          }, 2000);
        },
        openServiceLoading() {
          const load = this.$loading({
            text: "Loading"
          });
          setTimeout(() => {
            load.close();
          }, 2000);
        },
        load() {
          this.count += 2;
        }
      }
    });
    new componentCotent().$mount("#example");
  },
  computed: {
    htmlContent() {
      return this.$slots.default[0].children[0].children[0].text;
      // return this.$slots.htmlCode;
    }
  },
  methods: {
    changeShow() {
      this.isShowCode = !this.isShowCode;
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-block {
  border: 1px solid #ffc8c8;
  border-radius: 5px;
}
.show-button {
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #ff7d7d;
  background-color: #fddddd;
  cursor: pointer;
}
</style>