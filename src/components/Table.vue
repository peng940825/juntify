<script>
export default {};
</script>

<template>
  <div class="jun-table">
    <div class="jun-table-header">
      <span class="order">#</span>
      <span class="title">標題</span>
      <span class="album">專輯</span>
      <span class="time">時間</span>
    </div>
    <div class="jun-table-row" v-for="i in 5" :key="i">
      <span class="order">1</span>
      <div class="title">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/IU%2FCelebrity.jpg?alt=media&token=9973b39e-12f2-467d-8877-f4c5c73e7927"
        />
        <div class="title-content">
          <span>你曾是少年</span>
          <span>S.H.E</span>
        </div>
      </div>
      <span class="album">你曾是少年</span>
      <span class="time">3:02</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.jun-table {
  color: #bdbdbd;
  padding: 64px 32px 0 32px;

  .jun-table-header {
    @include d-flex;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(#bdbdbd, 0.25);

    .order {
      text-align: center;
    }

    .title,
    .album,
    .time {
      font-size: 12px;
      margin-top: 2px;
    }
  }

  .jun-table-row {
    @include d-flex;
    font-size: 14px;
    padding: 16px 0;

    &:hover {
      border-radius: 4px;
      background-color: rgba(#bdbdbd, 0.25);
    }

    .order,
    .album,
    .time {
      @include d-flex-a-center-j-center;
    }

    .title {
      @include d-flex;

      img {
        width: 40px;
        height: 40px;
      }

      .title-content {
        @include d-flex-j-center;
        @include f-column;
        margin-left: 16px;
      }
    }
  }

  .jun-table-header,
  .jun-table-row {
    min-width: 576px;
  }

  .order {
    width: 48px;
    font-weight: bold;
  }

  .title {
    width: 40%;
  }

  .time {
    margin-left: auto;
    margin-right: 64px;
  }
}

@media (max-width: 861px) {
  .album {
    display: none !important;
  }
}
</style>
