import MermaidPlugin from './markdown-it-mermaidx'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export const mermaidPlugin = (opt: Record<string, string | number | boolean> = {}) => ({
  name: 'vuepress-plugin-mermaid-next',
  clientConfigFile: path.resolve(__dirname, '../client/config.js'),
  extendsMarkdown: (md: any) => {
    md.__mermaidConfig = opt
    md.use(MermaidPlugin)
  }
})

export default mermaidPlugin
