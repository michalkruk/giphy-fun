<template>
  <div id="app">
    <div id="nav">
      <router-link to="/random">
        <h3>
          RANDOM
        </h3>
      </router-link>
      <router-link to="/">
        <h1 class="selected">
          DAILY GIFS
        </h1>
      </router-link>
      <router-link to="/search">
        <h3>
          SEARCH
        </h3>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/styles/_main.scss";
</style>
