<script setup lang="ts">
useHead({
  title: 'Home'
})
</script>

<template>
  <section class="pt-20 pb-96 bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">First-rate IT services for the <span class="text-[#25a0cc]">East</span> of <span class="text-[#25a0cc]">England</span></h1>

        <p class="max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">We've been providing the best possible solutions to SME's since 2024.</p>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">...we may be new, but we're convinced we're the best.</p>

        <UButton
          class="mr-3"
          label="Get In Touch"
          size="xl"
          color="blue"
          to="/contact-us"
        />

        <UButton
            class=""
            label="Our Services"
            size="xl"
            variant="outline"
            to="/our-services"
        />
      </div>

      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-full p-8 shadow-2xl">
        <LazyBlockHeroStorySet />
      </div>
    </div>
  </section>
</template>