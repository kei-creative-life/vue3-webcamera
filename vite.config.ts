import { defineConfig } from 'vite'
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
      include: ['src/components/**/*.vue'],
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
      entry: 'src/components/v-ui-component.ts',
      name: 'v-ui-component',
      fileName: (format) => `v-ui-component.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/framework.ts'),
      },
      external: ['vue'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'main.css') return 'my-library-vue-ts.css'
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
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
