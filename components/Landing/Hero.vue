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
    <div
      class="border border-green-700 relative w-[650px] h-[550px] mx-auto my-12"
    >
      <div class="border size-[45px] ml-16">
        <NuxtImg
          src="/landing-img/hero-anim/star.svg"
          class="w-[100%] h-[100%] object-contain"
        />
      </div>
      <div class="border w-[50px] h-[30px] mx-auto">
        <NuxtImg
          src="/landing-img/hero-anim/code.svg"
          class="w-[100%] h-[100%] object-contain"
        />
      </div>
      <div class="border size-[90px]">
        <NuxtImg
          src="/landing-img/hero-anim/star.svg"
          class="w-[100%] h-[100%] object-contain"
        />
      </div>
      <div class="border border-red-400 w-[480px] h-[350px] mx-auto relative">
        <div
          class="border w-[460px] h-[330px] absolute left-4 rounded-lg"
        ></div>
        <div
          class="border w-[460px] h-[330px] absolute left-2 top-2 rounded-lg"
        ></div>
        <div class="border w-[460px] h-[330px] absolute top-4 rounded-lg">
          <div class="border-blue-500 flex justify-end">
            <div class="w-[70px] h-[15px] my-3 mr-5 flex justify-between">
              <div
                v-for="n in 3"
                :key="n"
                class="size-[15px] rounded-full bg-gradient-to-r from-[#46D3B0] to-[#1B3DF0]"
              ></div>
            </div>
          </div>
          <hr />
          <div class="border w-[85px] absolute right-[-43px] top-32 h-[120px]">
            <NuxtImg
              src="/landing-img/hero-anim/shield.svg"
              class="w-[100%] h-[100%] object-contain"
            />
          </div>
        </div>
      </div>
      <div
        class="w-[320px] h-[430px] z-50 relative bottom-[72%] mx-auto border border-blue-500"
      >
        <NuxtImg
          src="/landing-img/hero-anim/lock.svg"
          class="w-[100%] h-[100%] object-contain"
        />
      </div>
      <div
        class="w-[600px] h-[350px] relative bottom-[150%] mx-auto border border-yellow-500"
      >
        <NuxtImg
          src="/landing-img/hero-anim/curve.svg"
          class="w-[100%] h-[100%] object-contain"
        />
        <div class="border size-[25px] absolute -bottom-3 left-20">
          <NuxtImg
            src="/landing-img/hero-anim/right-angle.svg"
            class="w-[100%] h-[100%] object-contain"
          />
        </div>
      </div>
    </div>
    <div class="w-3/4 mt-16 mx-auto text-center">
      <p class="font-bold text-3xl">Powered by</p>
      <p class="text-shield-blight py-8 leading-6 font-thin text-lg">
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
    <div class="w-4/5 line"></div>
  </div>
</template>

<style scoped>
.line {
  margin: 0 auto;
  display: block;
  height: 2px;
  background: -moz-linear-gradient(
    left,
    rgba(30, 87, 153, 0) 0%,
    rgb(220, 228, 254, 0.98) 50%,
    rgb(220, 228, 254, 1) 51%,
    rgba(225, 228, 226, 0) 99%,
    rgba(229, 229, 229, 0) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    rgba(30, 87, 153, 0) 0%,
    rgb(220, 228, 254, 0.98) 50%,
    rgb(220, 228, 254, 1) 51%,
    rgba(225, 228, 226, 0) 99%,
    rgba(229, 229, 229, 0) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    rgba(30, 87, 153, 0) 0%,
    rgb(220, 228, 254, 0.98) 50%,
    rgb(220, 228, 254, 1) 51%,
    rgba(225, 228, 226, 0) 99%,
    rgba(229, 229, 229, 0) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}
</style>
