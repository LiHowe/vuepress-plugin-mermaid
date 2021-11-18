"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const client_1 = require("@vuepress/client");
const Mermaid_1 = tslib_1.__importDefault(require("./Mermaid"));
exports.default = client_1.defineClientAppEnhance(({ app }) => {
    app.component('Mermaid', Mermaid_1.default);
});
