<script setup>
import BackgroundLineCircle from "../BackgroundLineCircle.vue";
import Button from "../Button.vue";
import Section from "../Section.vue";
import People2 from "@/assets/img/people-2.jpg";
</script>

<template>
  <Section>
    <div
      class="bg-primary text-white h-[750px] rounded-3xl mb-5 overflow-hidden relative"
    >
      <BackgroundLineCircle />
      <div
        class="flex flex-col justify-center items-center h-[400px] my-auto text-center mb-0 leading-[100px] translate-y-[100px] relative"
      >
        <h1 class="text-8xl font-semibold font-['Laila']">Meet OrionStack</h1>

        <span>Powering mobile technology in real estate</span>
      </div>
      <div class="flex gap-x-4 h-[150px] items-center justify-center relative">
        <Button
          :bgColor="false"
          btnName="Contact Sales"
          class="py-3 font-semibold"
        />

        <Button
          :bgColor="false"
          btnName="Explore Stack"
          class="py-3 font-semibold"
        />
      </div>
    </div>
  </Section>
</template>
