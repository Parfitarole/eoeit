<script setup>
const links = [
  [{
    label: 'Home',
    to: '/'
  }, {
    label: 'Our Services',
    to: '/our-services'
  }, {
    label: 'Pricing',
    to: '/pricing'
  }, {
    label: 'Our Clients',
    to: '/our-clients'
  }, {
    label: 'About Us',
    to: '/about-us'
  }, {
    label: 'Contact Us',
    to: '/contact-us'
  }]
]

const logo_src = computed(() => {
  if (useColorMode().value === 'light')  {
    return '/images/light_logo.svg'
  }

  return '/images/dark_logo.svg'
})
</script>

<template>
 <header class="w-full h-20">
   <div class="container mx-auto h-full flex items-center justify-between">
     <div class="h-full">
       <NuxtLink to="/" class="h-full">
         <img class="h-full" :src="logo_src" alt="EOEIT Logo">
       </NuxtLink>
     </div>

     <div class="flex justify-between gap-3">
      <UHorizontalNavigation :links="links" />

       <LazyThemeToggle/>
     </div>
   </div>
 </header>
</template>
