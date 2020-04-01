<template>
  <div
    class="mf-col"
    :class="classList"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MfCol",
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      if (parent && parent.$options.componentName !== "MfRow") {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    style() {
      const style = {};
      if (this.gutter) {
        style.paddingLeft = `${this.gutter / 2}px`;
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
    classList() {
      const classList = [];
      ["span", "offset"].forEach(option => {
        if (this[option] || this[option] === 0) {
          classList.push(
            option === "span"
              ? `mf-col-${this[option]}`
              : `mf-col-${option}-${this[option]}`
          );
        }
      });

      ["xs", "sm", "md", "lg", "xl"].forEach(size => {
        if (typeof this[size] === "number") {
          classList.push(`mf-col-${size}-${this[size]}`);
        } else if (typeof this[size] === "object") {
          let options = this[size];
          Object.keys(options).forEach(option => {
            classList.push(
              option === "span"
                ? `mf-col-${size}-${options[option]}`
                : `mf-col-${size}-${option}-${options[option]}`
            );
          });
        }
      });
      return classList;
    }
  }
};
</script>