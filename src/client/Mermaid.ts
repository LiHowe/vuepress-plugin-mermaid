import { defineComponent, h, onBeforeUnmount, onMounted, ref } from 'vue'
import { nanoid } from 'nanoid'
import Mermaid from 'mermaid'
// import type { MermaidConfig } from 'mermaid'

declare global {
  interface Window {
    _Mermaid: any
  }
}

export default defineComponent({
  name: 'Mermaid',
  props: {
    code: {
      type: String,
      required: true,
      default: ''
    },
    config: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const id = 'mermaid_' + nanoid(4)
    const el = ref<HTMLDivElement>()
    const content = ref('')

    let configObj = {
      startOnLoad: false,
      securityLevel: 'loose'
    }
    // parse the config string
    try {
      configObj = JSON.parse(props.config?.replace(/\'/g, '\"') || '{}')
    } catch (e) {
      console.error(e)
    }

    let mo: MutationObserver

    const render = async () => {
      try {
        const isDark = document.documentElement.classList.contains('dark')
        Mermaid.mermaidAPI.initialize({
          ...configObj,
          // @ts-ignore
          theme: configObj.theme ?? isDark ? 'dark' : 'default'
        })
        content.value = await Mermaid.mermaidAPI.renderAsync(id, props.code)
      } catch (e) {
        console.error(e)
      }
    }

    onMounted(async () => {
      await render()
      mo = new MutationObserver((record, ob) => {
        render()
      })
      mo.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      })
    })
    onBeforeUnmount(() => mo.disconnect())

    return () =>
      h('div', {
        ref: el,
        class: ['mermaid-svg-wrapper', 'mermaid'],
        innerHTML: content.value
      })
  }
})
