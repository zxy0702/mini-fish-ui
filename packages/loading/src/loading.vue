<template>
  <div v-show="visible" class="mf-loading" :class="{'is-fullscreen':fullScreen}" :style="{backgroundColor: background || ''}">
    <div class="mf-loading-spinner">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <p class="mf-loading-text">{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MfLoading",
  data() {
    return {
      text: "",
      background: null,
      visible: false,
      fullScreen: true
    };
  },
  methods: {
    setText() {}
  }
};
</script>