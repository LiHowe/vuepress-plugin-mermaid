# vuepress-plugin-mermaid-next

> 该插件仅适用于 [`vuepress-next`](https://vuepress.github.io)

## 安装

```shell
# use npm
npm install mermaid vuepress-plugin-mermaid-next

# use yarn
yarn add mermaid vuepress-plugin-mermaid-next
```

## 使用

### `.vuepress/config.ts` or (`config.js`)

```typescript
export default {
  // ...
  plugins: [
    // ... 其他插件
    ['mermaid-next', {}]
  ]
  // ...
}
// or 
import MermaidPlugin from 'vuepress-plugin-mermaid-next'
export default {
  plugins: [
    MermaidPlugin({
      // 插件选项
    })
  ]
}
```

### 自定义

你可以传入插件配置来自定义mermaid, 传入的配置将会用于 `mermaid.initialize()`

Mermaid 完整的配置字段可以查看 [Mermaid - Configuration](https://mermaid-js.github.io/mermaid/#/./Setup?id=mermaidapi-configuration-defaults)



## 功能

[x] Dark mode supported
[x] mermaid config supported
[ ] External Diagrams
[ ] Preset themes

