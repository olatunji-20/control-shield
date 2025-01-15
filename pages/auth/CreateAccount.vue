<template>
  <div class="mx-auto w-1/3">
    <h1 class="font-bold text-2xl">Create account</h1>
    <p class="font-thin text-md mb-6">Sign up to continue.</p>
    <UForm>
      <UFormGroup>
        <UInput
          icon="i-material-symbols-person-outline"
          placeholder="full name"
          size="xl"
          variant="outline"
          class="rounded-sm text-red-400"
          style="
            height: 60px;
            background-color: #0f111a;
            color: white;
            border: 1px solid #141923;
          "
        />
      </UFormGroup>
      <UFormGroup>
        <UInput
          icon="i-material-symbols-mail-outline"
          placeholder="enter your email"
          size="xl"
          variant="outline"
          class="mt-4 rounded-sm text-red-400"
          style="
            height: 60px;
            background-color: #0f111a;
            color: white;
            border: 1px solid #141923;
          "
        />
      </UFormGroup>
      <UFormGroup>
        <UInput
          icon="i-material-symbols-lock-outline-sharp"
          placeholder="enter your password"
          size="xl"
          variant="outline"
          class="rounded-sm text-red-400 mt-4"
          style="
            height: 60px;
            background-color: #0f111a;
            color: white;
            border: 1px solid #141923;
          "
        />
      </UFormGroup>
      <UButton
        label="Create my Account"
        size="xl"
        padded
        block
        class="mt-12 h-[60px] rounded-none flex text-black justify-between"
      >
        <template #trailing>
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-10 h-5" />
        </template>
      </UButton>
    </UForm>
    <hr class="mt-8" />
    <p class="font-medium w-12 mx-auto text-center bg-black relative bottom-4">
      OR
    </p>
    <UButton
      label="Sign in with Google"
      block
      class="h-[60px] rounded-none flex text-black bg-gray-200"
    ></UButton>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "sign-layout",
});
</script>
