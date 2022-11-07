import { defineComponent, getCurrentInstance, h, onBeforeMount, onMounted, onUpdated, ref } from 'vue'
import { nanoid } from 'nanoid'

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
    // let Mermaid
    const Mermaid = getCurrentInstance()?.appContext.config.globalProperties.$mermaid
    const render = async () => {
      if (!Mermaid) {
        Mermaid.mermaidAPI.initialize(configObj)
      }
      Mermaid.mermaidAPI.render(id, props.code, svgCode => {
        content.value = svgCode
      })
    }
    // @ts-ignore
    if (__VUEPRESS_DEV__) onUpdated(render)
    
    onBeforeMount(render)
    return () =>
      h('div', {
        id,
        ref: el,
        class: ['mermaid-svg-wrapper', 'mermaid'],
        innerHTML: content.value
      })
  }
})
