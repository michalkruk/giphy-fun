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
const API = "https://api.giphy.com/v1/gifs";
const key = "GCuYgkFxuVjYpSI7CdPm8pf63SKU7sfb";

export default {
  data() {
    return {
      gifs: []
    };
  },
  created() {
    this.$http
      .get(`${API}/trending?api_key=${key}&limit=25&rating=G`)
      .then(res => {
        this.gifs = res.data.data;
      });
  }
};
</script>
