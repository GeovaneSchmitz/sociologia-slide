import { MutationTree, GetterTree, ActionTree } from 'vuex';
import breakpoints from '../breakpoints';
interface TransitionDurations {
  filter?: number;
  rotate?: number;
  scale?: number;
  translate?: number;
  opacity?: number;
}

interface ElementEffects {
  opacity?: number;
  scale?: number;
  filter?: string;
  rotate?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

interface BreakpointImages extends ElementEffects {
  id: number;
  src: string;

  sizeType?: 'contain' | 'cover';
  position?: string;
  duration?: TransitionDurations;
}

interface BreakpointTexts extends ElementEffects {
  id: number;
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  duration?: TransitionDurations;
}

interface Breakpoint {
  title?: string;
  id: string;
  topics?: string[];
  images?: string[];
  autoplay?: number;
}

interface BreakpointsState {
  breakpoints: Breakpoint[];
  currentIndex: number;
}

export const state = (): BreakpointsState => ({ breakpoints, currentIndex: 0 });

export type RootState = ReturnType<typeof state>;

let timeout: any;
const preload = (url: string) => {
  return new Promise((resolve, reject) => {
    if (process.client) {
      const img = new Image();
      img.src = url;
      img.addEventListener('load', () => resolve(img));
    } else {
      resolve(null);
    }
  });
};

const images = [
  require('../assets/images/foice.webp'),
  require('../assets/images/fundo.webp'),
  require('../assets/images/martelo.webp')
];

for (const breakpoint of breakpoints) {
  if (breakpoint.images) {
    for (const image of breakpoint.images) {
      images.push(image);
    }
  }
}

const loadedImages = Promise.all(images.map((image) => preload(image)));

export const mutations: MutationTree<RootState> = {
  setIndex(state, payload) {
    state.currentIndex = payload.index;
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  }
};

export const actions: ActionTree<RootState, RootState> = {
  async toNext({ state, dispatch, commit }) {
    let newIndex: number;
    await loadedImages;

    if (state.currentIndex === state.breakpoints.length - 1) {
      newIndex = 0;
    } else {
      newIndex = state.currentIndex + 1;
    }

    commit({ type: 'setIndex', index: newIndex });

    if (state.breakpoints[newIndex].autoplay != undefined) {
      timeout = setTimeout(
        () => dispatch('toNext'),
        state.breakpoints[newIndex].autoplay
      );
    }
  },

  async toPrevious({ state, commit, dispatch }) {
    let newIndex: number;
    await loadedImages;
    if (state.currentIndex === 0) {
      newIndex = state.breakpoints.length - 1;
    } else {
      newIndex = state.currentIndex - 1;
    }

    commit({ type: 'setIndex', index: newIndex });

    if (state.breakpoints[newIndex].autoplay != undefined) {
      timeout = setTimeout(
        () => dispatch('toPrevious'),
        state.breakpoints[newIndex].autoplay
      );
    }
  }
};

export const getters: GetterTree<RootState, RootState> = {
  currentBreakpoint: (state) => state.breakpoints[state.currentIndex]
};
