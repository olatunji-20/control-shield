<template>
  <div>
    <div class="h-[250px] w-[350px] overflow-y-scroll">
      <div v-html="row.practices" class="text-wrap"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  row: {
    require: true,
    type: Object,
  },
});
</script>

<style scoped>
div:deep(p) {
  padding-top: 5px;
}
div:deep(img) {
  margin: 30px 0px;
}
div:deep(ul, li) {
  padding-left: 4px;
  list-style-type: disc;
}
div:deep(h5) {
  text-decoration: underline;
  padding-top: 5px;
}
/* The entire scrollbar */
::-webkit-scrollbar {
  width: 0px; /* Change width */
  background: #17292f; /* Background color */
}

/* The draggable part of the scrollbar */
::-webkit-scrollbar-thumb {
  background: #193032; /* Color of the scrollbar */
  border-radius: 2px; /* Rounded corners */
}

/* The hover effect for the scrollbar */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* Darker color on hover */
}

/* The corner piece of the scrollbar */
::-webkit-scrollbar-corner {
  background: #f1f1f1; /* Color of the corner */
}
</style>
