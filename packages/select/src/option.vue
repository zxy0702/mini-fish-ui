<template>
  <li
    class="mf-select-menu__item"
    :class="{'is-disabled':disabled,
    'selected':itemSelect,
    'is-hover': hover}"
    @mouseenter="HoverOption"
    @click.stop="selectOption"
  >
    <slot>
      <span>{{label}}</span>
    </slot>
  </li>
</template>

<script>
import Emitter from "../../../src/mixins/emitter";
export default {
  name: "MfOption",
  mixins: [Emitter],
  inject: ["select"],
  data() {
    return {
      hover: false
    };
  },
  props: {
    label: String,
    value: String,
    disabled: Boolean
  },
  created() {
    this.select.options.push(this);
  },
  destroyed() {
    let index = this.select.options.indexOf(this);
    this.select.options.splice(index, 1);  
  },
  computed: {
    itemSelect() {
      if (this.select.multiple) {
        return (
          this.select.selectValue &&
          this.select.selectValue.indexOf(this.value) > -1
        );
      }
      return this.value === this.select.value;
    }
  },
  methods: {
    selectOption() {
      if (this.disabled) {
        return;
      }
      this.dispatch("MfSelect", "selectOption");
    },
    HoverOption() {
      if (!this.disabled) {
        this.select.hoverIndex = this.select.options.indexOf(this);
      }
    }
  }
};
</script>