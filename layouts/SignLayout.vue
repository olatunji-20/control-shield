<template>
  <div class="h-[100vh] flex flex-col justify-between">
    <Signbar />
    <div class="overflow-y-scroll">
      <slot />
    </div>
    <SignFoot />
  </div>
</template>

<style>
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
