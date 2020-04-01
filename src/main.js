import Vue from 'vue';
import App from './App.vue';
import MFUI from '../packages/index';
import '../packages/theme-chalk/src/index.scss'

Vue.config.productionTip = false

Vue.use(MFUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
