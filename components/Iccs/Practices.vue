<template>
  <div>
    <div class="h-[250px] w-[350px] border overflow-y-scroll">
      <div v-html="row.practices" class="text-wrap"></div>
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

<style scoped>
div:deep(p) {
  padding-top: 5px;
}
div:deep(ul, li) {
  padding-left: 4px;
  list-style-type: disc;
}
div:deep(h5) {
  text-decoration: underline;
  padding-top: 5px;
}
</style>
