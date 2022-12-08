<!--
 * @Author: fg
 * @Date: 2022-12-08 10:52:17
 * @LastEditors: fg
 * @LastEditTime: 2022-12-08 14:24:45
 * @Description: waterFallVue 
-->
<template>
  <div class="wraps">
    <div
      :style="{
        height: item.height + 'px',
        background: item.background,
        top: item.top + 'px',
        left: item.left + 'px',
      }"
      v-for="item in waterList"
      class="items"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
type ListItem = {
  top?: number;
  left?: number;
  height: number;
  background: string;
};
const props = defineProps<{
  list: ListItem[];
}>();
const waterList = reactive<any[]>([]);
const init = () => {
  const heightList: any[] = [];
  const width = 130;
  const x = document.body.clientWidth;
  const column = Math.floor(x / width);

  props.list.map((item: ListItem, listIndex: number) => {
    if (listIndex < column) {
      item.top = 10;
      item.left = listIndex * width;
      heightList.push(item.height + 10);
      waterList.push(item);
    } else {
      let current = heightList[0];
      let index = 0;
      heightList.forEach((h, inx) => {
        if (current > h) {
          current = h;
          index = inx;
        }
      });
      console.log(current, "c");
      item.top = current + 10;
      console.log(item.top, "top", listIndex);
      item.left = index * width;
      heightList[index] = heightList[index] + item.height + 20;
      waterList.push(item);
    }
  });
  console.log(props.list, "list");
};
onMounted(() => {
  window.onresize = () => init();
  init();
});
</script>
<style lang="less">
.wraps {
  position: relative;
  height: 100%;
  .items {
    position: absolute;
    width: 120px;
    border-radius: 6px;
  }
}
</style>
