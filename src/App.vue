<script>
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { ref, watch, computed } from 'vue';

import Menu from '@/views/Menu.vue';
import Footer from '@/views/Footer.vue';
import Loader from '@/components/Loader.vue';

export default {
  components: { Menu, Footer, Loader },

  setup() {
    const store = useStore();

    const route = useRoute();

    const is404 = ref(false);

    const imageLoading = computed(() => store.getters.imageLoading);

    watch(
      () => route.path,
      (newVal) => (is404.value = newVal === '/404' ? true : false)
    );

    return { is404, imageLoading };
  },
};
</script>

<template>
  <Loader v-show="imageLoading" />
  <Menu v-if="!is404" />
  <router-view />
  <Footer v-if="!is404" />
</template>

<style>
* {
  font-family: 'Noto Sans TC', sans-serif;
}

body {
  background-color: #121212 !important;
}
</style>
