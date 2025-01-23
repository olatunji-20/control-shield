<template>
  <div>
    <div class="">
      <div class="flex justify-between">
        <div class="w-[42%]">
          <h3 class="font-semibold text-2xl">Password</h3>
          <h4 class="font-thin text-md">
            Enter your old and new password to update your password.
          </h4>
        </div>
        <div class="w-[45%]">
          <UForm
            ref="form"
            :state="state"
            :schema="schema"
            @submit="save"
            class="form-class"
          >
            <UFormGroup
              label="Old password"
              :required="true"
              name="oldPassword"
              class="form-group"
            >
              <UInput
                v-model="state.oldPassword"
                type="password"
                placeholder="input your old password"
                size="xl"
                variant="outline"
                class="rounded-sm mt-1"
                style="
                  height: 55px;
                  background-color: #0f111a;
                  color: white;
                  border: 1px solid #141923;
                "
              />
            </UFormGroup>
            <UFormGroup
              label="New password"
              :required="true"
              name="newPassword"
              class="form-group mt-8"
            >
              <UInput
                v-model="state.newPassword"
                type="password"
                placeholder="input your new password"
                size="xl"
                variant="outline"
                class="rounded-sm mt-1"
                style="
                  height: 55px;
                  background-color: #0f111a;
                  color: white;
                  border: 1px solid #141923;
                "
              />
            </UFormGroup>
            <UFormGroup
              label="Confirm new password"
              :required="true"
              name="confirmPassword"
              class="form-group mt-8"
            >
              <UInput
                v-model="state.confirmPassword"
                type="password"
                placeholder="Confirm your new password"
                size="xl"
                variant="outline"
                class="rounded-sm mt-1"
                style="
                  height: 55px;
                  background-color: #0f111a;
                  color: white;
                  border: 1px solid #141923;
                "
              />
            </UFormGroup>
            <UButton
              type="submit"
              label="Save"
              size="xl"
              class="text-shield-black px-12 py-4 float-right mt-16"
            />
          </UForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { z } from "zod";

const form = ref();

const state = ref({
  oldPassword: "",
  newPassord: "",
  confirmPassword: "",
});

const schema = z
  .object({
    oldPassword: z.string().min(8, "Must be at least 8 characters"),
    newPassword: z.string().min(8, "Must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Must be at least 8 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords must be the same",
    path: ["confirmPassword"],
  });

const save = () => {
  form.value.validate();
  console.log(state.value);
};
</script>

<style scoped>
.form-class :deep(label) {
  /* used to style zod validation error */
  @apply text-xl text-white;
}
.form-class :deep(p) {
  /* used to style zod validation error */
  @apply text-[12px] relative bottom-2;
}
.form-group {
  @apply h-20;
}
</style>
