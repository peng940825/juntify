import { createStore } from 'vuex';

import data from '@/lib/data.js';

export default createStore({
  state: {
    data,
    audio: null,
    currentMusic: {},
    musicLoading: false,
    imageLoading: false,
  },
  mutations: {
    setAudio: (state, payload) => (state.audio = payload),
    setCurrentMusic: (state, payload) => (state.currentMusic = payload),
    pause: (state) => state.audio.pause(),
    continue: (state) => state.audio.play(),
    handleMusicLoading: (state) => (state.musicLoading = !state.musicLoading),
    handleImageLoading: (state) => (state.imageLoading = !state.imageLoading),
  },
  actions: {
    play(context, payload) {
      context.commit('handleMusicLoading');
      const audio = new Audio(payload);
      audio
        .play()
        .then(() => {
          context.commit('setAudio', audio);
          context.commit('handleMusicLoading');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    data: (state) => state.data,
    currentMusic: (state) => state.currentMusic,
    musicLoading: (state) => state.musicLoading,
    imageLoading: (state) => state.imageLoading,
  },
  modules: {},
});
