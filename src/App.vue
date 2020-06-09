<template>
  <div id="app">
    <h1 class="selected">
      DAILY GIFS
    </h1>
    <TrendingGifs />
  </div>
</template>

<script>
import TrendingGifs from "./components/TrendingGifs.vue";

export default {
  name: "App",
  components: {
    TrendingGifs
  }
};
</script>

<style lang="scss">
body {
  background-color: #171c26;
}

.selected {
  position: relative;
  color: #ffce47;
  font-size: 100px;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 40%;
    width: 20%;
    height: 10px;
    background-color: #03c0b6;
    border-radius: 50px;
  }
}

#app {
  @import url("https://fonts.googleapis.com/css2?family=Barlow:wght@900&display=swap");
  font-family: "Barlow", sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
