import { mount } from '@vue/test-utils';
import Select from '../../packages/select/src/select.vue';
import '../util';

describe('select', () => {
    const mfOption = {
        template: `<div><mf-option
        v-for="(item,index) in options"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
        :key=index
      ></mf-option></div>`,
        data() {
            return {
                options: [
                    {
                        value: "选项1",
                        label: "HTML"
                    },
                    {
                        value: "选项2",
                        label: "Css",
                        disabled: true
                    },
                    {
                        value: "选项3",
                        label: "JavaScript"
                    }
                ]
            }
        }
    }
    let wrapper = mount(Select, {
        propsData: {
            placeholder: "请选择",
            clearable: true
        },
        slots: {
            default: mfOption
        },

    });
    let vm = wrapper.vm;

    it('create', () => {
        expect(vm.$el.classList.contains('mf-select')).toBeTruthy();
        expect(vm.$el.querySelector('.mf-input')).toBeTruthy();
        vm.toggleOption();
        expect(vm.visible).toBeTruthy();
    })

    it('render options', () => {
        const options = vm.$el.querySelectorAll('.mf-select-menu__item');
        let result = [].every.call(options, (option, index) => {
            let text = option.querySelector('span').textContent;
            return text === vm.options[index].label;
        })
        expect(result).toBeTruthy();
    })

    it('disabled select', () => {
        vm.toggleOption();
        expect(vm.visible).toBeFalsy();
    })

    it('disabled option', () => {
        const options = vm.$el.querySelectorAll('.mf-select-menu__item');
        expect(options[1].classList.contains('is-disabled')).toBeTruthy();
        options[1].click();
        vm.$nextTick(() => {
            expect(vm.inputValue).toEqual('');
        })
    })

    it('clearable', () => {
        wrapper.setProps({
            value: "选项1"
        });
        wrapper.setData({
            inputHoving: true
        });
        vm = wrapper.vm;
        vm.$nextTick(() => {
            const clear = vm.$el.querySelector('.mf-icon-close-circle');
            expect(clear).toBeTruthy();
            clear.click();
            expect(vm.selectValue).toEqual('');
        })
    })

    // it('select', ()=> {
    //     const options = vm.$el.querySelectorAll('.mf-select-menu__item');
    //     // wrapper.setData({
    //     //     visible: true,
    //     //     hoverIndex: 0
    //     // })
    //     options[1].click();
    //     console.log(vm.selectValue);
    // })
})