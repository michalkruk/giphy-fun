<template>
  <div id="app">
    <notifications
      group="copied"
      position="top center"
      classes="notification"
    />
    <div id="nav">
      <router-link class="link random" to="/random">
        <h3>
          RANDOM
        </h3>
      </router-link>
      <router-link class="link logo" to="/">
        <h1 class="logo">
          DAILY GIFS
        </h1>
      </router-link>
      <router-link class="link search" to="/search">
        <h3>
          SEARCH
        </h3>
      </router-link>
    </div>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
@import "@/styles/_main.scss";
</style>
