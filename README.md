# vuepress-plugin-mermaid-next

> This plugin is only for `vuepress-next`

## Usage

### Install

```shell
# use npm
npm install mermaid vuepress-plugin-mermaid-next

# use yarn
yarn add mermaid vuepress-plugin-mermaid-next
```

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

### Custormize

You can config mermaid by using plugin settings.

The settings you configured will be use in `mermaid.initialize()`

Fully configuration fields can be find in [Mermaid - Configuration](https://mermaid-js.github.io/mermaid/#/./Setup?id=mermaidapi-configuration-defaults)

