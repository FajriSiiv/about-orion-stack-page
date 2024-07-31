<script setup>
const props = defineProps({
  bgColor: {
    type: Boolean,
    default: true,
  },
  btnName: {
    type: String,
    default: "Button",
  },
  border: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    :class="[
      'py-2.5 px-6 rounded-md text-sm relative overflow-hidden group ',
      border ? 'border border-secondary text-secondary' : 'text-white',
      bgColor ? 'bg-primary' : 'bg-white !text-secondary',
    ]"
  >
    <span class="z-10 relative">
      {{ btnName }}
    </span>
    <div
      :class="[
        'absolute h-44 w-44 rounded-full -translate-x-1/2 left-1/2 top-20 group-hover:-top-full transition-all duration-500',
        bgColor ? 'bg-secondary' : 'bg-emerald-300',
      ]"
    ></div>
  </button>
</template>
