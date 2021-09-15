<template>
  <footer>
    <div class="container">
      <div class="boxs">
        <div class="box">
          <h2>حسابات التواصل الاجتماعي</h2>
          <ul>
            <li><a href="https://fb.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://youtube.com">Youtube</a></li>
            <li>
              <a href="https://linkedin.com">LinkedIn</a>
            </li>
            <li>
              <a href="https://instagram.com">Instgram</a>
            </li>
          </ul>
        </div>
        <div class="box">
          <h2>الروابط</h2>
          <ul>
            <li><router-link to="/home">الرئيسيه</router-link></li>
            <li><router-link to="/menu">القائمه</router-link></li>
            <li><router-link to="/dashboard">لوحة التحكم</router-link></li>
            <li><router-link to="/contact">اتصل بنا</router-link></li>
            <li><router-link to="/about">من نحن</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
footer {
  background-color: rgb(20, 20, 20);
  width: 100%;
  margin-top: 50px;
  text-align: right;
  padding: 30px 0;
}
footer .boxs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
@media (max-width: 750px) {
  footer .boxs {
    display: block;
  }
}
footer .boxs .box ul {
  list-style: none;
}
footer .boxs .box h2 {
  color: #e77700;
}
footer .boxs .box ul li {
  display: block;
}
footer .boxs .box ul li a {
  color: #fff;
  text-decoration: none;
  transition: 0.3s linear;
  -webkit-transition: 0.3s linear;
  -o-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
}
footer .boxs .box ul li a:hover {
  color: #e77700;
}
</style>