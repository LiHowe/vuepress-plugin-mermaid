# vuepress-plugin-mermaid-next

![npm](https://img.shields.io/npm/v/vuepress-plugin-mermaid-next?style=flat-square)
![npm](https://img.shields.io/npm/dm/vuepress-plugin-mermaid-next?style=flat-square)
![mv](https://img.shields.io/static/v1?label=mermaid&message=^9.2.1&color=blue&style=flat-square)

> This plugin is only for [`vuepress-next`](https://vuepress.github.io)

![dark theme](https://s2.loli.net/2023/01/13/NTaYjKcpb1L8wZt.gif)

## Installation

```shell
# use npm
npm install mermaid vuepress-plugin-mermaid-next
```

## Usage

### `.vuepress/config.ts` or (`config.js`)

```typescript
import { MermaidPlugin, Themes } from 'vuepress-plugin-mermaid-next'

export default {
  plugins: [
    MermaidPlugin({
      theme: Themes.sky,
      darkTheme: Themes.forest, // not required, default value is `dark`
    }),
  ],
}
```

The plugin support out-of-the-box dark mode , you can specified dark mode theme with `darkTheme` field.
If `darkTheme` is null or unavaliable value, it use `dark` as default.

### Mermaid config

You can use the plugin config to customize the Mermaid, the config will be used for `mermaid.initialize(config)`

The full list of Mermaid configuration can be found in [Mermaid - Configuration](https://mermaid-js.github.io/mermaid/#/./Setup?id=mermaidapi-configuration-defaults)

### Theme config

Except Mermaid built-in theme, the plugin add some additional themes like:

+ `sky`: light blue
![sky theme](https://s2.loli.net/2023/01/13/e8Y3Rqu4KowCjN6.png)
+ `ocean`: dark blue

#### Theme customization

If you want to modify the part of theme colors, you can use `themeVariables` field to overwrite the theme color configuration.

The full list of `themeVariables` can be found in [Mermaid Theming](https://mermaid.js.org/config/theming.html)

```ts
import { MermaidPlugin, Themes } from 'vuepress-plugin-mermaid-next'
export default {
  plugins: [
    MermaidPlugin({
      theme: Themes.sky,
      themeVariables: {
        fontSize: '14px',
        primaryColor: '#FFC3A1',
      }
    })
  ]
}
```

Or you want to create a new theme, just use `registerTheme(id, themeVariables)`.

```ts
import { MermaidPlugin, Themes, registerTheme } from 'vuepress-plugin-mermaid-next'

const fire = registerTheme('fire', {
  background: '#FFC3A1',
  fontSize: '14px',
  primaryColor: '#FFC3A1',
  noteBkgColor: '#F0997D',
  noteTextColor: '#333',
  lineColor: '#A75D5D',
})

export default {
  plugins: [
    MermaidPlugin({
      theme: fire,
    })
  ]
}
```

## Feature

+ [x] Dark mode supported
+ [x] mermaid config supported
+ [x] Preset themes
+ [ ] External Diagrams(MindMap)
