<template>
  <div class="pt-8 text-center">
    <h4 class="text-green-400">OUR PLANS</h4>
    <h2 class="font-bold text-4xl py-6">Roadmaps</h2>
    <p class="font-thin text-xl">Upcoming Features and Updates</p>
    <div class="p-32 pb-0">
      <div class="my-6 text-center">
        <div class="flex flex-row no-wrap justify-between">
          <p class="font-bold w-28 py-2 bg-shield-dark border border-shield-bd">
            Phase 1
          </p>
          <p class="font-bold w-28 py-2 bg-shield-dark border border-shield-bd">
            Phase 2
          </p>
          <p class="font-bold w-28 py-2 bg-shield-dark border border-shield-bd">
            Phase 3
          </p>
          <p class="font-bold w-28 py-2 bg-shield-dark border border-shield-bd">
            Phase 4
          </p>
        </div>
        <div
          class="border-t-2 border-shield-bd relative bottom-6 z-[-5] flex flex-row no-wrap justify-between px-16"
        >
          <div class="border border-shield-bd h-[150px] bg-red-500"></div>
          <div class="border border-shield-bd h-[150px] bg-red-500"></div>
          <div class="border border-shield-bd h-[150px] bg-red-500"></div>
          <div class="border border-shield-bd h-[150px] bg-red-500"></div>
        </div>
        <div class="flex flex-row no-wrap relative bottom-6 justify-between">
          <div
            :class="more === false ? 'h-[320px]' : 'h-auto'"
            class="border border-shield-bd w-[22%] relative bg-shield-dark text-left px-4 py-8 overflow-hidden"
          >
            <p class="font-bold">Detailed Risk Quantification Calculator</p>
            <p class="text-md pt-4 font-thin leading-8">
              {{ more }}
              In addition to SHIELD's risk quantification (ALE), this separate
              feature calculates risk while considering security controls the
              organization has implemented to quantify risk more accurately and
              make security program recommendations. It also calculates risk not
              just with a number but by using a bell curve, helping to identify
              the most severe risk outliers to address. This, will all be
              powered by an AI engine, providing tailored recommendations and
              real-time insights to enhance decision-making and risk management.
            </p>
            <p
              @click="showMore"
              class="text-shield-green bg-shield-black absolute bottom-0 w-full cursor-pointer"
            >
              {{ more === false ? "See more" : "See less" }}
              <UIcon
                :name="
                  more === false
                    ? 'i-heroicons-chevron-down'
                    : 'i-heroicons-chevron-up'
                "
                class="relative top-[3px]"
              />
            </p>
          </div>
          <div
            class="border border-shield-bd w-[22%] h-[260px] bg-shield-dark text-left px-4 py-8"
          >
            <p class="font-bold">API Access</p>
            <p class="text-md pt-4 font-thin leading-8">
              Allow organizations and practitioners access to data within
              SHIELD, enabling users to leverage it for their own analysis and
              insights.
            </p>
          </div>
          <div
            :class="more2 === false ? 'h-[320px]' : 'h-[400px]'"
            class="border border-shield-bd w-[22%] bg-shield-dark relative text-left px-4 py-8 overflow-hidden"
          >
            <p class="font-bold">Tooling for Maturity-Based Requirements</p>
            <p class="text-md pt-4 font-thin leading-8">
              A tool that facilitates the import and tracking of maturity-based
              requirements part of ICCS. Organizations can use this tool to
              manage these requirements and monitor their progress throughout
              the implementation process.
            </p>
            <p
              @click="showMore2"
              class="text-shield-green bg-shield-black absolute bottom-0 w-full cursor-pointer"
            >
              {{ more2 === false ? "See more" : "See less" }}
              <UIcon
                :name="
                  more2 === false
                    ? 'i-heroicons-chevron-down'
                    : 'i-heroicons-chevron-up'
                "
                class="relative top-[3px]"
              />
            </p>
          </div>
          <div
            class="border border-shield-bd w-[22%] h-[310px] bg-shield-dark text-left px-4 py-8"
          >
            <p class="font-bold">User ranking for contributions</p>
            <p class="text-md pt-4 font-thin leading-8">
              Users will earn a ranking for whitepapers/briefs submitted and
              other contributions they make to Control Shield. Their profile
              will be highlighted on a leaderboard.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="mt-64 p-32"
        style="
          background-image: url(/landing-img/member-vector.png);
          background-position: center;
          background-size: cover;
        "
      >
        <h1 class="font-bold text-4xl">Become a member</h1>
        <p class="font-thin text-xl">
          Enjoy premium first hand offers when you join us
        </p>
        <div
          class="my-12 mx-auto grid grid-rows-2 grid-flow-col gap-4 text-shield-subgreen w-4/5"
        >
          <p class="p-3 bg-white rounded-lg font-semibold text-md">
            Annual Threat Reports
          </p>
          <p
            class="p-3 bg-white rounded-lg font-semibold text-md relative left-16"
          >
            VAR discounts
          </p>
          <p class="p-3 bg-white rounded-lg font-semibold text-md">
            Actionable Whitepapers
          </p>
          <p
            class="p-3 bg-white rounded-lg font-semibold text-md relative left-16"
          >
            Industry-Leading Technology & Best Practices
          </p>
          <p class="p-3 bg-white rounded-lg font-semibold text-md">
            Contribute
          </p>
        </div>
        <UButton
          label="Launch app"
          size="xl"
          class="rounded-full px-12 text-shield-black mt-12 py-5"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const more = ref(false);
const more2 = ref(false);

const showMore = () => {
  more.value = !more.value;
};
const showMore2 = () => {
  more2.value = !more2.value;
};
</script>
