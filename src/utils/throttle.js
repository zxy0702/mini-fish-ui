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

export default throttle;