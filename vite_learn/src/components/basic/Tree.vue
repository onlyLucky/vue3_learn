<!--
 * @Author: fg
 * @Date: 2022-12-08 17:20:14
 * @LastEditors: fg
 * @LastEditTime: 2022-12-08 17:45:11
 * @Description: 递归组件
-->
<template>
  <div class="tree" v-for="(item, index) in data" :key="index">
    <input type="checkbox" v-model="item.checked" /><span>{{ item.name }}</span>
    <!-- 直接使用文件名当组件名 Tree.vue 对应递归组件的名称是Tree -->
    <!-- <Tree v-if="item?.children?.length" :data="item?.children"></Tree> -->
    <recursion v-if="item?.children?.length" :data="item?.children"></recursion>
  </div>
</template>
<script setup lang="ts">
type TreeList = {
  name: string;
  icon?: string;
  checked?: boolean;
  children?: TreeList[] | [];
};

type Props<T> = {
  data?: T[] | [];
};

defineProps<Props<TreeList>>();

const clickItem = (item: TreeList) => {
  console.log(item);
};
</script>
<script lang="ts">
// 如果不想直接使用组件名称，子组件增加一个script 定义组件名称为了 递归用
export default {
  name: "recursion",
};
</script>

<style scoped lang="less">
.tree {
  margin-left: 100px;
}
</style>
