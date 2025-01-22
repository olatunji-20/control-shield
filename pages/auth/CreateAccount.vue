<template>
  <div class="mx-auto w-1/3">
    <h1 class="font-bold text-2xl">Create account</h1>
    <p class="font-thin text-md mb-6">Sign up to continue.</p>
    <UForm
      ref="form"
      :state="state"
      :schema="schema"
      @submit="save"
      class="form-class"
    >
      <UFormGroup :required="true" name="name" class="form-group">
        <UInput
          v-model="state.name"
          type="text"
          icon="i-material-symbols-person-outline"
          placeholder="full name"
          size="xl"
          variant="outline"
          class="rounded-sm"
          style="
            height: 60px;
            background-color: #0f111a;
            color: white;
            border: 1px solid #141923;
          "
        />
      </UFormGroup>
      <UFormGroup :required="true" name="email" class="form-group">
        <UInput
          v-model="state.email"
          type="email"
          icon="i-material-symbols-mail-outline"
          placeholder="enter your email"
          size="xl"
          variant="outline"
          class="rounded-sm"
          style="
            height: 60px;
            background-color: #0f111a;
            color: white;
            border: 1px solid #141923;
          "
        />
      </UFormGroup>
      <UFormGroup :required="true" name="password" class="form-group">
        <UInput
          v-model="state.password"
          type="password"
          icon="i-material-symbols-lock-outline-sharp"
          placeholder="enter your password"
          size="xl"
          variant="outline"
          class="rounded-sm"
          style="
            height: 60px;
            background-color: #0f111a;
            color: white;
            border: 1px solid #141923;
          "
        />
      </UFormGroup>
      <UButton
        type="submit"
        label="Create my Account"
        size="xl"
        padded
        block
        class="mt-6 h-[60px] rounded-none flex text-black justify-between"
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
import { z } from "zod";

definePageMeta({
  layout: "sign-layout",
});

const form = ref();

const state = ref({
  name: "",
  email: "",
  password: "",
});

const schema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

const save = () => {
  form.value.validate();
  console.log(state.value);
};
</script>

<style scoped>
.form-class :deep(p) {
  /* used to style zod validation error */
  @apply text-[12px] relative bottom-2;
}
.form-group {
  @apply h-20 mt-2;
}
</style>
