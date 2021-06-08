<script>
import { useRouter } from 'vue-router';
import { onBeforeMount } from '@vue/runtime-core';

export default {
  setup() {
    const router = useRouter();

    const tpHomePage = () => router.push({ path: '/' });

    onBeforeMount(() => (document.title = '哎呀！'));

    return { tpHomePage };
  },
};
</script>

<template>
  <div class="not-found-page-screen">
    <div class="header">
      <div class="logo" @click="tpHomePage">
        <img src="@/assets/logo.png" />
        <span>Juntify</span>
      </div>
      <div class="home" @click="tpHomePage">
        <i class="bi bi-house-door"></i>
        <span>首頁</span>
      </div>
    </div>

    <div class="error-message">
      <span>很抱歉，找不到該內容。</span>
    </div>

    <div class="vinyl-container">
      <img src="@/assets/vinyl-top.svg" />
      <img src="@/assets/vinyl-bottom.svg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.not-found-page-screen {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, #8c1932, #ff6437 60%);
  color: white;
  font-weight: bold;

  .header {
    @include d-flex-a-center;
    padding: 20px 0 0 20px;

    .logo {
      @include d-flex-a-center;
      cursor: pointer;
      z-index: 999;

      img {
        width: 48px;
        height: 48px;
      }

      span {
        font-size: 26px;
        margin-bottom: 4px;
      }
    }

    .home {
      @include d-flex-a-center;
      cursor: pointer;
      margin-left: 64px;
      opacity: 0.75;
      z-index: 999;

      .bi-house-door {
        font-size: 24px;
      }

      span {
        font-size: 20px;
      }
    }
  }

  .error-message {
    position: absolute;
    top: 410px;
    left: 40px;
    right: 820px;
    margin: auto;
    font-size: 30px;
  }

  .vinyl-container {
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    overflow: hidden;

    img {
      width: 1200px;
      height: 1200px;
      position: absolute;
      right: -321px;
      top: -470px;
    }
  }
}
</style>
