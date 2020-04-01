import Button from './src/main.vue'

//在组件下面定义一个install方法
Button.install = function(Vue) {
    Vue.component(Button.name, Button);
}
export default Button;