<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

import Menu from '@/views/Menu.vue';
import Footer from '@/views/Footer.vue';
import Loader from '@/components/Loader.vue';

export default {
  components: { Menu, Footer, Loader },

  setup() {
    const store = useStore();

    const imageLoading = computed(() => store.getters.imageLoading);

    return { imageLoading };
  },
};
</script>

<template>
  <Loader v-show="imageLoading" />
  <Menu />
  <router-view />
  <Footer />
</template>
