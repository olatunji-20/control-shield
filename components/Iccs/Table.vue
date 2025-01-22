<template>
  <div class="my-16 text-red-400 border">
    <UTable :columns="columns" :rows="iccsData" class="p-0">
      <template #nist-data="{ row }">
        <div class="w-[100%] h-[250px] flex flex-col justify-start gap-y-4">
          <UButton
            v-for="n in row.nist"
            :key="n"
            :label="n"
            class="text-center"
            :class="
              n === 'Identify'
                ? 'bg-blue-500'
                : n === 'Protect'
                ? 'bg-red-500'
                : n === 'Detect'
                ? 'bg-green-500'
                : n === 'Respond'
                ? 'bg-yellow-500'
                : n === 'Recover'
                ? 'bg-purple-500'
                : 'bg-purple-200'
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

<style>
/* The entire scrollbar */
::-webkit-scrollbar {
  width: 0px; /* Change width */
  background: #17292f; /* Background color */
}

/* The draggable part of the scrollbar */
::-webkit-scrollbar-thumb {
  background: #193032; /* Color of the scrollbar */
  border-radius: 2px; /* Rounded corners */
}

/* The hover effect for the scrollbar */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* Darker color on hover */
}

/* The corner piece of the scrollbar */
::-webkit-scrollbar-corner {
  background: #f1f1f1; /* Color of the corner */
}
</style>
