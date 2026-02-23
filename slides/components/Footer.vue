<template>
  <AlchemmistFooter logo-src="/assets/cu-logo-2.svg" :hide-date="hideDate">
    <template #left>
      <div v-if="!hideLogos" class="logos">
        <img src="/assets/cu-logo-2.svg" alt="Central University" />
        <img src="/assets/cpm-logo.svg" alt="Center of pedagogical excellence" />
        <img src="/assets/in-science-senter-logo.svg" alt="In center of science" />
      </div>
    </template>

    <template #right>
      <span v-if="!hideDate && date" class="mono-text">{{ date }}</span>
    </template>
  </AlchemmistFooter>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $slidev, $frontmatter } = useSlideContext()

const date = computed(() => $frontmatter.date ?? $slidev.configs.date ?? '')
const hideLogos = computed(() => $frontmatter.hideLogos ?? false)
const hideDate = computed(() => $frontmatter.hideDate ?? false)
</script>

<style scoped>
.logos {
  display: flex;
  align-items: center;
  gap: 1cm;
}

.logos img {
  height: 1.5rem;
}
</style>
