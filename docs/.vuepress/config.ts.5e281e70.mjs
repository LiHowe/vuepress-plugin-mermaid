// src/node/markdown-it-mermaidx.ts
import * as suitcase from "@ziho/suitcase";
var markdown_it_mermaidx_default = (md) => {
  const originFence = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args;
    const { info: languageType, content } = tokens[idx];
    if (content && languageType.trim() === "mermaid") {
      return `
      <h-mermaid 
      code="${suitcase.htmlEscape(content.trim())}"
      config="${JSON.stringify(md.__mermaidConfig).replace(/\"/g, "'")}"
      ></h-mermaid>
      `;
    }
    return `${originFence(...args)}`;
  };
};

// src/node/index.ts
import { getDirname, path } from "@vuepress/utils";
var __vite_injected_original_import_meta_url = "file:///Users/howe/Documents/GitHub/public/vuepress-plugin-mermaid/src/node/index.ts";
var __dirname = getDirname(__vite_injected_original_import_meta_url);
console.log(__dirname);
var node_default = (opt = {}) => ({
  name: "vuepress-plugin-mermaid-next",
  clientConfigFile: path.resolve(__dirname, "../client/config.js"),
  extendsMarkdown: (md) => {
    md.__mermaidConfig = opt;
    md.use(markdown_it_mermaidx_default);
  }
});

