import MermaidPlugin from './markdown-it-mermaidx.js'
import { getDirname, path } from '@vuepress/utils'
import type { MermaidPluginOptions } from '../shared/type'

const __dirname = getDirname(import.meta.url)

export const mermaidPlugin = (opt: MermaidPluginOptions) => ({
  name: 'vuepress-plugin-mermaid-next',
  clientConfigFile: path.resolve(__dirname, '../client/config.js'),
  extendsMarkdown: (md: any) => {
    md.__mermaidConfig = opt
    md.use(MermaidPlugin)
  }
})

export default mermaidPlugin
