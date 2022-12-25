/*
 * @Author: fg
 * @Date: 2022-12-25 10:54:06
 * @LastEditors: fg
 * @LastEditTime: 2022-12-25 14:46:28
 * @Description: content
 */
import { App, createVNode, VNode, render } from "vue"
import Loading from "./loading.vue"

export default {
  install(app: App) {
    //createVNode vue提供的底层方法 可以给我们组件创建一个虚拟DOM 也就是Vnode
    const vnode: VNode = createVNode(Loading)
    //render 把我们的Vnode 生成真实DOM 并且挂载到指定节点
    render(vnode, document.body)
    // Vue 提供的全局配置 可以自定义
    app.config.globalProperties.$loading = {
      show: () => vnode.component?.exposed?.show(),
      hide: () => vnode.component?.exposed?.hide()
    }

  }
}