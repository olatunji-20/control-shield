<template>
  <div class="flex items-center justify-center">
    <div class="w-1/3 text-center">
      <div class="size-[150px] mx-auto my-4 rounded-full">
        <img src="/public/auth-img/solid-check.png" class="object-cover" />
      </div>
      <h1 class="font-bold text-2xl">Congratulations</h1>
      <p class="font-thin text-md mb-10">Your account has been verified.</p>
      <NuxtLink to="/">
        <UButton
          label="Home"
          type="email"
          size="xl"
          padded
          block
          class="mt-4 h-[60px] rounded-none flex text-black justify-between"
        >
          <template #trailing>
            <UIcon name="i-heroicons-arrow-right-20-solid" class="w-10 h-5" />
          </template>
        </UButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "sign-layout",
});
</script>
