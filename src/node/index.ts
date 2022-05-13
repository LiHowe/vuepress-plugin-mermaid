import MermaidPlugin from './markdown-it-mermaidx'
import { path } from '@vuepress/utils'

export default (opt: Record<string, string | number | boolean> = {}) => ({
  name: 'vuepress-plugin-markdown-mermaid',
  clientAppEnhanceFiles: path.resolve(__dirname, '../client/enhance.js'),
  extendsMarkdown: (md: any) => {
    md.__mermaidConfig = opt
    md.use(MermaidPlugin)
  },
  extendsBundlerOptions: (bundlerOptions, app) => {
    // 修改 @vuepress/bundler-vite 的配置项
    if (app.options.bundler.name === '@vuepress/bundler-vite') {
      bundlerOptions.vuePluginOptions ??= {}
      bundlerOptions.vuePluginOptions.template ??= {}
      bundlerOptions.vuePluginOptions.template.compilerOptions ??= {}
      const isCustomElement = bundlerOptions.vuePluginOptions.template.compilerOptions.isCustomElement
      bundlerOptions.vuePluginOptions.template.compilerOptions.isCustomElement = (tag) => {
        if (isCustomElement?.(tag)) return true
        if (tag === 'h-mermaid') return true
      }
    }

    // 修改 @vuepress/bundler-webpack 的配置项
    if (app.options.bundler.name === '@vuepress/bundler-webpack') {
      bundlerOptions.vue ??= {}
      bundlerOptions.vue.compilerOptions ??= {}
      const isCustomElement = bundlerOptions.vue.compilerOptions.isCustomElement
      bundlerOptions.vue.compilerOptions.isCustomElement = (tag) => {
        if (isCustomElement?.(tag)) return true
        if (tag === 'h-mermaid') return true
      }
    }
  }
})
