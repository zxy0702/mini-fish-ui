<template>
    <i class="mf-icon" :style="style"></i>
</template>

<script>
export default {
    name: "mf-icon",
    props: {
        size: [Number,String],
        color: String
    },
    computed: {
        style() {
            return {
                fontSize: this.size + "px",
                color: this.color
            };
        }
    }
};
</script>