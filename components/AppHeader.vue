<script setup>
const links = [
  [{
    label: 'Home',
    to: '/'
  }, {
    label: 'Pricing',
    to: '/pricing'
  },{
    label: 'Our Services',
    to: '/our-services'
  }, {
    label: 'About Us',
    to: '/about-us'
  }, {
    label: 'Our Clients',
    to: '/our-clients'
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
 <header class="w-full h-20 bg-[#D3D3D3] dark:bg-[#1e1f22] shadow-2xl">
   <div class="container mx-auto h-full flex items-center justify-between">
     <div class="h-full">
       <NuxtLink to="/" class="h-full">
         <img class="h-full py-4" :src="logo_src" alt="EOEIT Logo">
       </NuxtLink>
     </div>

     <div class="flex justify-between gap-3">
      <UHorizontalNavigation :links="links" />

       <LazyThemeToggle/>
     </div>
   </div>
 </header>
</template>
