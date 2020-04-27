import { shallowMount } from '@vue/test-utils';
import Button from '../../packages/Button/src/main.vue';
import { findTestWrapper } from '../util';

describe('Button', () => {
    let wrapper,vm;

    it('create', () => {
        wrapper = shallowMount(Button)
        expect(wrapper.contains('button')).toBe(true);
    })

    it('size', () => {
        wrapper = shallowMount(Button, {
            propsData: {
                size: 'small'
            }
        });
        vm = wrapper.vm;
        expect(vm.$el.classList.contains('mf-button--small')).toBeTruthy();
    })

    it('plain', () => {
        wrapper = shallowMount(Button, {
            propsData: {
                plain: true
            }
            
        });
        vm = wrapper.vm;
        expect(vm.$el.classList.contains('is-plain')).toBeTruthy();
    })

    it('round', () => {
        wrapper = shallowMount(Button, {
            propsData: {
                round: true
            }
        });
        vm = wrapper.vm;
        expect(vm.$el.classList.contains('is-round')).toBeTruthy();
    })

    it('circle', () => {
        wrapper = shallowMount(Button, {
            propsData: {
                circle: true
            }
        });
        vm = wrapper.vm;
        expect(vm.$el.classList.contains('is-circle')).toBeTruthy();
    })

    it('disabled', () => {
        wrapper = shallowMount(Button, {
            propsData: {
                disabled: true
            }
        });
        vm = wrapper.vm;
        expect(vm.$el.classList.contains('is-disabled')).toBeTruthy();
    })

    it('icon', () => {
        wrapper = shallowMount(Button, {
            propsData: {
                icon: 'mf-icon-check'
            }
        });
        vm = wrapper.vm;
        expect(vm.$el.querySelector('.mf-icon-check')).toBeTruthy();
    })

    it('text', ()=> {
        wrapper = shallowMount(Button, {
            propsData: {
                type: 'text'
            }
        });
        vm = wrapper.vm;
        expect(vm.$el.classList.contains('mf-button--text')).toBeTruthy();
    })

    it('click', () => {
        vm = shallowMount(Button);
        const button = findTestWrapper(vm, 'button').at(0);
        button.trigger('click');
        expect(vm.emitted().click).toBeTruthy();
    })
})