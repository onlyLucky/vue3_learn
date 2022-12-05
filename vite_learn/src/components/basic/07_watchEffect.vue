<!--
 * @Author: fg
 * @Date: 2022-12-05 16:34:56
 * @LastEditors: fg
 * @LastEditTime: 2022-12-05 18:02:55
 * @Description: watchEffect高级侦听器
-->

<template>
  <h3>watchEffect高级侦听器</h3>
  <p>
    立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。
  </p>
  <hr />
  <p>msg1: {{ msg1 }}</p>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";
let msg1 = ref("");
let msg2 = ref("");
watchEffect(() => {
  console.log("watchEffect--value: ", msg1.value);
});
// 就是在触发监听之前会调用一个函数可以处理你的逻辑例如防抖

watchEffect(
  (oninvalidate) => {
    oninvalidate(() => {
      console.log("handleAfter~~~");
    });
    console.log("watchEffect--value123: ", msg1.value);
  },
  {
    flush: "post",
    onTrigger() {},
  }
);
// 副作用刷新时机 flush 一般使用post
/**
 * pre  组件更新前执行
 * sync 强制效果始终同步触发
 * post 组件更新后执行
 */

//  onTrigger  可以帮助我们调试 watchEffect
setTimeout(() => {
  msg1.value = "watchEffect";
}, 1000);
</script>
<style></style>
