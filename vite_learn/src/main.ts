import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GlobalComps from "./components/basic/11_globalComps.vue"

/* const vueApp = createApp(App)
vueApp.component('GlobalComps', GlobalComps)
vueApp.component('GlobalHandle', GlobalComps)
vueApp.mount('#app') */
createApp(App).component('GlobalComps', GlobalComps).component('GlobalHandle', GlobalComps).mount('#app')
// .mount('#app')要放在最后一步