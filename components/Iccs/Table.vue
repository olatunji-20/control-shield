<template>
  <div class="my-16 border border-shield-bd">
    <UTable :columns="columns" :rows="iccsData" class="p-0">
      <template #nist-data="{ row }">
        <div class="w-[100%] h-[250px] flex flex-col justify-start gap-y-4">
          <UButton
            v-for="n in row.nist"
            :key="n"
            :label="n"
            :class="
              n === 'Identify'
                ? 'bg-[#2075C3]'
                : n === 'Protect'
                ? 'bg-[#960C4E]'
                : n === 'Detect'
                ? 'bg-[#309571]'
                : n === 'Respond'
                ? 'bg-[#B17706]'
                : n === 'Recover'
                ? 'bg-[#8F20C3]'
                : 'bg-[#8551F5]'
            "
          />
        </div>
      </template>

      <template #cis-data="{ row }">
        <IccsCis :row="row" />
      </template>

      <template #practices-data="{ row }">
        <IccsPractices :row="row" />
      </template>

      <template #ot-data="{ row }">
        <IccsOt :row="row" />
      </template>

      <template #maturity-data="{ row }">
        <IccsMaturity :row="row" />
      </template>
    </UTable>
  </div>
</template>

<script setup>
import { iccsData } from "~/iccs";

const columns = [
  {
    key: "nist",
    label: "NIST CSF Function",
    class: "w-[80px] bg-[#2B313A] text-white",
  },
  {
    key: "cis",
    label: "CIS Critical Control",
    class: "bg-[#2B313A] text-white",
  },
  {
    key: "ot",
    label: "OT Platform/Tool",
    class: "h-26 bg-[#2B313A] text-white w-[21%]",
  },
  {
    key: "practices",
    label: "High-Level Consnisteration/Best Practices",
    class: "bg-[#2B313A] text-white w-[29%]",
  },
  {
    key: "maturity",
    label: "Maturity-based Requirements",
    class: "bg-[#2B313A] text-white",
  },
];
</script>
