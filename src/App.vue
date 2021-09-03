<template>
  <div>
    <app-header></app-header>
    <landing-area></landing-area>
  </div>
</template>

<script>
import appHeader from "./components/Layout/Header.vue";
import landingArea from "./components/pages/HomePage.vue";

export default {
  components: {
    appHeader,
    landingArea,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;300;400;500;600&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "IBM Plex Sans Arabic", sans-serif;
}
body {
  height: 4000px;
}
.container {
  max-width: 1200px;
  min-width: 270px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  height: 100%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
