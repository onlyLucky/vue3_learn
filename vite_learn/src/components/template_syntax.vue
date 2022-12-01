<!--
 * @Author: fg
 * @Date: 2022-12-01 09:53:13
 * @LastEditors: fg
 * @LastEditTime: 2022-12-01 10:47:10
 * @Description: 模板语法 & vue指令
-->
<template>
  <h3>模板语法：</h3>
  <div>{{ message }}</div>
  <div>{{ message == 0 ? "true" : "false" }}</div>
  <h3>指令：</h3>
  <div @click="parent">
    <div @click.stop="child">child</div>
  </div>
  <form action="/">
    <button @click.prevent="submit" type="submit">submit</button>
  </form>
  <!-- v-bind 绑定class  -->
  <div :class="[flag ? 'active' : 'other', 'h']">12323</div>
  <div :class="flagClass">{{ flagClass }}</div>
  <!-- v-bind 绑定style -->
  <div :style="style">222</div>
  <!-- v-model -->
  <input type="text" v-model="messageTxt" />
  <div>{{ messageTxt }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const message: any = "这是一个模板语法";
const flag: boolean = false;

type Cls = {
  other: boolean;
  h: boolean;
};

type Style = {
  height: string;
  color: string;
};

const style: Style = {
  height: "300px",
  color: "blue",
};

const flagClass: Cls = {
  other: true,
  h: true,
};

const messageTxt = ref("messageTxt");

const parent = () => {
  console.log("parent");
};

const child = () => {
  console.log("child");
};
const submit = () => {
  console.log("submit");
};
</script>

<style>
.active {
  color: red;
}
.other {
  color: blue;
}
.h {
  height: 300px;
  border: 1px solid #ccc;
}
</style>
