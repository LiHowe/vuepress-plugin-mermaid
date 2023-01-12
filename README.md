# vuepress-plugin-mermaid-next

[中文说明](./README_ZH.md)

> This plugin is only for [`vuepress-next`](https://vuepress.github.io)

## Installation

```shell
# use npm
npm install mermaid vuepress-plugin-mermaid-next

# use yarn
yarn add mermaid vuepress-plugin-mermaid-next
```

## Usage

### `.vuepress/config.ts` or (`config.js`)

```typescript
export default {
  // ...
  plugins: [
    // ...other plugins
    ['mermaid-next', {}]
  ]
  // ...
}
// or 
import MermaidPlugin from 'vuepress-plugin-mermaid-next'
export default {
  plugins: [
    MermaidPlugin({
      // *optional, plugin option
    })
  ]
}
```

### Customization

You can config mermaid by using plugin settings.

The settings you configured will be use in `mermaid.initialize()`

Fully configuration fields can be find in [Mermaid - Configuration](https://mermaid-js.github.io/mermaid/#/./Setup?id=mermaidapi-configuration-defaults)


## Feature

[x] Dark mode supported
[x] mermaid config supported
[ ] External Diagrams
[ ] Preset themes

