import { mount } from '@vue/test-utils';
import '../util';

describe('InfiniteScroll', () => {
    let wrapper = mount({
        template: `
            <ul
            class="infinite-list"
            v-infinite-scroll="load"
            style="height:120px;overflow:auto"
            >
                <li v-for="i in count" height="50px">{{ i }}</li>
            </ul>
        `,
        data() {
            return {
                count: 5
            }
        },
        methods: {
            load() {
                this.count += 2;
            }
        }
    });
    let vm = wrapper.vm;
    it('create', (done) => {
        wrapper.trigger('scroll');
        setTimeout(() => {
            expect(vm.count).toEqual(7);
            done();
        }, 500)
    })
})