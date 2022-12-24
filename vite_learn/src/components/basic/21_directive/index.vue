<!--
 * @Author: fg
 * @Date: 2022-12-24 10:00:30
 * @LastEditors: fg
 * @LastEditTime: 2022-12-24 14:11:51
 * @Description: 自定义vue3指令
-->
<template>
  <div>
    <h3>directive-自定义指令</h3>
    <button @click="show = !show">{{ show ? "开" : "关" }}</button>
    <Dialog
      v-model="show"
      v-move-directive="{ background: 'green', flag: show }"
    ></Dialog>
    <ChildA></ChildA>
    <Drag></Drag>
  </div>
</template>
<script setup lang="ts">
/* 
directive-自定义指令（属于破坏性更新）

Vue3指令的钩子函数
 - created 元素初始化的时候
 - beforeMount 指令绑定到元素后调用 只调用一次
 - mounted 元素插入父级dom调用
 - beforeUpdate 元素被更新之前调用
 - update 这个周期方法被移除 改用updated
 - beforeUnmount 在元素被移除前调用
 - unmounted 指令被移除后调用 只调用一次
 
Vue2 指令 bind inserted update componentUpdated unbind

*/
import Dialog from "./child.vue";
import ChildA from "./childA.vue";
import Drag from "./drag.vue";
import vMoveDirective from "./v-move-directive";
const show = ref<boolean>(false);
</script>
<style scoped lang="less"></style>
