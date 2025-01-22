<template>
  <div class="flex justify-between py-7 px-16 items-center">
    <NuxtLink to="/">
      <p class="font-thin">
        <span
          ><UIcon name="i-heroicons-chevron-left" class="relative top-[2px]"
        /></span>
        Return Home
      </p>
    </NuxtLink>
    <NuxtLink to="/auth/createaccount">
      <p class="font-thin">
        Not a member yet? <span class="font-medium underline">JOIN NOW</span>
      </p>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
