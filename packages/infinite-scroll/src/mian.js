const scope = 'MfInfiniteScroll';
const attributes = {
    delay: {
        type: Number,
        default: 200
    },
    distance: {
        type: Number,
        default: 0
    }
}
//节流时延
const throttle = function(delay, callback) {
    let timeoutID;
    let startTime = Date.now();

    clearTimeout(timeoutID);
    return function() {
        const self = this;
        const nowTime = Date.now();
        const args = arguments;
        let time = delay-(nowTime-startTime);
        setTimeout(function() {
            callback.apply(self, args);
            startTime = Date.now();
        },time);
    }
}

const getScrollOptions = function(el) {
    const map = {};
    Object.keys(attributes).forEach(option => {
        const {type, default: defaultValue} = attributes[option];
        let value = el.getAttribute(`infinite-scroll-${option}`);
        switch(type) {
            case Number:
                value = Number(value);
                value = !(typeof value) || Number.isNaN(value) ? defaultValue: value;
                break;
        }
        map[option] = value;
    });
    return map;
}

const handleScroll = function(cb) {
    const {el, vm, distance} = this[scope];
    let shouldLoad = false;
    shouldLoad = el.scrollHeight - el.scrollTop - el.clientHeight<= distance;
    if(shouldLoad) {
        cb.call(vm);
    }
}

export default {
    name: "infinite-scroll",
    inserted(el, binding, vnode) {
        const cb = binding.value;
        const vm = vnode.context;
        const {delay, distance} = getScrollOptions(el);
        el[scope] = {el, vm, delay, distance};
        const onScroll = handleScroll.bind(el, cb);
        el.addEventListener('scroll',throttle(delay,onScroll));
    }
}