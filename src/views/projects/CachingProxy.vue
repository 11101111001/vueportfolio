<template>
  <div class="overflow-hidden bg-neutral-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
      <!-- ────── First block ────── -->
      <div class="md:flex md:items-start md:space-x-6 md:flex-row-reverse">
        <div class="w-full md:w-15/32">
          <CodeViewer :codeText="coreSource" lang="c" :maxHeight="40" />
        </div>
        <div class="w-full md:w-1/2">
          <h2 class="text-base/7 font-semibold text-green-400">Multi-threaded Caching Proxy</h2>
          <p class="mt-6 text-lg/8 text-gray-400">
            Here we have a source file for a multi-threaded caching proxy. It will be a bit of a 
            challenge to imagine the exact flow since we were asked to implement the client and the proxy, 
            but we should get through. Both use POSIX threading to request and handle significant loads of data. 
            The proxy also makes use of a simple cache to store files locally that client may request, 
            instead of going all the way out to the server. This file’s job is to transmit data to the proxy 
            from the cache.
          </p>
          <p class="mt-6 text-lg/8 text-gray-400">
            The primary focus of this project was to get comfortable with IPC, or inter-process communication. 
            The client connects to the proxy via a custom request protocol named GETFILE. The proxy and 
            cache are connected through a shared memory channel using a POSIX shm object. This is treated 
            more or less as a c buffer, with the added caveat that we need to handle all synchronization of usage. 
            There are is a one-way message queue utilized to send requests from the proxy to the cache interface, 
            allowing us to keep everything online in the event no requests need processing for a period of time.
            In the loop that handles data transfer, semaphore was used between the proxy and cache to handle when to read and write to the shared memory channel, 
            with some checks in place to determine if reading/writing failed, or if the transfer has been 
            completed. After the tranfer is complete (or fails), we perform clean-up of the channel for other files,
            or send the
 
          </p>
        </div>
      </div>

      <p class="text-center text-lg/8 text-gray-400">
        Below is the API for how the proxy handle interactions with the cache. There are two functions, 
        one to initialize the cache and the relevant synch + shm objects,  as well as some initial memory 
        mappings and other data objects for keeping track of information across the channel. 
      </p>

      <div class="md:flex md:items-start md:space-x-6">
        <div class="w-full md:w-15/32">
          <CodeViewer :codeText="coreSource2" lang="c" :maxHeight="40" />
        </div>
        <div class="w-full md:w-1/2">
          <p class="mt-6 text-lg/8 text-gray-400">
            This is the flipped version: on medium+ screens the code block sits on the left…  
          </p>
          <p class="mt-6 text-lg/8 text-gray-400">
            Notice how …  
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CodeViewer from '@/components/CodeViewer.vue'
import coreSource   from '@/assets/code/simplecached.c?raw'
import coreSource2  from '@/assets/code/handle_with_cache.c?raw'
</script>
