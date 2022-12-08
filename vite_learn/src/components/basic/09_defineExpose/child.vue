<!--
 * @Author: fg
 * @Date: 2022-12-08 10:07:10
 * @LastEditors: fg
 * @LastEditTime: 2022-12-08 10:38:16
 * @Description: content
-->
<template>
  <div>子组件hello word.vue</div>
  <p>{{ count }}</p>
  <button @click="addCount">change ++ count</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
const addCount = () => {
  count.value++;
};
defineExpose({
  count,
  addCount,
});
</script>

<style scoped></style>
