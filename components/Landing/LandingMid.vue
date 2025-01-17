<template>
  <div class="p-32 text-center">
    <p class="text-shield-green">WHAT MAKES US SPECIAL</p>
    <h2 class="text-4xl font-bold py-4">Features</h2>
    <p class="font-thin text-xl">Upcoming Features and Updates</p>

    <div class="my-12 grid grid-cols-2 gap-12">
      <div
        class="border-2 border-shield-bd bg-shield-dark flex flex-col justify-between rounded-xl p-6"
      >
        <div class="w-[100%] h-[400px] bg-shield-brown rounded-lg">
          <div class=""></div>
        </div>
        <div class="text-left pt-6 flex-1 relative">
          <p class="font-bold text-3xl py-4">Shield</p>
          <p class="text-shield-blight leading-7 font-thin text-xl">
            SHIELD is a comprehensive database of attacks targeting critical
            infrastructure, enriched with analysis to calculate both current &
            future cyber risk exposure industry-wide.
          </p>
          <UButton
            label="Launch app"
            variant="ghost"
            color="black"
            class="absolute bottom-0 text-shield-green px-0"
          >
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right-20-solid" class="w-10 h-5" />
            </template>
          </UButton>
        </div>
      </div>
      <div
        class="border-2 border-shield-bd bg-shield-dark flex flex-col rounded-xl p-6"
      >
        <div class="w-[100%] h-[400px] bg-shield-brown rounded-lg">
          <div class=""></div>
        </div>
        <div class="text-left pt-6 flex-1">
          <p class="font-bold text-3xl py-4">ICCS</p>
          <p class="text-shield-blight leading-7 font-thin text-xl">
            ICCS adapts the digestible CIS Top 18, making it OT-centric by
            adding specific requirements, controls, and guidance for critical
            infrastructure.
          </p>
          <p class="text-shield-blight leading-7 font-thin text-xl mt-4">
            Control Shield connects users to Trusted VARs so they not only know
            what to implement and how, but also who can help them
          </p>
          <UButton
            label="Launch app"
            variant="ghost"
            color="black"
            class="text-shield-green mt-16 px-0"
          >
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right-20-solid" class="w-10 h-5" />
            </template>
          </UButton>
        </div>
      </div>
      <div
        class="border-2 border-shield-bd bg-shield-dark col-span-2 rounded-xl p-6 flex flex-row justify-between"
      >
        <div class="w-[45%] text-left relative">
          <p class="font-bold text-3xl py-5">Whitepapers and Briefs</p>
          <p class="text-shield-blight leading-7 font-thin text-xl">
            Whitepapers and briefs that offer agnostic and actionable strategies
            for safeguarding critical infrastructure, with the ability for users
            to contribute and publish their own insights.
          </p>
          <UButton
            label="Launch app"
            variant="ghost"
            color="black"
            class="absolute bottom-0 text-shield-green px-0"
          >
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right-20-solid" class="w-10 h-5" />
            </template>
          </UButton>
        </div>
        <div class="w-[47%] flex items-center">
          <div
            class="w-[100%] h-[400px] bg-shield-brown rounded-lg flex items-center"
          >
            <div class=""></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
