<template>
  <!-- hero -->
  <section
    class="relative flex flex-col items-center justify-center min-h-[50vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white text-center"
  >
    <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
      My Private&nbsp;Portfolio
    </h1>
    <p class="mt-4 max-w-xl text-lg md:text-xl text-slate-200">
      Hand-picked projects, available exclusively to reviewers &amp; recruiters.
    </p>

    <RouterLink
      to="/login"
      class="mt-8 inline-block rounded-xl bg-emerald-500 px-6 py-3 text-lg font-semibold shadow-md transition hover:bg-emerald-600"
    >
      Log in to access
    </RouterLink>

    <!-- simple decorative waves -->
    <svg
      class="absolute bottom-0 left-0 w-full translate-y-full text-slate-100"
      viewBox="0 0 1440 80"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0,32L1440,80L1440,0L0,0Z" opacity="0.25" />
    </svg>
  </section>

  <!-- project grid -->
  <section class="mx-auto max-w-6xl px-6 py-16">
    <h2 class="mb-8 text-3xl font-bold text-slate-800">Featured projects</h2>

    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <RouterLink
        v-for="project in projects"
        :key="project.slug"
        :to="`/projects/${project.slug}`"
        class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
      >
        <h3 class="mb-2 text-xl font-semibold text-slate-900 group-hover:text-emerald-600">
          {{ project.title }}
        </h3>
        <p class="text-sm text-slate-600">
          {{ project.description }}
        </p>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Static list is fine for now; replace with API call later.
const projects = ref([
  {
    slug: 'alpha',
    title: 'Project Alpha',
    description: 'High-performance cache-coherence simulator.',
  },
  {
    slug: 'beta',
    title: 'Project Beta',
    description: 'Socket-based file transfer protocol (GETFILE).',
  },
  {
    slug: 'gamma',
    title: 'Project Gamma',
    description: 'Vue + Grpc web dashboard with Auth0 gating.',
  },
])
</script>
