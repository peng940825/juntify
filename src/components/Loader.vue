<template>
  <div class="loader">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  background-color: rgba(#000, 0.75);

  div {
    width: 16px;
    height: 16px;
    margin: 3rem 0.2rem;
    background: #43a047;
    border-radius: 50%;
    animation: loader 0.6s infinite alternate;
  }

  div:nth-child(2) {
    animation-delay: 0.2s;
  }

  div:nth-child(3) {
    animation-delay: 0.4s;
  }
}

@keyframes loader {
  to {
    opacity: 0.1;
    transform: translate3d(0, -16px, 0);
  }
}
</style>
