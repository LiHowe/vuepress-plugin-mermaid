import { defineComponent, h } from 'vue'
import { onMounted, onUpdated } from 'vue'
import { nanoid } from 'nanoid'
import Mermaid from 'mermaid'

interface Mermaid {
  init: any
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
      defualt: ''
    }
  },
  setup(props) {
    const id = 'mermaid_' + nanoid(4)
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
      Mermaid.mermaidAPI.render(`mermaid_${nanoid(4)}`, props.code, svgCode => {
        document.querySelector(`#${id}`)!.innerHTML = svgCode
      })
    }
    
    Mermaid.mermaidAPI.initialize(configObj)
    // dev develop
    // @ts-ignore
    if (__VUEPRESS_DEV__) onUpdated(render)

    onMounted(render)
    return () => h('div', {
      class: 'mermaid-wrapper'
    }, [
      h('div', {
        id,
        class: 'mermaid-svg-wrapper'
      }, props.code)
    ])
  }
})
