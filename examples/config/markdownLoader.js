const markdown = require('markdown-it');

function markLoader(source) {
    const md = markdown({
        html: true,
        typographer: true
    });

    let content = md.render(source);
    var codes = content.match(/<pre><code class="language-html[\s\S]*?<\/pre>/g) || [];
    for (code of codes) {
        content = content.replace(code, `<demo-block>
        <template v-pre>${code}</template>
        </demo-block>`);
    }
    return (
        `<template>
            <div class='markdown-content'>${content}</div>
        </template>
        `
    );
}

module.exports = markLoader;