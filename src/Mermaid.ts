import { defineComponent } from 'vue'
import { htmlUnescape } from '@vuepress/shared'
import { ref, onBeforeMount } from 'vue'
import { nanoid } from 'nanoid'
import type { Mermaid } from 'mermaid'

export default defineComponent({
  name: 'Mermaid',
  props: {
    code: {
      type: String,
      required: true,
      default: ''
    }
  },
  setup(prop) {
    function getMermaid (): Promise<Mermaid> {
      return new Promise(resolve => {
        import('mermaid').then(({ default: Mermaid }) => {
          Mermaid.mermaidAPI.initialize({
            startOnLoad: false,
            theme: 'default',
          })
          resolve(Mermaid)
        })
      })
    }

    const formattedCode = ref('')
    
    onBeforeMount(async () => {
      const Mermaid = await getMermaid()
      const content = prop.code
      const formatted = htmlUnescape(content)
      try {
        Mermaid.mermaidAPI.render('mermaid_' + nanoid(4), formatted, svgCode => {
          formattedCode.value = svgCode
        })
      } catch (err) {
        formattedCode.value = `<pre>${err}</pre>`
      }
    })
    return () => `<div class="mermaid-wrapper">${formattedCode}</div>`
  }
})
