<script>
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { ref, reactive, watch, computed, onBeforeMount } from 'vue';
import { colorList } from '@/lib/tools.js';

import Table from '@/components/Table.vue';

export default {
  components: { Table },

  setup() {
    const store = useStore();

    const route = useRoute();

    const bannerColor = ref('');

    const playList = reactive({ data: {} });

    const data = computed(() => store.getters.data);

    const preWork = () => {
      document.title = route.path === '/' ? 'Juntify' : `Juntify - ${route.params.name}`;
      bannerColor.value = colorList[parseInt(Math.random() * 19)];
      data.value.forEach((theme) => {
        theme.artists.forEach((artist) => {
          if (artist.artist === route.params.name) playList.data = artist;
        });
      });
      store.commit('psuhToCurrentPlayList', playList.data.list);
    };

    watch(
      () => route.path,
      () => preWork()
    );

    onBeforeMount(() => preWork());

    return { playList, bannerColor };
  },
};
</script>

<template>
  <div class="j-artist">
    <div class="j-banner" :style="{ backgroundColor: bannerColor }">
      <img :src="playList.data.list[0].photo" />
      <span>{{ playList.data.artist }}</span>
    </div>
    <div class="j-gradient" :style="{ backgroundColor: bannerColor }">
      <Table :playList="playList" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.j-artist {
  width: calc(100% - 240px);
  min-height: 100vh;
  margin-left: 240px;
  background-color: rgb(18, 18, 18);

  .j-banner {
    @include d-flex;
    height: 340px;
    padding-left: 32px;
    padding-bottom: 24px;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(transparent),
      to(rgba(0, 0, 0, 0.5))
    );

    img {
      width: 232px;
      height: 232px;
      background-color: white;
      border-radius: 50%;
      margin-right: 24px;
      align-self: flex-end;
      box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
    }

    span {
      font-size: 96px;
      font-weight: bold;
      margin-bottom: 16px;
      align-self: flex-end;
      letter-spacing: -4px;
      color: white;
    }
  }

  .j-gradient {
    height: 240px;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.6)),
      to(rgb(18, 18, 18))
    );
  }
}
</style>
