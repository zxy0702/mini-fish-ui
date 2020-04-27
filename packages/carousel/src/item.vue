<template>
  <div
    class="mf-carousel__item"
    :class="{'is-animating': animating,'mf-carousel__item--card': $parent.type=='card','is-active':active}"
    :style="itemStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
const CARD_SCALE = 0.83;
export default {
  name: "MfCarouselItem",
  props: {
    label: [String, Number]
  },
  data() {
    return {
      translate: 0,
      scale: 1,
      animating: false,
      active: false,
      visual: false
    };
  },
  computed: {
    parentDirection() {
      return this.$parent.direction;
    },
    itemStyle() {
      const direction =
        this.parentDirection === "vertical" ? "translateY" : "translateX";
      const value = `${direction}(${this.translate}px) scale(${this.scale})`;
      return { transform: value };
    }
  },
  methods: {
    calcTranslate(index, activeIndex, isVertical) {
      const parentDistance = this.$parent.$el[
        isVertical ? "offsetHeight" : "offsetWidth"
      ];
      return parentDistance * (index - activeIndex);
    },
    calcCardTranslate(index, activeIndex) {
      const parentWidth = this.$parent.$el.offsetWidth;
      if (this.visual) {
        return (
          (parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1)) / 4
        );
      } else if (index < activeIndex) {
        return (-(1 + CARD_SCALE) * parentWidth) / 4;
      } else {
        ((3 + CARD_SCALE) * parentWidth) / 4;
      }
    },
    calcIndex(index, activeIndex, length) {
      if (index === length - 1 && activeIndex === 0) {
        return -1;
      } else if (index === 0 && activeIndex === length - 1) {
        return length;
      } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
        return length + 1;
      } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
        return -2;
      }
      return index;
    },
    translateItem(index, activeIndex, oldIndex) {
      const parentType = this.$parent.type;
      const length = this.$parent.items.length;
      if (parentType !== "card" && oldIndex !== undefined) {
        this.animating = index === activeIndex || index === oldIndex;
      }
      if (index !== activeIndex && length > 2) {
        index = this.calcIndex(index, activeIndex, length);
      }
      if (parentType === "card") {
        if (this.parentDirection === "vertical") {
          console.warn(
            "[Minifish Warn][Carousel] directionis not supported in card mode"
          );
        }
        this.visual = Math.abs(index - activeIndex) <= 1;
        this.active = index === activeIndex;
        this.translate = this.calcCardTranslate(index, activeIndex);
        this.scale = this.active ? 1 : CARD_SCALE;
      } else {
        this.active = index === activeIndex;
        const isVertical = this.parentDirection === "vertical";
        this.translate = this.calcTranslate(index, activeIndex, isVertical);
      }
    }
  }
};
</script>