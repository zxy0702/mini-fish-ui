export default {
    data() {
        return {
            hoverOption: -1
        }
    },
    computed: {
        optionsAllDisabled() {
            return this.options.every(option => option.disabled);
        }
    },
    watch: {
        hoverIndex(val) {
            if (val > -1) {
                this.hoverOption = this.options[val] || {};
            }
            this.options.forEach(option => {
                option.hover = this.hoverOption === option;
            })
        }
    },
    methods: {
        navigateOptions(direction) {
            if (!this.visible) {
                this.visible = true;
                return;
            }
            if(!this.optionsAllDisabled) {
                if (direction === 'next') {
                    this.hoverIndex++;
                    if (this.hoverIndex == this.options.length) {
                        this.hoverIndex = 0;
                    }
                }
                else if (direction == 'prev') {
                    this.hoverIndex--;
                    if (this.hoverIndex < 0) {
                        this.hoverIndex = this.options.length - 1;
                    }
                }
                const option = this.options[this.hoverIndex];
                if (option.disabled) {
                    this.navigateOptions(direction);
                }
            }
        }
    }
}