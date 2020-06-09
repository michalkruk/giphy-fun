<template>
  <div class="trending">
    <div class="container">
      <div v-for="(gif, index) in gifs" :key="index" class="single-gif">
        <img :src="gif.images.downsized.url" alt="" class="gif-small" />
        <div class="copy">
          <img src="@/assets/copy-icon.svg" alt="copy-icon" class="copy-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gifs: []
    };
  },
  created() {
    this.$http
      .get(
        `${process.env.VUE_APP_API}/trending?api_key=${process.env.VUE_APP_API_KEY}&limit=25&rating=G`
      )
      .then(res => {
        this.gifs = res.data.data;
      });
  }
};
</script>

<style lang="scss" scoped>
.trending {
  .container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .single-gif {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex: 1 1 33%;
    max-width: 400px;
    min-height: 400px;
    background-color: #6c7689;
    margin: 10px;
    border-radius: 30px;
    transition: all 0.3s;

    .gif-small {
      max-width: 370px;
      max-height: 370px;
      border-radius: 25px;
    }

    &:hover {
      background-color: #ffce47;
    }

    .copy {
      display: flex;
      position: absolute;
      justify-content: center;
      align-items: center;
      bottom: 20px;
      right: 20px;
      height: 50px;
      width: 50px;
      background-color: #171c26;
      border-radius: 50px;
      opacity: 0.1;
      transition: all 0.3s;
      cursor: pointer;

      .copy-icon {
        height: 30px;
        width: 30px;
      }

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
