<template>
    <div id="app">
        <mf-layout>
            <mf-header class="header" height="80px">
                <h1 class="title"><img src="../examples/assets/image/mini_fish.png" /></h1>
            </mf-header>
            <mf-layout class="main">
                <mf-aside width="250px">
                    <nav-aside />
                </mf-aside>
                <mf-main><router-view></router-view></mf-main>
            </mf-layout>
        </mf-layout>
    </div>
</template>

<script>
import navAside from "./components/nav-aside";

export default {
    components: {
        navAside
    }
}
</script>