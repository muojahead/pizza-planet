<template>
  <div>
    <app-header></app-header>
    <landing-area></landing-area>
    <menu-list></menu-list>
    <admin-page></admin-page>
  </div>
</template>

<script>
import appHeader from "./components/Header.vue";
import menuList from "./components/Menu.vue";
import landingArea from "./components/LandingArea.vue";
import adminPage from "./components/Admin.vue";
export default {
  components: {
    appHeader,
    landingArea,
    menuList,
    adminPage,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;300;400;500;600&display=swap");
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #00000049;
}
::-webkit-scrollbar-thumb {
  background: #e77700;
}
::-webkit-scrollbar-thumb:hover {
  background: #e77700;
}
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"]::-moz-inner-spin-button {
  -moz-appearance: none;
}
input[type="number"]::-o-inner-spin-button {
  -o-appearance: none;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "IBM Plex Sans Arabic", sans-serif;
  color: #2c3e50;
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
.btn,
.btn-rev {
  background-color: #e77700;
  color: #fff;
  padding: 4px 8px;
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.3s linear;
  margin: 3px;
  display: inline-block;
}
.btn-rev {
  background-color: #fff;
  color: #e77700;
  border-color: #e77700;
}
.btn-rev:hover {
  color: #fff;
  background-color: #e77700;
  border-color: #fff;
}
.btn:hover {
  background-color: #fff;
  color: #e77700;
  border-color: #e77700;
}
.deleter {
  position: absolute;
  top: -5px;
  left: 10px;
  user-select: none;
  cursor: pointer;
  font-size: 40px;
  transform: rotate(47deg);
  -webkit-transform: rotate(47deg);
  -o-transform: rotate(47deg);
  -moz-transform: rotate(47deg);
}
</style>
