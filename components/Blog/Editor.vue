<template>
  <section
    v-if="editor"
    class="border-2 border-red-400 flex flex items-center p-4"
  >
    <UButton
      icon="i-material-symbols-text-format"
      label="Inter"
      @click="editor.chain().focus().toggleBold().run()"
      :disabled="!editor.can().chain().focus().toggleBold().run()"
      :class="{ 'is-active': editor.isActive('bold') }"
      class="p-2 bg-blue-300 rounded-full"
    >
      <template #trailing>
        <UIcon name="i-heroicons-chevron-down" class="w-5 h-5" />
      </template>
    </UButton>
    <UDropdown :items="items">
      <UButton
        icon="i-material-symbols-text-fields"
        label="Large"
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
        class="p-2 bg-blue-300 rounded-full ml-2"
      >
        <template #trailing>
          <UIcon name="i-heroicons-chevron-down" class="w-5 h-5" />
        </template>
      </UButton>
    </UDropdown>
    <div class="px-4 bg-yellow-400 flex gap-x-2 rounded-full ml-6">
      <UButton
        icon="i-material-symbols-format-underlined"
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
        class="p-2 bg-blue-300 rounded-full"
      />
      <UButton
        icon="i-material-symbols-format-bold"
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
        class="p-2 bg-blue-300 rounded-full"
      />
      <UButton
        icon="i-material-symbols-format-italic"
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
        class="p-2 bg-blue-300 rounded-full"
      />
      <UButton
        icon="i-material-symbols-format-quote-outline"
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
        class="p-2 bg-blue-300 rounded-full"
      />
      <UButton
        icon="i-material-symbols-format-align-left"
        @click="editor.chain().focus().setTextAlign('left').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
        class="p-2 bg-blue-300 rounded-full"
      />
      <UButton
        icon="i-material-symbols-format-align-center"
        @click="editor.chain().focus().setTextAlign('center').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
        class="p-2 bg-blue-300 rounded-full"
      />
      <UButton
        icon="i-material-symbols-format-align-right"
        @click="editor.chain().focus().setTextAlign('right').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
        class="p-2 bg-blue-300 rounded-full"
      />
      <UButton
        icon="i-material-symbols-format-list-bulleted"
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
        class="p-2 bg-blue-300 rounded-full"
      />
    </div>

    <div class="px-4 bg-yellow-400 flex gap-x-2 rounded-full ml-6">
      <UButton
        icon="i-material-symbols-code-off"
        variant="outline"
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
        class="p-2 bg-blue-300 rounded-full text-white"
      />
      <UButton
        icon="i-material-symbols-link"
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
        class="p-2 bg-blue-300 rounded-full"
      />
      <UButton
        icon="i-material-symbols-image-outline"
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
        class="p-2 bg-blue-300 rounded-full"
      />
    </div>
  </section>
  <EditorContent :editor="editor" />
</template>

<script setup>
import TextAlign from "@tiptap/extension-text-align";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

const editor = useEditor({
  editorProps: {
    attributes: {
      class:
        "border-2 border-green-500 p-4 min-h-[16rem] max-h-[16rem] overflow-y-scroll",
    },
  },
  content: "<p>I'm Sheriff, running Tiptap with Vue.js. 🎉</p>",
  extensions: [StarterKit],
});

onBeforeUnmount(() => {
  editor.value?.destroy();
});

const items = ["h1", "h2", "h3", "h4"];
</script>

<style scoped>
.is-active {
  @apply p-2 bg-red-400 rounded-full;
}
</style>
