<!--
 * @Author: fg
 * @Date: 2022-12-21 16:55:21
 * @LastEditors: fg
 * @LastEditTime: 2022-12-21 17:31:55
 * @Description: content
-->
<template>
  <div>
    子组件---change {{ current }}
    <button @click="btnTap">change</button>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, Ref } from "vue";

const current = inject<Ref<number>>("current", ref(1));
const btnTap = () => {
  current.value++;
};
</script>
<style></style>
