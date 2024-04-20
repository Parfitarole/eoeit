<script setup lang="ts">

const data = reactive({
  name: null,
  email: null,
  message: null
})

</script>

<template>
    <div class="flex justify-center items-center mt-48">
      <LazyUForm class="w-96" :state="data">
        <LazyUCard>
          <h2
            class="text-2xl font-semibold text-center mb-6"
          >
            Get In Touch
          </h2>

          <LazyUFormGroup
            name="name"
            label="Name"
            class="mb-3"
          >
            <LazyUInput
              v-model="data.name"
            />
          </LazyUFormGroup>

          <LazyUFormGroup
              name="email"
              label="Email"
              class="mb-3"
          >
            <LazyUInput
                v-model="data.email"
            />
          </LazyUFormGroup>

          <LazyUFormGroup
              name="message"
              label="Message"
              class="mb-6"
          >
            <LazyUTextarea
                v-model="data.message"
              rows="6"
              autoresize
            />
          </LazyUFormGroup>

          <div class="flex justify-center">
            <LazyUButton
                label="Submit"
                class="center"
            />
          </div>
        </LazyUCard>
      </LazyUForm>
    </div>
</template>

<style scoped>

</style>