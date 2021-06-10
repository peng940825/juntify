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

    const playlistTitle = ref('');

    const editPanelIsOpen = ref(false);

    const playlist = reactive({ data: {} });

    const localPlaylist = computed(() => store.getters.localPlaylist);

    const playlistTitleReg = computed(() =>
      /^[0-9a-zA-Z\u4e00-\u9fa5 ]{1,10}$/.test(playlistTitle.value)
    );

    const handleEditPanel = (bol) => {
      if (bol) playlistTitle.value = playlist.data.title;
      editPanelIsOpen.value = bol;
    };

    const editPlaylistTitle = () => {
      playlist.data.title = playlistTitle.value;
      setDocumentTitle();
      localPlaylist.value.forEach((item) => {
        if (item.id === playlist.data.id) item.title = playlist.data.title;
      });
      store.commit('updateLocalPlaylist', localPlaylist.value);
      localStorage.setItem('localPlaylist', JSON.stringify(localPlaylist.value));
      handleEditPanel(false);
    };

    watch(
      () => route.path,
      (newVal) => {
        if (newVal.indexOf('playlist') > 0) {
          if (checkDirect()) {
            setBannerColor();
            psuhToCurrentPlaylist();
            setDocumentTitle();
            if (editPanelIsOpen) handleEditPanel(false);
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
      localPlaylist.value.forEach((item) => {
        if (route.params.id === String(item.id)) isSuccess = true;
      });
      return isSuccess;
    };

    const setBannerColor = () => (bannerColor.value = colorList[parseInt(Math.random() * 19)]);

    const psuhToCurrentPlaylist = () => {
      playlist.data = localPlaylist.value.filter(
        (item) => item.id === parseInt(route.params.id)
      )[0];
      store.commit('psuhToCurrentPlaylist', playlist.data.list);
    };

    const setDocumentTitle = () => (document.title = `Juntify - ${playlist.data.title}`);

    return {
      playlist,
      bannerColor,
      playlistTitle,
      editPanelIsOpen,
      handleEditPanel,
      editPlaylistTitle,
      playlistTitleReg,
    };
  },
};
</script>

<template>
  <div class="playlist">
    <div class="banner" :style="{ 'background-color': bannerColor }">
      <img v-if="playlist.data.list.length > 0" :src="playlist.data.list[0].photo" />
      <div v-else class="empty">
        <i class="bi bi-music-note-beamed"></i>
      </div>
      <span @click="handleEditPanel(true)">{{ playlist.data.title }}</span>
    </div>

    <div class="j-gradient" :style="{ 'background-color': bannerColor }">
      <Table :playlist="playlist" status="playlist" v-if="playlist.data.list.length > 0" />
      <div class="no-music" v-else>
        <span>尚無音樂</span>
      </div>
    </div>

    <div class="edit-title" v-if="editPanelIsOpen">
      <span class="text">標題名稱</span>
      <input
        type="text"
        v-model.trim="playlistTitle"
        v-focus
        :class="{ 'reg-fail': !playlistTitleReg }"
      />
      <span class="desc" v-show="!playlistTitleReg">1 至 10 碼，不得有特殊符號。</span>
      <div class="control">
        <button type="button" class="save" @click="editPlaylistTitle" :disabled="!playlistTitleReg">
          儲存
        </button>
        <button type="button" class="cancel" @click="handleEditPanel(false)">取消</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.playlist {
  width: calc(100% - 240px);
  min-height: 100vh;
  margin-left: 240px;

  .banner {
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

    img,
    .empty {
      @include d-flex-a-center-j-center;
      width: 232px;
      height: 232px;
      min-width: 232px;
      min-height: 232px;
      background-color: #282828;
      margin-right: 24px;
      align-self: flex-end;
      box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);

      .bi {
        font-size: 72px;
        color: #bdbdbd;
      }
    }

    span {
      font-size: 96px;
      font-weight: bold;
      margin-bottom: 16px;
      align-self: flex-end;
      letter-spacing: -4px;
      color: white;
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 940px;
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

    .no-music {
      @include d-flex-j-center;

      span {
        color: white;
        font-size: 24px;
        font-weight: bold;
        margin-top: 72px;
      }
    }
  }

  .edit-title {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    background-color: #282828;
    transform: translate(-50%, -50%);
    color: white;
    border-radius: 8px;
    padding: 16px 16px 20px 16px;
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);

    .text {
      display: block;
      color: #bdbdbd;
      font-size: 14px;
      margin: 0 0 8px 8px;
    }

    .desc {
      position: absolute;
      top: 90px;
      left: 24px;
      font-size: 12px;
      color: #f44336;
    }

    input {
      background-color: #3e3e3e;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      width: 100%;
      color: white;

      &:focus {
        color: white;
        outline: none;
        border: 1px solid #bdbdbd;
        background-color: #333;
      }
    }

    .control {
      @include d-flex;
      margin-top: 32px;
      flex-direction: row-reverse;

      button {
        padding: 8px 32px;
        border: none;
        font-size: 14px;
        border-radius: 32px;
      }

      .save {
        margin-left: 16px;
        background-color: #43a047;
        color: white;
      }
    }
  }
}

.reg-fail {
  border: 1px solid #f44336 !important;
}
</style>
