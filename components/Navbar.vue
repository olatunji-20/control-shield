<template>
  <div class="flex justify-between py-7 px-16 items-center">
    <NuxtLink to="/">
      <div class="w-[220px] h-[45px]">
        <NuxtImg
          src="/landing-img/control-shield-logo.png"
          alt="control-shield-logo"
          class="object-fill w-[100%] h-[100%]"
        />
      </div>
    </NuxtLink>
    <ul class="flex gap-x-6 font-thin">
      <li>Shield</li>
      <NuxtLink to="/iccs">
        <li>ICCS</li>
      </NuxtLink>
      <li>Resources</li>
      <li>About us</li>
      <li>Feedback</li>
    </ul>
    <div class="flex gap-x-2">
      <NuxtLink to="/auth/signin">
        <UButton label="Login" variant="ghost" class="text-white" />
      </NuxtLink>
      <UButton label="Launch app" class="rounded-full text-xs text-black" />
    </div>
  </div>
</template>

<style scoped></style>
