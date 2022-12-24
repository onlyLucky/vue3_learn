<!--
 * @Author: fg
 * @Date: 2022-12-24 16:05:32
 * @LastEditors: fg
 * @LastEditTime: 2022-12-24 16:56:09
 * @Description: content
-->
<template>
  <div>
    <img id="img" src="@/assets/base64.jpeg" width="100" alt="" />
    <p>base64</p>
    <img v-show="bImgUrl" :src="bImgUrl" alt="" />
  </div>
</template>

<script setup lang="ts">
import useBase64 from "@/hooks/useBase64";
let bImgUrl = ref<string>("");
useBase64({
  el: "#img",
}).then((res) => {
  bImgUrl.value = res.baseUrl || "";
  // console.log(res.baseUrl);
});
</script>

<style></style>
