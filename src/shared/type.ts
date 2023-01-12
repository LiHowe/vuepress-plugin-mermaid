import type { MermaidConfig } from 'mermaid'
import type { PluginThemes } from './theme'

export type MermaidPluginOptions = {
  darkTheme?: PluginThemes
} & MermaidConfig
