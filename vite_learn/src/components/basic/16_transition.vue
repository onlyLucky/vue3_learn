<!--
 * @Author: fg
 * @Date: 2022-12-12 14:40:03
 * @LastEditors: fg
 * @LastEditTime: 2022-12-19 13:57:09
 * @Description: transition
-->

<template>
  <div>
    <Button @click="shuffle">Shuffle</Button>
    <transition-group class="wraps" move-class="mmm" name="mmm" tag="ul">
      <li class="cell" v-for="(item, index) in itemSuf" :key="index">
        {{ item.number }}
      </li>
    </transition-group>
  </div>

  <div>
    <input step="20" v-model="num.current" type="number" />
    <div>{{ num.tweenedNumber.toFixed(0) }}</div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import _ from "lodash";
import gsap from "gsap";
let itemSuf = ref(
  Array.apply(null, { length: 81 } as number[]).map((_, index) => {
    return {
      id: index,
      number: (index % 9) + 1,
    };
  })
);
let num = reactive({
  tweenedNumber: 0,
  current: 0,
});
const shuffle = () => {
  console.log("items");
  itemSuf.value = _.shuffle(itemSuf.value);
};

watch(
  () => num.current,
  (newVal) => {
    gsap.to(num, {
      duration: 1,
      tweenedNumber: newVal,
    });
  }
);
</script>
<style scoped lang="less">
.wraps {
  display: flex;
  flex-wrap: wrap;
  width: calc(25px * 10 + 9px);
  .cell {
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.mmm {
  transition: transform 0.8s ease;
}
</style>
