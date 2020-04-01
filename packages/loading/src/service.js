import Vue from "vue";
import LoadingVue from "./loading.vue";

const LoadingConstructor = Vue.extend(LoadingVue);
//单例模式
let fullscreenLoading;

LoadingConstructor.prototype.close = function(){
    if (this.fullscreen) {
        fullscreenLoading = undefined;
    }
    if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
    }
    this.$destroy();
    this.visible = false;
}

const Loading = (options) => {
    //如果传入字符串
    if (typeof options.target == "string") {
        options.target = document.querySelector(options.target);
    }
    if (options.target && options.target !== document.body) {
        //取消全屏
        options.fullscreen = false;
    }
    else {
        options.fullscreen = true;
    }
    if (options.fullscreen && fullscreenLoading) { //单例模式
        return fullscreenLoading;
    }
    const instance = new LoadingConstructor({
        el: document.createElement("div"),
        data: options
    })
    let parent = options.fullscreen ? document.body : options.target;
    parent.appendChild(instance.$el);
    parent.className += " mf-loading-parent--relative";

    Vue.nextTick(() => {
        instance.visible = true;
    })

    if (options.fullscreen) {
        fullscreenLoading = instance;
    }
    return instance;
}

export default Loading;