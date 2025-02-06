import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
  build: {
    cssCodeSplit: false,
    minify: 'terser',
    terserOptions: {
      compress: true,
      mangle: true,
      format: {
        comments: false
      }
    },
    rollupOptions: {
      external: ['lit'],
      output: {
        globals: {
          lit: 'LitElement'
        },
        entryFileNames: 'wui-lib.js',
        assetFileNames: 'wui-lib.[ext]'
      }
    }
  },
  optimizeDeps: {
    exclude: ['src/main.ts']
  }
})
