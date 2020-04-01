<template>
  <button
    class="mf-button"
    :disabled="disabled"
    :class="[type?'mf-button--'+type: '',
    size?'mf-button--'+size: '',{
        'is-disabled':disabled,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
    }]"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "mf-button",
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: String,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    icon: String
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>