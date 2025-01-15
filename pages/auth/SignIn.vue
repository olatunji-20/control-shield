<template>
    <div>
        <div class="mx-auto w-1/3">
            <h1 class="font-bold text-2xl">Welcome back</h1>
            <p class="font-thin text-md mb-8">Log in to continue.</p>
            <UForm>
                <UFormGroup>
                    <UInput icon="i-material-symbols-mail-outline" type="email" placeholder="enter your email" size="xl"
                        variant="outline" class="rounded-sm text-red-400"
                        style="height: 60px; background-color: #0F111A; color: white; border: 1px solid #141923" />
                </UFormGroup>
                <UFormGroup>
                    <UInput icon="i-material-symbols-lock-outline-sharp" type="password"
                        placeholder="enter your password" size="xl" variant="outline"
                        class="rounded-sm text-red-400 mt-4"
                        style="height: 60px; background-color: #0F111A; color: white; border: 1px solid #141923" />
                </UFormGroup>
                <UButton label="Proceed to my Account" type="email" size="xl" padded block
                    class="mt-6 h-[60px] rounded-none flex text-black justify-between">
                    <template #trailing>
                        <UIcon name="i-heroicons-arrow-right-20-solid" class="w-10 h-5" />
                    </template>
                </UButton>
            </UForm>
            <NuxtLink to="/auth/forgotpassword">
                <p class="font-thin text-md text-center py-8">Forgot password?</p>
            </NuxtLink>
            <hr class="pt-6" />
            <p class="font-medium w-12 mx-auto text-center bg-black relative bottom-9">OR</p>
            <UButton label="Sign in with Google" block class="mb-6 h-[60px] rounded-none flex text-black bg-gray-200">
            </UButton>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "sign-layout",
});
</script>