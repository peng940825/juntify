<script>
import { computed, onBeforeMount, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    let loadedNum = ref(0);

    const store = useStore();

    const router = useRouter();

    const data = computed(() => store.getters.data);

    const cardLength = computed(() => {
      let num = 0;
      data.value.forEach((item) => {
        num = num + item.artists.length;
      });
      return num;
    });

    const handleLoadNum = () => {
      loadedNum.value++;
      if (loadedNum.value === cardLength.value) store.commit('handleImageLoading');
    };

    onBeforeMount(() => store.commit('handleImageLoading'));

    const toArtistPage = (name) => router.push({ path: `/artist/${name}` });

    return { data, handleLoadNum, toArtistPage };
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
              <img :src="artist.list[0].photo" @load="handleLoadNum" />
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
