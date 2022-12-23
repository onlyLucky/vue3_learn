<!--
 * @Author: fg
 * @Date: 2022-12-23 21:14:01
 * @LastEditors: fg
 * @LastEditTime: 2022-12-23 22:20:57
 * @Description: v-model深入
-->
<template>
  <h3>v-model</h3>
  <button @click="show = !show">{{ show ? "open" : "close" }}</button>
  <Dialog v-model="show" v-model:title.toupper.add="title"></Dialog>
</template>
<script setup lang="ts">
/*
Vue3 v-model 是破坏性更新的
v-model在组件里面也是很重要的
v-model 其实是一个语法糖 通过props 和 emit组合而成的

change
 - 默认值的改变prop：value -> modelValue；
 - 事件：input -> update:modelValue；
 - v-bind 的 .sync 修饰符和组件的 model 选项已移除
 - 新增 支持多个v-model
 - 新增 支持自定义 修饰符 Modifiers
*/
import Dialog from "./child.vue";
const show = ref<boolean>(false);
const title = ref<string>("v-model Title");
</script>
<script></script>