// docs/.vuepress/config.ts
import { defineUserConfig } from "vuepress";
var config_default = defineUserConfig({
  plugins: [
    node_default({})
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL25vZGUvbWFya2Rvd24taXQtbWVybWFpZHgudHMiLCAic3JjL25vZGUvaW5kZXgudHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2hvd2UvRG9jdW1lbnRzL0dpdEh1Yi9wdWJsaWMvdnVlcHJlc3MtcGx1Z2luLW1lcm1haWQvc3JjL25vZGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9ob3dlL0RvY3VtZW50cy9HaXRIdWIvcHVibGljL3Z1ZXByZXNzLXBsdWdpbi1tZXJtYWlkL3NyYy9ub2RlL21hcmtkb3duLWl0LW1lcm1haWR4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9ob3dlL0RvY3VtZW50cy9HaXRIdWIvcHVibGljL3Z1ZXByZXNzLXBsdWdpbi1tZXJtYWlkL3NyYy9ub2RlL21hcmtkb3duLWl0LW1lcm1haWR4LnRzXCI7aW1wb3J0ICogYXMgc3VpdGNhc2UgZnJvbSAnQHppaG8vc3VpdGNhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IChtZDogYW55KTogdm9pZCA9PiB7XG4gIGNvbnN0IG9yaWdpbkZlbmNlID0gbWQucmVuZGVyZXIucnVsZXMuZmVuY2UuYmluZChtZC5yZW5kZXJlci5ydWxlcylcbiAgbWQucmVuZGVyZXIucnVsZXMuZmVuY2UgPSAoLi4uYXJnczogYW55KSA9PiB7XG4gICAgY29uc3QgW3Rva2VucywgaWR4XSA9IGFyZ3NcbiAgICBjb25zdCB7IGluZm86IGxhbmd1YWdlVHlwZSwgY29udGVudCB9ID0gdG9rZW5zW2lkeF1cbiAgICBpZiAoY29udGVudCAmJiBsYW5ndWFnZVR5cGUudHJpbSgpID09PSAnbWVybWFpZCcpIHtcbiAgICAgIHJldHVybiBgXG4gICAgICA8aC1tZXJtYWlkIFxuICAgICAgY29kZT1cIiR7c3VpdGNhc2UuaHRtbEVzY2FwZShjb250ZW50LnRyaW0oKSl9XCJcbiAgICAgIGNvbmZpZz1cIiR7SlNPTi5zdHJpbmdpZnkobWQuX19tZXJtYWlkQ29uZmlnKS5yZXBsYWNlKC9cXFwiL2csICdcXCcnKX1cIlxuICAgICAgPjwvaC1tZXJtYWlkPlxuICAgICAgYFxuICAgIH1cbiAgICByZXR1cm4gYCR7b3JpZ2luRmVuY2UoLi4uYXJncyl9YFxuICB9XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9ob3dlL0RvY3VtZW50cy9HaXRIdWIvcHVibGljL3Z1ZXByZXNzLXBsdWdpbi1tZXJtYWlkL3NyYy9ub2RlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaG93ZS9Eb2N1bWVudHMvR2l0SHViL3B1YmxpYy92dWVwcmVzcy1wbHVnaW4tbWVybWFpZC9zcmMvbm9kZS9pbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvaG93ZS9Eb2N1bWVudHMvR2l0SHViL3B1YmxpYy92dWVwcmVzcy1wbHVnaW4tbWVybWFpZC9zcmMvbm9kZS9pbmRleC50c1wiO2ltcG9ydCBNZXJtYWlkUGx1Z2luIGZyb20gJy4vbWFya2Rvd24taXQtbWVybWFpZHgnXG5pbXBvcnQgeyBnZXREaXJuYW1lLCBwYXRoIH0gZnJvbSAnQHZ1ZXByZXNzL3V0aWxzJ1xuXG5jb25zdCBfX2Rpcm5hbWUgPSBnZXREaXJuYW1lKGltcG9ydC5tZXRhLnVybClcblxuY29uc29sZS5sb2coX19kaXJuYW1lKVxuXG5leHBvcnQgZGVmYXVsdCAob3B0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPiA9IHt9KSA9PiAoe1xuICBuYW1lOiAndnVlcHJlc3MtcGx1Z2luLW1lcm1haWQtbmV4dCcsXG4gIGNsaWVudENvbmZpZ0ZpbGU6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9jbGllbnQvY29uZmlnLmpzJyksXG4gIGV4dGVuZHNNYXJrZG93bjogKG1kOiBhbnkpID0+IHtcbiAgICBtZC5fX21lcm1haWRDb25maWcgPSBvcHRcbiAgICBtZC51c2UoTWVybWFpZFBsdWdpbilcbiAgfVxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2hvd2UvRG9jdW1lbnRzL0dpdEh1Yi9wdWJsaWMvdnVlcHJlc3MtcGx1Z2luLW1lcm1haWQvZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9ob3dlL0RvY3VtZW50cy9HaXRIdWIvcHVibGljL3Z1ZXByZXNzLXBsdWdpbi1tZXJtYWlkL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvaG93ZS9Eb2N1bWVudHMvR2l0SHViL3B1YmxpYy92dWVwcmVzcy1wbHVnaW4tbWVybWFpZC9kb2NzLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgbWVybWFpZFBsdWdpbiBmcm9tICcuLi8uLi9zcmMvbm9kZS9pbmRleCdcbmltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tICd2dWVwcmVzcydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBtZXJtYWlkUGx1Z2luKHt9KVxuICBdXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnWixZQUFZLGNBQWM7QUFFMWEsSUFBTywrQkFBUSxDQUFDLE9BQWtCO0FBQ2hDLFFBQU0sY0FBYyxHQUFHLFNBQVMsTUFBTSxNQUFNLEtBQUssR0FBRyxTQUFTLEtBQUs7QUFDbEUsS0FBRyxTQUFTLE1BQU0sUUFBUSxJQUFJLFNBQWM7QUFDMUMsVUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJO0FBQ3RCLFVBQU0sRUFBRSxNQUFNLGNBQWMsUUFBUSxJQUFJLE9BQU87QUFDL0MsUUFBSSxXQUFXLGFBQWEsS0FBSyxNQUFNLFdBQVc7QUFDaEQsYUFBTztBQUFBO0FBQUEsY0FFVSxvQkFBVyxRQUFRLEtBQUssQ0FBQztBQUFBLGdCQUNoQyxLQUFLLFVBQVUsR0FBRyxlQUFlLEVBQUUsUUFBUSxPQUFPLEdBQUk7QUFBQTtBQUFBO0FBQUEsSUFHbEU7QUFDQSxXQUFPLEdBQUcsWUFBWSxHQUFHLElBQUk7QUFBQSxFQUMvQjtBQUNGOzs7QUNoQkEsU0FBUyxZQUFZLFlBQVk7QUFEeU0sSUFBTSwyQ0FBMkM7QUFHM1IsSUFBTSxZQUFZLFdBQVcsd0NBQWU7QUFFNUMsUUFBUSxJQUFJLFNBQVM7QUFFckIsSUFBTyxlQUFRLENBQUMsTUFBaUQsQ0FBQyxPQUFPO0FBQUEsRUFDdkUsTUFBTTtBQUFBLEVBQ04sa0JBQWtCLEtBQUssUUFBUSxXQUFXLHFCQUFxQjtBQUFBLEVBQy9ELGlCQUFpQixDQUFDLE9BQVk7QUFDNUIsT0FBRyxrQkFBa0I7QUFDckIsT0FBRyxJQUFJLDRCQUFhO0FBQUEsRUFDdEI7QUFDRjs7O0FDYkEsU0FBUyx3QkFBd0I7QUFFakMsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixTQUFTO0FBQUEsSUFDUCxhQUFjLENBQUMsQ0FBQztBQUFBLEVBQ2xCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
