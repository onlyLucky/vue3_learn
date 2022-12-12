<!--
 * @Author: fg
 * @Date: 2022-12-12 11:08:52
 * @LastEditors: fg
 * @LastEditTime: 2022-12-12 14:12:31
 * @Description: Teleport
-->
<!-- 主要解决的问题 因为Teleport节点挂载在其他指定的DOM节点下，完全不受父级style样式影响 -->

<template>
  <teleport to="#modal">
    <h4>{{ msg }}</h4>
  </teleport>
</template>
<script setup lang="ts">
// Teleport 是一种能够将我们的模板移动到 DOM 中 Vue app 之外的其他位置的技术，就有点像哆啦A梦的“任意门”
// 场景：像 modals,toast 等这样的元素，很多情况下，我们将它完全的和我们的 Vue 应用的 DOM 完全剥离，管理起来反而会方便容易很多
withDefaults(
  defineProps<{
    msg?: string; // 是否必传
  }>(),
  {
    msg: "默认值",
  }
);
</script>
<style scoped lang="less"></style>
