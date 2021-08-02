<template lang="pug">
  .texts
    .text(v-for="text in texts" key="texts.key")
      |{{text.text}}
</template>

<script lang="ts">
import {
  defineComponent, reactive
} from '@nuxtjs/composition-api';


export default defineComponent({
  props: { currentBreakpoint: { type: Object, required: true } },
  setup(props, { emit }) {
    const texts = reactive([]); 
    return { texts};
  }
});
</script>

<style module>
.texts{
  position: absolute;
}
</style>
