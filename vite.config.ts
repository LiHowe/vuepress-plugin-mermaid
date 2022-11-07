import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/node/index.ts',
      formats: ['es', 'cjs']
    }
  }
})
