<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

import Loader from '@/components/Loader.vue';

export default {
  components: { Loader },

  setup() {
    const store = useStore();

    const imageLoading = computed(() => store.getters.imageLoading);

    return { imageLoading };
  },
};
</script>

<template>
  <Loader v-show="imageLoading" />
  <router-view />
</template>

<style lang="scss">
* {
  font-family: 'Noto Sans TC', sans-serif;
}

body {
  background-color: #121212 !important;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgb(18, 18, 18);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #636363;
  }
}
</style>
