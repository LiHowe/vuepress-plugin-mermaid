"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const markdown_it_mermaidx_1 = tslib_1.__importDefault(require("./markdown-it-mermaidx"));
const utils_1 = require("@vuepress/utils");
exports.default = () => ({
    name: 'vuepress-plugin-markdown-mermaid',
    clientAppEnhanceFiles: utils_1.path.resolve(__dirname, './enhance.ts'),
    extendsMarkdown: (md) => {
        md.use(markdown_it_mermaidx_1.default);
    }
});
