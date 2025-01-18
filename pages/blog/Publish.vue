<template>
  <div class="p-16">
    <div
      class="border-y border-shield-bd p-4 flex justify-between items-center"
    >
      <div class="">
        <h1 class="font-bold text-4xl">Publish a blog</h1>
        <p class="font-thin text-xl">What's happening</p>
      </div>
      <div>
        <UButton
          label="Save blog"
          variant="outline"
          class="bg-shield-black text-shield-green py-3"
        />
        <UButton label="Publish blog" class="ml-4 text-shield-black py-3" />
      </div>
    </div>
    <div class="my-12 border-2 border-yellow-600 h-[500px]"></div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth-layout",
});
</script>

<style></style>
