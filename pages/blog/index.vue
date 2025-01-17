<template>
  <div class="px-16 py-12">
    <h1 class="font-bold text-4xl">Blog</h1>
    <p class="font-thin text-xl py-3">Catch up with all that's happening</p>
    <div class="border-y flex justify-between py-4">
      <div class="w-[350px]">
        <UFormGroup>
          <UInput
            label="search post"
            icon="i-material-symbols-search-rounded"
            style="
              border-radius: 25px;
              height: 50px;
              background-color: #0f111a;
              color: white;
              border: 1px solid #141923;
            "
          />
        </UFormGroup>
      </div>
      <UButton label="Write an article" class="text-shield-black rounded-sm" />
    </div>
    <div class="mt-16 flex flex-col gap-y-16">
      <div>
        <h3 class="font-semibold text-3xl">Recent article</h3>
        <div class="mt-8">
          <BlogRecentPosts />
        </div>
      </div>
      <div class="mt-16">
        <h3 class="font-semibold text-3xl">All article</h3>
        <div class="mt-6">
          <BlogPosts />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth-layout",
});
</script>

<style></style>
