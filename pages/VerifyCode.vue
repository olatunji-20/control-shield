<template>
    <div>
      <div class="mx-auto w-1/3 mt-16">
          <h1 class="font-bold text-2xl">Forgot password</h1>
          <p class="font-thin text-md mb-16">Enter the code sent to "******@gmail.com".</p>
          <div class="flex justify-between">
            <div class="w-[85px] h-[60px] rounded-md border"></div>
            <div class="w-[85px] h-[60px] rounded-md border"></div>
            <div class="w-[85px] h-[60px] rounded-md border"></div>
            <div class="w-[85px] h-[60px] rounded-md border"></div>
          </div>
          <UForm>
            <UButton label="Proceed to my Account" type="email" size="xl" padded block class="mt-6 h-[60px] rounded-none flex text-black justify-between">
                <template #trailing>
                    <UIcon name="i-heroicons-arrow-right-20-solid" class="w-10 h-5" />
                </template>
            </UButton>
          </UForm>
      </div>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: "sign-layout",
  });
  </script>