<template>
  <div class="mf-select" @click.stop="toggleOption" v-click-outside="handleClose">
    <template v-if="multiple">
      <div class="mf-select-tag" ref="tags">
        <mf-tag
          v-for="(item,index) in tagLabel"
          :key="index"
          size="small"
          closeable
          @close="handleTagClose($event, item)"
        >{{item}}</mf-tag>
      </div>
    </template>
    <mf-input
      v-model="inputValue"
      :placeholder="placeholder"
      readonly="readonly"
      :disabled="disabled"
      @focus="handleFocus"
      @blur="handleBlur"
      @mouseenter.native="inputHoving=true"
      @mouseleave.native="inputHoving=false"
      ref="input"
    >
      <template slot="prefix" v-if="$slots.prefix">
        <slot name="prefix"></slot>
      </template>
      <template slot="suffix">
        <i v-show="!showClose" :class="['mf-input__icon','mf-icon-'+iconClass]"></i>
        <i
          v-if="showClose"
          class="mf-input__icon mf-icon-close-circle mf-input__clear"
          @click="handleClearClick"
        ></i>
      </template>
    </mf-input>
    <transition name="slide-fade">
      <mf-select-menu v-if="visible" :styleTop="selectMenuTop">
        <mf-option></mf-option>
        <slot></slot>
      </mf-select-menu>
    </transition>
  </div>
</template>

<script>
import MfTag from "./../../Tag/src/main";
import MfInput from "./../../input/src/main";
import MfSelectMenu from "./select-menu";
import MfOption from "./option";
import clickOutside from "../../../src/utils/clickOutside";
export default {
  name: "MfSelect",
  componentName: "MfSelect",
  components: {
    MfTag,
    MfInput,
    MfSelectMenu,
    MfOption
  },
  provide() {
    return {
      select: this
    };
  },
  directives: { clickOutside },
  data() {
    return {
      selectValue: this.multiple ? [] : "",
      tagLabel: [],
      input: null,
      height: "0px",
      initialInputHeight: 0,
      inputValue: "",
      visible: false,
      inputHoving: false
    };
  },
  props: {
    value: [String, Array],
    placeholder: {
      type: String,
      default: "请选择"
    },
    disabled: Boolean,
    clearable: Boolean,
    multiple: Boolean
  },
  computed: {
    iconClass() {
      //   var icon = this.visible ? "up" : "down";
      return this.visible ? "up" : "down";
    },
    showClose() {
      return (
        this.clearable && !this.disabled && this.inputHoving && this.value != ""
      );
    },
    selectMenuTop() {
      return this.height;
    }
  },
  created() {
    this.$on("selectOption", this.selectOption);
  },
  mounted() {
    let inputComponent = this.$refs.input.$el.childNodes;
    this.input = Array.from(inputComponent).filter(item => {
      return item.nodeName === "INPUT";
    })[0];
    this.initialInputHeight = this.input.clientHeight;
    this.height = `${this.input.clientHeight}px`;
  },
  methods: {
    toggleOption() {
      if (!this.disabled) {
        this.visible = !this.visible;
      }
      this.$emit('visible-change', this.visible);
    },
    selectOption(option) {
      if (this.multiple) {
        let index = this.getValueIndex(this.selectValue, option.value);
        if (index > -1) {
          this.selectValue.splice(index, 1);
          this.tagLabel.splice(index,1);
        } else {
          this.selectValue.push(option.value);
          this.tagLabel.push(option.label);
        }
        this.setSelected();
      } else {
        this.inputValue = option.label;
        this.visible = false;
      }
      this.$emit("input", this.selectValue || this.inputValue);
      this.$emit("change", this.selectValue || this.inputValue);
    },
    handleClose() {
      this.visible = false;
    },
    setSelected() {
      if (this.selectValue.length > 0) {
          this.inputValue = " ";
        } else {
          this.inputValue = "";
        }
        this.$nextTick(() => {
          this.setInputHeight();
        });
    },
    handleClearClick() {
      event.stopPropagation();
      let value = "";
      this.selectValue = value;
      this.tagLabel = value;
      this.$emit("input", this.selectValue);
      this.$emit("clear");
    },
    getValueIndex(arr, value) {
      return arr.indexOf(value);
    },
    setInputHeight() {
      var tags = this.$refs.tags;
      var maxHeight =
        tags.clientHeight > this.initialInputHeight
          ? tags.clientHeight
          : this.initialInputHeight;
      this.height = `${maxHeight + 5}px`;
      this.input.setAttribute(
        "style",
        `height: ${this.height};line-height: ${this.height}`
      );
    },
    handleTagClose(event, tag) {
       let index = this.tagLabel.indexOf(tag);
       if(index > -1) {
           this.tagLabel.splice(index, 1);
           this.selectValue.splice(index, 1);
           this.$emit('input', this.selectValue);
           this.$emit('remove-tag', tag.value);
       }
       this.setSelected();
       event.stopPropagation();
    },
    handleFocus(event) {
        this.$emit('focus', event);
    },
    handleBlur(event) {
        this.$emit('blur', event);
    }
  }
};
</script>