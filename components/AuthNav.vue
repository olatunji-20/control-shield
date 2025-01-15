<template>
  <div class="flex justify-between py-7 px-16 items-center">
    <NuxtLink to="/">
      <div class="w-[220px] h-[45px]">
        <img
          src="/public/landing-img/control-shield-logo.png"
          alt="control-shield-logo"
          class="object-fill w-[100%] h-[100%]"
        />
      </div>
    </NuxtLink>
    <ul class="flex gap-x-4 font-thin">
      <li>Shield</li>
      <NuxtLink to="/iccs">
        <li>ICCS</li>
      </NuxtLink>
      <li>Resources</li>
      <li>About us</li>
      <li>Feedback</li>
      <li>Team</li>
      <li>Trusted Vars</li>
    </ul>
    <div class="flex w-[190px] gap-x-2 items-center">
      <div
        class="size-[30px] rounded-full bg-[#2B313A] flex items-center justify-center"
      >
        <UIcon name="i-material-symbols-notifications-outline-sharp" />
      </div>
      <div
        class="flex-1 border-l pl-2 flex flex-row justify-between items-center"
      >
        <div
          class="size-[30px] rounded-full bg-[#2B313A] flex items-center justify-center"
        >
          <p class="font-bold text-md">JB</p>
        </div>
        <div>
          <h1 class="font-bold">JACK B.</h1>
          <p class="font-thin text-xs leading-3">jackb@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>
