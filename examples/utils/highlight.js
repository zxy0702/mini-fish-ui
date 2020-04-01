import Hljs from 'highlight.js';
import 'highlight.js/styles/tomorrow-night-eighties.css';

let Highlight = {};
Highlight.install = function(Vue) {
    Vue.directive('highlight', function(el) {
        let blocks = el.querySelectorAll("pre code");
        blocks.forEach((block) => {
            Hljs.highlightBlock(block);
        })
    })
}
export default Highlight