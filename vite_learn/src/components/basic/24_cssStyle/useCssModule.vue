<!--
 * @Author: fg
 * @Date: 2022-12-25 19:39:12
 * @LastEditors: fg
 * @LastEditTime: 2022-12-25 19:40:31
 * @Description: content
-->
<template>
  <div :class="[css.red, css.border]">useCssModule</div>
</template>

<script setup lang="ts">
import { useCssModule } from "vue";
const css = useCssModule("css");
</script>

<style module="css">
.red {
  color: red;
  font-size: 20px;
}
.border {
  border: 1px solid #ccc;
}
</style>
