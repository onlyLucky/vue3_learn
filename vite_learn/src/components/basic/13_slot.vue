<!--
 * @Author: fg
 * @Date: 2022-12-09 15:40:17
 * @LastEditors: fg
 * @LastEditTime: 2022-12-09 16:44:56
 * @Description: 插槽
-->

<template>
  <h3>插槽slot</h3>
  <ul>
    <li>
      <h4>匿名插槽</h4>
      <div>
        <slot></slot>
      </div>
    </li>
    <li>
      <h4>具名插槽</h4>
      <div>
        <slot name="header"></slot>
        <slot name="footer"></slot>
      </div>
    </li>
    <li>
      <h4>作用域插槽</h4>
      <div>
        <div v-for="item in 6">
          <slot name="part" :itemData="item"></slot>
        </div>
      </div>
    </li>
    <li>
      <h4>动态插槽</h4>
      <div>
        <slot name="dynamic"></slot>
      </div>
    </li>
  </ul>
</template>
<script setup lang="ts"></script>
<style></style>
