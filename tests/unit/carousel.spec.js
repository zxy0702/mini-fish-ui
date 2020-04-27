import {mount} from '@vue/test-utils';
import Carousel from '../../packages/carousel/src/main.vue';
import '../util';

describe('Carousel', ()=> {

    let mfCarouselItem = `<mf-carousel-item v-for="item in 4" :key="item">
    <h3 class="small">{{ item }}</h3>
  </mf-carousel-item>`;

    let wrapper = mount(Carousel, {
        slots: {
            default: mfCarouselItem
        },
        propsData: {
            trigger: 'click',
            indicatorPosition: 'outside'
        }
    });
    let vm = wrapper.vm;

    it('create', ()=> {
        expect(vm.$el.classList.contains('mf-carousel')).toBeTruthy();
        expect(vm.$el.querySelectorAll('.mf-carousel__item').length).toEqual(4);
    })

    it('click', (done)=> {
        const indicator  = vm.$el.querySelectorAll('.mf-carousel__indicator');
        indicator[1].click();
        expect(indicator[1].classList.contains('is-active'));
        const carouselItem = vm.$el.querySelectorAll('.mf-carousel__item');
        setTimeout(()=> {
            expect(carouselItem[1].classList.contains('is-active')).toBeTruthy();
            done();
        },10)
    });

    it('vertical', ()=> {
        let wrapper = mount(Carousel, {
            slots: {
                default: mfCarouselItem
            },
            propsData: {
                direction: 'vertical'
            }
        });
        let vm = wrapper.vm;
        expect(vm.$el.querySelectorAll('.mf-carousel__indicators--vertical')).toBeTruthy();
    })

    it('autoplay and initialIndex', (done)=> {
        let wrapper = mount(Carousel, {
            slots: {
                default: mfCarouselItem
            },
            propsData: {
                trigger: 'click',
                interval: 500,
                initialIndex: 1
            }
        });
        let vm = wrapper.vm;
        const carouselItem = vm.$el.querySelectorAll('.mf-carousel__item');
        setTimeout(()=> {
            expect(carouselItem[1].classList.contains('is-active')).toBeTruthy();
            setTimeout(()=> {
                expect(carouselItem[2].classList.contains('is-active')).toBeTruthy();
                done();
            },600)
            done();
        },10);
    })

    it('card',()=> {
        let wrapper = mount(Carousel, {
            slots: {
                default: mfCarouselItem
            },
            propsData: {
                type: 'card',
                trigger: 'click'
            }
        });
        let vm = wrapper.vm;

        const item = vm.$el.querySelectorAll('.mf-carousel__item');
        setTimeout(()=> {
            expect(item[0].classList.contains('is-active')).toBeTruthy();
            expect(item[1].classList.contains('is-animating')).toBeTruthy();
            expect(item[3].classList.contains('is-animating')).toBeTruthy();

            const indicator = vm.$el.querySelectorAll('.mf-carousel__indicator');
            indicator[1].click();

            setTimeout(()=> {
                expect(item[1].classList.contains('is-active')).toBeTruthy();
                expect(item[0].classList.contains('is-animating')).toBeTruthy();
                expect(item[2].classList.contains('is-animating')).toBeTruthy();
            },10)
        }, 10)
    })
})