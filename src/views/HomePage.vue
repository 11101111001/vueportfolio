<template>
  <!-- Entire page on one dark background -->
  <div class="min-h-screen bg-neutral-900 text-white">
    <!-- Hero -->
    <section class="flex flex-col items-center justify-center h-[50vh] text-center px-6">
      <h1 class="text-5xl md:text-5xl font-extrabold tracking-tight">
        Eric is a fucking weiner head
      </h1>
      <p class="mt-4 max-w-2xl text-lg md:text-xl text-gray-300">Im getting his family tn</p>
    </section>

    <!-- Projects grid (same background) -->
    <section class="mx-auto max-w-6xl px-6 py-16">
      <h2 class="mb-8 text-3xl font-bold">Featured projects</h2>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <router-link
          v-for="p in projects"
          :key="p.slug"
          :to="`/projects/${p.slug}`"
          class="group rounded-2xl border border-gray-700 bg-neutral-900 p-6 shadow-lg transition hover:shadow-2xl hover:border-green-400"
        >
          <h3 class="mb-2 text-xl font-semibold group-hover:text-green-400">
            {{ p.title }}
          </h3>
          <p class="text-sm text-gray-400">{{ p.description }}</p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { projects } from '@/data/projects'
</script>
