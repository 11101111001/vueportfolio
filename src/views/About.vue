<template>
  <div class="min-h-screen bg-neutral-900 text-white px-6 pb-16">
    <!-- About  -->
    <section class="max-w-2xl mx-auto pt-16">
      <h1 class="text-4xl font-bold mb-4">About Me</h1>
      <p class="text-lg text-green-400 mb-8">
        Hello, thanks for visiting! I am currently a masters student at the Georgia Institute of
        Technology looking to break into tech. I designed (and host) this website in an effort to
        display my coding experience that would generally not be accessible. The projects I have
        worked are bound by academic integrity, so posting them in a public repo will earn me an AI
        strike! Ouch! Hence, I chose to display curated sections of code that I implemented to give
        visitors a good idea of what I've done, in a way that is quick and clean.
      </p>
      <p class="text-lg text-green-400 mb-8">
        Some more background for the interested reader... I did my undergrad at the University at
        Buffalo where I acquired degrees in Math and Physics. I began coding in my sophomore year as
        my professors discussed its increasing importance in research. As my undergrad progressed,
        my interest in computers and their functionality grew enough to pivot from a PhD in physics
        to a master's in CS. I am primarily focused in systems topics such as OSs, compilers, and
        High-Performance Computing, though I am rather familiar with front-end/back-end development!
      </p>

      <!-- Centered, content‐width separator -->
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
