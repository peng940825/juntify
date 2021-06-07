<script>
import { useStore } from 'vuex';
import { ref, watch, computed, onBeforeMount } from 'vue';

import Deezer from '@/components/Deezer.vue';

export default {
  components: { Deezer },

  props: {
    playlist: {
      type: Object,
      default: {},
    },
    status: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const store = useStore();

    let loadedNum = ref(0);

    const localPlaylist = computed(() => store.getters.localPlaylist);

    const musicLoading = computed(() => store.getters.musicLoading);

    const currentMusic = computed(() => store.getters.currentMusic);

    const currentMusicTitle = computed(() => store.getters.currentMusic.title);

    const play = (item) => {
      if (Object.keys(currentMusic.value).length === 0) {
        store.commit('setCurrentMusic', item);
        store.dispatch('play', item.music);
      } else if (item.title === currentMusicTitle.value) {
        store.dispatch('continue');
      } else {
        store.commit('pause');
        store.commit('clearInterval');
        store.commit('handleIsPlaying', false);
        store.commit('setCurrentMusic', item);
        store.dispatch('play', item.music);
      }
      store.commit('handleIsPlaying', true);
    };

    const pause = () => {
      store.commit('pause');
      store.commit('clearInterval');
      store.commit('handleIsPlaying', false);
    };

    const handleLoadedImgNum = () => {
      loadedNum.value++;
      if (loadedNum.value === props.playlist.data.list.length)
        store.commit('handleImageLoading', false);
    };

    const overRow = (item) => (item.hover = true);

    const leaveRow = (item) => (item.hover = false);

    watch(
      () => store.state.audio,
      () => {
        store.state.audio.addEventListener('ended', () => {
          store.commit('clearInterval');
          store.commit('handleIsPlaying', false);
        });
      }
    );

    const openPanel = (item) => {
      props.playlist.data.list.forEach((item) => {
        if (item.panel) item.panel = false;
      });
      item.panel = true;
    };

    const closePanel = (item) => (item.panel = false);

    const pushToLocalPlaylist = (playlist, music) => {
      delete music.hover;
      delete music.panel;
      playlist.list.push(music);
      store.commit('updateLocalPlaylist', localPlaylist.value);
      localStorage.setItem('localPlaylist', JSON.stringify(localPlaylist.value));
      closePanel(music);
    };

    const removeFromPlaylist = (item) => {
      props.playlist.data.list.forEach((i, idx) => {
        if (item.title === i.title) props.playlist.data.list.splice(idx, 1);
      });
      localPlaylist.value.forEach((item, index) => {
        if (item.id === props.playlist.data.id) localPlaylist.value[index] = props.playlist.data;
      });
      store.commit('updateLocalPlaylist', localPlaylist.value);
      localStorage.setItem('localPlaylist', JSON.stringify(localPlaylist.value));
    };

    const isExist = (playlist, music) => {
      let res = true;
      playlist.list.forEach((item) => {
        if (item.title === music.title) res = false;
      });
      return res;
    };

    onBeforeMount(() => store.commit('handleImageLoading', true));

    return {
      props,
      overRow,
      leaveRow,
      play,
      pause,
      currentMusicTitle,
      musicLoading,
      handleLoadedImgNum,
      openPanel,
      closePanel,
      localPlaylist,
      pushToLocalPlaylist,
      removeFromPlaylist,
      isExist,
    };
  },
};
</script>

