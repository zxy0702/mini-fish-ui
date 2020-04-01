import Vue from "vue";
import Loading from "./loading.vue";

var LoadingProfile = Vue.extend(Loading);
const loadingDirective = {};
loadingDirective.install = Vue => {

    function handleLoading(el, binding) {
        if (binding.value) {
            Vue.nextTick(() => {
                el.instance.visible = true;
                if (binding.modifiers.body) {
                    el.instance.fullScreen = true;
                    document.body.appendChild(el.mask);
                }
                else {
                    el.instance.fullScreen = false;
                    el.appendChild(el.mask);
                    el.className += " mf-loading-parent--relative";
                }
            })
        } else {
            el.instance.visible = false;
        }
    }
    Vue.directive('loading', {
        bind(el, binding) {
            const text = el.getAttribute("loading-text");
            const background = el.getAttribute("loading-background");
            let profile = new LoadingProfile({
                el: document.createElement("div"),
                data: {
                    text: text,
                    background: background
                }
            })
            el.instance = profile;
            el.mask = profile.$el;
            binding.value && handleLoading(el, binding);
        },
        update(el, binding) {
            el.instance.setText(el.getAttribute("loading-text"));
            if (binding.oldValue != binding.value) {
                handleLoading(el, binding);
            }
        },
        unbind(el) {
            el.mask &&
                el.mask.parentNode &&
                el.mask.parentNode.removeChild(el.mask);
            handleLoading(el, { value: false });
            el.instance && el.instance.$destroy();
        }
    })
}

export default loadingDirective;