<template>
  <div class="grid grid-cols-2 grid-rows-2 gap-4">
    <div class="row-span-2">
      <img
        src="/public/blog/article-image.png"
        :alt="recentPosts[0].topic"
        class="h-[210px] object-fill w-[100%]"
      />
      <p class="font-semibold text-2xl py-3">{{ recentPosts[0].topic }}</p>
      <p class="font-thin text-md">
        {{ recentPosts[0].description }}
      </p>
    </div>
    <div class="flex flex-row justify-between">
      <img
        src="/public/blog/article-image.png"
        class="h-[100%] w-[210px] object-fill"
        :alt="recentPosts[1].topic"
      />
      <div class="flex-1 px-3">
        <p class="font-semibold text-2xl py-2">{{ recentPosts[1].topic }}</p>
        <p class="font-thin text-md">{{ recentPosts[1].description }}</p>
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <img
        src="/public/blog/article-image.png"
        class="h-[100%] w-[210px] object-fill"
        :alt="recentPosts[2].topic"
      />
      <div class="flex-1 px-3">
        <p class="font-semibold text-2xl py-2">{{ recentPosts[2].topic }}</p>
        <p class="font-thin text-md">{{ recentPosts[2].description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const recentPosts = ref([
  {
    id: 1,
    imageUrl: "/public/blog/article-image.png",
    topic: "UX review presentation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit accusamus et consectetur. Fugiat odit quis vero enim ex dolore!",
  },
  {
    id: 2,
    imageUrl: "/public/blog/article-image.png",
    topic: "Migrating to linear 101",
    description:
      "Lorem ipsum dolor accusamus et consectetur. Fugiat odit quis vero enim ex dolore!",
  },
  {
    id: 3,
    imageUrl: "/public/blog/article-image.png",
    topic: "Building your API Stack",
    description:
      "Lorem ipsum dolor sit amet consectetur aditetur. Fugiat odit quis vero enim ex dolore!",
  },
]);
</script>

<style></style>
