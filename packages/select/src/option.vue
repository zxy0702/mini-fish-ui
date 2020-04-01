<template>
  <li
    class="mf-select-menu__item"
    :class="{'is-disabled':disabled,
    'selected':itemSelect}"
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
  props: {
    label: String,
    value: String,
    disabled: Boolean
  },
  computed: {
    itemSelect() {
      if (this.select.multiple) {
          return this.select.selectValue && this.select.selectValue.indexOf(this.value) > -1;
      }
      return this.value === this.select.value;
    }
  },
  methods: {
    selectOption() {
      if (this.disabled) {
        return;
      }
      this.dispatch("MfSelect", "selectOption", this);
    }
  }
};
</script>