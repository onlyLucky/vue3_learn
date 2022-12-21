<!--
 * @Author: fg
 * @Date: 2022-12-21 16:51:41
 * @LastEditors: fg
 * @LastEditTime: 2022-12-21 17:40:20
 * @Description: 依赖注入
-->
<template>
  <div>
    父组件---{{ current }}
    <Child></Child>
  </div>
</template>

<script setup lang="ts">
// tips: 你如果传递普通的值 是不具有响应式的 需要通过ref reactive 添加响应式
// 当父组件有很多数据需要分发给其子代组件的时候， 就可以使用provide和inject。
import { provide, ref } from "vue";
import Child from "./child.vue";
let current = ref<number>(1);
provide("current", current);
</script>
<style></style>
