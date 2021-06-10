<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref, reactive, onBeforeMount } from '@vue/runtime-core';

import emailjs from 'emailjs-com';

export default {
  setup() {
    const store = useStore();

    const router = useRouter();

    const time = ref(5);

    const sent = ref(false);

    const data = reactive({ userName: '', userEmail: '' });

    const verStatus = reactive({ userName: true, userEmail: true });

    const verUserName = () =>
      (verStatus.userName = /^[0-9a-zA-Z\u4e00-\u9fa5 ]{1,20}$/.test(data.userName));

    const verUserEmail = () =>
      (verStatus.userEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
        data.userEmail
      ));

    const submit = () => {
      if (data.userName === '') verStatus.userName = false;
      if (data.userEmail === '') verStatus.userEmail = false;
      if (verStatus.userName && verStatus.userEmail) {
        store.commit('handleImageLoading', true);
        emailjs
          .send('service_pjnw3ps', 'template_zsud6sd', data, 'user_m7kEbIM1U8HRX3MaYTcIk')
          .then(() => {
            sent.value = true;
            const interval = setInterval(() => {
              time.value--;
              if (time.value === 0) {
                clearInterval(interval);
                router.push({ path: '/' });
              }
            }, 1000);
          })
          .catch(() => {
            alert('可能是寄信的數量超出免費額度了QQ');
          })
          .finally(() => {
            store.commit('handleImageLoading', false);
          });
      }
    };

    onBeforeMount(() => (document.title = 'Juntify - 訂閱'));

    return { time, sent, data, verStatus, verUserName, verUserEmail, submit };
  },
};
</script>

<template>
  <div class="screen">
    <span class="text">免費訂閱享有更多內容</span>
    <div class="divider"></div>
    <form class="form">
      <input
        type="text"
        :class="{ 'ver-fail': !verStatus.userName }"
        v-if="!sent"
        v-model.trim.lazy="data.userName"
        @blur="verUserName"
        maxlength="20"
        placeholder="輸入你的姓名或暱稱"
      />
      <input
        type="email"
        :class="{ 'ver-fail': !verStatus.userEmail }"
        v-if="!sent"
        v-model.trim.lazy="data.userEmail"
        @blur="verUserEmail"
        maxlength="100"
        placeholder="輸入你的郵件地址"
      />
      <button type="button" v-if="!sent" @click="submit">訂閱</button>

      <div class="sent-container" v-if="sent">
        <i class="bi bi-check-circle"></i>
        <span class="success-text">訂閱成功！請至信箱收取信件。</span>
        <span class="jump-text">畫面將在 {{ time }} 秒後跳轉至首頁</span>
      </div>
    </form>
    <router-link to="/">回首頁</router-link>
  </div>
</template>

<style lang="scss" scoped>
.screen {
  @include d-flex-a-center-j-center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, #1b5e20, #4caf50 75%);

  .text {
    font-size: 20px;
    font-weight: bold;
  }

  .divider {
    width: 240px;
    margin: 8px 0 32px 0;
    border-bottom: 1px solid #424242;
  }

  .form {
    max-width: 360px;
    padding: 46px;
    background-color: #fff;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.25), 0 6px 6px 0 rgba(0, 0, 0, 0.25);

    input {
      width: 100%;
      font-size: 14px;
      border: 3px solid transparent;
      outline: 0;
      padding: 16px;
      margin-bottom: 16px;
      background-color: #f2f2f2;
    }

    button {
      width: 100%;
      font-size: 14px;
      border: 0;
      padding: 16px;
      color: #fff;
      background-color: #4caf50;
      transition: 0.25s;

      &:hover {
        background-color: #43a047;
      }
    }

    .sent-container {
      @include d-flex-a-center-j-center;
      flex-direction: column;

      .bi-check-circle {
        color: #4caf50;
        font-size: 32px;
        margin-bottom: 16px;
      }

      .success-text {
        margin-bottom: 16px;
      }

      .jump-text {
        color: #9e9e9e;
        font-size: 12px;
      }
    }
  }

  a {
    color: white;
    margin: 32px 0 120px 0;
  }
}

.ver-fail {
  border: 3px solid red !important;
}
</style>
