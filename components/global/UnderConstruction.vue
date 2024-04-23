<script setup lang="ts">

</script>

<template>
  <section class="pt-20 pb-96 bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">This page is currently under <span class="text-[#25a0cc]">Construction</span></h1>
      </div>

      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-full p-8 bg-white shadow-2xl">
        <LazyBlockConstructionStorySet />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>