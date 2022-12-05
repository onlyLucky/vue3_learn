<!--
 * @Author: fg
 * @Date: 2022-12-05 10:31:17
 * @LastEditors: fg
 * @LastEditTime: 2022-12-05 11:19:02
 * @Description: to 全家桶
-->

<template>
  <h3>toRef: 如果原始对象是非响应式的就不会更新视图 数据是会变的</h3>
  <button @click="onChange">change++</button>
  <p>{{ state }}</p>
  <h3>toRefs: 可以帮我们批量创建ref对象主要是方便我们解构使用</h3>
  <p>foo:{{ foo }}</p>
  <h3>toRaw: 将响应式对象转化为普通对象</h3>
</template>

<script setup lang="ts">
import { reactive, toRef, toRefs, toRaw } from "vue";
// 如果原始对象是非响应式的就不会更新视图 数据是会变的
/* const obj = {
  val: 0, 
}; */
// 如果原始对象是响应式的是会更新视图并且改变数据的
const obj = reactive({
  val: 0,
});
// 将obj.val转化为响应式数据
let state = toRef(obj, "val");

let onChange = () => {
  state.value++;
  console.log(obj, state);
};

// toRefs
let objTemp = {
  foo: 0,
  bar: 0,
};
let refsObj = reactive(objTemp);

let { foo, bar } = toRefs(refsObj);
foo.value++;
console.log(foo, bar);

let toRawObj = toRaw(refsObj);
console.log(objTemp, refsObj, toRawObj); //{foo: 1, bar: 0} Reactive<Object> {foo: 1, bar: 0}
</script>

<style></style>
