<template>
    <header class="mf-header" :style="{height}">
        <slot></slot>
    </header>
</template>

<script>
export default {
    name: 'MfHeader',
    props: {
        height: {
            type: String,
            default: '50px'
        }
    }
}
</script>