import { defineComponent, h } from 'vue'
import { onMounted } from 'vue'
import { nanoid } from 'nanoid'

interface Mermaid {
  init: any
}
declare global {
  interface Window {
    __mermaid: Mermaid
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
      defualt: ''
    }
  },
  setup(props) {
    const id = 'mermaid_' + nanoid(4)
    let configObj = {
      startOnLoad: false
    }
    try {
      configObj = JSON.parse(props.config?.replace(/\'/g, '\"') || '{}')
    } catch (e) {
      console.error(e)
    }

    function getMermaid (): Promise<Mermaid> {
      return new Promise(resolve => {
        if (window.__mermaid) {
          resolve(window.__mermaid)
          return
        }
        import('mermaid').then(({ default: Mermaid }) => {
          window && (window.__mermaid = Mermaid)
          Mermaid.mermaidAPI.initialize(configObj)
          resolve(Mermaid)
        })
      })
    }

    onMounted(async () => {
      const mermaid = await getMermaid()
      try {
        mermaid.init(undefined, `#${id}`)
      } catch (err) {
        console.error(err)
      }
    })
    return () => h('div', {
      class: 'mermaid',
      id
    }, props.code)
  }
})
