<template>
  <div class="landing-area">
    <div class="container">
      <div class="overlay">
        <div class="box">
          <h2>مرحبا بك في بيتزا بلانت</h2>
          <h3>جعان؟</h3>
          <button class="order-btn"><a href="/">اطلب دلوقتي</a></button>
        </div>
        <div class="box">
          <img src="../../assets/images/pizaa.svg" alt="Pizaa" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "landingArea",
};
</script>

<style scoped>
.landing-area {
  background-image: url("../../assets/images/dough.jpg");
  background-size: cover;
  height: 100vh;
  width: 100%;
}
.landing-area .overlay {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.landing-area .overlay .box {
  padding: 30px;
  color: #fff;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
@media (max-width: 992px) {
  .landing-area .overlay {
    flex-direction: column;
    padding: 120px 0;
  }
  .landing-area .overlay .box {
    width: 100%;
  }
}
.landing-area .overlay .box img {
  width: 100%;
  max-width: 600px;
}
.landing-area .overlay .box h2 {
  font-size: 40px;
  margin: 10px 0;
}

.landing-area .overlay .box h3 {
  font-size: 35px;
}
.landing-area .overlay .box h3,
.landing-area .overlay .box button {
  margin: 5px 0;
}
.landing-area .overlay .box button {
  background-color: #e77700;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 10px;
  transition: 0.3s linear;
  -webkit-transition: 0.3s linear;
  -o-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
}
.landing-area .overlay .box button a {
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  transition: 0.3s linear;
  -webkit-transition: 0.3s linear;
  -o-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
}
.landing-area .overlay .box button:hover {
  background-color: transparent;
  border-color: #e77700;
}
.landing-area .overlay .box button:hover a {
  color: #000;
}
@media (max-width: 522px) {
  .landing-area .overlay {
    flex-direction: row;
  }
  .landing-area .overlay .box h2 {
    font-size: 30px;
  }
  .landing-area .overlay .box:last-child {
    display: none;
  }
  .landing-area .overlay .box h3 {
    font-size: 25px;
  }
}
</style>