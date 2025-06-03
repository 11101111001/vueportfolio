<script setup>
import { ref, watch } from 'vue'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import c from 'highlight.js/lib/languages/c'
import cpp from 'highlight.js/lib/languages/cpp'
import 'highlight.js/styles/github-dark.css'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('c', c)
hljs.registerLanguage('cpp', cpp)

const props = defineProps({
  codeText: { type: String, required: true },
  lang: { type: String, default: '' },
  maxHeight: { type: Number, default: 32 },
})

const highlighted = ref('')

function highlightCode() {
  highlighted.value = props.lang
    ? hljs.highlight(props.codeText, { language: props.lang }).value
    : hljs.highlightAuto(props.codeText).value
}

watch(() => props.codeText, highlightCode, { immediate: true })
</script>

<template>
  <pre
    :style="`max-height:${props.maxHeight}rem`"
    class="relative overflow-auto rounded-xl bg-neutral-900/70 p-4 ring-1 ring-green-400 scrollbar-thin scrollbar-thumb-gray-600 text-xs leading-snug"
  >
    <code v-html="highlighted"></code>
  </pre>
</template>

<style scoped>
pre code {
  color: #e5e5e5 !important;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-built_in,
.hljs-type {
  color: #ff79c6 !important; /* pinkish */
}
.hljs-string,
.hljs-title,
.hljs-name,
.hljs-attribute {
  color: #50fa7b !important;
}
.hljs-comment,
.hljs-quote {
  color: #6272a4 !important;
  font-style: italic;
}
.hljs-number,
.hljs-literal,
.hljs-doctag {
  color: #bd93f9 !important;
}
.hljs-regexp,
.hljs-link {
  color: #f1fa8c !important;
}
.hljs-variable,
.hljs-template-variable {
  color: #ffb86c !important;
}

.scrollbar-thin::-webkit-scrollbar {
  height: 4px;
  width: 4px;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: rgb(55 65 81);
  border-radius: 2px;
}

pre {
  padding: 0.75rem;
}

pre {
  background-color: rgba(0, 0, 0, 0.6) !important;
}
</style>
