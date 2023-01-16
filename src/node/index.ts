import markdownMermaid from './markdown-it-mermaidx.js'
import { getDirname, path } from '@vuepress/utils'
import type { MermaidPluginOptions } from '../shared/type'

const __dirname = getDirname(import.meta.url)

const MermaidPlugin = (opt: MermaidPluginOptions) => ({
  name: 'vuepress-plugin-mermaid-next',
  clientConfigFile: path.resolve(__dirname, '../client/config.js'),
  extendsMarkdown: (md: any) => {
    md.__mermaidConfig = opt
    md.use(markdownMermaid)
  },
})

// export default mermaidPlugin
export { Themes } from '../shared/theme'
export { registerTheme } from '../shared/theme/utils.js'
export { MermaidPlugin }
