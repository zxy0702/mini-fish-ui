<template>
  <section class="mf-layout" :class="{'is-vertical': isVertical}">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "MfLayout",
  computed: {
    isVertical() {
      return this.$slots && this.$slots.default
        ? this.$slots.default.some(vnode => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            return tag === "mf-header" || tag === "mf-footer";
          })
        : false;
    }
  }
};
</script>