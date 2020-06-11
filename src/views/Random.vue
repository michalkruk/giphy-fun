<template>
  <div class="random">
    <div class="single-gif">
      <img
        v-if="gif.images"
        :src="gif.images.original.url"
        alt="random gif"
        class="gif-big"
      />
      <div @click="copyLink(gif.url)" class="copy">
        <img src="@/assets/copy-icon.svg" alt="copy-icon" class="copy-icon" />
      </div>
    </div>
    <button @click="rollGif" class="accent-btn">
      NEXT ONE
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gif: ""
    };
  },
  created() {
    this.rollGif();
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
    },
    rollGif() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/random?api_key=${process.env.VUE_APP_API_KEY}&tag=&rating=G`
        )
        .then(res => {
          this.gif = res.data.data;
        });
    }
  }
};
</script>
