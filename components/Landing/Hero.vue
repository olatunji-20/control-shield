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
    <div class="relative w-[650px] h-[550px] mx-auto my-12">
      <div
        data-aos="fade-up-left"
        data-aos-duration="1200"
        class="size-[45px] ml-12"
      >
        <NuxtImg
          src="/landing-img/hero-anim/star.svg"
          class="w-[100%] h-[100%] object-contain"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        class="w-[50px] h-[30px] mx-auto"
      >
        <NuxtImg
          src="/landing-img/hero-anim/code.svg"
          class="w-[100%] h-[100%] object-contain"
        />
      </div>
      <div
        data-aos="fade-down-left"
        data-aos-duration="1200"
        class="size-[90px]"
      >
        <NuxtImg
          src="/landing-img/hero-anim/star.svg"
          class="w-[100%] h-[100%] object-contain"
        />
      </div>
      <div class="w-[480px] h-[350px] mx-auto relative">
        <div class="border w-[460px] h-[330px] absolute rounded-lg">
          <div class="flex justify-end">
            <div class="w-[70px] h-[15px] my-3 mr-5 flex justify-between">
              <div
                v-for="n in 3"
                :key="n"
                class="size-[15px] rounded-full bg-gradient-to-r from-[#46D3B0] to-[#1B3DF0]"
              ></div>
            </div>
          </div>
          <hr />
        </div>
        <div
          data-aos="slide-ml"
          data-aos-duration="1200"
          class="border w-[460px] h-[330px] absolute left-2 duration-150 rounded-lg"
        ></div>
        <div
          data-aos="slide-nl"
          data-aos-duration="1600"
          class="border w-[460px] h-[330px] absolute left-4 duration-150 rounded-lg"
        >
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            class="w-[85px] absolute right-[-43px] top-32 h-[120px]"
          >
            <NuxtImg
              src="/landing-img/hero-anim/shield.svg"
              class="w-[100%] h-[100%] object-contain"
            />
          </div>
        </div>
      </div>
      <div
        data-aos="rotate-ac"
        data-aos-duration="1200"
        class="w-[320px] h-[430px] z-50 relative bottom-[72%] mx-auto"
      >
        <NuxtImg
          src="/landing-img/hero-anim/lock.svg"
          class="w-[100%] h-[100%] object-contain"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        class="w-[600px] h-[350px] relative bottom-[150%] mx-auto"
      >
        <NuxtImg
          src="/landing-img/hero-anim/curve.svg"
          class="w-[100%] h-[100%] object-contain"
        />
        <div class="size-[25px] absolute -bottom-3 left-20">
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

<script setup>
// import AOS from "aos";
// import "aos/dist/aos.css";

// AOS.init({
//   offset: 40,
//   duration: 1000,
// });
</script>

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
[data-aos="rotate-ac"] {
  transform: rotate(-20deg);
  transition-property: transform;
}
[data-aos="rotate-ac"].aos-animate {
  transform: rotate(30deg);
}
[data-aos="slide-ml"] {
  @apply -top-2 transition-all;
}
[data-aos="slide-ml"].aos-animate {
  @apply top-2;
}
[data-aos="slide-nl"] {
  @apply -top-4 transition-all;
}
[data-aos="slide-nl"].aos-animate {
  @apply top-4;
}
</style>
