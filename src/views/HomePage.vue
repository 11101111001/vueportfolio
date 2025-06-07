<template>
  <div class="min-h-screen bg-neutral-900 text-white">

    <div
      class="fixed top-24 left-12 z-50 bg-green-500 text-white text-xs font-semibold uppercase px-3 py-1 rounded-lg shadow-lg"
    >
      Page is still in development!
    </div>
    <!-- ─────────────────── Hero ─────────────────── -->
    <section
      class="flex flex-col items-center justify-center h-[35vh] md:h-[30vh] text-center px-6"
    >
      <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight">
        Here is a wonderful portfolio page!
      </h1>
      <p class="mt-4 max-w-2xl text-lg md:text-xl text-green-400">
        For recruiting members looking for more information that can not be found on my GitHub.
      </p>
    </section>

    <div class="mx-auto mb-8 w-1/2 border-t border-neutral-700"></div>

    <!-- ───────────── Featured projects grid ──────────── -->
    <section class="mx-auto max-w-6xl px-6 py-10">
      <h2 class="mb-8 text-3xl font-bold">Featured projects</h2>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <router-link
          v-for="p in projects"
          :key="p.slug"
          :to="`/projects/${p.slug}`"
          class="group relative h-64 overflow-hidden rounded-2xl border border-gray-700 bg-neutral-900 shadow-lg transition hover:border-green-400 hover:shadow-2xl"
        >
          <!-- Background code screenshot -->
          <img
            :src="p.image"
            :alt="`${p.title} code screenshot`"
            class="absolute inset-0 h-full w-full object-cover opacity-95 transition group-hover:opacity-40 saturate-150"
          />

          <!-- Text overlay -->
          <div
            class="relative z-10 flex h-full flex-col justify-end p-6 backdrop-blur-sm backdrop-brightness-90"
          >
            <h3 class="mb-2 text-xl font-semibold transition group-hover:text-green-400">
              {{ p.title }}
            </h3>
            <p class="text-sm text-gray-300">{{ p.description }}</p>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { projects } from '@/data/projects'
</script>
