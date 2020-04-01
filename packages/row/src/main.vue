<template>
  <div
    class="mf-row"
    :class="[{'mf-row--flex':flex},justify?'is-justify-'+justify:'',align?'is-align-'+align:'']"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MfRow",
  componentName: "MfRow",
  props: {
    gutter: Number,
    flex: {
      type: Boolean,
      default: false
    },
    justify: String,
    align: String
  },
  computed: {
    style() {
      const res = {};
      if (this.gutter) {
        res.marginLeft = `-${this.gutter / 2}px`;
        res.marginRight = res.marginLeft;
      }
      return res;
    }
  }
};
</script>