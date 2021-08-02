<template lang="pug">
  .index
    presentation-toolbar(:current-breakpoint="currentBreakpoint")
    presentation.index-presentation(:current-breakpoint="currentBreakpoint")
</template>

<script lang="ts">
import { defineComponent, onMounted, useStore } from '@nuxtjs/composition-api';

import presentation from '@/components/presentation.vue';
import { RootState } from '~/store';
import presentationToolbar from '~/components/presentation-toolbar.vue';

export default defineComponent({
  components: {
    presentationToolbar,
    presentation
  },

  setup(props, { emit }) {
    const store = useStore<RootState>();

    const keyboardEvent = (event: KeyboardEvent) => {
      const keysNextBreakpoint = ['ArrowRight', ' ', 'Enter'];
      const keysPreviousBreakpoint = ['ArrowLeft'];
      if (keysNextBreakpoint.includes(event.key)) {
        store.dispatch('slide/toNext');
      } else if (keysPreviousBreakpoint.includes(event.key)) {
        store.dispatch('slide/toPrevious');
      }
    };

    onMounted(() => window.addEventListener('keyup', keyboardEvent));
    return {
      breakpointIndex: 0,
      currentBreakpoint: store.getters['slide/currentBreakpoint']
    };
  }
});
</script>

<style module>
.index {
  background-color: #000;
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
