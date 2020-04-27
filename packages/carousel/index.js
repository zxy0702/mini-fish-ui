import Carousel from "./src/main.vue";

Carousel.install = function(Vue) {
    Vue.compoment(Carousel.name, Carousel);
}

export default Carousel;