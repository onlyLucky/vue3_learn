import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GlobalComps from "./components/basic/11_globalComps.vue"
import Bus from "./plugins/bus"
import Loading from "@/components/basic/23_vuePlugin/loading"

/* const vueApp = createApp(App)
vueApp.component('GlobalComps', GlobalComps)
vueApp.component('GlobalHandle', GlobalComps)
vueApp.mount('#app') */
const app = createApp(App)
app.component('GlobalComps', GlobalComps).component('GlobalHandle', GlobalComps)
app.use(Loading)

type Lod = {
  show: () => void,
  hide: () => void
}
//编写ts loading 声明文件放置报错 和 智能提示
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $loading: Lod
  }
}
app.mount('#app')
// .mount('#app')要放在最后一步

// vue3全局属性配置
app.config.globalProperties.$Bus = Bus;

