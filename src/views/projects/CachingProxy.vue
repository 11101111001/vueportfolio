<template>
  <LoginWrapper>
    <div class="overflow-hidden bg-neutral-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">

        <!-- ────── First block ────── -->
        <div class="md:flex md:items-start md:flex-row-reverse">
          <!-- Code -->
          <div class="w-full md:w-15/32">
            <CodeViewer :codeText="coreSource" lang="c" :maxHeight="40" />
          </div>

          <!-- Description -->
          <div class="w-full md:w-1/2 md:pr-20">
            <h2 class="text-base/7 font-semibold text-green-400">
              Multi-Threaded Caching Proxy
            </h2>
            <p class="mt-6 text-lg/8 text-gray-300">
              A high-performance proxy that serves client requests from a local cache before hitting the origin server.
            </p>
            <ul class="mt-4 list-disc list-inside text-gray-400 space-y-2">
              <li>
                <strong>POSIX Threads:</strong> Worker pool handles concurrent client requests over custom GETFILE protocol.
              </li>
              <li>
                <strong>Shared Memory IPC:</strong> Uses <code>shm_open</code> + <code>mmap</code> channels for zero-copy data transfer.
              </li>
              <li>
                <strong>Message Queue:</strong> <code>mq_open</code>–based queue routes requests from proxy to cache interface.
              </li>
              <li>
                <strong>Semaphores:</strong> Coordinated read/write access to shared segments with <code>sem_post</code>/<code>sem_wait</code>.
              </li>
              <li>
                <strong>Error Handling:</strong> Robust cleanup of failed transfers and signal-driven shutdown via <code>SIGINT</code>/<code>SIGTERM</code>.
              </li>
            </ul>
          </div>
        </div>

        <!-- ────── API block intro ────── -->
        <p class="text-center text-lg/8 text-gray-400">
          
        </p>

        <!-- ────── Second block ────── -->
        <div class="md:flex md:items-start md:space-x-6">
          <!-- Code -->
          <div class="w-full md:w-15/32">
            <CodeViewer :codeText="coreSource2" lang="c" :maxHeight="40" />
          </div>

          <!-- Description -->
          <div class="w-full md:w-1/2 md:pl-20">
            <h2 class="text-base/7 font-semibold text-green-400">
              Cache Initialization & Handler
            </h2>
            <p class="mt-6 text-lg/8 text-gray-300">
              Sets up shared-memory channels and exposes a thread-safe entry point for serving file data.
            </p>
            <ul class="mt-4 list-disc list-inside text-gray-400 space-y-2">
              <li>
                <strong>Segment Pool:</strong> Pre-allocates N shared segments with unique <code>ID</code> and semaphores.
              </li>
              <li>
                <strong>Thread Safety:</strong> <code>pthread_mutex</code> + <code>pthread_cond</code> ensure exclusive channel access.
              </li>
              <li>
                <strong>gfserver Integration:</strong> Implements <code>handle_with_cache()</code> callback to stream data to clients.
              </li>
              <li>
                <strong>Dynamic Flow:</strong> Queues incoming requests, signals cache workers, and returns GF_OK or GF_FILE_NOT_FOUND.
              </li>
              <li>
                <strong>Scalable Design:</strong> Easily adjusts segment count and size for high-throughput use cases.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </LoginWrapper>
</template>

<script setup>
import CodeViewer from '@/components/CodeViewer.vue'
import coreSource   from '@/assets/code/simplecached.c?raw'
import coreSource2  from '@/assets/code/handle_with_cache.c?raw'
import LoginWrapper from '@/components/LoginWrapper.vue'
</script>
