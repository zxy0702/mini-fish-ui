<template>
    <div class="nav-aside">
        <div v-for="(title,index) in (Object.keys(list))" :key="index">
            <p class="nav-title">{{title}}</p>
            <ul>
                <li v-for="(item,index) in list[title]" :key="index">
                    <router-link :to="{path: item.path}">{{item.desc}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import navConfig from "../config/navConfig.json";
export default {
    name: 'nav-aside',
    data() {
        return {
            list: navConfig
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-aside {
    padding: 20px;
}
.nav-title {
    margin: 5px 0;
    font-size: 14px;
    font-weight: bold;
    color: #ffbfbf;
}
ul>li {
    padding: 0 10px;
    height: 35px;
    line-height: 35px;
}
ul>li>a:hover {
    color: #ff6161;
}
ul>li>a{
    font-size: 16px;
    color: #ff9999;
}
</style>