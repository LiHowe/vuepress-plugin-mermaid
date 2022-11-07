import { defineClientConfig } from '@vuepress/client'
import Mermaid from './Mermaid'

export default defineClientConfig({
  enhance: async ({ app }) => {
    // if (!__VUEPRESS_SSR__) {
    //   app.config.globalProperties.$mermaid = (await import('mermaid')).default
    // }
    app.component('h-mermaid', Mermaid)
  }
})
