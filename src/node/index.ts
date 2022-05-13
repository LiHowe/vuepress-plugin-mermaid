import MermaidPlugin from './markdown-it-mermaidx'
import { path } from '@vuepress/utils'

export default (opt: Record<string, string | number | boolean> = {}) => ({
  name: 'vuepress-plugin-markdown-mermaid',
  clientAppEnhanceFiles: path.resolve(__dirname, '../client/enhance.js'),
  extendsMarkdown: (md: any) => {
    md.__mermaidConfig = opt
    md.use(MermaidPlugin)
  }
})
