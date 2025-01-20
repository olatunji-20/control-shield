<template>
  <div class="p-16">
    <div
      class="border-y border-shield-bd p-4 flex justify-between items-center"
    >
      <div class="">
        <h1 class="font-bold text-4xl">My Articles</h1>
        <p class="font-thin text-xl">Catch up with all that's happening</p>
      </div>
      <div class="w-[250px]">
        <UFormGroup>
          <UInput
            label="search post"
            icon="i-material-symbols-search-rounded"
            style="
              border-radius: 25px;
              height: 40px;
              background-color: #0f111a;
              color: white;
              border: 1px solid #141923;
            "
          />
        </UFormGroup>
      </div>
    </div>
    <div class="py-4">
      <div class="relative">
        <NuxtLink to="/blog/publish">
          <UButton
            label="Add blog"
            class="text-shield-black absolute right-0 top-2 rounded-md py-3"
          />
        </NuxtLink>
        <UTabs
          :items="tabs"
          :ui="{
            wrapper: 'flex flex-col justify-start gap-4',
            list: {
              width: 'w-[500px]',
              height: 'h-16',
              background: 'bg-shield-blac',
              padding: 'p-0',
              rounded: 'rounded-none',
              tab: {
                background: 'bg-shield-black',
                rounded: 'rounded-none',
                height: 'h-16',
                active: 'border-b-4 border-shield-green 600 text-shield-green',
              },
            },
          }"
        >
          <template #publish="{ item }">
            <BlogPublished />
          </template>
          <template #review="{ item }">
            <BlogInReview />
          </template>
          <template #drafts="{ item }">
            <BlogDrafts />
          </template>
        </UTabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth-layout",
});

const tabs = ref([
  {
    slot: "publish",
    label: "Publish blog",
  },
  {
    slot: "review",
    label: "In review",
  },
  {
    slot: "drafts",
    label: "Drafts",
  },
]);
</script>

<style></style>