<template>
  <div class="j-table">
    <div class="j-table-header">
      <span class="j-order">#</span>
      <span class="j-title">標題</span>
      <span class="j-album">專輯</span>
      <i class="bi bi-clock j-time"></i>
    </div>

    <div
      class="j-table-row"
      v-for="(item, index) in playlist.data.list"
      :key="item.title"
      @mouseover="overRow(item)"
      @mouseleave="leaveRow(item)"
    >
      <div class="j-order" v-show="!item.hover">
        <span :class="{ 'j-playing': currentMusicTitle === item.title }" v-show="!item.isPlaying">
          {{ index + 1 }}
        </span>
        <Deezer v-show="item.isPlaying" />
      </div>
      <div class="j-order" v-show="item.hover">
        <i
          class="bi bi-play-fill"
          v-show="!item.isPlaying && !musicLoading"
          @click="play(item)"
        ></i>
        <i class="bi bi-pause-fill" v-show="item.isPlaying" @click="pause"></i>
      </div>
      <div class="j-title">
        <img :src="item.photo" @load="handleLoadedImgNum" />
        <div class="j-content">
          <span :class="{ 'j-playing': currentMusicTitle === item.title }">{{ item.title }}</span>
          <span v-if="props.status === 'playlist'">{{ item.artist }}</span>
        </div>
      </div>
      <span class="j-album">{{ item.album }}</span>
      <div class="j-time">
        <div class="select-playlist" :class="{ 'd-block': item.panel }">
          <span @click="closePanel(item)">取消</span>
          <div class="divider"></div>
          <div v-for="i in localPlaylist" :key="i.id" @click="pushToLocalPlaylist(i, item)">
            <span v-if="isExist(i, item)">{{ i.title }}</span>
          </div>
        </div>
        <i
          class="bi bi-dash"
          v-if="props.status === 'playlist'"
          @click="removeFromPlaylist(item)"
        ></i>
        <i class="bi bi-plus" v-if="props.status === 'artist'" @click="openPanel(item)"></i>
        <span>{{ item.length }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.j-table {
  color: #bdbdbd;
  padding: 64px 32px 128px 32px;

  .j-table-header {
    @include d-flex;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(#bdbdbd, 0.25);

    .j-order {
      text-align: center;
    }

    .j-title,
    .j-album,
    .j-time {
      margin-top: 2px;
    }

    .j-title,
    .j-album {
      font-size: 12px;
    }

    .j-time {
      font-size: 14px;
    }
  }

  .j-table-row {
    @include d-flex;
    font-size: 14px;
    padding: 16px 0;

    &:hover {
      border-radius: 4px;
      background-color: rgba(#bdbdbd, 0.25);
    }

    .j-order,
    .j-album,
    .j-time {
      @include d-flex-a-center-j-center;
    }

    .j-title {
      @include d-flex;

      img {
        width: 40px;
        height: 40px;
      }

      .j-content {
        @include d-flex-j-center;
        @include f-column;
        margin-left: 16px;
      }
    }
  }

  .j-table-header,
  .j-table-row {
    min-width: 576px;
  }

  .j-order {
    width: 48px;
    font-weight: bold;
  }

  .j-title {
    width: 40%;
  }

  .j-time {
    margin-left: auto;
    margin-right: 64px;
    position: relative;

    .bi-plus,
    .bi-dash {
      font-size: 24px;
      margin-bottom: 2px;
      margin-right: 16px;
    }

    .select-playlist {
      position: absolute;
      top: 0;
      right: 0;
      width: 160px;
      background-color: #282828;
      margin-top: 40px;
      margin-right: 45px;
      z-index: 999;
      box-shadow: 0 16px 24px rgba(0, 0, 0, 30%), 0 6px 8px rgba(0, 0, 0, 20%);
      display: none;
      padding: 4px;
      max-height: 320px;
      overflow: auto;

      &::-webkit-scrollbar {
        width: 16px;
      }

      &::-webkit-scrollbar-track {
        background-color: #282828;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #636363;
      }

      .divider {
        border-bottom: 1px solid #424242;
      }

      span {
        display: block;
        font-size: 14px;
        padding: 8px 12px;
        cursor: pointer;

        &:hover {
          background-color: #3e3e3e;
        }
      }
    }
  }
}

.j-playing {
  color: #43a047;
}

@media (max-width: 871px) {
  .j-album {
    display: none !important;
  }
}

.bi {
  font-size: 18px;
  cursor: pointer;
}

.d-block {
  display: block;
}
</style>
