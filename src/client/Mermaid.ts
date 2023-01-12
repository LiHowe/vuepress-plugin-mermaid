import { defineComponent, h, onBeforeMount, ref } from 'vue'
import { nanoid } from 'nanoid'

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
  setup(props, context) {
    const id = 'mermaid_' + nanoid(4)
    const el = ref<HTMLDivElement>()
    const content = ref('')

    let configObj = {
      startOnLoad: false,
      securityLevel: 'loose'
    }
    try {
      configObj = JSON.parse(props.config?.replace(/\'/g, '\"') || '{}')
    } catch (e) {
      console.error(e)
    }
    const render = async () => {
      let Mermaid = window._Mermaid
      try {
        if (!Mermaid) {
          Mermaid = window._Mermaid = (await import('mermaid')).default
          Mermaid.mermaidAPI.initialize(configObj)
        }
        await Mermaid.mermaidAPI.render(id, props.code, (svgCode, bindFunctions) => {
          content.value = svgCode
        })
        // @ts-ignore
      } catch (e) {
        console.error(e)
      }
    }

    onBeforeMount(render)
    return () =>
      h('div', {
        ref: el,
        class: ['mermaid-svg-wrapper', 'mermaid'],
        innerHTML: content.value
      })
  }
})
