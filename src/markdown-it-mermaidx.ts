import { htmlEscape } from '@vuepress/shared'

export default (md: any): void => {
  const originFence = md.renderer.rules.fence.bind(md.renderer.rules)
  md.renderer.rules.fence = (...args: any) => {
    const [tokens, idx] = args
    const { info: languageType, content } = tokens[idx]
    if (!content) return ''
    if (languageType.trim() === 'mermaid') {
      return `<Mermaid :code="${htmlEscape(content.trim())}"></Mermaid>`
    }
    return `${originFence(...args)}`
  }
}
