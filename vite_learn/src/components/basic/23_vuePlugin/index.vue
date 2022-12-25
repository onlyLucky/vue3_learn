<!--
 * @Author: fg
 * @Date: 2022-12-25 19:00:20
 * @LastEditors: fg
 * @LastEditTime: 2022-12-25 19:01:24
 * @Description: content
-->
<template>
  <div></div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
instance?.proxy?.$loading.show();
setTimeout(() => {
  instance?.proxy?.$loading.hide();
}, 5000);

// console.log(instance)
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
</style>
