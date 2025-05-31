<template>
  <div class="min-h-screen bg-neutral-900 text-white px-6 pb-16">
    <!-- About content starts near top -->
    <section class="max-w-2xl mx-auto pt-16">
      <h1 class="text-4xl font-bold mb-4">About Me</h1>
      <p class="text-lg text-gray-300 mb-8">
        Hello! I’m a software developer specializing in systems programming, Vue.js, and network
        architecture. Here’s a bit about my background, interests, and how to get in touch.
      </p>

      <!-- Centered, content‐width separator (not full page) -->
      <div class="mx-auto mb-8 w-1/2 border-t border-neutral-700"></div>

      <!-- Contact section -->
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-semibold mb-4">Contact</h2>
        <p class="text-gray-300 mb-6">Feel free to reach out via email or find me on LinkedIn:</p>
        <ul class="space-y-2 text-gray-300">
          <li>
            📧
            <a href="mailto:carter.weidman@outlook.com" class="text-green-400 hover:underline">
              carter.weidman@outlook.com
            </a>
          </li>
          <li>
            <font-awesome-icon :icon="['fab', 'linkedin']" />
            <a
              href="https://www.linkedin.com/in/cw007297352/"
              target="_blank"
              class="text-green-400 hover:underline"
            >
              https://www.linkedin.com/in/cw007297352/
            </a>
          </li>
          <li>
            <font-awesome-icon :icon="['fab', 'github']" />
            <a
              href="https://github.com/11101111001"
              target="_blank"
              class="text-green-400 hover:underline"
            >
              https://github.com/11101111001
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup></script>
