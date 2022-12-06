<!--
 * @Author: fg
 * @Date: 2022-12-06 14:36:57
 * @LastEditors: fg
 * @LastEditTime: 2022-12-06 20:01:29
 * @Description: 父子组件通信
-->
<template>
  <h3>父子组件通信</h3>
  <p>子组件接受值</p>
  <p>通过defineProps 来接受 defineProps是无须引入的直接使用即可</p>
  <hr />
  <div class="child">
    子组件名称：{{ title }}
    <div>
      数据：
      <ul>
        <li v-for="(item, index) in data" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
// 子组件接受值
defineProps<{
  title?: string;
  data?: number[];
}>();
// 可选属性可以使用?:

// withDefaults是个函数也是无须引入开箱即用接受一个props函数第二个参数是一个对象设置默认值
type Props = {
  name?: string;
  age?: any;
};
withDefaults(defineProps(), {
  name: "default_name",
  age: 18,
});
</script>
<style></style>
