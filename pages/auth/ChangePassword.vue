<template>
  <div class="flex items-center justify-center">
    <div class="mx-auto w-1/3">
        <h1 class="font-bold text-2xl">Change password</h1>
        <p class="font-thin text-md mb-10">Enter your new password.</p>
        <UForm>
            <UFormGroup>
                <UInput icon="i-material-symbols-lock-outline-sharp" type="password" placeholder="enter your new password" size="xl" variant="outline" class="rounded-sm" style="height: 60px; background-color: #0F111A; color: white; border: 1px solid #141923" />
            </UFormGroup>
            <UFormGroup>
                <UInput icon="i-material-symbols-lock-outline-sharp" type="password" placeholder="confirm your new password" size="xl" variant="outline" class="rounded-sm mt-4" style="height: 60px; background-color: #0F111A; color: white; border: 1px solid #141923" />
            </UFormGroup>
            <UButton label="Submit" type="email" size="xl" padded block class="mt-12 h-[60px] rounded-none flex text-black justify-between">
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