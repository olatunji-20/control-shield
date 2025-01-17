<template>
  <div>
    <div class="h-[250px] overflow-y-scroll">
      <h3 class="font-bold text-lg text-wrap">
        {{ row.cis.header }}
      </h3>
      <h1 class="text-wrap">
        {{ row.cis.body }}
      </h1>
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
