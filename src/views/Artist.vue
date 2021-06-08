<script>
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { ref, reactive, watch, computed, onBeforeMount } from 'vue';
import { colorList } from '@/lib/tools.js';

import Table from '@/components/Table.vue';

export default {
  components: { Table },

  setup() {
    const store = useStore();

    const route = useRoute();

    const router = useRouter();

    const bannerColor = ref('');

    const playlist = reactive({ data: {} });

    const data = computed(() => store.getters.data);

    watch(
      () => route.path,
      (newVal) => {
        if (newVal.indexOf('artist') > 0) {
          if (checkDirect()) {
            setBannerColor();
            psuhToCurrentPlaylist();
            setDocumentTitle();
          } else {
            router.push({ path: '/404' });
          }
        }
      }
    );

    onBeforeMount(() => {
      if (checkDirect()) {
        setBannerColor();
        psuhToCurrentPlaylist();
        setDocumentTitle();
      } else {
        router.push({ path: '/404' });
      }
    });

    const checkDirect = () => {
      let isSuccess = false;
      data.value.forEach((theme) => {
        theme.artists.forEach((artist) => {
          if (artist.artist === route.params.name) isSuccess = true;
        });
      });
      return isSuccess;
    };

    const setBannerColor = () => (bannerColor.value = colorList[parseInt(Math.random() * 19)]);

    const psuhToCurrentPlaylist = () => {
      data.value.forEach((theme) => {
        theme.artists.forEach((artist) => {
          if (artist.artist === route.params.name) playlist.data = artist;
        });
      });
      store.commit('psuhToCurrentPlaylist', playlist.data.list);
    };

    const setDocumentTitle = () => (document.title = `Juntify - ${route.params.name}`);

    return { playlist, bannerColor };
  },
};
</script>

<template>
  <div class="j-artist">
    <div class="j-banner" :style="{ 'background-color': bannerColor }">
      <img :src="playlist.data.list[0].photo" />
      <span>{{ playlist.data.artist }}</span>
    </div>
    <div class="j-gradient" :style="{ 'background-color': bannerColor }">
      <Table :playlist="playlist" status="artist" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.j-artist {
  width: calc(100% - 240px);
  min-height: 100vh;
  margin-left: 240px;

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
      min-width: 232px;
      min-height: 232px;
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
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 920px;
      white-space: nowrap;
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
