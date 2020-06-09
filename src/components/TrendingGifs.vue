<template>
  <div class="trending">
    <div class="container">
      <div v-for="(gif, index) in gifs" :key="index" class="single-gif">
        <img :src="gif.images.downsized.url" alt="" />
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
