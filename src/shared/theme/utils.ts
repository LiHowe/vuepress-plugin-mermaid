import { ExtraTheme } from './index'
import type { Theme, ThemeVariables } from '../type'

/**
 * register new theme
 */
export function registerTheme(theme: string, variables: Partial<ThemeVariables>): Theme {
  if (ExtraTheme.has(theme)) {
    console.warn(`theme ${theme} is already exist, old theme will be override by the new one.`)
  }
  return {
    theme,
    variables,
  }
}
