<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <!-- Text -->
        <div class="lg:pt-4 lg:pr-8">
          <div class="lg:max-w-lg">
            <h2 class="text-sm font-semibold text-indigo-600">Private work</h2>
            <p class="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {{ project.title }}
            </p>
            <p class="mt-6 text-lg text-gray-600">{{ project.description }}</p>
          </div>
        </div>

        <!-- Image placeholder -->
        <img
          :src="project.image"
          :alt="`Screenshot of ${project.title}`"
          class="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:-ml-0"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects'

const route = useRoute()
const project = projects.find((p) => p.slug === route.params.slug) || {
  slug: '',
  title: 'Unknown project',
  description: '',
  image: 'https://via.placeholder.com/800x600?text=No+Image',
}
</script>
