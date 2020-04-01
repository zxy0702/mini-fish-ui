<template>
    <span
        class="mf-tag"
        :class="[type?'mf-tag--'+type: '',effect?'mf-tag--'+effect:'',size?'mf-tag--'+size: '']"
    >
        <slot></slot>
        <i v-if="closeable" class="mf-tag-close mf-icon-close" @click="handleClose"></i>
    </span>
</template>

<script>
export default {
    name: "mf-tag",
    props: {
        type: {
            type: String
        },
        effect: {
            type: String,
            default: "light"
        },
        closeable: {
            type: Boolean,
            default: false
        },
        size: {
            type: String
        }
    },
    methods: {
        handleClose(event) {
            this.$emit('close',event);
        }
    }
};
</script>