<!--
 * @Author: fg
 * @Date: 2022-12-25 19:14:31
 * @LastEditors: fg
 * @LastEditTime: 2022-12-25 19:42:21
 * @Description: content
-->
<template>
  <div>
    <MySlot>
      <div class="a">私人定制div</div>
    </MySlot>
    <DCss></DCss>
    <CssModule></CssModule>
    <UseCssModule></UseCssModule>
  </div>
</template>

<script setup lang="ts">
import MySlot from "./slot.vue";
import DCss from "./css.vue";
import CssModule from "./cssModule.vue";
import UseCssModule from "./useCssModule.vue";
</script>

<style lang="less" scoped>
// 全局选择器
:global(.txtMsg) {
  color: pink;
}
</style>
