import Button from './Button/index';
import Icon from './Icon/index';
import Tag from './Tag/index';
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
    Col
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
    Col
}