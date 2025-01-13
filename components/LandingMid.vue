<template>
  <div class="p-32 pt-0 flex flex-col gap-y-24">
    <div class="border-2 border-gray-800 rounded-xl py-16 px-8 bg-[#141923] flex flex-row justify-between">
        <div class="w-[47%]">
            <p class="font-bold text-2xl">Powered by</p>
            <p class="text-shield-blight pt-4 leading-7 font-thin">1898 & Co's Security and Risk Consulting group is one of the largest consulting firms that focuses solely on critical infrastructure cybersecurity. Supporting clients across the security lifecycle from the inception of their security programs to achieving a state of continuous improvement and risk mitigation.</p>
        </div>
        <div class="w-[47%] flex items-center">
            <div class="w-[300px] h-[150px] mx-auto">
                <img src="/public/images/1898co.png" alt="1898co-logo" class="object-contain" />
            </div>
        </div>
    </div>

    <div class="rounded-lg py-8 flex flex-row justify-between">
        <div class="w-[47%]">
            <p class="text-green-500">DASHBOARD</p>
            <p class="font-bold text-2xl py-5">Control Shield</p>
            <p class="text-shield-blight leading-7 font-thin">SHIELD is a comprehensive database of attacks targeting critical infrastructure, enriched by analysis to provide crucial insights for proactive strategy and defense.</p>
            <UButton label="Launch app" variant="outline" color="black" size="lg" class="mt-12 rounded-full px-8 border-green-500 text-green-500" />
        </div>
        <div class="w-[47%] flex items-center">
            <div class="size-[100%] bg-shield-green rounded-xl">
                <div class="rounded-lg w-[100%] h-[350px] flex items-center" style="background-color: green; background: radial-gradient(circle, rgba(85, 161, 170, 1) 0%, rgba(25, 48, 50, 0.4) 65%);">
                    <div class="border bg-grey-900 size-[200px] mx-auto">
                        <!-- <img src="/public/images/1898co.png" alt="1898co-logo" class="object-contain" /> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="rounded-lg py-8 flex flex-row justify-between">
        <div class="w-[47%] flex items-center">
            <div class="size-[100%] bg-shield-green rounded-xl">
                <div class="rounded-lg w-[100%] h-[350px] flex items-center" style="background-color: green; background: radial-gradient(circle, rgba(85, 161, 170, 1) 0%, rgba(25, 48, 50, 0.4) 65%);">
                    <div class="border bg-grey-900 size-[200px] mx-auto bg-black">
                        <!-- <img src="/public/images/1898co.png" alt="1898co-logo" class="object-contain" /> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="w-[47%]">
            <p class="text-green-500">FEATURES</p>
            <p class="font-bold text-2xl py-5">ICCS</p>
            <p class="text-shield-blight leading-7 font-thin">ICCS adapts the digestible CIS Top 18, making it OT-centric by adding specific requirements, controls, and guidance for critical infrastructure.</p>
            <UButton label="Launch app" variant="outline" color="black" size="lg" class="mt-12 rounded-full px-8 border-green-500 text-green-500" />
        </div>
    </div>

    <div class="rounded-lg py-8 flex flex-row justify-between">
        <div class="w-[47%]">
            <p class="text-green-500">DOCUMENTS</p>
            <p class="font-bold text-2xl py-5">Whitepapers and Briefs</p>
            <p class="text-shield-blight leading-7 font-thin">Whitepapers and briefs that offer agnostic and actionable strategies for safeguarding critical infrastructure, with the ability for users to contribute and publish their own insights.</p>
            <UButton label="Launch app" variant="outline" color="black" size="lg" class="mt-12 rounded-full px-8 border-green-500 text-green-500" />
        </div>
        <div class="w-[47%] flex items-center">
            <div class="size-[100%] bg-shield-green rounded-xl">
                <div class="rounded-lg w-[100%] h-[350px] flex items-center" style="background-color: green; background: radial-gradient(circle, rgba(85, 161, 170, 1) 0%, rgba(25, 48, 50, 0.4) 65%);">
                    <div class="border bg-grey-900 size-[200px] mx-auto bg-black">
                        <!-- <img src="/public/images/1898co.png" alt="1898co-logo" class="object-contain" /> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>