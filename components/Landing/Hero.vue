<template>
  <div
    class="pt-32 pb-8 px-24 text-center"
    style="
      background-image: url(/landing-img/landing-vector.png);
      background-position: center;
      background-size: cover;
    "
  >
    <h1 class="font-bold text-6xl leading-tight">
      OT Cybersecurity: Attack-Driven Risk Quantification, Tailored Controls,
      and Practical Tactics
    </h1>
    <h2 class="font-thin my-12 text-2xl text-shield-clight">
      Critical Infrastructure cybersecurity strategy and tactics leveraging<br />
      real-world attack data, common tailored security controls and<br />
      actionable guidance
    </h2>
    <UButton
      label="Launch app"
      size="xl"
      class="rounded-full px-12 text-shield-black my-6 py-5"
    />
    <div class="border border-green-700 size-[550px] mx-auto my-12"></div>
    <div class="w-3/4 border-b-2 mt-16 mx-auto text-center">
      <p class="font-bold text-3xl">Powered by</p>
      <p class="text-shield-blight py-8 leading-6 font-thin text-xl">
        1898 & Co's Security and Risk Consulting group is one of the largest
        consulting firms that focuses solely on critical infrastructure
        cybersecurity. Supporting clients across the security lifecycle from the
        inception of their security programs to achieving a state of continuous
        improvement and risk mitigation.
      </p>
      <div class="w-[175px] h-[90px] mb-6 mx-auto">
        <NuxtImg
          src="/landing-img/1898co.png"
          alt="1898co-logo"
          class="object-fill"
        />
      </div>
    </div>
  </div>
</template>
