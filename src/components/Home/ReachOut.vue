<script setup>
import Button from "../Button.vue";
import Section from "../Section.vue";
</script>

<template>
  <Section class="mt-40">
    <div
      class="min-h-[480px] bg-[#d9fe89] rounded-[40px] flex justify-center items-center flex-col"
    >
      <h2 class="text-6xl font-['Laila'] font-semibold">
        Interested in working with us?
      </h2>
      <span class="text-xl my-10">We cant wait to chat with you</span>
      <Button btnName="Reach Out" class="!px-8 !py-3 !text-base" />
    </div>
  </Section>
</template>
