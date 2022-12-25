<!--
 * @Author: fg
 * @Date: 2022-12-25 19:36:16
 * @LastEditors: fg
 * @LastEditTime: 2022-12-25 19:38:42
 * @Description: css module
-->
<template>
  <div :class="$style.red">css module</div>
</template>

<!-- 将生成的 CSS 类作为 $style 对象的键暴露给组件 -->
<style module>
.red {
  color: red;
  font-size: 20px;
}
</style>

<!-- 可以通过给 module attribute 一个值来自定义注入的类对象的 property 键 -->
<!-- useCssModule.vue 可以查看 -->
