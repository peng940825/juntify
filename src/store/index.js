import { createStore } from 'vuex';

import data from '@/lib/data.js';

export default createStore({
  state: {
    data,
    audio: null,
    volume: 0.5,
    currentTime: 0,
    currentMusic: {},
    currentPlaylist: null,
    musicLoading: false,
    imageLoading: false,
    intervalId: null,
    localPlaylist: [],
  },
  mutations: {
    pause: (state) => state.audio.pause(),
    setAudio: (state, payload) => (state.audio = payload),
    setCurrentMusic: (state, payload) => (state.currentMusic = payload),
    handleMusicLoading: (state, payload) => (state.musicLoading = payload),
    handleImageLoading: (state, payload) => (state.imageLoading = payload),
    handleIsPlaying: (state, payload) => (state.currentMusic.isPlaying = payload),
    updateVolume: (state, payload) => (state.volume = payload),
    updateAudioVolume: (state, payload) => (state.audio.volume = payload),
    updateCurrentTime: (state, payload) => (state.currentTime = payload),
    setIntervalId: (state, payload) => (state.intervalId = payload),
    clearInterval: (state) => clearInterval(state.intervalId),
    specifyAudioTime: (state, payload) => (state.audio.currentTime = payload),
    psuhToCurrentPlaylist: (state, payload) => (state.currentPlaylist = payload),
    updateLocalPlaylist: (state, payload) => (state.localPlaylist = payload),
  },
  actions: {
    play(context, payload) {
      context.commit('handleMusicLoading', true);
      const audio = new Audio(payload);
      audio
        .play()
        .then(() => {
          audio.volume = context.state.volume;
          context.commit('handleMusicLoading', false);
          context.commit('setAudio', audio);

          const intervalId = setInterval(() => {
            context.commit('updateCurrentTime', Math.round(context.state.audio.currentTime));
          }, 1000);
          context.commit('setIntervalId', intervalId);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    continue(context) {
      context.state.audio.play();

      const intervalId = setInterval(() => {
        context.commit('updateCurrentTime', Math.round(context.state.audio.currentTime));
      }, 1000);
      context.commit('setIntervalId', intervalId);
    },
    specifyPlay: (context, payload) => {
      context.commit('specifyAudioTime', payload);
      context.state.audio.play();

      const intervalId = setInterval(() => {
        context.commit('updateCurrentTime', Math.round(context.state.audio.currentTime));
      }, 1000);
      context.commit('setIntervalId', intervalId);
    },
  },
  getters: {
    data: (state) => state.data,
    currentTime: (state) => state.currentTime,
    currentMusic: (state) => state.currentMusic,
    musicLoading: (state) => state.musicLoading,
    imageLoading: (state) => state.imageLoading,
    localPlaylist: (state) => state.localPlaylist,
    currentPlaylist: (state) => state.currentPlaylist,
  },
});
