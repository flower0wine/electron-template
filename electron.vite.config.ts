import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  main: {
    plugins: [
      externalizeDepsPlugin({
        exclude: ['mermaid', 'dompurify', 'pyodide']
      })
    ],
    resolve: {
      alias: {
        '@': resolve('src/main/'),
        '@shared': resolve('src/shared')
      }
    },
    build: {
      rollupOptions: {
        external: ['sharp', 'pyodide']
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@shared': resolve('src/shared')
      }
    }
  },
  renderer: {
    resolve: {
      alias: {
        '@': resolve('src/renderer/src'),
        '@shared': resolve('src/shared'),
      }
    },
    css: {
      postcss: {
        plugins: [tailwindcss(), autoprefixer()]
      }
    },
    plugins: [react()],
    build: {
      minify: 'esbuild'
    }
  }
})
