<template>
  <div class="overflow-hidden bg-neutral-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="relative">
        <div class="float-right w-full md:w-1/2 md:ml-6 mb-6">
          <CodeViewer :codeText="coreSource" lang="c" :maxHeight="40" />
        </div>

        <h2 class="text-base/7 font-semibold text-green-400">MIPS Sim</h2>
        <p class="mt-6 text-lg/8 text-gray-400">
          To the right is an SESC source file containing many functions related to how the cache
          handles tasks such as read/write hits and misses, line allocation, and line invalidation.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import CodeViewer from '@/components/CodeViewer.vue'
import coreSource from '@/assets/code/SMPCache-1.cpp?raw'
</script>
