<script setup>
const props = defineProps({
  position: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div
    :class="[
      'absolute  left-1/2 -translate-x-1/2',
      position ? '-bottom-0' : '-top-0',
    ]"
  >
    <div
      class="bg-transparent w-[520px] h-[220px] border-[0.1px] border-white/40 absolute -bottom-[100px] left-1/2 -translate-x-1/2 rounded-full"
    ></div>
    <div
      class="bg-transparent w-[520px] h-[220px] border-[0.1px] border-white/35 absolute -bottom-[100px] left-1/2 -translate-x-1/2 rounded-full scale-[1.7]"
    ></div>
    <div
      class="bg-transparent w-[520px] h-[220px] border-[0.1px] border-white/30 absolute -bottom-[100px] left-1/2 -translate-x-1/2 rounded-full scale-[2.5]"
    ></div>
    <div
      class="bg-transparent w-[520px] h-[220px] border-[0.1px] border-white/25 absolute -bottom-[100px] left-1/2 -translate-x-1/2 rounded-full scale-[3.2]"
    ></div>
    <div
      class="bg-transparent w-[520px] h-[220px] border-[0.1px] border-white/25 absolute -bottom-[100px] left-1/2 -translate-x-1/2 rounded-full scale-[4.1]"
    ></div>
  </div>
</template>
