<template>
  <div class="p-32 pt-12 flex flex-col gap-y-32">
    <div class="border-2 border-gray-800 rounded-xl py-16 px-8 bg-[#141923] flex flex-row justify-between">
        <div class="w-[50%]">
            <p class="font-bold text-3xl">Powered by</p>
            <p class="text-shield-blight pt-4 leading-7 font-thin text-xl">1898 & Co's Security and Risk Consulting group is one of the largest consulting firms that focuses solely on critical infrastructure cybersecurity. Supporting clients across the security lifecycle from the inception of their security programs to achieving a state of continuous improvement and risk mitigation.</p>
        </div>
        <div class="w-[47%] flex items-center">
            <div class="w-[300px] h-[150px] mx-auto">
                <img src="/public/landing-img/1898co.png" alt="1898co-logo" class="object-contain" />
            </div>
        </div>
    </div>

    <div class="rounded-lg py-8 flex flex-row justify-between">
        <div class="w-[47%]">
            <p class="text-green-500">CALCULATING INDUSTRY-WIDE CYBER RISK EXPOSURE</p>
            <p class="font-bold text-3xl py-5">Shield</p>
            <p class="text-shield-blight leading-7 font-thin text-xl">SHIELD is a comprehensive database of attacks targeting critical infrastructure, enriched by analysis to provide crucial insights for proactive strategy and defense.</p>
            <p class="text-shield-blight leading-7 font-thin text-xl mt-4">Answering questions like 'How much should we spend on OT security?' or 'What level of risk are we truly facing now and in the future?’</p>
            <UButton label="Launch app" variant="outline" color="black" size="lg" class="mt-12 rounded-full px-8 border-green-500 text-green-500" />
        </div>
        <div class="w-[47%] flex items-center">
            <div class="w-[100%] h-[85%] bg-shield-green rounded-xl flex items-center" style="background-image: linear-gradient(to right, #52B49C , #7784CA);">
                <div class="w-[250px] h-[200px] mx-auto bg-black">
                    <!-- <img src="/public/landing-img/1898co.png" alt="1898co-logo" class="object-contain" /> -->
                </div>
            </div>
        </div>
    </div>

    <div class="rounded-lg py-8 flex flex-row justify-between">
        <div class="w-[47%] flex items-center">
            <div class="w-[100%] h-[85%] bg-shield-green rounded-xl flex items-center" style="background-image: linear-gradient(to right, #52B49C , #7784CA);">
                <div class="w-[250px] h-[200px] mx-auto bg-black">
                    <!-- <img src="/public/landing-img/1898co.png" alt="1898co-logo" class="object-contain" /> -->
                </div>
            </div>
        </div>
        <div class="w-[47%]">
            <p class="text-green-500">REQUIREMENTS, CONTROLS, AND GUIDANCE-MADE DIGESTIBLE</p>
            <p class="font-bold text-3xl py-5">ICCS</p>
            <p class="text-shield-blight leading-7 font-thin text-xl">ICCS adapts the digestible CIS Top 18, making it OT-centric by adding specific requirements, controls, and guidance for critical infrastructure.</p>
            <p class="text-shield-blight leading-7 font-thin text-xl mt-4">Control Shield connects users to Trusted VARs so they not only know what to implement and how, but also who can help them</p>
            <UButton label="Launch app" variant="outline" color="black" size="lg" class="mt-12 rounded-full px-8 border-green-500 text-green-500" />
        </div>
    </div>

    <div class="rounded-lg py-8 flex flex-row justify-between">
        <div class="w-[47%]">
            <p class="text-green-500">DOCUMENTS</p>
            <p class="font-bold text-3xl py-5">Whitepapers and Briefs</p>
            <p class="text-shield-blight leading-7 font-thin text-xl">Whitepapers and briefs that offer agnostic and actionable strategies for safeguarding critical infrastructure, with the ability for users to contribute and publish their own insights.</p>
            <UButton label="Launch app" variant="outline" color="black" size="lg" class="mt-24 rounded-full px-8 border-green-500 text-green-500" />
        </div>
        <div class="w-[47%] flex items-center">
            <div class="w-[100%] h-[95%] bg-shield-green rounded-xl flex items-center" style="background-image: linear-gradient(to right, #52B49C , #7784CA);">
                <div class="w-[250px] h-[200px] mx-auto bg-black">
                    <!-- <img src="/public/landing-img/1898co.png" alt="1898co-logo" class="object-contain" /> -->
                </div>
            </div>
        </div>
    </div>
  </div>
</template>