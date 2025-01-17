<template>
  <div class="grid grid-cols-3 gap-8">
    <UCard
      v-for="(n, i) in 10"
      :key="i"
      class="bg-black rounded-none ring-0"
      :ui="{ strategy: 'override', shadow: 'none', body: 'p-0' }"
    >
      <NuxtLink :to="`/blog/${n}`">
        <img
          src="/public/blog/blog-image.png"
          class="w-[100%] h-[160px] object-fill"
        />
        <p class="font-semibold text-xl py-3">
          Lorem ipsum dolor sit. {{ n
          }}<UIcon
            name="i-material-symbols-arrow-outward"
            class="float-right relative top-[4px]"
          />
        </p>
        <p class="font-thin text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          reiciendis!
        </p>
      </NuxtLink>
    </UCard>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
