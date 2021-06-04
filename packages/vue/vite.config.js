import path from 'path'
import Vue from '@vitejs/plugin-vue'

/**
 * https://vitejs.dev/config/
 */
export default {
  plugins: [Vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  },
  compilerOptions: {
    types: ["vite/client"]
  }
}
