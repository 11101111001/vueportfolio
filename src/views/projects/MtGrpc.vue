<template>
  <LoginWrapper>
    <div class="overflow-hidden bg-neutral-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <!-- Text column -->
          <div class="lg:pt-4 lg:pr-8">
            <div class="lg:max-w-lg">
              <h2 class="text-base/7 font-semibold text-green-400">
                Multi-Threaded gRPC Client Node (C++)
              </h2>
              <!-- Summary and bullets -->
              <p class="mt-6 text-lg/8 text-gray-300">
                This component is a C++ client for a gRPC-based distributed file system, keeping a local directory synced with remote storage.
              </p>
              <ul class="mt-4 list-disc list-inside text-gray-400 space-y-2">
                <li>
                  <strong>Directory Sync:</strong> Bi-directional updates—fetches newer server files, uploads local changes, and prunes deletions.
                </li>
                <li>
                  <strong>gRPC RPCs:</strong> Implements List, Stat, Fetch, Store, Delete with deadline handling and CRC checksums.
                </li>
                <li>
                  <strong>Write-Lock Coordination:</strong> Requests per-file locks before writes to avoid conflicts.
                </li>
                <li>
                  <strong>Concurrency:</strong> Linux <code>inotify</code> watcher, async completion-queue loop, and <code>std::mutex</code>–guarded callbacks.
                </li>
                <li>
                  <strong>Tech Stack:</strong> Modern C++17+, <code>&lt;filesystem&gt;</code>, POSIX I/O, Protocol Buffers &amp; gRPC.
                </li>
              </ul>

              <!-- Portfolio blurb -->
              <p class="mt-6 text-base/7 text-gray-500 italic">
                “Demonstrates production-grade networked RPC, thread-safe async callbacks, and system-level integration—ideal for backup agents, CI/CD artifacts, or collaborative editors.”
              </p>
            </div>
          </div>

          <!-- Code viewer -->
          <CodeViewer :codeText="coreSource" lang="c" :maxHeight="40" />
        </div>
      </div>
    </div>
  </LoginWrapper>
</template>

<script setup>
import CodeViewer from '@/components/CodeViewer.vue'
import coreSource from '@/assets/code/dfslib-clientnode-p2.cpp?raw'
import LoginWrapper from '@/components/LoginWrapper.vue'
</script>
