<!--
 * @Author: fg
 * @Date: 2022-12-12 14:40:03
 * @LastEditors: fg
 * @LastEditTime: 2022-12-19 10:28:40
 * @Description: transition
-->

<template>
  <transition-group>
    <div style="margin: 10px" :key="item" v-for="item in list">{{ item }}</div>
  </transition-group>
</template>
<script setup lang="ts">
import { reactive } from "vue";

const list = reactive<number[]>([1, 2, 4, 5, 6, 7, 8, 9]);
const Push = () => {
  list.push(123);
};
</script>
<style></style>
