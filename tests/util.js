import Vue from 'vue';
import MFUI from './../packages/index';
Vue.use(MFUI);

export const findTestWrapper = (wrapper, tag) => {
    return wrapper.findAll(tag);
};