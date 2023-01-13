import type { MermaidConfig } from 'mermaid'
import type { Themes } from './theme'

export type MermaidPluginOptions = Omit<MermaidConfig, 'theme'> & {
  darkTheme?: Theme | Themes,
  theme?: Theme | Themes,
}

export type ThemeVariables = Partial<{
  background: string,
  fontSize: string,
  primaryColor: string,
  noteBkgColor: string,
  noteTextColor: string,
  darkMode: boolean,
}> & { [key: string]: string | boolean }

export type Theme = {
  theme: string,
  variables: Partial<ThemeVariables>,
}
