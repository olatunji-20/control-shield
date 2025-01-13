<template>
    <div class="flex justify-between py-7 px-16 items-center bg-shield-green text-white">
        <div class="w-[200px] h-[45px]">
            <img src="/public/images/control-shield-logo.png" alt="control-shield-logo" />
        </div>
        <ul class="flex gap-x-4 font-thin">
            <li>Shield</li>
            <li>ICCS</li>
            <li>Resources</li>
            <li>About us</li>
            <li>Feedback</li>
        </ul>
        <div class="flex gap-x-2">
            <UButton label="Login" variant="ghost" class="text-white" />
            <UButton label="Launch app" class="rounded-full text-xs text-black" />
        </div>
    </div>
</template>

<style scoped></style>