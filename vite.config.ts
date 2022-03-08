/// <reference types="vitest" />

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs'


/*  Docs: https://vitejs.dev/config/
 *
 *  Issue Fixed: Use env files inside vite config
 *  Source: https://stackoverflow.com/questions/66389043/how-can-i-use-vite-env-variables-in-vite-config-js
 */
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') }
  return defineConfig({
    mode: 'development',
    plugins: [
      vue(),
      viteCommonjs(),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: pathResolve('src'),
        },
        {
          find: '@modules',
          replacement: pathResolve('./node_modules'),
        },
      ],
    },
    optimizeDeps: {
      esbuildOptions: {
        plugins: [
          esbuildCommonjs(['@ionic/vue', '@ionic/core'])
        ]
      }
      
    },
    test: {
      environment: 'jsdom',
      globals: true,
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
      ],
      deps: {
        inline: ['@ionic/vue', '@ionic/core'],
      }
    },
    preview: {
      port: 5000,
    },
    server: {
      port: 3000,
      watch: {
        usePolling: true,
      }
    },
  })
}

const pathResolve = (dir: string): any => resolve(__dirname, '.', dir)
