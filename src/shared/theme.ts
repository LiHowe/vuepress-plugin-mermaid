import type { MermaidPluginOptions } from './type'

export type MermaidInternalThemes =
  | 'default'
  | 'forest'
  | 'dark'
  | 'neutral'
  | 'base'
  | 'null'


export type MermaidExtraThemes =
  | 'ocean'
  | 'nightfall'
  | 'sunrise'

export type PluginThemes = MermaidInternalThemes & MermaidExtraThemes & string

const builtinTheme: MermaidInternalThemes[] = ['default', 'forest', 'dark', 'neutral', 'null', 'base']
/**
 * merge the theme settings of mermaid
 * @param mermaidConfig The Mermaid Plugin settings
 */
export function mergeThemeConfig (
  mermaidConfig: MermaidPluginOptions
) {
  const theme = mermaidConfig.theme
  debugger
  if (!theme) return mermaidConfig
  if (!MermaidTheme[theme]) {
    if (!builtinTheme.includes(theme.toLocaleLowerCase() as PluginThemes)) {
      mermaidConfig.theme = builtinTheme[0]
    }
    return mermaidConfig
  }
  // merge the preset themeCSS
  mermaidConfig.themeCSS = `
  ${MermaidTheme[theme]}
  ${mermaidConfig.themeCSS || ''}
  `
  console.log(mermaidConfig)
  return mermaidConfig
}

export abstract class MermaidTheme {
  static readonly ocean = `
  .node rect, .node polygon { fill: #3b82f633; stroke:#3b82f6; }
  .node div { color: #3b82f6 }
  .edgePath path { fill: #3b82f6 }
  .edgePath .path { stroke: #3b82f6 }
  .edgeLabel { color: #3b82f6 }
  .clusters rect { fill:#ffffde33 }
  `

  static readonly nightfall = `
  `

  static readonly sunrise = `
  `
}
