<template lang="pug">
.presentation-wrapper(ref="presentationWrapperEl" :style="{'font-size': scale + 'px' }")
  .presentation
    app-background
    .slide
      app-images(:current-breakpoint='currentBreakpoint')
      app-texts(:current-breakpoint='currentBreakpoint')
</template>

<script lang="ts">
import appTextTyping from '@/components/text-typing.vue';
import appTexts from '@/components/texts.vue';
import appImages from '@/components/images.vue';
import appBackground from '@/components/background.vue';
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  reactive,
  Ref,
  ref,
  useStore,
  watch
} from '@nuxtjs/composition-api';
import { RootState } from '~/store';
export default defineComponent({
  components: {
    appTexts,
    appBackground,
    appTextTyping,
    appImages
  },
  setup() {
    const { getters } = useStore<RootState>();
    const currentBreakpoint = ref(getters['slide/currentBreakpoint']);
    watch(
      () => getters['slide/currentBreakpoint'],
      (value) => (currentBreakpoint.value = value)
    );

    const scale = ref(100);
    const presentationWrapperEl = ref() as Ref<HTMLElement>;
    const resize = () => {
      const width = presentationWrapperEl.value.offsetWidth;
      const height = presentationWrapperEl.value.offsetHeight;
      if (width / height > 1.777777) {
        // aspect ratio is greater than 16/9
        scale.value = (height * 1.777777) / 100;
      } else {
        scale.value = width / 100;
      }
    };
    if (process.browser) {
      window.addEventListener('resize', resize);
      onMounted(() => resize());
      onBeforeUnmount(() => {
        window.removeEventListener('resize', resize);
      });
    }

    return { currentBreakpoint, presentationWrapperEl, scale };
  }
});
</script>

<style module lang="scss">
.presentation-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.slide {
  position: absolute;
  height: 100%;
  width: 100%;
  &-title {
    font-weight: 700;
    font-size: 3em;
    font-family: 'Roboto Mono', monospace;
    color: var(--primary);
  }
  &-topics {
    color: var(--text);
    margin-top: 1rem;
    font-size: 2em;
    width: 46em;
  }
}

.presentation {
  z-index: 0;
  user-select: none;
  overflow: hidden;
  height: 56.25em;
  position: relative;
  width: 100em;
}

.presentation-screen {
  display: block;
}

@media screen and (min-aspect-ratio: 16/9) {
  .presentation {
    font-size: 1.7777777777vh;
  }
}
</style>
