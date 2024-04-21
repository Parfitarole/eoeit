<script setup lang="ts">
</script>

<template>
  <NuxtCookieConsentPolicy />

  <div class="dark:bg-[#0b103a]">
    <LazyAppHeader/>
    <div class="min-h-screen">
      <NuxtPage />
    </div>
    <LazyAppFooter/>
  </div>
</template>
