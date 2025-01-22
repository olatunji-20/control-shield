<template>
  <div>
    <div class="mx-auto w-1/3">
      <h1 class="font-bold text-2xl">Forgot password</h1>
      <p class="font-thin text-md mb-12">
        We will send a code to your registered email.
      </p>
      <UForm
        ref="form"
        :state="state"
        :schema="schema"
        @submit="save"
        class="form-class"
      >
        <UFormGroup :required="true" name="email" class="form-group">
          <UInput
            v-model="state.email"
            icon="i-material-symbols-mail-outline"
            type="email"
            placeholder="enter your email"
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
        <UButton
          label="Proceed to my Account"
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
  email: "",
});

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
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
