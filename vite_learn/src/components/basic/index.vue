<!--
 * @Author: fg
 * @Date: 2022-12-09 15:53:39
 * @LastEditors: fg
 * @LastEditTime: 2022-12-09 19:01:48
 * @Description: basic 主入口
-->
<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="../../../public/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.emojiall.com/zh-hans/" target="_blank">
      <img src="../../assets/mm.png" class="logo emoji" alt="emoji logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../../assets/vue.svg" class="logo vue" alt="Vue logo" />
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
  <!-- <GlobalHandle></GlobalHandle> -->
  <!-- <GlobalComps msg="%%%"></GlobalComps> -->
  <!-- <TreeVue :data="data"></TreeVue> -->
  <!-- <div>
    <button
      v-for="(item, index) in tabsComps"
      :key="index"
      @click="switchComps(item)"
    >
      {{ item.name }}
    </button>
    <div>
      <component :is="current.tabComp"></component>
    </div>
  </div> -->
  <!-- slot -->
  <!-- <MySlot>
    <template v-slot>
      <p>这是一个插槽，已经被我占用了</p>
    </template>
    <template v-slot:header>
      <p>这是一个带名称（具名插槽），header</p>
    </template>
    <template #footer>
      <p>这是一个带名称（具名插槽）另一种写法，footer</p>
    </template>
    <template #part="{ itemData }">
      <p>这是一个作用域插槽，data：{{ itemData }}</p>
    </template>
    <template #[slotDynName]>
      <p>这是一个动态插槽，dynamic</p>
    </template>
  </MySlot> -->
  <!-- 异步组件 -->
  <AsyncCompsA></AsyncCompsA>
  <AsyncCompsB></AsyncCompsB>
  <!-- Suspense vue3内置组件 -->
  <!-- 它们都只接收一个直接子节点。default 插槽里的节点会尽可能展示出来。如果不能，则展示 fallback 插槽里的节点。 -->
  <Suspense>
    <template #default>
      <AsyncComps></AsyncComps>
    </template>

    <template #fallback>
      <div>loading...</div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TemplateSyntax from "./01_template_syntax.vue";
import MyRef from "./02_ref.vue";
import MyReactive from "./03_reactive.vue";
import MyTo from "./04_to.vue";
import MyComputed from "./05_computed.vue";
import MyWatch from "./06_watch.vue";
import MyWatchEffect from "./07_watchEffect.vue";
import MyDefineProps from "./08_defineProps.vue";
import BasicDefineExpose from "./09_defineExpose/parent.vue";
import WaterFall from "./10_waterFall.vue";
import TreeVue from "./Tree.vue";
import dynamicCompA from "./12_dynamicComps1.vue";
import dynamicCompB from "./12_dynamicComps2.vue";
import MySlot from "./13_slot.vue";
import AsyncComps from "./14_asyncComps.vue";
import AsyncError from "./14_asyncError.vue";
import AsyncLoading from "./14_asyncLoading.vue";

import { ref, reactive, onMounted, markRaw, defineAsyncComponent } from "vue";
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

type TreeList = {
  name: string;
  icon?: string;
  checked?: boolean;
  children?: TreeList[] | [];
};
const data = reactive<TreeList[]>([
  {
    name: "no.1",
    children: [
      {
        name: "no.1-1",
        children: [
          {
            name: "no.1-1-1",
            checked: true,
            children: [
              {
                name: "no.1-1-1-a",
                checked: false,
              },
              {
                name: "no.1-1-1-b",
                checked: true,
              },
            ],
          },
          {
            name: "no.1-1-2",
            checked: true,
          },
        ],
      },
    ],
  },
  {
    name: "no.2",
    children: [
      {
        name: "no.2-1",
      },
    ],
  },
  {
    name: "no.3",
  },
]);

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

/* 动态组件 */
type TabType = {
  name: string;
  tabComp: any;
};
type Comp = Pick<TabType, "tabComp">;

const tabsComps = reactive<TabType[]>([
  {
    name: "dynamicCompA组件",
    // proxy会代理reactive中的所有内容
    // 无需对组件进行proxy代理
    // 必须使用markRaw跳过对组件的代理，否则vue会给警告
    tabComp: markRaw(dynamicCompA),
  },
  {
    name: "dynamicCompB组件",
    // proxy会代理reactive中的所有内容
    // 无需对组件进行proxy代理
    // 必须使用markRaw跳过对组件的代理，否则vue会给警告
    tabComp: markRaw(dynamicCompB),
  },
]);
let current = reactive<Comp>({
  tabComp: tabsComps[0].tabComp,
});
const switchComps = (tab: TabType) => {
  current.tabComp = tab.tabComp;
};

const slotDynName = ref("dynamic");
/* 异步组件 */
const AsyncCompsA = defineAsyncComponent(() => import("./14_asyncComps.vue"));
// 完成写法
const AsyncCompsB = defineAsyncComponent({
  // 加载函数
  loader: () => import("./14_asyncComps.vue"),

  // 加载异步组件时使用的组件
  loadingComponent: AsyncLoading,
  // 展示加载组件前的延迟时间，默认为 200ms
  delay: 2000,

  // 加载失败后展示的组件
  errorComponent: AsyncError,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 8000,
});
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
.logo.emoji:hover {
  filter: drop-shadow(0 0 2em #8c5d59aa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
