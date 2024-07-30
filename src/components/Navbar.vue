<script setup>
import { ref } from "vue";
import Button from "./Button.vue";

const LinkNav = ref(["Product", "Integrations", "Resources", "Company"]);
</script>

<template>
  <nav class="px-5 py-4 flex justify-between">
    <div>
      <span class="text-2xl font-bold">OrionStack</span>
    </div>
    <div class="max-w-[1000px] w-full flex justify-between">
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
  </nav>
</template>
