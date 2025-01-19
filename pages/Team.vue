<template>
  <div class="px-16 py-8">
    <h1 class="text-shield-green font-semibold text-5xl">
      Meet our team of experts
    </h1>
    <p class="font-thin pt-4">
      Trusted VARs are valued added resellers that sell and implement products
      or solutions. By going through Control Shield, Control Shield members are
      given
    </p>
    <div class="my-12 grid grid-cols-4 gap-x-8 gap-y-16">
      <UCard
        v-for="(n, i) in 6"
        :key="i"
        class="bg-black rounded-none ring-0"
        :ui="{ strategy: 'override', shadow: 'none', body: 'p-0' }"
      >
        <NuxtImg
          src="/public/blog/blog-image.png"
          class="w-[100%] h-[260px] object-fill"
        />
        <p class="font-semibold text-xl">Clara Santos Rocha</p>
        <p class="font-thin text-md">Partner and designer</p>
        <p class="font-thin text-xs">
          <UIcon
            name="i-material-symbols-mail-outline"
            class="relative top-[2px] mr-1"
          />clarasantos@gmail.com
        </p>
      </UCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth-layout",
});
</script>

<style></style>
