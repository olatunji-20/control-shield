<template>
  <div class="px-16 py-8 text-center">
    <h1 class="font-semibold text-6xl mb-4">
      UX review<br />
      presentations
    </h1>
    <div class="border-y border-shield-bd flex justify-between my-6 py-3">
      <div class="flex flex-row justify-between items-center">
        <div
          class="size-[45px] rounded-full bg-[#2B313A] flex items-center justify-center"
        >
          <p class="font-bold text-md">JB</p>
        </div>
        <div class="text-left pl-1">
          <h1 class="font-semibold text-xs">Jack Daniels.</h1>
          <p class="font-thin text-[10px] leading-3">June 04, 2024</p>
        </div>
      </div>
      <UButton
        label="Share article"
        size="xs"
        variant="outline"
        class="rounded-full text-shield-blight"
      >
        <template #trailing>
          <UIcon name="i-material-symbols-share-outline" class="h-5" />
        </template>
      </UButton>
    </div>
    <div class="h-[400px] my-12 mx-auto">
      <NuxtImg
        src="/public/blog/ux-review.png"
        alt="bbb"
        class="rounded-xl object-fill size-[100%]"
      />
    </div>
    <p class="font-thin text-left mt-12">
      There are multiple roads leading to Rome, meaning there are multiple ways
      to achieve the same outcome. CyberToolFramework is meant to provide
      platforms, tools, and high-level processes/best practices to help direct
      and guide OT organizations to be more secure. This is one person's
      opinion, with other tools, approaches, or best practices that may work
      just as well. Use what works for your organization, your goals, your risk,
      your requirements, and your budget. It’s important to acknowledge that
      certain critical infrastructure organizations operate with tighter budgets
      compared to larger IT environments. Because of this make sure you use a
      cyber risk methodology such as ISA 62443 3-2 to ensure the control
      selected is making the biggest impact at lowering risk. Oftentimes working
      off the land with proper control system configuration, adequate
      governance, and conducting a thorough risk assessment to reduce risk for
      highly critical systems specifically can be a more effective use of time,
      resources, and money than implementing a blanket set of tooling.
    </p>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth-layout",
});
</script>

<style></style>
