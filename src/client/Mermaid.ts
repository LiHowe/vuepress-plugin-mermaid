import { defineCustomElement, h, onBeforeMount, onMounted, onUpdated, ref } from 'vue'
import { nanoid } from 'nanoid'

export default defineCustomElement({
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
    let configObj = {
      startOnLoad: false,
      securityLevel: 'loose'
    }
    try {
      configObj = JSON.parse(props.config?.replace(/\'/g, '\"') || '{}')
    } catch (e) {
      console.error(e)
    }
    let Mermaid

    const render = async () => {
      if (!Mermaid) {
        Mermaid = (await import('mermaid')).default
        Mermaid = Mermaid
        Mermaid.mermaidAPI.initialize(configObj)
      }
      Mermaid.mermaidAPI.render(id, props.code, svgCode => {
        el.value!.innerHTML = svgCode
      })
    }
    // @ts-ignore
    if (__VUEPRESS_DEV__) onUpdated(render)

    onBeforeMount(render)
    return () =>
      h('div', {
        id,
        ref: el,
        class: ['mermaid-svg-wrapper', 'mermaid']
      }, props.code)
  }
})
