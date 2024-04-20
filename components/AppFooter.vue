<script setup lang=ts>
const logo_src = computed(() => {
  if (useColorMode().value === 'light')  {
    return '/images/light_logo.svg'
  }

  return '/images/dark_logo.svg'
})
</script>

<template>
  <LazyUDivider class="my-3" size="xs" avater="/favicon.ico"/>

  <footer class="h-96 w-full">
    <div class="container mx-auto h-full">
      <div class="grid grid-cols-4">
        <div>
          <NuxtLink to="/" class="h-full">
            <img class="h-full" :src="logo_src" alt="EOEIT Logo">
          </NuxtLink>
        </div>
        <div>2</div>
        <div>3</div>
        <div>
          <h3>
            <u class="mb-3">Contact Us</u>
          </h3>

          <ul class="mt-6">
            <li>
              <p><LazyUIcon name="i-heroicons-home-solid"/>Currently moving office!</p>
            </li>
            <li>
              <a href="mailto:hello@eoeit.uk">hello@eoeit.uk</a>
            </li>
            <li>
              <a href="tel:+4407787736541">+44 07787736541</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <LazyUDivider class="mt-3" size="xs" avater="/favicon.ico"/>

    <div class="flex items-center justify-center py-6">
      <p>Copyright &copy; {{ new Date().getFullYear() }} EOEIT.uk &bull; All Rights Reserved</p>
    </div>

    <LazyUDivider size="xs" avater="/favicon.ico"/>
  </footer>
</template>