import type { MermaidPluginOptions, ThemeVariables } from '../type'

enum Themes {
  default = 'default',
  forest = 'forest',
  dark = 'dark',
  neutral = 'neutral',
  base = 'base',
  null = 'null',

  ocean = 'ocean',
  sky = 'sky',
  brown = 'brown',
}

const builtinTheme: Themes[] = [
  Themes.base,
  Themes.null,
  Themes.default,
  Themes.neutral,
  Themes.forest,
  Themes.dark,
]

const ExtraTheme = new Map<string, ThemeVariables>()

/**
 * merge the theme settings of mermaid
 * @param pluginOptions The Mermaid Plugin settings
 * @param isDark
 */
function mergeThemeConfig (
  pluginOptions: MermaidPluginOptions,
  isDark = false
) {
  const {
    theme = Themes.default,
    darkTheme = Themes.dark,
    themeVariables = {}
  } = pluginOptions;

  let finalTheme = isDark ? darkTheme : theme

  if (typeof finalTheme === 'string') {
    const isExtraTheme = ExtraTheme.has(finalTheme)
    const isBuiltinTheme = builtinTheme.includes(finalTheme as Themes)
    // user customized theme
    if (!isExtraTheme && !isBuiltinTheme) {
      return {
        ...pluginOptions,
        theme: isDark ? Themes.dark : Themes.default,
      }
    }
    // extra theme
    if (isExtraTheme) {
      return {
        ...pluginOptions,
        theme: Themes.base,
        themeVariables: {
          darkMode: isDark,
          ...ExtraTheme.get(finalTheme),
          ...themeVariables,
        }
      }
    }
    // built-in theme
    if (isBuiltinTheme) {
      return {
        ...pluginOptions,
        theme: finalTheme
      }
    }
  } else {
    // must be customized theme
    return {
      ...pluginOptions,
      theme: Themes.base,
      themeVariables: {
        darkMode: isDark,
        ...finalTheme.variables,
        ...themeVariables,
      },
    }
  }

  return pluginOptions
}

function _registerTheme(theme: string, variables: ThemeVariables, darkMode: boolean = false) {
  if (ExtraTheme.has(theme)) {
    console.warn(`theme ${theme} is already exist, old theme will be overwritten by the new one.`)
  }
  ExtraTheme.set(theme, {
    darkMode,
    ...variables
  })
}

// [light] - sky
_registerTheme(Themes.sky, {
  background: '#e3f2fd',
  fontSize: '14px',
  primaryColor: '#e3f2fd',
  noteBkgColor: '#fffada',
  noteTextColor: '#333',
  darkMode: false,
})

// [light] - ocean
_registerTheme(Themes.ocean, {
  background: '#e3f2fd',
  fontSize: '14px',
  primaryColor: '#e3f2fd',
  noteBkgColor: '#fffada',
  noteTextColor: '#333',
  darkMode: false,
})

// [dark] - charcoal
_registerTheme(Themes.brown, {
  background: '#1A120B',
  fontSize: '14px',
  primaryColor: '#1A120B',
  noteBkgColor: '#D5CEA3',
  noteTextColor: '#333',
  darkMode: true,
  lineColor: '#D5CEA3',
  primaryBorderColor: '#D5CEA3',
  attributeBackgroundColorOdd: '#3C2A21',
  attributeBackgroundColorEven: '#3C2A21'
})

export {
  Themes,
  ExtraTheme,
  mergeThemeConfig,
}
