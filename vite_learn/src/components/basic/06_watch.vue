<!--
 * @Author: fg
 * @Date: 2022-12-05 14:17:24
 * @LastEditors: fg
 * @LastEditTime: 2022-12-05 16:25:43
 * @Description: watch侦听器
-->
<!-- 参考链接： https://juejin.cn/post/6980987158710452231 -->
<template>
  <h3>watch: 需要侦听特定的数据源，并在单独的回调函数中执行副作用</h3>
  <p>watch第一个参数监听源</p>
  <p>watch第二个参数回调函数cb（newVal,oldVal）</p>
  <p>
    watch第三个参数一个options配置项是一个对象{ <br />
    immediate:true //是否立即调用一次 <br />
    deep:true //是否开启深度监听 <br />
    }
  </p>
  <hr />
  <p>price: ￥ {{ price }}</p>
  <p>message: {{ message }}</p>
  <h3>监听Reactive,使用reactive监听深层对象开启和不开启deep 效果一样</h3>
  <p>arrRef: {{ arrRef }}</p>
  <p>arrReactive: {{ arrReactive }}</p>
</template>
<script setup lang="ts">
import { reactive, ref, watch } from "vue";
let price = ref<number>(0);
let message = reactive({
  nav: {
    bar: {
      name: "",
    },
  },
});

watch(price, (n, o) => {
  console.log(n, o);
});
watch(
  () => message.nav.bar.name,
  (newValue, oldValue) => {
    console.log("新的值----", newValue);
    console.log("旧的值----", oldValue);
  },
  {
    immediate: true,
    deep: true,
  }
);
// 监听多个ref 注意变成数组啦
let msg1 = ref<string>("");
let msg2 = ref<string>("");
watch([msg1, msg2], (n, o) => {
  console.log(n, o);
});

// 监听Reactive
// 使用reactive监听深层对象开启和不开启deep 效果一样
/* watch(message, (n, o) => {
  console.log(n, o, "message");
}); */
watch(
  () => message,
  (n, o) => {
    console.log(n, o, "message getter");
  },
  {
    deep: true,
  }
);
// 坑
// 若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
// 若watch监视的是reactive定义的响应式数据，则强制开启了深度监视
let arrRef = ref<number[]>([1, 2, 3, 4, 5]);
let arrReactive = reactive([1, 2, 3, 4, 5]);

watch(
  arrRef,
  (n, o) => {
    console.log("ref deep， 深度侦听，新旧值一样", n, o);
  },
  {
    deep: true,
  }
);
watch(
  () => [...arrRef.value],
  (n, o) => {
    console.log("ref deep, getter形式 ， 新旧值不一样", n, o);
  },
  {
    deep: true,
  }
);

watch(arrReactive, (n, o) => {
  console.log("reactive，默认深度监听，可以不设置deep:true, 新旧值一样", n, o);
});
watch(
  () => [...arrReactive],
  (n, o) => {
    console.log("reactive，getter形式 ， 新旧值不一样", n, o);
  }
);
// ref not deep, 不能深度侦听(检测不了值)
// ref deep， 深度侦听，新旧值一样（这里监听的是Reactive,会同步一致的值）
// ref deep, getter形式 ， 新旧值不一样(这里监听的是value值，所以新旧值不一致)
// reactive，默认深度监听，可以不设置deep:true, 新旧值一样
// reactive，getter形式 ， 新旧值不一样

let objRef = ref({
  name: "kk",
  age: 12,
});
let objReactive = reactive({
  name: "kk",
  age: 12,
});

watch(
  () => objRef,
  (n, o) => {
    console.log("objRef ref deep, getter形式 ", n, o);
  },
  { deep: true }
);
watch(
  () => objReactive,
  (n, o) => {
    console.log("objReactive ref deep, getter形式 ", n, o);
  },
  { deep: true }
);

setTimeout(() => {
  price.value = 200;
  msg1.value = "msg1 change";
  msg2.value = "msg2 change";
  message.nav.bar.name = "hello world";
  arrRef.value[0] = 0;
  arrReactive[0] = 9;
  objRef.value.name = "tt";
  objReactive.name = "tt";
  setTimeout(() => {
    message.nav.bar.name = "hello world change";
    // message = JSON.parse(JSON.stringify(message));
  }, 2000);
}, 2000);
</script>
<style></style>
