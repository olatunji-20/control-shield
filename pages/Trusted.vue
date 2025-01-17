<template>
  <div class="px-16 pt-8">
    <h1 class="text-shield-green font-semibold text-5xl">Trusted VARs</h1>
    <p class="font-thin pt-4">
      Trusted VARs are valued added resellers that sell and implement products
      or solutions. By going through Control Shield, Control Shield members are
      given a 5% discount on their purchase! Start by selecting the requirement,
      tool, and/or solution(s) you want and then select the trusted VAR you want
      to purchase from. When you hit “send” this sends an email to our back-end
      email system. Once received we may confirm details, and then forward the
      email onto the Trusted VAR. If you don't know what you want or want
      guidance please use the calendly link below to schedule a 15 minute
      tag-up!
    </p>
    <div class="w-2/3 mx-auto mt-12 mb-32">
      <h2 class="font-semibold text-xl mb-2">ICCS</h2>
      <UForm>
        <UFormGroup>
          <USelect
            placeholder="Select tool"
            class="rounded-none"
            style="
              height: 60px;
              background-color: #0f111a;
              color: white;
              border: 1px solid #141923;
              border-radius: 5px;
            "
          />
        </UFormGroup>
        <UFormGroup>
          <UTextarea
            placeholder="Message box"
            style="
              height: 150px;
              background-color: #0f111a;
              color: white;
              border: 1px solid #141923;
              margin-top: 10px;
              border-radius: 5px;
            "
          />
        </UFormGroup>
        <UButton
          label="Send"
          block
          class="text-shield-black mt-4 py-3 rounded-none"
        />
      </UForm>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth-layout",
});
</script>

<style></style>
