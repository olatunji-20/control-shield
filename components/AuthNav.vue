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
    <ul class="flex gap-x-4 font-thin">
      <NuxtLink to="/shield">
        <li>Shield</li>
      </NuxtLink>
      <NuxtLink to="/iccs">
        <li>ICCS</li>
      </NuxtLink>
      <li>Resources</li>
      <li>About us</li>
      <li>Feedback</li>
      <NuxtLink to="/team">
        <li>Team</li>
      </NuxtLink>
      <NuxtLink to="/trusted">
        <li>Trusted Vars</li>
      </NuxtLink>
    </ul>
    <div class="flex w-[190px] gap-x-2 items-center">
      <div
        class="size-[30px] rounded-full bg-[#2B313A] flex items-center justify-center"
      >
        <UIcon name="i-material-symbols-notifications-outline-sharp" />
      </div>
      <div class="">
        <User />
      </div>
    </div>
  </div>
</template>

<script setup></script>
