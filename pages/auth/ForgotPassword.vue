<template>
  <div>
    <div class="mx-auto w-1/3">
        <h1 class="font-bold text-2xl">Forgot password</h1>
        <p class="font-thin text-md mb-12">We will send a code to your registered email.</p>
        <UForm>
            <UFormGroup>
                <UInput icon="i-material-symbols-mail-outline" type="email" placeholder="enter your email" size="xl" variant="outline" class="rounded-sm text-red-400" style="height: 60px; background-color: #0F111A; color: white; border: 1px solid #141923" />
            </UFormGroup>
            <UButton label="Proceed to my Account" type="email" size="xl" padded block class="mt-6 h-[60px] rounded-none flex text-black justify-between">
                <template #trailing>
                    <UIcon name="i-heroicons-arrow-right-20-solid" class="w-10 h-5" />
                </template>
            </UButton>
        </UForm>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "sign-layout",
});
</script>