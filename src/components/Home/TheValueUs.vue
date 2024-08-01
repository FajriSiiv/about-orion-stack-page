<script setup>
import Section from "../Section.vue";
</script>

<template>
  <Section class="py-40">
    <h2 class="font-['Laila'] text-7xl font-semibold md:text-3xl">
      The values that drive us
    </h2>

    <div
      class="mt-20 grid grid-cols-3 auto-cols-auto gap-10 lg:grid-cols-2 sm:grid-cols-1 md:gap-3"
    >
      <div
        class="p-8 flex flex-col gap-y-5 bg-[#f7f5f2] rounded-2xl"
        v-for="(item, index) of [1, 2, 3, 4, 5, 6]"
        :key="index"
      >
        <v-icon name="fa-heart" scale="2" fill="#06d6a0" />
        <h3 class="text-xl font-semibold">Love what you do</h3>
        <p class="font-light">
          We're obsessed with creating innovative new tech, cultivating
          long-term client relationships, and continuously learning.
        </p>
      </div>
    </div>
  </Section>
</template>
