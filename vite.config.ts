import { defineConfig } from 'vite'
// import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import typescript2 from 'rollup-plugin-typescript2'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: ['packages/src/*/**.vue'],
      tsconfigOverride: {
        compilerOptions: {
          outDir: 'dist',
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ['vite.config.ts'],
    }),
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: 'packages/src/components/main.ts',
      name: 'vUIComponent',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `vUIComponent.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'packages/src/components/main.ts'),
      },
      external: ['vue'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'main.css') return 'vUIComponent.css'
          return assetInfo.name
        },
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  server: { port: 3800 },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'packages/src'),
    },
  },
})
