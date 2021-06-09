<template>
  <div class="image-mosaic">
    <span>本週新 Jun 榜歌手</span>
    <div
      class="card card-tall card-wide"
      style="background-image: url('https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FMAMAMOO.jpg?alt=media&token=f44d1046-fa4d-4317-9e14-05e32014524e')"
    ></div>
    <div
      class="card card-tall"
      style="background-image: url('https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2F%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%AB.jpg?alt=media&token=d6f98300-0e7a-4548-91f9-5e6387db79f5')"
    ></div>
    <div
      class="card"
      style="background-image: url('https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2F%E5%91%A8%E8%88%88%E5%93%B2.jpg?alt=media&token=44812c79-c807-4fad-8966-5b30cbc2b3b0')"
    ></div>
    <div
      class="card"
      style="background-image: url('https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2F%E9%AB%98%E7%88%BE%E5%AE%A3.jpg?alt=media&token=8e90f800-0292-450c-8309-2541132902b8')"
    ></div>
    <div
      class="card"
      style="background-image: url('https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FGD.png?alt=media&token=5e3bdb44-c4d6-4328-b6c6-91cccd2427c6')"
    ></div>
    <div
      class="card"
      style="background-image: url('https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FLiSA.jpg?alt=media&token=80a2a577-02f6-4d0a-aa3e-6a10f4eb54d2')"
    ></div>
    <div
      class="card card-wide"
      style="background-image: url('https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FONE%20OK%20ROCK.jpg?alt=media&token=ba1a9c19-6d97-4dda-9bc8-bc842524c85b')"
    ></div>
    <div
      class="card card-wide"
      style="background-image: url('https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FSISTAR.png?alt=media&token=612006f3-a429-494e-a190-3ac152556410')"
    ></div>
    <div
      class="card"
      style="background-image: url('https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2F%E9%98%BF%E5%A4%9C.jpg?alt=media&token=43a4b3e0-9744-48e3-b54b-fda71bd82e6d')"
    ></div>
    <div
      class="card card-tall"
      style="background-image: url('https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FCamila%20Cabello.jpg?alt=media&token=6320f6ed-698f-4e58-9cd8-ef71084d2b7f')"
    ></div>
    <div
      class="card card-tall card-wide"
      style="background-image: url('https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FBLACKPINK.jpg?alt=media&token=293739a7-f094-4f20-9ac4-0d8f746e361e')"
    ></div>
    <div
      class="card"
      style="background-image: url('https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FDaddy%20Yankee.jpg?alt=media&token=c3b1c8d7-2b92-4a15-bfc9-9041d90de96b')"
    ></div>
    <div
      class="card"
      style="background-image: url('https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FMachine%20Gun%20Kelly.jpg?alt=media&token=79c6d1c3-ac7c-4c3d-b2d7-69f505ad6924')"
    ></div>
    <div
      class="card"
      style="background-image: url('https://firebasestorage.googleapis.com/v0/b/juntify-fd26d.appspot.com/o/%E7%85%A7%E7%89%87%E7%89%86%2FJulia.jpg?alt=media&token=a6f5c812-f66e-4ed0-a6b6-0535f0a3b9a5')"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.image-mosaic {
  display: grid;
  gap: 1rem;
  grid-auto-rows: 240px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin: 80px auto;
  position: relative;

  span {
    position: absolute;
    top: -48px;
    left: 0;
    font-size: 24px;
    font-family: 'Permanent Marker', 'Noto Sans TC', cursive;
    z-index: 9;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #353535;
    font-size: 3rem;
    color: #fff;
    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    transition: all 0.5s;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;

    &:hover {
      box-shadow: 0 0 7px 3px rgba(#fff, 0.5);
    }
  }
}

@media screen and (min-width: 960px) {
  .card-tall {
    grid-row: span 2 / auto;
  }

  .card-wide {
    grid-column: span 2 / auto;
  }
}
</style>
