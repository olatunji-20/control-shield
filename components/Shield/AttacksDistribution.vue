<template>
  <div>
    <div>
      <div class="grid grid-cols-3 gap-x-4">
        <div
          v-for="(p, i) in 3"
          :key="p"
          class="border h-[150px] rounded-lg p-5 flex flex-col justify-between"
        >
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div class="size-[30px] rounded-lg border"></div>
              <p class="font-thin text-[12px] ml-1">Number of Attacks</p>
            </div>
            <div class="size-[25px] border rounded-full"></div>
          </div>
          <div class="flex justify-between items-center">
            <p class="font-bold text-3xl">$400</p>
            <div class="text-center">
              <p class="text-shield-green font-semibold">20%</p>
              <p class="text-[10px] font-thin">vs last year</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12">
        <p class="font-semibold text-lg">IMPACT TYPE</p>
        <div class="grid grid-cols-5 gap-x-2 mt-4">
          <div class="h-[150px] p-2 border rounded-lg">
            <p class="font-semibold text-sm">SAFETY</p>
          </div>
          <div class="h-[150px] p-2 border rounded-lg">
            <p class="font-semibold text-sm">FINANCIAL</p>
          </div>
          <div class="h-[150px] p-2 border rounded-lg">
            <p class="font-semibold text-sm">ENVIRONMENTAL</p>
          </div>
          <div class="h-[150px] p-2 border rounded-lg">
            <p class="font-semibold text-sm">DESTRUCTION</p>
          </div>
          <div class="h-[150px] p-2 border rounded-lg">
            <p class="font-semibold text-sm">TIER</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
