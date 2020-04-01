import InfiniteScroll from "./src/mian.js";

InfiniteScroll.install = function(Vue) {
    Vue.directive(InfiniteScroll.name, InfiniteScroll);
};

export default InfiniteScroll;