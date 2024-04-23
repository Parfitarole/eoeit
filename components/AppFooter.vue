<script setup lang=ts>
const logo_src = computed(() => {
  if (useColorMode().value === 'light')  {
    return '/images/light_logo.svg'
  }

  return '/images/dark_logo.svg'
})
</script>

<template>
  <footer class="h-96 w-full bg-[#D3D3D3] dark:bg-[#2b2d31] py-6 shadow-xl">
    <div class="container mx-auto h-full">
      <div class="grid grid-cols-4">
        <div class="pt-0 p-12">
          <NuxtLink to="/">
            <img :src="logo_src" alt="EOEIT Logo">
          </NuxtLink>

          <h3 class="mt-3">
<!--            Follow us on-->
          </h3>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-3">
            Our Services
          </h3>

          <ul>
            <li>
              <LazyUButton
                  variant="link"
                  label="Bespoke Software"
              />
            </li>
            <li>
              <LazyUButton
                  variant="link"
                  label="Web Development"
              />
            </li>
            <li>
              <LazyUButton
                  variant="link"
                  label="Digital Marketing"
              />
            </li>
            <li>
              <LazyUButton
                  variant="link"
                  label="Cyber Security"
              />
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-3">
<!--            Something-->
          </h3>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-3">
            Contact Us
          </h3>

          <ul class="mt-6">
            <li>
              <LazyUButton
                variant="link"
                label="We're currently moving office!"
                icon="i-carbon-home"
              />
            </li>
            <li>
              <a href="mailto:hello@eoeit.uk">
                <LazyUButton
                    variant="link"
                    label="hello@eoeit.uk"
                    icon="carbon:home"
                />
              </a>
            </li>
            <li>
              <a href="tel:+4407787736541">
                <LazyUButton
                    variant="link"
                    label="+44 07787736541"
                    icon="carbon:home"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  <div class="flex flex-col items-center justify-center gap-2 h-28 dark:bg-[#1e1f22]">
    <p>
      &copy; Copyright {{ new Date().getFullYear() }} EOEIT.uk &bull; All Rights Reserved
    </p>
    <p>
      <a href="https://storyset.com/business" class="text-xs">
        Business illustrations by Storyset
      </a>
    </p>
  </div>
</template>