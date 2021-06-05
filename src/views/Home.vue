<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref, computed, onBeforeMount } from 'vue';

export default {
  setup() {
    const store = useStore();

    const router = useRouter();

    let loadedImgNum = ref(0);

    const data = computed(() => store.getters.data);

    const cardLength = computed(() => {
      let num = 0;
      data.value.forEach((theme) => (num = num + theme.artists.length));
      return num;
    });

    const handleLoadedImgNum = () => {
      loadedImgNum.value++;
      if (loadedImgNum.value === cardLength.value) store.commit('handleImageLoading', false);
    };

    const toArtistPage = (name) => router.push({ path: `/artist/${name}` });

    onBeforeMount(() => store.commit('handleImageLoading', true));

    return { data, handleLoadedImgNum, toArtistPage };
  },
};
</script>

<template>
  <div class="j-home">
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
              <img :src="artist.list[0].photo" @load="handleLoadedImgNum" />
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
