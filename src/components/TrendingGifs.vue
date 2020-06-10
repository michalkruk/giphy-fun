<template>
  <div class="trending">
    <div class="container">
      <div v-for="(gif, index) in gifs" :key="index" class="single-gif">
        <img :src="gif.images.downsized.url" alt="" class="gif-small" />
        <div @click="copyLink(gif.url)" class="copy">
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
  },
  methods: {
    copyLink(value) {
      try {
        let ghostExists =
          document.querySelector(".app-ghost-clipboard") !== null;
        let ghostInput = !ghostExists
          ? document.createElement("input")
          : document.querySelector(".app-ghost-clipboard");

        if (!ghostExists) {
          ghostInput.className = "app-ghost-clipboard";
          ghostInput.setAttribute("type", "text");
          document.documentElement.appendChild(ghostInput);
        }

        ghostInput.value = value;
        ghostInput.select();

        document.execCommand("copy");
        ghostInput.blur();
      } catch (err) {
        console.error("No copy to clipboard support present.");
        throw err;
      }
    }
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

    .app-ghost-clipboard {
      display: none;
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
      opacity: 0.2;
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
