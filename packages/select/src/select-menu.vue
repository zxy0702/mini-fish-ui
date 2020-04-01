<template>
  <div class="mf-select-dropdown" :class="{'is-multiple':$parent.multiple}" :style="{top: styleTop}">
    <ul class="mf-select-menu">
      <slot></slot>
    </ul>
    <div class="mf-menu-arrow"></div>
  </div>
</template>

<script>
export default {
  name: "MfSelectMenu",
  props: {
      styleTop: String
  }
};
</script>