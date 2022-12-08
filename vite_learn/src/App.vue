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
  <!-- <MyDefineProps
    :data="dataArr"
    title="这是个标题"
    @on-click="parentTap"
    @tap="pTap"
    @child="getChild"
  ></MyDefineProps> -->
  <!-- <BasicDefineExpose></BasicDefineExpose> -->
  <!-- <WaterFall :list="list"></WaterFall> -->
  <GlobalHandle></GlobalHandle>
  <GlobalComps msg="%%%"></GlobalComps>
</template>

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
import BasicDefineExpose from "./components/basic/09_defineExpose/parent.vue";
import WaterFall from "./components/basic/10_waterFall.vue";

import { ref, reactive, onMounted } from "vue";
let dataArr = reactive<number[]>([1, 2, 3, 4, 5, 6]);

const parentTap = (val: number[]) => {
  console.log(val, "val");
};
const pTap = (val: string) => {
  console.log(val, "@@@@");
};
const list = [
  {
    height: 300,
    background: "red",
  },
  {
    height: 400,
    background: "pink",
  },
  {
    height: 500,
    background: "blue",
  },
  {
    height: 200,
    background: "green",
  },
  {
    height: 300,
    background: "gray",
  },
  {
    height: 400,
    background: "#CC00FF",
  },
  {
    height: 200,
    background: "black",
  },
  {
    height: 100,
    background: "#996666",
  },
  {
    height: 500,
    background: "skyblue",
  },
  {
    height: 300,
    background: "#993366",
  },
  {
    height: 100,
    background: "#33FF33",
  },
  {
    height: 400,
    background: "skyblue",
  },
  {
    height: 200,
    background: "#6633CC",
  },
  {
    height: 300,
    background: "#666699",
  },
  {
    height: 300,
    background: "#66CCFF",
  },
  {
    height: 300,
    background: "skyblue",
  },
  {
    height: 200,
    background: "#CC3366",
  },
  {
    height: 200,
    background: "#CC9966",
  },
  {
    height: 200,
    background: "#FF00FF",
  },
  {
    height: 500,
    background: "#990000",
  },
  {
    height: 400,
    background: "red",
  },
  {
    height: 100,
    background: "#999966",
  },
  {
    height: 200,
    background: "#CCCC66",
  },
  {
    height: 300,
    background: "#FF33FF",
  },
  {
    height: 400,
    background: "#FFFF66",
  },
  {
    height: 200,
    background: "red",
  },
  {
    height: 100,
    background: "skyblue",
  },
  {
    height: 200,
    background: "#33CC00",
  },
  {
    height: 300,
    background: "#330033",
  },
  {
    height: 100,
    background: "#0066CC",
  },
  {
    height: 200,
    background: "skyblue",
  },
  {
    height: 100,
    background: "#006666",
  },
  {
    height: 200,
    background: "yellow",
  },
  {
    height: 300,
    background: "yellow",
  },
  {
    height: 100,
    background: "#33CCFF",
  },
  {
    height: 400,
    background: "yellow",
  },
  {
    height: 400,
    background: "yellow",
  },
  {
    height: 200,
    background: "#33FF00",
  },
  {
    height: 300,
    background: "yellow",
  },
  {
    height: 100,
    background: "green",
  },
];

//这样获取是有代码提示的
/* type DefineCom = {
  toParentsData: number[];
}; */
onMounted(() => {
  console.log("onMounted");
});
const getChild = () => {
  console.log("getChild-defineCom");
  /* const defineCom = ref<InstanceType<typeof MyDefineProps>>();
  console.log(defineCom, "defineCom"); */
};
</script>
<!-- <script lang="ts">
export default {
  mounted() {
    // 使用vue2的调用方法一个vue文件中可以有多个script脚本的，但是需要同一种lang
    // console.log(this.$refs.DefineCom.num.length, "DefineCom");
  },
};
</script> -->

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
