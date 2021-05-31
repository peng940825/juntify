<script>
import { computed, onBeforeMount, onBeforeUnmount, ref, watch } from 'vue';
import { useStore } from 'vuex';

import Deezer from '@/components/Deezer.vue';

export default {
  components: { Deezer },

  props: {
    playList: {
      type: Object,
      default: {},
    },
  },

  setup(props) {
    let loadedNum = ref(0);

    const store = useStore();

    const overRow = (item) => (item.hover = true);

    const leaveRow = (item) => (item.hover = false);

    const musicLoading = computed(() => store.getters.musicLoading);

    const currentMusicTitle = computed(() => store.getters.currentMusic.title);

    const play = (item) => {
      if (Object.keys(store.state.currentMusic).length === 0) {
        store.commit('setCurrentMusic', item);
        store.dispatch('play', item.music);
      } else if (item.title === store.state.currentMusic.title) {
        store.commit('continue');
      } else {
        store.commit('pause');
        store.commit('setCurrentMusic', item);
        closeIsPlaying();
        store.dispatch('play', item.music);
      }
      item.isPlaying = true;
    };

    const pause = (item) => {
      store.commit('pause');
      item.isPlaying = false;
    };

    watch(
      () => store.state.audio,
      () => {
        store.state.audio.addEventListener(
          'ended',
          () => (store.state.currentMusic.isPlaying = false)
        );
      }
    );

    const closeIsPlaying = () => {
      const target = props.playList.data.list.filter(
        (item) => item.title !== store.state.currentMusic.title
      );
      target.forEach((item) => (item.isPlaying = false));
    };

    const handleIsPlaying = (status) => {
      props.playList.data.list.forEach((item) => {
        if (item.title === currentMusicTitle.value) item.isPlaying = status;
      });
    };

    const handleLoadNum = () => {
      loadedNum.value++;
      if (loadedNum.value === props.playList.data.list.length) store.commit('handleImageLoading');
    };

    onBeforeMount(() => {
      store.commit('handleImageLoading');
      if (store.state.audio) {
        if (store.state.audio.ended) handleIsPlaying(false);
        else handleIsPlaying(true);
      }
    });

    onBeforeUnmount(() => {
      props.playList.data.list.forEach((item) => (item.isPlaying = false));
    });

    return {
      props,
      overRow,
      leaveRow,
      play,
      pause,
      currentMusicTitle,
      musicLoading,
      handleLoadNum,
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
      v-for="(item, index) in playList.data.list"
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
          class="bi bi-caret-right-fill"
          v-show="!item.isPlaying && !musicLoading"
          @click="play(item)"
        ></i>
        <i class="bi bi-pause-fill" v-show="item.isPlaying" @click="pause(item)"></i>
      </div>
      <div class="j-title">
        <img :src="item.photo" @load="handleLoadNum" />
        <div class="j-content">
          <span :class="{ 'j-playing': currentMusicTitle === item.title }">{{ item.title }}</span>
          <!-- <span>{{ playList.data.artist }}</span> -->
        </div>
      </div>
      <span class="j-album">{{ item.album }}</span>
      <span class="j-time">{{ item.length }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.j-table {
  color: #bdbdbd;
  padding: 64px 32px 0 32px;

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
</style>
