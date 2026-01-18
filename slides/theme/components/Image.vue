<script setup lang="ts">
import { ref, computed } from "vue";
import { handleBackground, resolveAssetUrl } from "../layoutHelper";

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: "" },
  class: { type: String, default: "" },
  width: { type: String, default: "100%" },
  backgroundSize: { type: String, default: "contain" },
  dim: { type: Boolean, default: false },
  style: { type: Object as () => Record<string, string>, default: () => ({}) },
});

const imgAspect = ref<number | null>(null);
const resolvedSrc = resolveAssetUrl(props.src);

const loadImage = () => {
  const img = new Image();
  img.src = resolvedSrc;
  img.onload = () => {
    imgAspect.value = img.naturalHeight / img.naturalWidth;
  };
};
loadImage();

const backgroundStyle = computed(() => {
  const style: Record<string, string> = {
    ...handleBackground(resolvedSrc, props.dim, props.backgroundSize),
    width: props.width ?? "100%",
    ...props.style,
  };

  if (imgAspect.value) {
    style.aspectRatio = `${1 / imgAspect.value}`; // width/height
  }

  return style;
});
</script>

<template>
  <div
    :class="['slidev-image', props.class]"
    :style="backgroundStyle"
    role="img"
    :aria-label="alt"
  />
</template>
