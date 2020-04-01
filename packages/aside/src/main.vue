<template>
    <aside class="mf-aside" :style="{width}">
        <slot></slot>
    </aside>
</template>

<script>
export default {
    name: 'MfAside',
    props: {
        width: {
            type: String,
            default: '200px'
        }
    }
}
</script>