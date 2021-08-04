<template lang="pug">
.image-wrapper
  transition-group(name="fade")
    img.image-layer(v-for="image in currentImages" :src="image" :key="image" :class="{'image-background':image=== background}")
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watch } from '@nuxtjs/composition-api';
export default defineComponent({
  props: { currentBreakpoint: { type: Object, required: true } },
  setup(props) {
    const currentImages: Ref<string[]> = ref([]);

    const background = ref('');
    watch(
      () => props.currentBreakpoint,
      (value) => {
        if (!value) return;
        if (value.images) currentImages.value = [...value.images];
        else currentImages.value = [];

        background.value = value.background || '';
      }
    );
    return { currentImages, background };
  }
});
</script>

<style module lang="scss">
.image-layer {
  width: 100em;
  height: 56.25em;
  position: absolute;
  object-fit: contain;
}
$motion-scale: 10em;
@keyframes noise-motion {
  0% {
    transform: translate3d(#{-$motion-scale}, 0, 0);
  }
  1% {
    transform: translate3d(#{-$motion-scale}, #{-$motion-scale}, 0);
  }
  33% {
    transform: translate3d(#{-$motion-scale}, #{-$motion-scale}, 0);
  }
  34% {
    transform: translate3d(0, #{-$motion-scale}, 0);
  }
  66% {
    transform: translate3d(0, #{-$motion-scale}, 0);
  }
  67% {
    transform: translate3d(0, 0, 0);
  }
  99% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(#{-$motion-scale}, 0, 0);
  }
}
.image-background {
  animation: noise-motion 1s infinite;
  width: #{100em + $motion-scale};
  height: #{100em + $motion-scale};
  opacity: 0.9;
  background-position: center center;
  left: 0;
  object-fit: cover;
}

.image-wrapper {
  position: absolute;
}
.fade-enter-active,
.fade-leave-active {
  transition: transform 1s, opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform-origin: center center;
  transform: translate3d(4em, 0, 0);
}
</style>
