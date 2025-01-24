<template>
  <div>
    <div class="border border-purple-500 h-[250px]">
      <h3 class="font-semibold text-red-400">Low</h3>
      <div class="flex items-center mb-3">
        <UIcon name="i-material-symbols-person-outline" size="xl" />
        <span class="text-xs">Coming soon.</span>
      </div>
      <div class="flex items-center my-3">
        <UIcon
          name="i-material-symbols-swap-horizontal-circle-outline"
          size="xl"
        />
        <span class="text-xs">Coming soon.</span>
      </div>
      <div class="flex items-center my-3">
        <UIcon name="i-material-symbols-person-outline" size="xl" />
        <span class="text-xs">Coming soon.</span>
      </div>
      <h3 class="font-semibold text-blue-400 mt-6">Medium</h3>
      <h3 class="font-semibold text-green-400 mt-6">High</h3>
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
