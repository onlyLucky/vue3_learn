<!--
 * @Author: fg
 * @Date: 2022-12-08 10:07:22
 * @LastEditors: fg
 * @LastEditTime: 2022-12-08 10:47:32
 * @Description: parent
-->

<template>
  <div @click="helloClick">父组件</div>
  <button @click="handleCount">父组件 count++</button>
  <HelloWord ref="hello"></HelloWord>
</template>

<script setup lang="ts">
/**
 * 1.app.vue 怎么调用ref组件的暴露属性组件都不可以，onMounted里面也不可以
 *
 * 2.在外部的引入的父子组件暴露的属性调用函数都可以使用
 *
 *
 *  */
import { onMounted, ref } from "vue";
import HelloWord from "./child.vue";
const hello = ref<InstanceType<typeof HelloWord>>();
onMounted(() => {
  console.log(hello.value?.count); // 123456
});
const helloClick = () => {
  console.log(hello.value?.count); // 123456
};
const handleCount = () => {
  hello.value?.addCount();
};
</script>

<style lang="less" scoped></style>
