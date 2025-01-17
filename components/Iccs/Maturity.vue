<template>
  <div>
    <div class="border border-purple-500 h-[250px] overflow-y-scroll">
      <h3 class="font-bold text-red-400">Low</h3>
      <h3 class="font-bold text-blue-400">Medium</h3>
      <h3 class="font-bold text-green-400">High</h3>
      <h1 class="text-red-700"></h1>
    </div>
  </div>
</template>

<script setup>
defineProps({
  row: {
    require: true,
    type: Object,
  },
});
</script>

<style></style>
