"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("@vuepress/shared");
exports.default = (md) => {
    const originFence = md.renderer.rules.fence.bind(md.renderer.rules);
    md.renderer.rules.fence = (...args) => {
        const [tokens, idx] = args;
        const { info: languageType, content } = tokens[idx];
        if (!content)
            return '';
        if (languageType.trim() === 'mermaid') {
            return `
      <Mermaid>
        <pre>
        ${shared_1.htmlEscape(content)}
        </pre>
      </Mermaid>
      `;
        }
        return `${originFence(...args)}`;
    };
};
