<script setup>
import BackgroundLineCircle from "../BackgroundLineCircle.vue";
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
        class="flex flex-col justify-center items-center h-[400px] my-auto text-center mb-4 leading-[100px] translate-y-[100px] relative"
      >
        <h1 class="text-8xl font-semibold font-['Laila']">Meet OrionStack</h1>

        <span>Powering mobile technology in real estate</span>
      </div>
      <div
        class="flex gap-x-8 h-[150px] items-center justify-center relative mt-10"
      >
        <div
          class="w-28 h-28 bg-transparent border-[3px] border-white rounded-full flex justify-center items-center"
          v-for="(item, index) of [1, 2, 3, 4, 5, 6, 7]"
          :key="index"
        >
          <div class="w-[95px] h-[95px] rounded-full overflow-hidden">
            <img v-bind:src="People2" alt="People Meet" />
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
