<template>
  <div class="flex items-center justify-center">
    <div class="mx-auto w-1/3">
      <h1 class="font-bold text-2xl">Change password</h1>
      <p class="font-thin text-md mb-10">Enter your new password.</p>
      <UForm
        ref="form"
        :state="state"
        :schema="schema"
        @submit="save"
        class="form-class"
      >
        <UFormGroup :required="true" name="password1" class="form-group">
          <UInput
            v-model="state.password1"
            icon="i-material-symbols-lock-outline-sharp"
            type="password"
            placeholder="enter your new password"
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
        <UFormGroup :required="true" name="password2" class="form-group">
          <UInput
            v-model="state.password2"
            icon="i-material-symbols-lock-outline-sharp"
            type="password"
            placeholder="confirm your new password"
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
          label="Submit"
          type="submit"
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
    </div>
  </div>
</template>

<script setup>
import { z } from "zod";

definePageMeta({
  layout: "sign-layout",
});

const form = ref();

const state = ref({
  password1: "",
  password2: "",
});

const schema = z
  .object({
    password1: z.string().min(8, "Must be at least 8 characters"),
    password2: z.string().min(8, "Must be at least 8 characters"),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Passwords must be the same",
    path: ["password2"],
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
