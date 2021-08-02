<template lang="pug">
  div
    .background(ref="backgroundElement")
    div.image(:class="{'small':isSmall}")
      div(:class="{ 'martelo': showCover }" ref="marteloElement")
      div(:class="{ 'foice': showCover }" ref="foiceElement")
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
  setup(props) {
    const showCover = ref(false);
    let enable = false;
    const backgroundElement = ref() as Ref<HTMLElement>;
    const foiceElement = ref() as Ref<HTMLElement>;
    const isSmall = ref(false);

    const { getters } = useStore<RootState>();

    watch(
      () => getters['slide/currentBreakpoint'],
      (value) => {
        if (!value) return;
        showCover.value = value.id !== 'cover';
        isSmall.value = showCover.value && value.id !== 'capa';
        if (value.id === 'cover' || value.id === 'capa') startAnimation();
        else enable = false;
      }
    );

    const startAnimation = () => {
      if (!process.client) return;
      if (enable) return;
      enable = true;
      let bacgroundXShift = 0;
      const frameSkips = 15;
      const delta = 300 / 9
      let frame = 0;
      const step = () => {
        if (!enable) return;
        frame++;
        if (frame != frameSkips) return window.requestAnimationFrame(step);
        frame = 0;
        bacgroundXShift += delta;
        if (bacgroundXShift > 100) bacgroundXShift = 0;
        backgroundElement.value.style.backgroundPosition = `${bacgroundXShift}% ${bacgroundXShift}%`;

        window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    };
    startAnimation();
    return { backgroundElement, foiceElement, showCover, isSmall };
  }
});
</script>

<style module lang="scss">
.background {
  background-image: url('../assets/images/fundo.webp');
  width: 100em;
  height: 56.25em;
  background-size: 400em auto;
  background-repeat: no-repeat;
  position: absolute;
}

.foice,
.martelo {
  width: 100em;
  height: 56.25em;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  background-position: center;
  transform-origin: center center;
}

@keyframes foice {
  0% {
    transform: translate3d(-23em, 40em, 0) rotate(-63deg);
  }
  35% {
    transform: translate3d(-23em, 0, 0);
  }

  70% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-23em, 0, 0) scale(0.9);
  }
}
@keyframes martelo {
  0% {
    transform: translate3d(25em, 50em, 0) rotate(53deg);
  }

  35% {
    transform: translate3d(25em, 0, 0);
  }

  70% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-23em, 0, 0) scale(0.9);
  }
}
.image {
  opacity: 1;
  transition: all 1s;
}
.small {
  opacity: 0.5;
}
@keyframes smalloice {
  0% {
    transform: translate3d(-23em, 0, 0) scale(0.9);
  }
  100% {
    transform: translate3d(0, 15em, 0) scale(0.4);
  }

  /* 100% {
    transform: translate3d(-23em, 0, 0) scale(0.2);
  } */
}

@keyframes smallartelo {
  0% {
    transform: translate3d(-23em, 0, 0) scale(0.9);
  }
  100% {
    transform: translate3d(0, 15em, 0) scale(0.4);
  }

  /*  100% {
    transform: translate3d(-23em, 0, 0) scale(0.2);
  } */
}
.foice {
  animation: foice 4s forwards;
  background-image: url('../assets/images/foice.webp');
}
.martelo {
  animation: martelo 4s forwards;
  background-image: url('../assets/images/martelo.webp');
}

.small .martelo {
  animation: smallartelo 1s forwards ease-in-out;
}
.small .foice {
  animation: smalloice 1s forwards ease-in-out;
}
</style>
