<!--
 * @Author: fg
 * @Date: 2022-12-23 21:48:13
 * @LastEditors: fg
 * @LastEditTime: 2022-12-23 22:32:51
 * @Description: v-model 子组件
-->

<template>
  <div v-if="propData.modelValue" class="dialog">
    <div class="dialog-header">
      <h3>标题--{{ title || "默认标题" }}</h3>
      <div @click="close">x</div>
    </div>
    <div class="dialog-content">内容 v-model child comps</div>
  </div>
</template>
<script setup lang="ts">
type Props = {
  modelValue: boolean;
  title?: string;
  titleModifiers?: {
    toupper: boolean;
    add: boolean;
  };
  modelModifiers?: { slice: boolean };
};
// 固定名称的写法
const propData = defineProps<Props>();
const emit = defineEmits(["update:modelValue", "update:title"]);
const close = () => {
  // console.log(propData.titleModifiers);
  let temp = propData.title || "";
  if (propData.titleModifiers?.toupper) {
    temp.toUpperCase();
  }
  if (propData.titleModifiers?.add) {
    temp = `${temp}@one_pice`;
  }
  emit("update:modelValue", false);
  emit("update:title", temp);
};
</script>
<style lang="less" scoped>
.dialog {
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &-header {
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  &-content {
    padding: 10px;
  }
}
</style>
