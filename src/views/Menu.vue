<script>
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { ref, watch, computed, onBeforeMount } from 'vue';

export default {
  setup() {
    const store = useStore();

    const route = useRoute();

    const router = useRouter();

    const path = ref('');

    const createPlaylistHover = ref(false);

    const id = computed(() => route.params.id);

    const playlist = computed(() => store.getters.localPlaylist);

    const handlePlaylistItemHover = () => (createPlaylistHover.value = !createPlaylistHover.value);

    const createPlaylist = () => {
      const num = playlist.value.length + 1;
      const data = {
        id: new Date().getTime() + parseInt(Math.random() * 10),
        title: `我的播放清單 ${num >= 10 ? num : `0${num}`}`,
        list: [],
      };
      const temp = playlist.value;
      temp.push(data);
      store.commit('updateLocalPlaylist', temp);
      localStorage.setItem('localPlaylist', JSON.stringify(temp));
      router.push({ path: `/playlist/${data.id}` });
    };

    const removePlaylist = (target) => {
      const checkPage = route.path.indexOf(target.id);
      playlist.value.forEach((item, index) => {
        if (item.id === target.id) playlist.value.splice(index, 1);
      });
      store.commit('updateLocalPlaylist', playlist.value);
      localStorage.setItem('localPlaylist', JSON.stringify(playlist.value));
      if (checkPage > 0) router.push({ path: '/' });
    };

    watch(
      () => route.path,
      (newVal) => (path.value = newVal)
    );

    onBeforeMount(() => {
      path.value = route.path;
      const localPlaylist = JSON.parse(localStorage.getItem('localPlaylist'));
      if (!localPlaylist) localStorage.setItem('localPlaylist', JSON.stringify([]));
      else store.commit('updateLocalPlaylist', localPlaylist);
    });

    const overRow = (item) => (item.isHover = true);

    const leaveRow = (item) => (item.isHover = false);

    const toHomePage = () => router.push({ path: '/' });

    const toPlaylistPage = (id) => router.push({ path: `/playlist/${id}` });

    return {
      path,
      toHomePage,
      createPlaylistHover,
      handlePlaylistItemHover,
      playlist,
      createPlaylist,
      toPlaylistPage,
      id,
      overRow,
      leaveRow,
      removePlaylist,
    };
  },
};
</script>

<template>
  <div class="menu">
    <div class="logo">
      <img src="@/assets/logo.png" />
      <router-link to="/">Juntify</router-link>
    </div>

    <div class="home" :class="{ 'home-active': path === '/' }" @click="toHomePage">
      <i class="bi bi-house-door" v-show="path !== '/'"></i>
      <i class="bi bi-house-door-fill" v-show="path === '/'"></i>
      <span>首頁</span>
    </div>

    <div
      class="create-playlist"
      :class="{ 'create-playlist-active': createPlaylistHover }"
      @mouseenter="handlePlaylistItemHover"
      @mouseleave="handlePlaylistItemHover"
    >
      <i class="bi bi-plus-square-fill"></i>
      <span @click="createPlaylist">建立播放清單</span>
    </div>

    <div class="divider"></div>

    <div class="playlist">
      <div
        class="link-container"
        v-for="item in playlist"
        :key="item.title"
        @mouseover="overRow(item)"
        @mouseleave="leaveRow(item)"
      >
        <router-link
          :to="`/playlist/${item.id}`"
          :class="{ 'playlist-active': item.id === parseInt(id) || item.isHover }"
        >
          {{ item.title }}
        </router-link>
        <i
          class="bi bi-x"
          :class="{ 'playlist-active': item.isHover }"
          v-show="item.isHover"
          @click="removePlaylist(item)"
        >
        </i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  position: fixed;
  left: 0;
  width: 240px;
  height: calc(100vh - 90px);
  background-color: rgb(0, 0, 0);
  color: #bdbdbd;
  font-size: 14px;

  .logo {
    @include d-flex-a-center;
    color: white;
    margin: 24px;

    img {
      width: 40px;
      height: 40px;
    }

    a {
      color: white;
      text-decoration: none;
      font-size: 24px;
      font-weight: bold;
      margin-left: 4px;
      margin-bottom: 4px;
    }
  }

  .home,
  .create-playlist {
    @include d-flex-a-center;
    margin: 12px 8px;
    padding: 2px 16px 4px 16px;
    cursor: pointer;

    .bi {
      font-size: 24px;
    }

    span {
      font-weight: bold;
      margin-left: 16px;
    }
  }

  .divider {
    margin: 16px 24px;
    border-bottom: 1px solid #424242;
  }

  .playlist {
    @include d-flex;
    @include f-column;
    margin-left: 24px;
    max-height: 720px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 16px;
    }

    &::-webkit-scrollbar-track {
      background-color: black;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #636363;
    }

    .link-container {
      @include d-flex-a-center;
      line-height: 32px;
      justify-content: space-between;
      padding-right: 24px;

      a {
        color: #bdbdbd;
        font-size: 14px;
        cursor: pointer;
        font-weight: bold;
        text-decoration: none;
      }

      .bi {
        cursor: pointer;
        font-size: 24px;
      }
    }
  }
}

.home-active {
  color: white;
  border-radius: 4px;
  background-color: #282828;
}

.playlist-active {
  color: white !important;
}

.create-playlist-active {
  color: white;
  border-radius: 4px;
}
</style>
