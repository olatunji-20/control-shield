<template>
  <div class="flex items-center justify-center">
    <div class="w-1/3 text-center">
      <div class="size-[250px] mx-auto border-2 rounded-full">
        <NuxtImg
          src="/auth-img/solid-check.png"
          class="w-[100%] h-[100%] object-cover"
        />
      </div>
      <h1 class="font-bold text-2xl">Congratulations</h1>
      <p class="font-thin text-md mb-4">Your account has been verified.</p>
      <NuxtLink to="/">
        <UButton
          label="Home"
          type="email"
          size="xl"
          padded
          block
          class="mt-2 h-[60px] rounded-none flex text-black justify-between"
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
