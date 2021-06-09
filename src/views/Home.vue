<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref, watch, computed, onBeforeMount, onMounted } from 'vue';

import ImageMosaic from '@/components/ImageMosaic.vue';

export default {
  components: { ImageMosaic },

  setup() {
    const store = useStore();

    const router = useRouter();

    let loadedNum = ref(0);

    const video = ref(null);

    const data = computed(() => store.getters.data);

    const cardLength = computed(() => {
      let num = 0;
      data.value.forEach((theme) => (num = num + theme.artists.length));
      return num;
    });

    const handleloadedNum = () => loadedNum.value++;

    const toArtistPage = (name) => router.push({ path: `/artist/${name}` });

    watch(
      () => loadedNum.value,
      (newVal) => {
        if (newVal === cardLength.value + 1) store.commit('handleImageLoading', false);
      }
    );

    onBeforeMount(() => {
      document.title = 'Juntify';
      store.commit('handleImageLoading', true);
    });

    onMounted(() => {
      video.value.addEventListener('canplay', () => loadedNum.value++);
    });

    return { data, video, handleloadedNum, toArtistPage };
  },
};
</script>

<template>
  <div class="j-home">
    <div class="video-container">
      <video
        ref="video"
        src="https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E6%89%8B%E7%89%BD%E6%89%8B.mp4?alt=media&token=e4b93003-26ba-4d59-a3ea-e0ff56eee22a"
        controls
      ></video>
    </div>

    <div class="row">
      <div class="theme-container col-xxl-6" v-for="theme in data" :key="theme.theme">
        <div class="j-theme">{{ theme.theme }}</div>
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-sm-6"
            v-for="artist in theme.artists"
            :key="artist.artist"
          >
            <div class="j-card" @click="toArtistPage(artist.artist)">
              <img :src="artist.list[0].photo" @load="handleloadedNum" />
              <span>{{ artist.artist }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ImageMosaic />
  </div>
</template>

<style lang="scss" scoped>
.j-home {
  width: calc(100% - 240px);
  min-height: 100vh;
  background-color: rgb(18, 18, 18);
  margin-left: 240px;
  padding: 32px;
  color: white;
  margin-bottom: 64px;

  .video-container {
    @include d-flex-a-center-j-center;
    margin-bottom: 48px;

    video {
      min-width: 240px;
      max-width: 900px;
      margin: 0 64px;
    }
  }

  .theme-container {
    position: relative;
    margin: 32px 0;

    .j-theme {
      position: absolute;
      top: -24px;
      left: -16px;
      font-size: 30px;
      font-family: 'Permanent Marker', cursive;
      transform: rotate(-25deg);
    }

    .j-card {
      margin-bottom: 24px;
      padding: 16px 16px 32px 16px;
      background-color: rgb(24, 24, 24);
      border-radius: 4px;
      transition: 0.25s;

      &:hover {
        cursor: pointer;
        background-color: #424242;
      }

      img {
        width: 100%;
        margin-bottom: 16px;
      }
    }
  }
}
</style>
