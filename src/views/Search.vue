<template>
  <div class="home">
    <input
      type="text"
      v-model="searchPhrase"
      @input="searchGifs"
      placeholder="your phrase"
    />
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
import debounce from "lodash.debounce";

export default {
  data() {
    return {
      gifs: [],
      searchPhrase: ""
    };
  },
  created() {
    this.searchGifs();
  },
  methods: {
    searchGifs: debounce(function() {
      this.gifs = [];
      this.$http
        .get(
          `${process.env.VUE_APP_API}/search?api_key=${process.env.VUE_APP_API_KEY}&q=${this.searchPhrase}&limit=25&rating=G`
        )
        .then(res => {
          this.gifs = res.data.data;
        });
    }, 500),
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
        this.$notify({
          group: "copied",
          type: "success",
          text: "Succesfully copied link to clipboard!"
        });
      } catch (err) {
        console.error("No copy to clipboard support present.");
        throw err;
      }
    }
  }
};
</script>
