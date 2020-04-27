import { shallowMount, mount } from '@vue/test-utils';
import Input from '../../packages/input/src/main.vue';
import { findTestWrapper } from '../util';

describe('input', () => {
    let wrapper, vm;

    it('create', () => {
        wrapper = shallowMount(Input, {
            propsData: {
                placeholder: "请输入内容",
                value: 'input'
            }
        });
        vm = wrapper.vm;
        const input = findTestWrapper(wrapper, 'input').at(0);
        expect(input.element.getAttribute("placeholder")).toEqual("请输入内容");
        expect(vm.$el.classList.contains("mf-input")).toBeTruthy();
        expect(input.element.value).toEqual("input");
    })

    it('disabled', () => {
        wrapper = shallowMount(Input, {
            propsData: {
                disabled: true
            }
        });
        const input = findTestWrapper(wrapper, 'input').at(0);
        expect(input.element.getAttribute("disabled")).toBeTruthy();
    })

    it('clear', () => {
        wrapper = mount(Input, {
            propsData: {
                value: '输入框的值',
                clearable: true
            }
        });
        wrapper.setData({
            hoving: true
        });
        vm = wrapper.vm;
        vm.$nextTick(() => {
            const clear = findTestWrapper(wrapper, '.mf-input__clear');
            clear.trigger('click');
            expect(wrapper.emitted().input).toBeTruthy();
            expect(wrapper.emitted().clear).toBeTruthy();
        });
    })

    it('password', () => {
        wrapper = mount(Input, {
            propsData: {
                type: "password",
                showPassword: true
            }
        });
        wrapper.setData({
            focused: true
        });
        vm = wrapper.vm;
        vm.$nextTick(() => {
            const eye = wrapper.findAll('.mf-icon-eye');
            expect(eye).toBeTruthy();
            eye.trigger('click');
            expect(vm.inputType).toEqual('text');
        })
    })

    it('suffixIcon', ()=> {
        wrapper = shallowMount(Input, {
            propsData: {
                suffixIcon: "mf-icon-delete"
            }
        });
        vm = wrapper.vm;
        vm.$nextTick(() => {
            expect(vm.$el.querySelector('.mf-icon-delete')).toBeTruthy();
        })
    });

    it('prefixIcon', ()=> {
        wrapper = shallowMount(Input, {
            propsData: {
                prefixIcon: "mf-icon-search"
            }
        });
        vm = wrapper.vm;
        vm.$nextTick(()=> {
            expect(vm.$el.querySelector('.mf-icon-search')).toBeTruthy();
        })
    })

    it('size', () => {
        wrapper = mount(Input, {
            propsData: {
                size: 'large'
            }
        });
        vm = wrapper.vm;
        expect(vm.$el.classList.contains('mf-input--large')).toBeTruthy();
    })
})