<template>
  <div
    class="mf-input"
    :class="[size?'mf-input--'+size:'',{
        'mf-input--suffix': hasSuffix,
        'mf-input--prefix': prefixIcon,
        'is-disabled': disabled
    }]"
    @mouseenter="hoving=true"
    @mouseleave="hoving=false"
  >
    <input
      class="mf-input__inner"
      v-bind="$attrs"
      :type="inputType"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :minlength="minlength"
      :readonly="readonly"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    />
    <span class="mf-input__prefix">
        <slot name="prefix"></slot>
      <i v-if="prefixIcon" class="mf-input__icon" :class="prefixIcon"></i>
    </span>
    <span class="mf-input__suffix">
      <i
        v-if="showClear"
        @click="clearVal"
        class="mf-input__icon mf-icon-close-circle mf-input__clear"
      ></i>
      <i v-if="showEye" @click="isShowPassword" class="mf-input__icon mf-icon-eye"></i>
      <i v-if="suffixIcon" class="mf-input__icon" :class="suffixIcon"></i>
      <template v-if="!showClear || !showEye">
          <slot name="suffix"></slot>
      </template>
    </span>
  </div>
</template>


<script>
export default {
  name: "MfInput",
  inheritAttrs: false,
  data() {
    return {
      inputType: this.type,
      hoving: false,
      focused: false
    };
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    size: String,
    value: String,
    placeholder: String,
    maxlength: String,
    minlength: String,
    readonly: Boolean,
    disabled: Boolean,
    suffixIcon: {
      type: String
    },
    prefixIcon: {
      type: String
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean
    }
  },
  computed: {
    hasSuffix() {
      return this.suffixIcon || this.showClear || this.showEye;
    },
    showClear() {
      return (
        this.clearable &&
        !this.readonly &&
        !this.disabled &&
        this.value &&
        (this.focused || this.hoving)
      );
    },
    showEye() {
      return (
        this.type == "password" &&
        this.showPassword &&
        (this.focused || this.value)
      );
    }
  },
  methods: {
    handleChange(e) {
      this.$emit("change", e.target.value);
    },
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    handleFocus() {
      this.focused = true;
      this.$emit("focus");
    },
    handleBlur() {
      this.focused = false;
      this.$emit("blur");
    },
    clearVal() {
      this.$emit("input", "");
      this.$emit("clear");
    },
    isShowPassword() {
      this.inputType == "text"
        ? (this.inputType = "password")
        : (this.inputType = "text");
    }
  }
};
</script>