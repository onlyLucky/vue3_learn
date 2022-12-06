<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TemplateSyntax from "./components/basic/01_template_syntax.vue";
import MyRef from "./components/basic/02_ref.vue";
import MyReactive from "./components/basic/03_reactive.vue";
import MyTo from "./components/basic/04_to.vue";
import MyComputed from "./components/basic/05_computed.vue";
import MyWatch from "./components/basic/06_watch.vue";
import MyWatchEffect from "./components/basic/07_watchEffect.vue";
import MyDefineProps from "./components/basic/08_defineProps.vue";

import { ref, reactive } from "vue";
let dataArr = reactive<number[]>([1, 2, 3, 4, 5, 6]);
let age = ref<number>(20);
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <TemplateSyntax></TemplateSyntax> -->
  <!-- <MyRef></MyRef> -->
  <!-- <MyReactive></MyReactive> -->
  <!-- <MyTo></MyTo> -->
  <!-- <MyComputed></MyComputed> -->
  <!-- <MyWatch></MyWatch> -->
  <!-- <MyWatchEffect></MyWatchEffect> -->
  <MyDefineProps
    :data="dataArr"
    title="这是个标题"
    name="hh"
    :age="age"
  ></MyDefineProps>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
