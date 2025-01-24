<template>
  <div class="h-[250px] overflow-y-scroll">
    <div v-for="t in row.ot" :key="t.id" class="mb-6">
      <div>
        <h3 class="font-bold text-lg text-wrap">
          {{ t.header }}
        </h3>
        <p v-if="t.paid" class="font-bold leading-8">Paid</p>
        <ul class="list-disc pl-2">
          <li v-for="p in t.paid" :key="p" class="text-wrap">
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
          <li v-for="f in t.free" :key="f" class="text-wrap">
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
        <p v-if="t.untagged" class="font-bold leading-8"></p>
        <ul class="list-disc pl-2">
          <li v-for="f in t.untagged" :key="f" class="text-wrap">
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
        <p v-if="t.writeup" class="text-xs text-wrap">{{ t.writeup }}</p>
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

<style scoped>
/* The entire scrollbar */
::-webkit-scrollbar {
  width: 0px; /* Change width */
  background: #17292f; /* Background color */
}

/* The draggable part of the scrollbar */
::-webkit-scrollbar-thumb {
  background: #193032; /* Color of the scrollbar */
  border-radius: 2px; /* Rounded corners */
}

/* The hover effect for the scrollbar */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* Darker color on hover */
}

/* The corner piece of the scrollbar */
::-webkit-scrollbar-corner {
  background: #f1f1f1; /* Color of the corner */
}
</style>
