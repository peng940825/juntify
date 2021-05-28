<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const data = computed(() => store.getters.data);

    return { data };
  },
};
</script>

<template>
  <div class="home text-light">
    <div class="row">
      <div class="col-xxl-6" v-for="item in data" :key="item.theme">
        <div class="fs-4 mb-3">{{ item.theme }}</div>
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6" v-for="i in item.artists" :key="i.artist">
            <div class="j-card p-3 mb-4">
              <img class="w-100 mb-3" :src="i.list[0].photo" />
              <div class="mb-3">{{ i.artist }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: calc(100% - 240px);
  height: 3000px;
  background-color: rgb(18, 18, 18);
  margin-left: 240px;
  padding: 32px;

  .j-card {
    border-radius: 4px;
    background-color: rgb(24, 24, 24);
    transition: 0.25s;

    &:hover {
      cursor: pointer;
      background-color: rgb(38, 38, 38);
    }
  }
}
</style>
