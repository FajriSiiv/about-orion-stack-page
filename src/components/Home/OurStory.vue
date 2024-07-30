<script setup>
import BackgroundLineCircle from "../BackgroundLineCircle.vue";
import Section from "../Section.vue";
</script>

<template>
  <Section>
    <div
      class="bg-stone-400/20 h-[800px] rounded-3xl mb-5 overflow-hidden relative"
    >
      <div class="w-full h-full flex gap-x-6 py-24 px-10 relative z-10">
        <div class="flex-[1] min-w-[320px]">
          <h2 class="text-5xl font-semibold font-['Laila'] text-nowrap mt-10">
            Our Story
          </h2>
        </div>

        <div class="flex-[3] flex flex-col gap-y-10">
          <div
            class="max-w-[900px] max-h-[400px] h-full bg-slate-800 rounded-lg"
          ></div>

          <div class="flex flex-col gap-y-4 text-[20px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              adipisci?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              perspiciatis officiis quidem iste tempora repudiandae fugit
              aspernatur eum, dolorum aliquid consequuntur doloribus eaque sit
              ex similique cupiditate sed earum eos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam quia dolores praesentium maiores laborum, modi
              accusantium temporibus quaerat eveniet possimus aliquam hic
              voluptatibus expedita, id iure vero et facere eaque ab distinctio
              quam repudiandae repellendus dolor obcaecati? Nam, eos amet!
            </p>
          </div>
        </div>
      </div>
      <BackgroundLineCircle :position="false" />
    </div>
  </Section>
</template>
