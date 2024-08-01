<script setup>
import Section from "../Section.vue";

import { ref, onMounted, onUnmounted } from "vue";

const texts = ref({
  1: ["Nike", "Supreme"],
});

const loopedTexts = ref({});

const currentIndex = ref({});

Object.keys(texts.value).forEach((key) => {
  const extendedTexts = [...texts.value[key], ...texts.value[key]];
  loopedTexts.value[key] = extendedTexts;
  currentIndex.value[key] = 0;
});

const intervalTime = 3000;
let intervalId = {};

const nextSlide = (item) => {
  currentIndex.value[item] =
    (currentIndex.value[item] + 1) % texts.value[item].length;
};

const startAutoSlide = (item) => {
  intervalId[item] = setInterval(() => nextSlide(item), intervalTime);
};

const stopAutoSlide = (item) => {
  clearInterval(intervalId[item]);
};

onMounted(() => {
  Object.keys(texts.value).forEach((key) => {
    startAutoSlide(key);
  });
});

onUnmounted(() => {
  Object.keys(texts.value).forEach((key) => {
    stopAutoSlide(key);
  });
});
</script>

<template>
  <Section>
    <div class="flex gap-x-2 md:flex-col md:gap-y-10">
      <div class="flex-1">
        <h2 class="font-['Laila'] text-7xl md:text-3xl font-bold">
          Trusted by many
        </h2>
      </div>
      <div class="flex-1 max-w-[510px] md:text-sm">
        <span class="text-lg"
          >30,000+ agents and hundreds of brokerages have chosen HomeStack as
          their go-to mobile specialist.</span
        >
      </div>
    </div>

    <div
      class="grid grid-cols-4 grid-rows-2 mt-20 border rounded-[40px] md:grid-cols-2"
    >
      <div
        :class="[
          'justify-center items-center flex min-h-[240px] overflow-hidden relative ',
          { 'border-r': item !== 4 && item !== 8 },
          { 'border-t': item > 4 },
        ]"
        v-for="item in [1, 2, 3, 4, 5, 6, 7, 8]"
        :key="item"
      >
        <div class="relative w-full h-full flex justify-center items-center">
          <div
            class="flex transition-transform duration-500"
            :style="{
              transform: `translateX(-${currentIndex[item] * 100}%)`,
              transition: 'transform 1s linear',
            }"
            v-for="item in [1, 2, 3, 4, 5, 6, 7, 8]"
            :key="item"
          >
            <div
              v-for="(text, index) in loopedTexts[item]"
              :key="index"
              class="flex-shrink-0 w-full flex justify-center items-center"
            >
              <h2 class="font-semibold text-4xl md:text-2xl">{{ text }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
