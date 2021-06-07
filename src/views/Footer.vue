<script>
import { useStore } from 'vuex';
import { ref, watch, computed } from 'vue';

export default {
  setup() {
    const store = useStore();

    const volume = ref(50);

    const progressBarTime = ref(0);

    const currentTime = ref(0);

    const isDragging = ref(false);

    const currentMusic = computed(() => store.getters.currentMusic);

    const currentPlaylist = computed(() => store.getters.currentPlaylist);

    const musicLoading = computed(() => store.getters.musicLoading);

    const haveCurrentMusic = computed(() => Object.keys(currentMusic.value).length > 0);

    const dragTime = computed(() =>
      store.state.audio ? Math.floor((progressBarTime.value / 100) * store.state.audio.duration) : 0
    );

    const play = () => {
      if (store.state.audio) {
        store.dispatch('continue');
        store.commit('handleIsPlaying', true);
      }
    };

    const pause = () => {
      store.commit('pause');
      store.commit('clearInterval');
      store.commit('handleIsPlaying', false);
    };

    const mute = () => (volume.value = 0);

    const secondFormat = (time) => (time < 10 ? `0:0${time}` : `0:${time}`);

    const progressBarMouseDown = () => {
      if (store.state.audio) {
        isDragging.value = true;
        store.commit('clearInterval');
      }
    };

    const progressBarMouseUp = () => {
      if (store.state.audio) {
        currentTime.value = dragTime.value;
        isDragging.value = false;
        const specifyTime = Math.floor((progressBarTime.value / 100) * store.state.audio.duration);
        store.dispatch('specifyPlay', specifyTime);
        store.commit('handleIsPlaying', true);
      }
    };

    const playPreOrNextMusic = (status) => {
      if (store.state.audio && currentPlaylist.value.length > 1) {
        store.commit('pause');
        store.commit('clearInterval');
        store.commit('handleIsPlaying', false);
        let targetIndex = null;
        currentPlaylist.value.forEach((item, index) => {
          if (item.title === currentMusic.value.title) targetIndex = index;
        });
        if (status === 'next') {
          if (targetIndex === currentPlaylist.value.length - 1) targetIndex = 0;
          else targetIndex++;
        } else if (status === 'pre') {
          if (targetIndex === 0) targetIndex = currentPlaylist.value.length - 1;
          else targetIndex--;
        }
        store.commit('setCurrentMusic', currentPlaylist.value[targetIndex]);
        store.dispatch('play', currentPlaylist.value[targetIndex].music);
        store.commit('handleIsPlaying', true);
      }
    };

    watch(
      () => store.state.currentTime,
      (newVal) => {
        currentTime.value = newVal;
        progressBarTime.value = (newVal / Math.floor(store.state.audio.duration)) * 100;
      }
    );

    watch(
      () => volume.value,
      (newVal) => {
        store.commit('updateVolume', newVal / 100);
        if (store.state.audio) store.commit('updateAudioVolume', newVal / 100);
      }
    );

    return {
      volume,
      currentTime,
      currentMusic,
      play,
      pause,
      progressBarTime,
      progressBarMouseDown,
      progressBarMouseUp,
      secondFormat,
      haveCurrentMusic,
      dragTime,
      isDragging,
      playPreOrNextMusic,
      musicLoading,
      mute,
    };
  },
};
</script>

