<template>
  <div class="px-16 pt-8 pb-16">
    <h1 class="text-4xl font-semibold">
      Calculating Industry-wide Cyber Risk Exposure
    </h1>
    <p class="font-thin text-xl">
      Monitor global cyber threat activities and gain insights
    </p>
    <h2 class="font-semibold py-8 ml-4 text-xl">Attacks distribution</h2>
    <div class="border-2 border-red-400">
      <div class="py-4 border border-yellow-500">
        <div class="relative">
          <div class="absolute right-0 top-2 border w-[150px] h-[45px]"></div>
          <UTabs
            :items="tabs"
            :ui="{
              wrapper: 'flex flex-col justify-start gap-4',
              list: {
                width: 'w-[550px]',
                height: 'h-16',
                background: 'bg-shield-blac',
                padding: 'p-0',
                rounded: 'rounded-none',
                tab: {
                  background: 'bg-shield-black',
                  rounded: 'rounded-none',
                  height: 'h-16',
                  active:
                    'border-b-4 border-shield-green 600 text-shield-green',
                },
              },
            }"
          >
            <template #24hours="{ item }">
              <ShieldAttacksDistribution />
            </template>
            <template #1week="{ item }">
              <ShieldAttacksDistribution />
            </template>
            <template #1month="{ item }">
              <ShieldAttacksDistribution />
            </template>
            <template #6months="{ item }">
              <ShieldAttacksDistribution />
            </template>
            <template #1year="{ item }">
              <ShieldAttacksDistribution />
            </template>
            <template #custom="{ item }">
              <ShieldAttacksDistribution />
            </template>
          </UTabs>
        </div>
      </div>
    </div>
    <div>
      <ShieldChart />
    </div>
    <div>
      <ShieldAttacks />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth-layout",
});

const tabs = ref([
  {
    slot: "24hours",
    label: "24 hours",
  },
  {
    slot: "1week",
    label: "1 week",
  },
  {
    slot: "1month",
    label: "1 month",
  },
  {
    slot: "6months",
    label: "6 months",
  },
  {
    slot: "1year",
    label: "1 year",
  },
  {
    slot: "custom",
    label: "Custom",
  },
]);
</script>

<style></style>
