<!--
 * @Author: fg
 * @Date: 2022-12-21 17:57:03
 * @LastEditors: fg
 * @LastEditTime: 2022-12-22 22:52:45
 * @Description: content
-->
<template>
  <div>
    <h3>$Bus 总线</h3>
    <A></A>
    <B></B>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, Ref } from "vue";
import Bus from "@/plugins/bus";
import A from "./childA.vue";
import B from "./childB.vue";

const current = inject<Ref<number>>("current", ref(1));
const btnTap = () => {
  current.value++;
};
Bus.on("on-p", (num1: number, num2: number) => {
  console.log(num1 + num2, "num---add");
});
</script>
<style></style>
