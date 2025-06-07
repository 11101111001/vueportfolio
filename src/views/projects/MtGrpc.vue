<template>
  <div class="overflow-hidden bg-neutral-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:pt-4 lg:pr-8">
          <div class="lg:max-w-lg">
            <h2 class="text-base/7 font-semibold text-green-400">
              Multi-Threaded gRPC Server/Client
            </h2>
            <p class="mt-6 text-lg/8 text-gray-600">
              There will be some interesting information here eventually! (The source file is correct through)
            </p>
          </div>
        </div>
        <CodeViewer :codeText="coreSource" lang="c" :maxHeight="40" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CodeViewer from '@/components/CodeViewer.vue'
import coreSource from '@/assets/code/dfslib-clientnode-p2.cpp?raw'
</script>
