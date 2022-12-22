<!--
 * @Author: fg
 * @Date: 2022-12-21 18:11:05
 * @LastEditors: fg
 * @LastEditTime: 2022-12-22 23:02:10
 * @Description: content
-->
<template>
  <div>
    子组件A--- {{ msg }}
    <br />
    <button @click="btnTap">A 传递数据</button>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, Ref } from "vue";
import Bus from "@/plugins/bus";
const msg = ref<string>("");
const btnTap = () => {
  Bus.emit("on-p", 12345, 54321);
};

Bus.on("on-a", (txt: string) => {
  msg.value = txt;
  console.log(msg, "msg---a");
});
</script>
<style></style>
