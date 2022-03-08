import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


/*  Docs: https://vitejs.dev/config/
 *
 *  Issue Fixed: Use env files inside vite config
 *  Source: https://stackoverflow.com/questions/66389043/how-can-i-use-vite-env-variables-in-vite-config-js
 */
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') }
  return defineConfig({
    plugins: [vue()],
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
    server: {
      port: 5000,
      watch: {
        usePolling: true,
      }
    }
  })
}

const pathResolve = (dir: string): any => resolve(__dirname, '.', dir)
