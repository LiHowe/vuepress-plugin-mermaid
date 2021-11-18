"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const shared_1 = require("@vuepress/shared");
const vue_2 = require("vue");
const nanoid_1 = require("nanoid");
exports.default = vue_1.defineComponent({
    name: 'Mermaid',
    props: {
        code: {
            type: String,
            required: true,
            default: ''
        }
    },
    setup(prop) {
        function getMermaid() {
            return new Promise(resolve => {
                Promise.resolve().then(() => __importStar(require('mermaid'))).then(({ default: Mermaid }) => {
                    Mermaid.mermaidAPI.initialize({
                        startOnLoad: false,
                        theme: 'default',
                    });
                    resolve(Mermaid);
                });
            });
        }
        const formattedCode = vue_2.ref('');
        vue_2.onBeforeMount(async () => {
            const Mermaid = await getMermaid();
            const content = prop.code;
            const formatted = shared_1.htmlUnescape(content);
            try {
                Mermaid.mermaidAPI.render('mermaid_' + nanoid_1.nanoid(4), formatted, svgCode => {
                    formattedCode.value = svgCode;
                });
            }
            catch (err) { }
        });
        return () => `<div class="mermaid-wrapper">${formattedCode}</div>`;
    }
});
