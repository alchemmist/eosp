<template>
  <footer class="slidev-footer">
    <div class="left">
      <img src="/assets/university-logo.svg" alt="University" />
      <img src="/assets/partner-logo.svg" alt="Partner" />
    </div>

    <div class="center">
      {{ title }}
    </div>

    <div class="right">
      {{ date }}
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const ctx = useSlideContext()

const title = computed(() => ctx.frontmatter.title ?? '')
const date = computed(() => ctx.frontmatter.date ?? '')
</script>
