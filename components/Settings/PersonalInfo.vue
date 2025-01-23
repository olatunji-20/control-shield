<template>
  <div>
    <div class="py-4 flex items-center my-6">
      <UAvatar icon="i-heroicons-photo" size="3xl" class="size-[150px] mr-6" />
      <div class="h-12 flex">
        <UButton label="Change picture" class="px-4 mr-2 text-shield-black" />
        <UButton
          label="Delete picture"
          class="px-4 bg-shield-brown text-red-300"
        />
      </div>
    </div>
    <hr class="border border-shield-bd" />
    <UForm
      ref="form"
      :state="state"
      :schema="schema"
      @submit="save"
      class="form-class mt-4"
    >
      <div class="flex flex-col justify-between gap-8">
        <div class="py-2 flex justify-between items-center">
          <div class="w-[42%]">
            <h3 class="font-semibold text-2xl">Name</h3>
            <h4 class="font-thin text-md">
              Enter your full name, including first and last name. This helps us
              address you appropriately within the app.
            </h4>
          </div>
          <div class="w-[45%]">
            <UFormGroup
              label="Full name"
              :required="true"
              name="name"
              class="form-group"
            >
              <UInput
                v-model="state.name"
                type="text"
                placeholder="input your full name"
                size="xl"
                variant="outline"
                class="rounded-sm mt-2"
                style="
                  height: 55px;
                  background-color: #0f111a;
                  color: white;
                  border: 1px solid #141923;
                "
              />
            </UFormGroup>
          </div>
        </div>
        <hr class="border border-shield-bd" />
        <div class="py-2 flex justify-between items-center">
          <div class="w-[42%]">
            <h3 class="font-semibold text-2xl">Email address</h3>
            <h4 class="font-thin text-md">Enter your email address.</h4>
          </div>
          <div class="w-[45%]">
            <UFormGroup
              label="Email"
              :required="true"
              name="email"
              class="form-group"
            >
              <UInput
                v-model="state.email"
                type="email"
                placeholder="input email address"
                size="xl"
                variant="outline"
                class="rounded-sm mt-2"
                style="
                  height: 55px;
                  background-color: #0f111a;
                  color: white;
                  border: 1px solid #141923;
                "
              />
              <p class="font-thin text-xs mt-2">
                We will send a verification code to your new email
              </p>
            </UFormGroup>
          </div>
        </div>
        <hr class="border border-shield-bd" />
        <div class="py-2 flex justify-between items-center">
          <div class="w-[42%]">
            <h3 class="font-semibold text-2xl">Linkedin</h3>
            <h4 class="font-thin text-md">Enter your Linkedin URL.</h4>
          </div>
          <div class="w-[45%]">
            <UFormGroup
              label="Linkedin profile link"
              :required="true"
              name="linkedin"
              class="form-group"
            >
              <UInput
                v-model="state.linkedin"
                type="text"
                placeholder="input linkedin profile link"
                size="xl"
                variant="outline"
                class="rounded-sm mt-2"
                style="
                  height: 55px;
                  background-color: #0f111a;
                  color: white;
                  border: 1px solid #141923;
                "
              />
            </UFormGroup>
          </div>
        </div>
        <hr class="border border-shield-bd" />

        <div class="mt-8">
          <UButton
            type="submit"
            label="Save"
            size="xl"
            class="text-shield-black px-12 py-4 float-right"
          />
        </div>
      </div>
    </UForm>
    <UModal v-model="email">
      <div class="py-12 px-16 text-center bg-[#1B222C]">
        <h2 class="font-bold text-xl">Verify email</h2>
        <p class="font-thin text-md">Enter code sent to "{{ state.email }}"</p>
        <div class="border h-16 my-8"></div>
        <UButton
          label="Verify email"
          block
          class="text-shield-black py-3 rounded-full"
        />
      </div>
    </UModal>
  </div>
</template>

<script setup>
import { z } from "zod";

const form = ref();

const state = ref({
  name: "",
  email: "",
  linkedin: "",
});
const email = ref(false);
const schema = z.object({
  name: z.string().min(1, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  linkedin: z.string().url("Please enter your linkedin profile link"),
});

const save = () => {
  form.value.validate();
  verifyEmail();
  console.log(state.value);
};

const verifyEmail = () => {
  email.value = true;
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
