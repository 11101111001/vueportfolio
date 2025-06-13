<template>
  <LoginWrapper>
    <div class="overflow-hidden bg-neutral-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="relative">
          <div class="float-right w-full md:w-1/2 md:ml-6 mb-6">
            <CodeViewer :codeText="coreSource" lang="cpp" :maxHeight="40" />
          </div>

          <h2 class="text-base/7 font-semibold text-green-400">MIPS Sim</h2>
          <p class="mt-6 text-lg/8 text-gray-400">
            To the right is an SESC source file containing functions related to how the cache handles tasks 
            such as read/write hits and misses, line allocation, and line invalidation. We were required to 
            track several different operations to determine metrics like misses due to coherence, low capacity, 
            and replacement issues. This involved digging through the several different functions to find how 
            exactly a hit and miss were handled in the cache.
          </p>
          <p class="mt-6 text-lg/8 text-gray-400">
            From here on out, discussed functions can be found using “command-F”, it will work in the window! 
            The doRead() function will perform a couple of checks to determine how to handle a request for a 
            piece of memory (mreq). We being by grabbing the physical address of the requested memory, 
            and the correlating cache line to see its current state. Lines will be in states according to the 
            MESI protocol, i.e. Modified, Exclusive, Shared, and Invalid. Actually, there are many different 
            sets of states being tracked for each line, such as DMESI and MOESI, but we only focused on MESI for 
            this project. Lines are checked for validity, as well as for properties such as canBeRead and locked. 
            If a line is valid and it can be read, we have the correct piece of memory in cache and will 
            count a hit. Other paths will check if the line is locked (not something that really occurs in the 
            simulation), or if the line is invalid. In this instance, a miss is counted and we can attempt to 
            classify it based on a few criteria. A line that was never in the cache will be counted as a 
            compulsory miss, a line that is missed because of low associativity in the cache is a conflict miss, 
            and a everything else is due to not enough space. 
          </p>

          <p class="mt-6 text-lg/8 text-gray-400">
            Coherence misses are slightly more complex, because the we must find a way to track the history of a 
            line to see if it was invalidated due to the activity of another cache. There are many ways to do this 
            but a simple map and list will do. Tags need to be updated in every place where a compiled invalidation 
            occurs. We store the previous tag and save its validity in the list. A fun little challenge that SESC 
            throws is that cache lines contain no information if they are invalid, so attempting to call an 
            invalid line in any of the relevant functions will give us a compiler error. Therefore, the tag of the 
            cache line must be used to search the list and the map.
          </p>
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
