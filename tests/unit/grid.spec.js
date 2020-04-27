import { mount } from '@vue/test-utils';
import Row from '../../packages/row/src/main.vue';
import '../util';

describe('Grid', () => {
    let wrapper = mount(Row, {
        propsData: {
            gutter: 20
        },
        slots: {
            default:`<mf-col :span="6" :offset="6"><div class="grid-content"></div></mf-col>
            <mf-col :span="6" :offset="6"><div class="grid-content"></div></mf-col>`
        }
    });
    let vm = wrapper.vm;

    it('create', ()=> {
        expect(vm.$el.classList.contains('mf-row')).toBeTruthy();
        expect(vm.$el.querySelector('.mf-col')).toBeTruthy();
    })

    it('gutter', ()=> {
        expect(vm.$el.style.marginLeft).toEqual('-10px');
        expect(vm.$el.style.marginRight).toEqual('-10px');
        const col = vm.$el.querySelector('.mf-col');
        expect(col.style.paddingLeft).toEqual('10px');
        expect(col.style.paddingRight).toEqual('10px');
    })

    it('col span and offset', ()=> {
        const col = vm.$el.querySelector('.mf-col');
        expect(col.classList.contains('mf-col-6')).toBeTruthy();
        expect(col.classList.contains('mf-col-offset-6')).toBeTruthy();
    })

    it('flex', ()=> {
        let wrapper = mount(Row, {
            propsData: {
                flex: true,
                justify: 'center',
                align: 'bottom'
            }
        });
        let vm = wrapper.vm;
        expect(vm.$el.classList.contains('mf-row--flex')).toBeTruthy();
        expect(vm.$el.classList.contains('is-justify-center')).toBeTruthy();
        expect(vm.$el.classList.contains('is-align-bottom')).toBeTruthy();
    })

    it('responsive', ()=> {
        let wrapper = mount(Row, {
            propsData: {
                gutter: 20
            },
            slots: {
                default:`<mf-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                <div class="grid-content"></div>
                </mf-col>`
            }
        });
        let vm = wrapper.vm;
        const col = vm.$el.querySelector('.mf-col');
        expect(col.classList.contains('mf-col-xs-8')).toBeTruthy();
        expect(col.classList.contains('mf-col-sm-6')).toBeTruthy();
        expect(col.classList.contains('mf-col-md-4')).toBeTruthy();
        expect(col.classList.contains('mf-col-lg-3')).toBeTruthy();
        expect(col.classList.contains('mf-col-xl-1')).toBeTruthy();
    })
})