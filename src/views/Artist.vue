<script>
import Table from '@/components/Table.vue';

export default {
  components: { Table },
};
</script>

<template>
  <div class="playlist">
    <div class="banner">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/IU%2FCelebrity.jpg?alt=media&token=9973b39e-12f2-467d-8877-f4c5c73e7927"
      />
      <span>IU</span>
    </div>
    <div class="banner-gradient">
      <Table />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.playlist {
  width: calc(100% - 240px);
  height: 3000px;
  background-color: rgb(18, 18, 18);
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
      ),
      #00bcd4;

    img {
      width: 232px;
      height: 232px;
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
      color: rgb(255, 255, 255);
    }
  }

  .banner-gradient {
    height: 240px;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 0.6)),
        to(rgb(18, 18, 18))
      ),
      #00bcd4;
  }
}
</style>
