<!--
 * @Author: fg
 * @Date: 2022-12-25 19:17:41
 * @LastEditors: fg
 * @LastEditTime: 2022-12-25 19:25:02
 * @Description: 插槽选择器
-->
<template>
  <div class="txtMsg">
    我是插槽
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
/* 插槽选择器 */
:slotted(.a) {
  color: red;
}
</style>
