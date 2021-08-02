<template lang="pug">
.toolbar-wrapper(ref="wrapperElement" @click="mouseClick($event)", @mousemove="mouseMove" :class="{'toolbar-hide-cursor': !toolbarActive}")
  .toolbar(:class='{ "toolbar-active": toolbarActive}', @pointerout="toolbarOut", ref="toolbar")
    .toolbar-button(@click="toolbarToPrevious()")
      |<
    .counter
      |{{index}}
    .toolbar-button(@click="toolbarToNext()")
      |>
</template>

<script lang="ts">
import {
  defineComponent,
  Ref,
  ref,
  useStore,
  watch
} from '@nuxtjs/composition-api';
import { RootState } from '~/store';

export default defineComponent({
  setup() {
    const timeoutHideToolbar = 1000;
    const toolbarActive = ref(true);
    const wrapperElement = ref() as Ref<HTMLElement>;
    let toolbarFocus = true;

    let intervalHideToolbar: any;
    const { state, dispatch } = useStore<RootState>();
    const index = ref(state.slide.currentIndex);
    watch(
      () => state.slide.currentIndex,
      (value) => {
        index.value = value;
      }
    );
    const toolbarOut = () => {
      if (intervalHideToolbar) {
        clearTimeout(intervalHideToolbar);
      }
      toolbarFocus = false;
      intervalHideToolbar = setTimeout(() => {
        if (!toolbarFocus) {
          toolbarActive.value = false;
        }
      }, timeoutHideToolbar);
    };

    const toolbarToNext = () => {
      toolbarOut();
      dispatch('slide/toNext');
    };

    const toolbarToPrevious = () => {
      toolbarOut();
      dispatch('slide/ToPrevious');
    };

    const mouseClick = (event: MouseEvent) => {
      if (wrapperElement.value == event.target) {
        if (!toolbarFocus) {
          toolbarActive.value = false;
        }
        if (event.clientX > window.innerWidth / 2) {
          dispatch('slide/toNext');
        } else {
          dispatch('slide/ToPrevious');
        }
      }
    };
    const mouseMove = () => {
      if (!toolbarActive.value) {
        toolbarActive.value = true;
        setTimeout(() => {
          if (!toolbarFocus) {
            toolbarActive.value = false;
          }
        }, timeoutHideToolbar);
      }
    };
    return {
      wrapperElement,
      toolbarActive,
      mouseMove,
      mouseClick,
      toolbarOut,
      toolbarToNext,
      toolbarToPrevious,
      index
    };
  }
});
</script>

<style module>
.toolbar-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.toolbar-controls {
  display: flex;
  width: 50%;
}

.toolbar-color:hover {
  opacity: 0.8;
}

.toolbar-color:active {
  opacity: 1;
}
.toolbar-button,
.counter {
  background-color: var(--component-background-color);
  font-size: 1rem;
  font-family: 'Segoe UI', Helvetica, sans-serif;
  color: var(--component-text-color);
  height: 36px;
  width: 36px;
  margin: 0.25rem;
  border-radius: 99px;
  text-align: center;
  vertical-align: middle;
  line-height: 36px;
  box-shadow: var(--shadow3);
}
.toolbar-hide-cursor {
  cursor: none;
}

.toolbar {
  user-select: none;
  transition: all 0.25s;
  height: 36px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 1rem;
}

.toolbar-active {
  opacity: 1;
}

@media print {
  .toolbar-wrapper {
    display: none;
  }
}
</style>
