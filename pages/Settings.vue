<template>
  <div class="px-16 pt-8 pb-16">
    <h1 class="text-3xl font-semibold">Settings</h1>
    <p class="font-thin">Edit your profile and preferences</p>
    <hr class="border border-shield-bd mt-6" />
    <UTabs
      :items="tabs"
      :ui="{
        wrapper: 'flex flex-col justify-start',
        list: {
          width: 'w-[350px]',
          height: 'h-16',
          background: 'bg-shield-green',
          padding: 'p-0',
          rounded: 'rounded-none',
          tab: {
            background: 'bg-shield-black',
            rounded: 'rounded-none',
            height: 'h-16',
            active: 'border-b-2 border-shield-blight text-shield-blight',
          },
        },
      }"
    >
      <template #personal="{ item }">
        <SettingsPersonalInfo />
      </template>
      <template #password="{ item }">
        <SettingsPassword />
      </template>
    </UTabs>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth-layout",
});
const tabs = ref([
  {
    slot: "personal",
    label: "Personal Information",
  },
  {
    slot: "password",
    label: "Password",
  },
]);
</script>

<style></style>
