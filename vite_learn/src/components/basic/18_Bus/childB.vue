<!--
 * @Author: fg
 * @Date: 2022-12-21 17:57:11
 * @LastEditors: fg
 * @LastEditTime: 2022-12-22 21:29:03
 * @Description: content
-->
<template>
  <div>
    子组件B--- {{ msg }}
    <button @click="btnTap">B 传递数据</button>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, inject, ref, Ref } from "vue";
import Bus from "@/plugins/bus";

let msg = ref<string>("");
// 第一种全局属性使用，不过没有提示
// let vueConfig = getCurrentInstance()?.appContext.config.globalProperties;
// console.log(vueConfig?.$Bus.emit);

const btnTap = () => {
  Bus.emit("on-a", "b=>a msg");
};
</script>
<style></style>
