import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GlobalComps from "./components/basic/11_globalComps.vue"
import Bus from "./plugins/bus"

/* const vueApp = createApp(App)
vueApp.component('GlobalComps', GlobalComps)
vueApp.component('GlobalHandle', GlobalComps)
vueApp.mount('#app') */
const app = createApp(App)
app.component('GlobalComps', GlobalComps).component('GlobalHandle', GlobalComps)
app.mount('#app')
// .mount('#app')要放在最后一步

// vue3全局属性配置
app.config.globalProperties.$Bus = Bus;