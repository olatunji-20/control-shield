<template>
  <div>
    <UDropdown
      mode="hover"
      :items="items"
      :ui="{
        background: 'bg-yellow-500',
      }"
    >
      <div
        class="flex-1 border-l pl-2 flex flex-row justify-between items-center"
      >
        <div
          class="size-[30px] rounded-full bg-[#2B313A] flex items-center justify-center"
        >
          <p class="font-bold text-md">JB</p>
        </div>
        <div>
          <h1 class="font-bold">JACK B.</h1>
          <p class="font-thin text-xs leading-3">jackb@gmail.com</p>
        </div>
      </div>
    </UDropdown>
  </div>
</template>

<script lang="ts" setup>
const items = [
  [
    {
      label: "Profile",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
    },
  ],
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      shortcuts: ["E"],
      click: () => {
        console.log("Edit");
      },
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
      shortcuts: ["D"],
      disabled: true,
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Move",
      icon: "i-heroicons-arrow-right-circle-20-solid",
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
      shortcuts: ["⌘", "D"],
    },
  ],
];
</script>

<style></style>
