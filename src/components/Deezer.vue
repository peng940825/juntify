<template>
  <div class="animation-container">
    <div id="b1" class="bar"></div>
    <div id="b2" class="bar"></div>
    <div id="b3" class="bar"></div>
  </div>
</template>

<style lang="scss" scoped>
#b1 {
  left: 0;
  transform: translateY(40%);
  animation: play-bar-1 0.7s infinite steps(30, start);
}

#b2 {
  left: 10px;
  transform: translateY(90%);
  animation: play-bar-2 0.7s infinite steps(30, start);
}

#b3 {
  left: 5px;
  transform: translateY(0);
  animation: play-bar-3 0.7s infinite steps(30, start);
}

.animation-container {
  width: 14px;
  height: 16px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;

  .bar {
    width: 3px;
    height: 100%;
    position: absolute;
    background-color: #43a047;
  }
}

@keyframes play-bar-1 {
  0% {
    transform: translateY(40%);
  }

  25% {
    transform: translateY(90%);
  }

  50% {
    transform: translateY(50%);
  }

  75% {
    transform: translateY(10%);
  }

  100% {
    transform: translateY(40%);
  }
}

@keyframes play-bar-2 {
  0% {
    transform: translateY(90%);
  }

  25% {
    transform: translateY(40%);
  }

  50% {
    transform: translateY(10%);
  }

  75% {
    transform: translateY(40%);
  }

  100% {
    transform: translateY(90%);
  }
}

@keyframes play-bar-3 {
  0% {
    transform: translateY(0%);
  }

  25% {
    transform: translateY(40%);
  }

  50% {
    transform: translateY(90%);
  }

  75% {
    transform: translateY(40%);
  }

  100% {
    transform: translateY(0%);
  }
}
</style>
