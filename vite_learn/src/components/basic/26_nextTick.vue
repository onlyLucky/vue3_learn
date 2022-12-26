<!--
 * @Author: fg
 * @Date: 2022-12-26 18:04:04
 * @LastEditors: fg
 * @LastEditTime: 2022-12-26 18:05:09
 * @Description: nextTick
-->
<template>
  <div ref="refDom">
    {{ text }}
  </div>
  <button @click="change">change div</button>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";

const text = ref("upload finish");
const refDom = ref<HTMLElement>();

const change = async () => {
  text.value = "upload change finish";
  console.log(refDom.value?.innerText); //upload finish
  await nextTick();
  console.log(refDom.value?.innerText); //upload change finish
};
</script>

<style scoped></style>
