<!--
 * @Author: fg
 * @Date: 2022-12-24 12:08:22
 * @LastEditors: fg
 * @LastEditTime: 2022-12-24 12:21:20
 * @Description: 函数简写
-->
<template>
  <div>
    <input v-model="value" type="text" />
    <div class="tipBox" v-move="{ background: value }"></div>
  </div>
</template>

<script setup lang="ts">
import { Directive, DirectiveBinding } from "vue";

// 可能想在 mounted 和 updated 时触发相同行为，而不关心其他的钩子函数。那么你可以通过将这个函数模式实现
let value = ref<string>("lightblue");
type Dir = {
  background: string;
};
const vMove: Directive = (el, binding: DirectiveBinding<Dir>) => {
  el.style.background = binding.value.background;
};
</script>
<style scoped lang="less">
.tipBox {
  width: 100px;
  height: 100px;
  background: pink;
}
</style>
