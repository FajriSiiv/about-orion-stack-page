<script setup>
import { ref } from "vue";
import Section from "./Section.vue";
import BackgroundLineCircle from "./BackgroundLineCircle.vue";

const iconLink = ref([
  "facebook-f",
  "linkedin",
  "google-play",
  "apple",
  "windows",
  "github",
]);

const linkUL = ref([
  {
    linkTitle: "Product",
    linkLi: ["How it Works", "Feaatures"],
  },
  {
    linkTitle: "Solutions",
    linkLi: ["Intergrations"],
  },
  {
    linkTitle: "Company",
    linkLi: ["About Us", "Contact Us", "Support", "Blog"],
  },
]);
</script>

<template>
  <footer
    class="pt-40 pb-10 bg-secondary text-white mt-20 relative overflow-hidden"
  >
    <Section>
      <div class="flex justify-between">
        <div class="flex gap-5 flex-wrap max-w-[250px] h-fit">
          <div
            class="border-1 border-white border p-2 rounded-md h-fit"
            v-for="(item, index) in iconLink"
            :key="index"
          >
            <v-icon :name="`fa-${item}`" scale="1.2" />
          </div>
        </div>
        <div class="flex justify-between items-start max-w-[600px] w-full">
          <ul
            v-for="(item, index) of linkUL"
            :key="index"
            class="flex flex-col gap-y-5"
          >
            <span class="font-semibold text-xl">
              {{ item.linkTitle }}
            </span>

            <li
              v-for="(link, index) of item.linkLi"
              class="text-slate-500/90 text-sm"
            >
              {{ link }}
            </li>
          </ul>
        </div>
        <div
          class="p-4 flex flex-col gap-y-2 text-white border border-white/40 h-fit rounded-md"
        >
          <v-icon name="fa-amazon" scale="2" />
          <span class="text-sm text-slate-600/90"
            >Reach our app specialists</span
          >
          <span class="font-semibold text-lg">(844) 4469-0605</span>
        </div>
      </div>
    </Section>
  </footer>
</template>
