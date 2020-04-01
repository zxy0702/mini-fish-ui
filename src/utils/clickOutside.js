const clickOutside = {
    bind(el, binding) {
        function clickHandler(e) {
            //判断是否点击元素本身
            if(el.contains(e.target)) {
                return false;
            }
            //判断指令中是否绑定了函数
            if(binding.expression) {
                binding.value(e);
            }
        }

        el.__vueClickOutside__ = clickHandler;
        document.addEventListener("mouseup",el.__vueClickOutside__);
    },
    unbind(el) {
        document.removeEventListener("mouseup", el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
}

export default clickOutside;