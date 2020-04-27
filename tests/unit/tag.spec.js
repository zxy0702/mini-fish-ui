import { shallowMount } from '@vue/test-utils';
import Tag from '../../packages/Tag/src/main.vue';
import { findTestWrapper } from '../util';

describe('tag', ()=> {
    let wrapper, vm;

    it('created',()=> {
        wrapper = shallowMount(Tag);
        vm = wrapper.vm;
        expect(vm.$el.classList.contains('mf-tag')).toBeTruthy();
        expect(vm.$el.classList.contains('mf-tag--light')).toBeTruthy();
    })

    it('effect', ()=> {
        wrapper = shallowMount(Tag, {
            propsData: {
                effect: 'dark'
            }
        });
        vm = wrapper.vm;
        expect(vm.$el.classList.contains('mf-tag--dark')).toBeTruthy();
    })

    it('close', ()=> {
        wrapper = shallowMount(Tag,{
            propsData: {
                closeable: true
            }
        });
        const icon= findTestWrapper(wrapper, 'i').at(0);
        expect(icon).toBeTruthy();
        icon.trigger('click');
        expect(wrapper.emitted().close).toBeTruthy();
    })

    it('size and type', ()=> {
        wrapper = shallowMount(Tag, {
            propsData: {
                size: 'large',
                type: 'green'
            }
        });
        vm= wrapper.vm;
        expect(vm.$el.classList.contains('mf-tag--large')).toBeTruthy();
        expect(vm.$el.classList.contains('mf-tag--green')).toBeTruthy();
    });
})