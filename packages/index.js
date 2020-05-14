import Button from './button/index';
import Icon from './icon/index';
import Tag from './tag/index';
import Layout from './layout/index';
import Header from './header/index';
import Aside from './aside/index';
import Main from './main/index';
import Footer from './footer/index';
import Input from './input/index';
import Option from './option/index';
import Select from './select/index';
import Loading from './loading/index';
import Row from './row/index';
import Col from './col/index';
import Carousel from './carousel/index';
import CarouselItem from './carousel-item/index';
import InfiniteScroll from "./infinite-scroll/index";

const components = [
    Button,
    Icon,
    Tag,
    Layout,
    Header,
    Aside,
    Main,
    Footer,
    Input,
    Option,
    Select,
    Row,
    Col,
    Carousel,
    CarouselItem
]

const install = function(Vue) {
    if(install.installed) return;
    components.map(component => {
        Vue.component(component.name, component);
    })
    Vue.use(Loading.directive);
    Vue.use(InfiniteScroll);
    Vue.prototype.$loading = Loading.service;
}

if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    Button,
    Icon,
    Tag,
    Layout,
    Header,
    Aside,
    Main,
    Footer,
    Input,
    Option,
    Select,
    Loading,
    Row,
    Col,
    Carousel,
    CarouselItem
}