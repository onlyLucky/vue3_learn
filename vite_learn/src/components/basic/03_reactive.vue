<!--
 * @Author: fg
 * @Date: 2022-12-04 21:22:14
 * @LastEditors: fg
 * @LastEditTime: 2022-12-05 10:27:39
 * @Description: Reactive api的使用
-->

<!-- 用来绑定复杂的数据类型 例如 对象 数组 -->
<template>
  <h3>reactive:用来绑定复杂的数据类型 例如 对象 数组</h3>
  <div>{{ person.name }}</div>
  <button @click="handleReactiveChange">change</button>
  <div>tempArr: {{ tempArr }}</div>
  <div>tempArr1: {{ tempArr1 }}</div>
  <div>tempArr2: {{ tempArr2.list }}</div>
  <h3>readonly: 拷贝一份proxy对象将其设置为只读</h3>
  <h3>
    shallowReactive: 只能对浅层的数据 如果是深层的数据只会改变值 不会改变视图
  </h3>
  <button @click="handleShallowReactiveChange1">
    handleShallowReactiveChange1
  </button>
  <button @click="handleShallowReactiveChange2">
    handleShallowReactiveChange2
  </button>
  <p>status: {{ status }}</p>
</template>

<script setup lang="ts">
import { reactive, readonly, shallowReactive } from "vue";

let person = reactive({
  name: "reactive name",
});
const handleReactiveChange = () => {
  // 使用reactive 去修改值无须.value
  person.name = "hello--world";
};

// 数组异步赋值问题
let tempArr = reactive<number[]>([]);
let tempArr1 = reactive<number[]>([]);
setTimeout(() => {
  tempArr = [1, 2, 3];
  console.log(tempArr, "tempArr");
}, 500);
// 这样赋值页面是不会变化的因为会脱离响应式

// 在调用reactive主动更新数据的时候，数组异步赋值会进行dom更新

// 解决方案1，可以使用push
setTimeout(() => {
  let arr = [1, 2, 3, 0, 0, 0];
  tempArr1.push(...arr);
  console.log(tempArr1, "tempArr");
}, 1000);
// 解决方案2，包裹一层对象
type TempArr = {
  list?: Array<number>;
};
let tempArr2 = reactive<TempArr>({
  list: [],
});
setTimeout(() => {
  tempArr2.list = [1, 2, 3, 4, 5, 6];
  console.log(tempArr2);
}, 1500);

// readOnly
let copyPerson = readonly(person);
// 无法进行赋值。
// copyPerson.name = "readonly change obj";

// shallowReactive
type StatusObj = {
  [propName: string]: any;
};
let status = shallowReactive({
  a: 1,
  b: 2,
  c: {
    value: 3,
    d: 4,
    e: {
      value: 5,
      f: 6,
    },
  },
} as StatusObj);

let handleShallowReactiveChange1 = () => {
  status.a = "one";
};
let handleShallowReactiveChange2 = () => {
  // 在这里不可以更改深层的object,先调用这个，数据更改dom未进行更改。再调用上面的函数，dom会更新
  status.c.e.value = "tree value";
  console.log(status);
};
</script>

<style></style>
