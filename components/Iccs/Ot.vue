<template>
  <div class="h-[250px] overflow-y-scroll">
    <div v-for="t in row.ot" :key="t.id">
      <div>
        <h3 class="font-bold text-lg text-wrap mt-6">
          {{ t.header }}
        </h3>
        <p v-if="t.paid" class="font-bold leading-8">Paid</p>
        <ul class="list-disc pl-2">
          <li v-for="p in t.paid" :key="p">
            <div class="flex flex-row justify-between no-wrap">
              <p class="text-xs">{{ p }}</p>
              <div class="w-[30px] h-[20px] flex justify-between">
                <UIcon
                  name="i-material-symbols-shield"
                  size="lg"
                  class="text-blue-500"
                />
                <UIcon
                  name="i-material-symbols-shield"
                  size="lg"
                  class="text-yellow-500"
                />
              </div>
            </div>
          </li>
        </ul>
        <p v-if="t.free" class="font-bold leading-8">Free</p>
        <ul class="list-disc pl-2">
          <li v-for="f in t.free" :key="f" class="text-xs">
            <div class="flex flex-row justify-between no-wrap">
              <p class="text-xs">{{ f }}</p>
              <div class="w-[30px] h-[20px] flex justify-between">
                <UIcon
                  name="i-material-symbols-shield"
                  size="lg"
                  class="text-blue-500"
                />
                <UIcon
                  name="i-material-symbols-shield"
                  size="lg"
                  class="text-yellow-500"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
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
