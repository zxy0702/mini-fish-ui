import Vue from 'vue';
import App from './App.vue';
import './assets/styles/common.scss';
import MFUI from '../packages/index';
import '../packages/theme-chalk/src/index.scss';
import router from './router/index.js';
import demoBlock from "./components/demo-block";
import Highlight from "./utils/highlight.js";

Vue.component(demoBlock.name, demoBlock);
Vue.use(Highlight);
Vue.use(MFUI);


new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})