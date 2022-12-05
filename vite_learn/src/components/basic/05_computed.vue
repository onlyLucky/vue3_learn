<!--
 * @Author: fg
 * @Date: 2022-12-05 11:25:26
 * @LastEditors: fg
 * @LastEditTime: 2022-12-05 14:15:11
 * @Description:  computed计算属性
-->
<template>
  <h3>
    computed:
    计算属性就是当依赖的属性的值发生变化的时候，才会触发他的更改，如果依赖的值，不发生变化的时候，使用的是缓存中的属性值
  </h3>
  <p>{{ priceTxt }}</p>
  <button @click="mul = 500">计算属性值更改</button>
  <p>{{ mul }}</p>
  <div>
    <table style="width: 800px" border>
      <thead>
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td align="center">{{ item.name }}</td>
          <td align="center">
            <button @click="handleItemOpt(item, false)">-</button>
            {{ item.num }}
            <button @click="handleItemOpt(item, true)">+</button>
          </td>
          <td align="center">{{ item.num * item.price }}</td>
          <td align="center">
            <button @click="del(index)">删除</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center">总价：{{ $total }}</td>
      </tfoot>
    </table>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, reactive } from "vue";
// 函数形式
let price = ref(0);
let priceTxt = computed<string>(() => {
  return `￥${price.value}`;
});
setTimeout(() => {
  price.value = 500;
}, 1000);

// 对象形式
let priceObj = ref<number | string>(0);
let mul = computed({
  get: () => {
    return priceObj.value;
  },
  set: (value) => {
    priceObj.value = `set ￥${value}`;
  },
});

// 购物车
type Shop = {
  name: string;
  num: number;
  price: number;
};
let $total = ref<number>(0);
let data = reactive<Shop[]>([
  {
    name: "韩国Amore爱茉莉红吕洗发水套装修复受损发质",
    num: 1,
    price: 89,
  },
  {
    name: "Friso美素佳儿 金装婴儿配方奶粉3段900g",
    num: 1,
    price: 328,
  },
  {
    name: "TTBOO兔兔小布 肩纽扣套装",
    num: 1,
    price: 58,
  },
  {
    name: "illuma启赋 奶粉3段900g",
    num: 1,
    price: 399,
  },
  {
    name: "韩蜜 酷炫唇蜜（礼盒套装）2.8g*4",
    num: 1,
    price: 289,
  },
]);
const handleItemOpt = (item: Shop, type: boolean) => {
  if (item.num <= 99 && type) {
    item.num++;
  }
  if (item.num > 0 && !type) {
    item.num--;
  }
};
const del = (index: number) => {
  data.splice(index, 1);
};

$total = computed<number>(() => {
  return data.reduce((prev, next) => {
    return prev + next.num * next.price;
  }, 0);
});
</script>
<style></style>