<template>
  <div class="footer">
    <div class="left">
      <img :src="currentMusic.photo" v-if="haveCurrentMusic" />
      <div class="content" v-if="haveCurrentMusic">
        <span class="title">{{ currentMusic.title }}</span>
        <router-link class="artist" :to="`/artist/${currentMusic.artist}`">
          {{ currentMusic.artist }}
        </router-link>
      </div>
    </div>

    <div class="middle">
      <div class="contorl">
        <i
          class="bi bi-skip-start-fill"
          v-show="!musicLoading"
          @click="playPreOrNextMusic('pre')"
        ></i>
        <i class="bi bi-skip-start-fill not-allowed" v-show="musicLoading"></i>

        <div class="play" v-show="!currentMusic.isPlaying" @click="play">
          <i class="bi bi-play-fill"></i>
        </div>
        <div class="play" v-show="currentMusic.isPlaying" @click="pause">
          <i class="bi bi-pause-fill"></i>
        </div>

        <i
          class="bi bi-skip-end-fill"
          v-show="!musicLoading"
          @click="playPreOrNextMusic('next')"
        ></i>
        <i class="bi bi-skip-end-fill not-allowed" v-show="musicLoading"></i>
      </div>

      <div class="time">
        <span v-if="!isDragging">{{ secondFormat(currentTime) }}</span>
        <span v-else>{{ secondFormat(dragTime) }}</span>
        <input
          type="range"
          data-key="progress-bar"
          v-model="progressBarTime"
          @mousedown="progressBarMouseDown"
          @mouseup="progressBarMouseUp"
        />
        <span>{{ haveCurrentMusic ? currentMusic.length : '0:00' }}</span>
      </div>
    </div>

    <div class="right">
      <input type="range" data-key="volume" v-model="volume" />
      <i class="bi bi-volume-mute" v-show="volume == 0"></i>
      <i class="bi bi-volume-off" v-show="volume > 0 && volume <= 33" @click="mute"></i>
      <i class="bi bi-volume-down" v-show="volume > 33 && volume <= 66" @click="mute"></i>
      <i class="bi bi-volume-up" v-show="volume > 66" @click="mute"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  @include d-flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 90px;
  background-color: rgb(24, 24, 24);
  border-top: 1px solid rgb(40, 40, 40);

  .left {
    @include d-flex-a-center;
    width: 20%;

    img {
      width: 56px;
      margin-left: 16px;
    }

    .content {
      @include d-flex;
      @include f-column;
      margin-left: 12px;

      .title {
        color: white;
      }

      .artist {
        color: #bdbdbd;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      .title,
      .artist {
        font-size: 14px;
      }
    }
  }

  .middle {
    @include d-flex-a-center-j-center;
    @include f-column;
    width: 60%;

    .contorl {
      @include d-flex;

      .play {
        @include d-flex-a-center-j-center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: white;
        margin: 0 16px;

        .bi-play-fill {
          margin-left: 3px;
        }

        .bi-play-fill,
        .bi-pause-fill {
          font-size: 20px;
          margin-bottom: 2px;
        }
      }
    }

    .time {
      @include d-flex-a-center-j-center;
      width: 100%;
      color: #bdbdbd;
      margin-top: 8px;

      span {
        font-size: 13px;
      }

      input[data-key='progress-bar'] {
        -webkit-appearance: none;
        width: 660px;
        height: 4px;
        margin: 0 8px;
        border-radius: 2px;
        background-color: #404040;
        outline: none;
        overflow: hidden;
        cursor: pointer;

        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 0;
          box-shadow: -660px 0 0 660px #b4b4b4;

          &:hover {
            box-shadow: -660px 0 0 660px #43a047;
          }
        }
      }
    }

    .bi-skip-start-fill,
    .bi-skip-end-fill {
      color: white;
      font-size: 20px;
    }

    .play,
    .bi-skip-start-fill,
    .bi-skip-end-fill {
      cursor: pointer;
    }
  }

  .right {
    @include d-flex-a-center;
    width: 20%;
    flex-direction: row-reverse;

    input[data-key='volume'] {
      -webkit-appearance: none;
      width: 90px;
      height: 4px;
      margin-right: 32px;
      margin-left: 8px;
      border-radius: 2px;
      background-color: #404040;
      outline: none;
      overflow: hidden;
      cursor: pointer;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 0;
        box-shadow: -90px 0 0 90px #b4b4b4;

        &:hover {
          box-shadow: -90px 0 0 90px #43a047;
        }
      }
    }

    .bi {
      color: #b4b4b4;
      font-size: 24px;
      margin-bottom: 2px;
    }

    .bi-volume-off,
    .bi-volume-down,
    .bi-volume-up {
      cursor: pointer;
    }
  }
}

.not-allowed {
  cursor: not-allowed !important;
}
</style>
