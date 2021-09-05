<template>
  <header :class="onScrollEv ? 'scrolling' : ''">
    <div class="container">
      <div class="header-box">
        <div class="header_logo">
          <h1 href="/">PIZZA PLANET</h1>
        </div>
        <div @click="openMenu" :class="'humborger ' + actClass">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav :class="actClass">
          <div class="closer">
            <i class="fas fa-times"></i>
          </div>
          <div class="overlay" @click="closeMenu"></div>
          <img src="../assets/images/pizza-icon.svg" alt="pizza icon" />
          <ul>
            <li><a href="/">الرئيسيه</a></li>
            <li><a href="/">القائمه</a></li>
            <li><a href="/contact">اتصل بنا</a></li>
            <li><a href="/about">من نحن؟ </a></li>
          </ul>
        </nav>
        <div class="cart" @click="openCart">
          <img src="../assets/images/cart.svg" alt="Cart" />
          <span v-if="baskitItemsCount">{{ baskitItemsCount }}</span>
        </div>
      </div>
      <baskit v-if="baskitOn"></baskit>
    </div>
  </header>
</template>
<script>
import baskit from "./Baskit.vue";
export default {
  name: "appHeader",
  components: {
    baskit,
  },
  data() {
    return {
      scrollValue: false,
      actClass: "",
      baskitOn: false,
      baskitItems: "",
    };
  },
  methods: {
    openMenu() {
      if (this.actClass == "") {
        this.actClass = "active";
      } else {
        this.actClass = "";
      }
    },
    closeMenu() {
      this.actClass = "";
    },
    openCart() {
      this.baskitOn = !this.baskitOn;
    },
  },

  computed: {
    onScrollEv() {
      window.onscroll = () => {
        if (window.scrollY >= 50) {
          this.scrollValue = true;
        } else {
          this.scrollValue = false;
        }
      };
      return this.scrollValue;
    },
    baskitItemsCount() {
      if (this.$store.state.cart.length == 0) {
        return;
      } else {
        return this.$store.state.cart.length;
      }
    },
  },
};
</script>

<style scoped>
header {
  transition: 0.3s linear;
  -webkit-transition: 0.3s linear;
  -o-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
  z-index: 1000;
  background-color: transparent;
  position: fixed;
  top: 0;
  width: 100%;
}
header.scrolling {
  box-shadow: 0 0px 25px #0000002a;
  background-color: #fff;
}
h1 {
  font-size: 1.3em;
}
.header-box {
  display: flex;
  height: 80px;
  align-items: center;
}
.header_logo {
  position: relative;
  display: flex;
  width: 50%;
  justify-content: flex-start;
  align-items: center;
}
.header_logo h1 {
  font-size: 30px;
  position: relative;
  padding: 4px;
  transition: 0.3s linear;
  -webkit-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
  -o-transition: 0.3s linear;
}
.header_logo h1:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f77700;
  border: 3px solid #8a0000;
  z-index: -1;
  transition: 0.3s linear;
  -webkit-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
  -o-transition: 0.3s linear;
}
.header_logo h1:hover:before {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  left: 50%;
}
.header_logo h1:hover {
  color: #fff;
}
header .humborger {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  display: none;
  position: relative;
  width: 30px;
}
header .humborger span {
  height: 4px;
  border-radius: 5px;
  width: 100%;
  background-color: #e77700;
  margin: 3px 0;
  transition: 0.3s linear;
  -webkit-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
  -o-transition: 0.3s linear;
}
header .humborger.active span {
  position: absolute;
  top: 50%;
  opacity: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -moztransform: translate(-50%, -50%);
}
header .humborger.active span:first-of-type {
  transform: rotate(40deg);
  -webkit-transform: rotate(40deg);
  -o-transform: rotate(40deg);
  -moz-transform: rotate(40deg);
  left: 0;
  opacity: 1;
}
header .humborger.active span:last-of-type {
  left: 0;
  transform: rotate(125deg);
  -webkit-transform: rotate(125deg);
  opacity: 1;

  -o-transform: rotate(125deg);
  -moz-transform: rotate(125deg);
}
header nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
}
header nav .overlay {
  position: fixed;
  top: 0;
  z-index: 1189;
  left: 0;
  height: 0%;
  width: calc(100% - 250px);
  background-color: rgba(0, 0, 0, 0.596);
  opacity: 0;
  transition: opacity 0.3s linear;
}
header nav.active .overlay {
  height: 100%;
  opacity: 1;
}
header nav img {
  display: none;
}
header nav ul {
  list-style: none;
}

header nav ul li {
  display: inline-block;
  padding: 10px;
  font-size: 20px;
  position: relative;
}
header .cart {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 5px;
  position: relative;
}
header .cart img {
  display: inline-block;
  width: 30px;
  cursor: pointer;
}
header .cart span {
  position: absolute;
  top: 19px;
  right: -8px;
  background-color: #8a0000;
  color: #fff;
  border-radius: 50%;
  min-height: 20px;
  min-width: 25px;
  height: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  user-select: none;
  cursor: pointer;
}
header nav ul li a {
  text-decoration: none;
  color: #fff;
  transition: 0.3s linear;
  -webkit-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
  -o-transition: 0.3s linear;
  border-bottom: 2px solid transparent;
}
header.scrolling nav ul li a {
  color: #000;
}
header nav ul li a:hover,
header nav ul li a.active {
  border-bottom-color: #f77700;
}
@media (max-width: 644px) {
  header .header_logo {
    width: 90%;
  }
  header .humborger {
    display: flex;
  }
  header .header-box nav {
    position: fixed;
    width: 250px;
    height: 100vh;
    right: -100%;
    z-index: 1200;
    top: 0;
    background-color: #fff;
    display: block;
    text-align: right;
    transition: 0.3s linear;
    -webkit-transition: 0.3s linear;
    -o-transition: 0.3s linear;
    -moz-transition: 0.3s linear;
  }
  header .header-box nav.active {
    right: 0;
  }
  header nav ul li {
    display: block;
  }
  header nav ul {
    padding: 15px 30px;

    border-top: 2px solid #000;
  }
  header nav img {
    padding: 15px 30px;
    display: block;
    width: 100%;
  }
  header nav ul li a:hover,
  header nav ul li a.active {
    border-bottom-color: transparent;
  }
  header nav ul li a {
    color: #000;
  }
}
@media (max-width: 350px) {
  header .header-box nav {
    width: 200px;
  }
  header nav .overlay {
    width: calc(100% - 200px);
  }
}
</style>