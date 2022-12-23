import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import DefineOptions from 'unplugin-vue-define-options/vite'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    DefineOptions(),
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 设置@指向src
    },
  },
  server: {
    host: '0.0.0.0',
  }
})
