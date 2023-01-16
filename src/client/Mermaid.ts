import { defineComponent, h, onBeforeUnmount, onMounted, ref } from 'vue'
import { nanoid } from 'nanoid'
import Mermaid from 'mermaid'
import { mergeThemeConfig } from '../shared/theme'
import type { MermaidPluginOptions } from '../shared/type'
import type { MermaidConfig } from 'mermaid'

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

    let pluginConfig: MermaidPluginOptions = {
      startOnLoad: false,
      securityLevel: 'loose'
    }
    // parse the config string
    try {
      pluginConfig = Object.assign(
        pluginConfig,
        JSON.parse(props.config?.replace(/\'/g, '\"') || '{}')
      )
    } catch (e) {
      console.error(e)
    }

    let mo: MutationObserver

    const render = async () => {
      try {
        const isDark = document.documentElement.classList.contains('dark')
        const config = mergeThemeConfig(pluginConfig, isDark)
        Mermaid.mermaidAPI.initialize({ ...config } as MermaidConfig)
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
