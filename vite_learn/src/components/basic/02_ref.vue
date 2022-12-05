<!--
 * @Author: fg
 * @Date: 2022-12-03 15:28:53
 * @LastEditors: fg
 * @LastEditTime: 2022-12-04 11:44:44
 * @Description: ref
-->
<template>
  <div>
    <button @click="changeMsg">change</button>
    <div>{{ message }}</div>
    <button @click="handleShallowRefChange">shallowRef Change</button>
    <button @click="handleShallowRefTriggerRefChange">
      shallowRef triggerRef Change
    </button>
    <div>{{ shallowRefMsg }}</div>
    <h3>customRef</h3>
    <button @click="handleCustomRef">customRef change</button>
    <p>{{ customRefName }}</p>
  </div>
</template>

<script setup lang="ts">
import { track } from "@vue/reactivity";
import { ref, Ref, isRef, shallowRef, triggerRef, customRef } from "vue";
let message: Ref<string> = ref("我是message");
let noRef: number = 123;
console.log(message, "message");
const changeMsg = () => {
  message.value = "change msg";
  console.log(isRef(message));
  console.log(isRef(message));
};
// shallowRef
// 修改其属性是非响应式的这样是不会改变的
type Obj = {
  name: string;
};
const shallowRefMsg: Ref<Obj> = shallowRef({
  name: "this is a shallowRef msg",
});
const handleShallowRefTriggerRefChange = () => {
  shallowRefMsg.value.name = "handleShallowRefChange";
  // triggerRef强制更新页面DOM
  triggerRef(shallowRefMsg);
};
const handleShallowRefChange = () => {
  shallowRefMsg.value = {
    name: "hello world",
  };
};
// customRef 是个工厂函数要求我们返回一个对象 并且实现 get 和 set  适合去做防抖之类的
// 自定义ref
function myRef<T = any>(value: T) {
  let time: any;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(time);
        setTimeout(() => {
          console.log("触发value change");
          value = newValue;
          trigger();
        }, 500);
      },
    };
  });
}
const customRefName = myRef<string>("myRef msg");

const handleCustomRef = () => {
  customRefName.value = "myRef Change msg";
};
</script>
