<template>
  <section
    class="relative flex flex-col items-center justify-center min-h-[50vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white text-center"
  >
    <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
      We'll put not cringe fucking text here soon
    </h1>
    <p class="mt-4 max-w-xl text-lg md:text-xl text-slate-200">Same not cringe text here</p>
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
import { useAuth0 } from '@auth0/auth0-vue'
import { projects } from '@/data/projects'

const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

function handleLogout() {
  console.log('Logging out…')
  logout({
    logoutParams: {
      returnTo: window.location.origin, // <-- explicit window
    },
  })
}

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
