<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Button from "./Button.vue";

const LinkNav = ref(["Product", "Integrations", "Resources", "Company"]);

const navMenu = ref(true);
const isNavbarVisible = ref(true);
let prevScrollpos = window.pageYOffset;

const handleScroll = () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    isNavbarVisible.value = true;
  } else {
    isNavbarVisible.value = false;
  }
  prevScrollpos = currentScrollPos;
};

const handleClickNav = () => {
  if (navMenu.value === true) {
    navMenu.value = false;
  } else {
    navMenu.value = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full px-5 py-4 flex justify-between items-center transition-transform duration-300 z-30 bg-white',
      {
        '-translate-y-full': !isNavbarVisible,
        'translate-y-0': isNavbarVisible,
      },
    ]"
  >
    <div class="min-w-[200px]">
      <span class="text-2xl font-bold">OrionStack</span>
    </div>
    <div class="max-w-[1000px] w-full flex justify-between lg:hidden">
      <ul class="flex items-center gap-x-10">
        <li v-for="(link, index) in LinkNav" :key="index" class="text-sm">
          {{ link }}
        </li>
      </ul>
      <div class="flex items-center gap-x-4">
        <Button border btnName="Log in" :bgColor="false" />
        <Button btnName="Book a demo" />
      </div>
    </div>
    <div
      class="hidden lg:block p-2 justify-center items-center bg-primary rounded-md"
      @click="handleClickNav"
    >
      <v-icon v-if="navMenu" name="fa-bars" scale="1.5" fill="#fff" />
      <v-icon v-else name="hi-x" scale="1.5" fill="#fff" />
    </div>
  </nav>
  <ul
    :class="[
      'fixed left-0 top-0 w-full h-screen flex flex-col justify-center items-center bg-white text-secondary z-20 gap-y-10 transition-all duration-500',
      navMenu ? '-translate-x-full' : 'translate-x-0',
    ]"
  >
    <li
      class="text-2xl font-bold hover:text-primary"
      v-for="(item, index) in LinkNav"
      :key="index"
    >
      {{ item }}
    </li>
  </ul>
</template>
