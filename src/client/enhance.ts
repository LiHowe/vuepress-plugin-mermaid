import { defineClientAppEnhance } from '@vuepress/client'
import Mermaid from './Mermaid'

export default defineClientAppEnhance(({ app }) => {
  if (!__VUEPRESS_SSR__) {
    customElements.define('h-mermaid', Mermaid)
    app.config.compilerOptions.isCustomElement = tag => tag.startsWith('h-')
  }
})
