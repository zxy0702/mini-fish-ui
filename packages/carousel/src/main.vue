<template>
  <div class="mf-carousel" @mouseenter.stop="handleMouseEnter" @mouseleave.stop="handleMouseLeave">
    <div class="mf-carousel__container" :style="{height: height}">
      <transition v-if="arrowDisplay" name="carousel-arrow-left">
        <button
          v-show="isShowArrow"
          class="mf-carousel__arrow mf-carousel__arrow--left"
          @click="throttleArrowClick(activeIndex-1)"
        >
          <i class="mf-icon-left"></i>
        </button>
      </transition>
      <transition v-if="arrowDisplay" name="carousel-arrow-right">
        <button
          v-show="isShowArrow"
          class="mf-carousel__arrow mf-carousel__arrow--right"
          @click="throttleArrowClick(activeIndex+1)"
        >
          <i class="mf-icon-right"></i>
        </button>
      </transition>
      <slot></slot>
    </div>
    <ul :class="indicatorsClass" v-if="indicatorPosition!=='none'">
      <li
        :class="['mf-carousel__indicator','mf-carousel__indicator--'+direction,{'is-active': index===activeIndex}]"
        v-for="(item,index) in items"
        :key="index"
        @mouseenter="throttleIndicatorHover(index)"
        @click.stop="handleIndicatorClick(index)"
      >
        <button class="mf-carousel__button">
          <span v-if="hasLabel">{{item.label}}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import throttle from "../../../src/utils/throttle";
// import { throttle } from "throttle-debounce";
export default {
  name: "MfCarousel",
  props: {
    height: String,
    initialIndex: {
      type: Number,
      default: 0
    },
    trigger: {
      type: String,
      default: "hover"
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    },
    indicatorPosition: String,
    arrow: {
      type: String,
      default: "hover",
      validator(val) {
        return ["always", "hover", "never"].indexOf(val) !== -1;
      }
    },
    type: String,
    loop: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(val) {
        return ["horizontal", "vertical"].indexOf(val) !== -1;
      }
    }
  },
  data() {
    return {
      items: [],
      timer: null,
      activeIndex: -1,
      hover: false
    };
  },
  computed: {
    arrowDisplay() {
      return this.arrow !== "never" && this.direction !== "vertical";
    },
    isShowArrow() {
      return (
        (this.arrow === "always" || this.hover) &&
        (this.loop || this.activeIndex >= 0)
      );
    },
    indicatorsClass() {
      const classes = [
        "mf-carousel__indicators",
        "mf-carousel__indicators--" + this.direction,
        { "mf-carousel__indicators--label": this.hasLabel }
      ];
      if (this.indicatorPosition === "outside" || this.type === "card") {
        classes.push("mf-carousel__indicators--outside");
      }
      return classes;
    },
    hasLabel() {
      return this.items.some(item => {
        if (item.label) {
          return item.label.toString().length > 0;
        }
      });
    }
  },
  watch: {
    activeIndex(val, oldVal) {
      this.resetItemPosition(oldVal);
      if (oldVal > -1) {
        this.$emit("change", val, oldVal);
      }
    }
  },
  created() {
    this.throttleArrowClick = throttle(300, index => {
      this.setActiveItem(index);
    });
    this.throttleIndicatorHover = throttle(300, index => {
      this.handleIndicatorHover(index);
    });
  },
  mounted() {
    this.updateItems();
    this.$nextTick(() => {
      if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
        this.activeIndex = this.initialIndex;
      }
      this.startTime();
    });
  },
  methods: {
    handleMouseEnter() {
      this.hover = true;
      this.pauseTime();
    },
    handleMouseLeave() {
      this.hover = false;
      this.startTime();
    },
    updateItems() {
      this.items = this.$children.filter(child => {
          return child.$options.name === "MfCarouselItem"
          }
      );
    },
    startTime() {
      if (this.interval <= 0 || !this.autoplay || this.timer) return;
      this.timer = setInterval(this.playSlides, this.interval);
    },
    pauseTime() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    playSlides() {
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex++;
      } else if (this.loop) {
        this.activeIndex = 0;
      }
    },
    setActiveItem(index) {
      index = Number(index);
      if (isNaN(index) || index !== Math.floor(index)) {
        console.warn("[Mini-fish Warn]index must be an integer.");
        return;
      }
      let length = this.items.length;
      //   const oldIndex = this.activeIndex;
      if (index < 0) {
        this.activeIndex = this.loop ? length - 1 : 0;
      } else if (index >= length) {
        this.activeIndex = this.loop ? 0 : length - 1;
      } else {
        this.activeIndex = index;
      }
      //   if (oldIndex === this.activeIndex) {
      //     console.log("111");
      //     this.resetItemPosition(oldIndex);
      //   }
    },
    prev() {
      this.setActiveItem(this.activeIndex - 1);
    },
    next() {
      this.setActiveItem(this.activeIndex + 1);
    },
    resetItemPosition(oldIndex) {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex, oldIndex);
      });
    },
    handleIndicatorHover(index) {
      if (this.trigger === "hover" && index != this.activeIndex) {
        this.activeIndex = index;
      }
    },
    handleIndicatorClick(index) {
      if (this.trigger === "click" && index != this.activeIndex) {
        this.activeIndex = index;
      }
    }
  }
};
</script>