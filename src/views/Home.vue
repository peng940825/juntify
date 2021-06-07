<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref, watch, computed, onBeforeMount, onMounted } from 'vue';

export default {
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
      <span>2021</span>
      <video
        ref="video"
        src="https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E6%89%8B%E7%89%BD%E6%89%8B.mp4?alt=media&token=e4b93003-26ba-4d59-a3ea-e0ff56eee22a"
        width="600"
        controls
      ></video>
      <span>手牽手</span>
    </div>

    <div class="row">
      <div class="col-xxl-6" v-for="theme in data" :key="theme.theme">
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
      margin: 0 64px;
    }

    span {
      color: darken(#212121, 10%);
      font-size: 72px;
      letter-spacing: 8px;
      text-shadow: -1px -1px 1px #bdbdbd, 2px 2px 1px #424242;
    }
  }

  .j-theme {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .j-card {
    padding: 16px 16px 32px 16px;
    margin-bottom: 24px;
    border-radius: 4px;
    background-color: rgb(24, 24, 24);
    transition: 0.25s;

    &:hover {
      cursor: pointer;
      background-color: rgb(38, 38, 38);
    }

    img {
      width: 100%;
      margin-bottom: 16px;
    }
  }
}
</style>
