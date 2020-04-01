<template>
    <footer class="mf-footer" :style="{height}">
        <slot></slot>
    </footer>
</template>

<script>
export default {
    name: 'MfFooter',
    props: {
        height: {
            type:String,
            default: '50px'
        }
    }
}
</script>