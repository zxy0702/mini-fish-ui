import { shallowMount } from '@vue/test-utils';
import Layout from '../../packages/layout/src/main.vue';
import Header from '../../packages/header/src/main.vue';
import Main from '../../packages/main/src/main.vue';
import Aside from '../../packages/aside/src/main.vue';
import Footer from '../../packages/footer/src/main.vue';
import '../util';
describe('Layout', ()=> {
    let wrapper, vm;
    it('create', ()=>{
        wrapper = shallowMount(Layout);
        vm = wrapper.vm;
        expect(vm.$el.classList.contains('mf-layout')).toBeTruthy();
    });

    it('vertical', ()=> {
        wrapper = shallowMount(Layout, {
            slots: {
                default: `<mf-header>header</mf-header>
                <mf-main>main</mf-main>`
            }
        });
        vm = wrapper.vm;
        expect(vm.$el.classList.contains('is-vertical')).toBeTruthy();
    })
})

describe('Header', ()=> {
    let wrapper = shallowMount(Header, {
        propsData: {
            height: '60px'
        }
    });
    let vm = wrapper.vm;

    it('create Header', ()=> {
        expect(vm.$el.classList.contains('mf-header')).toBeTruthy();
    })

    it('Header height', ()=> {
        expect(vm.$el.style.height).toEqual('60px');
    })
})

describe('Main', ()=> {
    it('create Main', ()=> {
        let wrapper = shallowMount(Main);
        let vm = wrapper.vm;
        expect(vm.$el.classList.contains('mf-main')).toBeTruthy();
    })
})

describe('Aside',()=> {
    let wrapper = shallowMount(Aside, {
        propsData: {
            width: '250px'
        }
    })
    let vm = wrapper.vm;

    it('create Aside', ()=> {
        expect(vm.$el.classList.contains('mf-aside')).toBeTruthy();
    })

    it('Aside width', ()=> {
        expect(vm.$el.style.width).toEqual('250px');
    })
})

describe('Footer', ()=> {
    let wrapper = shallowMount(Footer, {
        propsData: {
            height: '60px'
        }
    });
    let vm = wrapper.vm;

    it('create Footer', ()=> {
        expect(vm.$el.classList.contains('mf-footer')).toBeTruthy();
    })
    it('Footer height', ()=> {
        expect(vm.$el.style.height).toEqual('60px');
    })
})