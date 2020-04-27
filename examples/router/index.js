import Vue from 'vue';
import VueRouter from 'vue-router';
import navConfig from "../config/navConfig.json";

Vue.use(VueRouter);

let routes = [];

Object.keys(navConfig).forEach(nav => {
    console.log(navConfig[nav]);
    routes = routes.concat(navConfig[nav]);
});
console.log(routes);

addComponent(routes);

function addComponent(routes) {
    routes.forEach((route) => {
        route.component = () => import(`../docs/${route.name}.md`);
    })
}

export default new VueRouter({
    routes: routes
})