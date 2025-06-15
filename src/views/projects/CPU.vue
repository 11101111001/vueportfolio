<template>
  <LoginWrapper>
    <div class="overflow-hidden bg-neutral-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="relative">
          <div class="float-right w-full md:w-1/2 md:ml-6 mb-6">
            <CodeViewer :codeText="coreSource" lang="cpp" :maxHeight="40" />
          </div>

          <h2 class="text-base/7 font-semibold text-green-400">MIPS Sim</h2>
          <ul class="space-y-3 text-lg/8 text-gray-400 list-disc list-inside">
            <!-- Overview -->
            <li>
              <strong>SESC cache-core:</strong> implements read/write logic, line allocation, and invalidation; used to collect detailed
              miss metrics (coherence, capacity, conflict, compulsory).
            </li>

            <!-- How doRead() works -->
            <li>
              <strong><code>doRead()</code> hot-path:</strong>  
              <ul class="ml-5 list-[circle]">
                <li>Extracts physical address and finds the matching cache line.</li>
                <li>Checks MESI state&nbsp;→ <em>Modified • Exclusive • Shared • Invalid</em> (MOESI/DMESI also tracked, but MESI was focus).</li>
                <li>If line is valid & readable → counts a <em>hit</em>.</li>
                <li>If locked (rare in sim) or <em>Invalid</em> → counts a <em>miss</em> and classifies it:
                  <ul class="ml-5 list-[square]">
                    <li><strong>Compulsory</strong> – line never seen before.</li>
                    <li><strong>Conflict</strong> – evicted by low associativity.</li>
                    <li><strong>Capacity</strong> – cache too small for working set.</li>
                  </ul>
                </li>
              </ul>
            </li>

            <!-- Coherence miss tracking -->
            <li>
              <strong>Coherence-miss detection:</strong>  
              tracks line history via <code>std::unordered_map</code> + linked list; updates tag records on every invalidation issued by peer caches.
            </li>

            <!-- Edge-case challenge -->
            <li>
              <strong>SESC quirk:</strong> invalid cache lines expose no metadata—accessing them throws compile-time errors,
              so all look-ups must be done through stored tags instead of the line object.
            </li>
          </ul>

        </div>
      </div>
    </div>
  </LoginWrapper>
</template>

<script setup>
import CodeViewer from '@/components/CodeViewer.vue'
import coreSource from '@/assets/code/SMPCache-1.cpp?raw'
import LoginWrapper from '@/components/LoginWrapper.vue'
</script>
