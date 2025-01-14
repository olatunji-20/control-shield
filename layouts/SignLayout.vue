<template>
  <div class="h-[100vh] flex flex-col justify-between">
    <Signbar />
    <div>
      <slot />
    </div>
    <SignFoot />
  </div>
</template>