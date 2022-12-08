<!--
 * @Author: fg
 * @Date: 2022-12-08 17:20:14
 * @LastEditors: fg
 * @LastEditTime: 2022-12-08 18:06:11
 * @Description: 递归组件
-->
<template>
  <div
    class="tree"
    @click.stop="clickItem(item)"
    v-for="(item, index) in data"
    :key="index"
  >
    <input type="checkbox" v-model="item.checked" /><span>{{ item.name }}</span>
    <!-- 直接使用文件名当组件名 Tree.vue 对应递归组件的名称是Tree -->
    <!-- <Tree v-if="item?.children?.length" :data="item?.children"></Tree> -->
    <!-- <recursion v-if="item?.children?.length" :data="item?.children"></recursion> -->
    <TreeTree v-if="item?.children?.length" :data="item?.children"></TreeTree>
  </div>
</template>
<script setup lang="ts">
type TreeList = {
  name: string;
  icon?: string;
  checked?: boolean;
  children?: TreeList[] | [];
};

defineOptions({
  name: "TreeTree",
});

type Props<T> = {
  data?: T[] | [];
};

defineProps<Props<TreeList>>();

// 递归组件点击事件要添加冒泡阻止事件
const clickItem = (item: TreeList) => {
  console.log(item);
};
</script>
<!-- <script lang="ts">
// 如果不想直接使用组件名称，子组件增加一个script 定义组件名称为了 递归用
export default {
  name: "recursion",
};
</script> -->

<style scoped lang="less">
.tree {
  margin-left: 100px;
}
</style>
