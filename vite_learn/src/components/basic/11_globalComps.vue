<template>
  <h3>global_component</h3>
  <p>{{ msg }}</p>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    msg?: string; // 是否必传
  }>(),
  {
    msg: "hello world",
  }
);
</script>
<style scoped></style>
