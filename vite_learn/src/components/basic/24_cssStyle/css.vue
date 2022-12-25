<!--
 * @Author: fg
 * @Date: 2022-12-25 19:31:07
 * @LastEditors: fg
 * @LastEditTime: 2022-12-25 19:34:46
 * @Description: 动态css
-->
<template>
  <div class="div">动态css</div>
  <div class="dObj">动态css object</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const redCss = ref<string>("red");
const styleCss = ref({
  color: "lightblue",
});
</script>

<style lang="less" scoped>
.div {
  color: v-bind(redCss);
}
.dObj {
  color: v-bind("styleCss.color");
}
</style>
