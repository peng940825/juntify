<script>
import Menu from '@/views/Menu.vue';
import Footer from '@/views/Footer.vue';

export default {
  components: { Menu, Footer },
};
</script>

<template>
  <Menu />
  <router-view />
  <Footer />
</template>

<style></style>
