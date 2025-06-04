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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
              suscipit eaque, iste dolor cupiditate blanditiis ratione.
            </p>
          </div>
        </div>
        <CodeViewer :codeText="coreSource" lang="c" :maxHeight="40" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'
import CodeViewer from '@/components/CodeViewer.vue'
import coreSource from '@/assets/code/SMPCache-1.cpp?raw'
</script>
