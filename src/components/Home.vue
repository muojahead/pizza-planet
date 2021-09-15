<template>
  <div>
    <div class="landing-area">
      <div class="container">
        <div class="overlay">
          <div class="box">
            <h2>مرحبا بك في بيتزا بلانيت</h2>
            <h3>جعان؟</h3>
            <button class="order-btn">
              <router-link to="/menu">اطلب دلوقتي</router-link>
            </button>
          </div>
          <div class="box">
            <img src="../assets/images/pizaa.svg" alt="Pizaa" />
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <section class="container boxs">
        <div class="box">
          <h4>نحن نغرد</h4>
          <p>
            انضم إلينا يوم 6 أكتوبر لتناول العشاء الحصري مع الشيف الضيف بالتعاون
            مع الشيف محمد مصطفي والشيف خالد منذ 11 ساعة عبر تطبيق تويتر
          </p>
          <a href="https://t.co/35WVpjH5np" target="_blank"
            >https://t.co/35WVpjH5np</a
          >
          <h4>بسكويت الشوكولاتة الداكنة من بيل كافيه</h4>
          <p>
            هذه هي الشوكولاتة والشوكولاتة والمزيد من كعكة الشوكولاتة التي نقدمها
            في Bel. فهي فوضوية ، ولزجة ، ومرّة ، وحلوة ، ولذيذة.
          </p>
        </div>
        <div class="box">
          <h2>مرحبا بك في مطعم بيتزا بلانت</h2>
          <p>
            مرحبا بكم في مطعم بيتزابلانت قوائمنا الجديدة ، التي ابتكرها الشيف
            محمد مصطفي وفريق الطهي الخاص به ، تعرض المأكولات المعاصرة ذات
            المكونات الراسخة والمتأصلة في الكلاسيكيات ؛ يتم تقديم النكهات
            الجريئة والمشرقة في أطباق مُعدة بمهارة تعكس الحنين إلى الماضي مع
            لمسة عصرية ومحلية. قائمة المشروبات الخاصة بنا الحائزة على جوائز
            عميقة وعالمية ، وتم اختيارها بعناية لتقديم القيمة والجودة - دعنا
            نوجهك إلى مفضلاتك أو نساعدك على اكتشاف أصناف جديدة.
          </p>
          <p>
            مفتوح لتناول طعام الغداء والعشاء ، مع بار كوكتيل وساعة سعيدة بينهما
            وغرفة الطعام الخاصة بنا المطلة على المعرض الفني ، يقدم بتزابلانت
            مجموعة من التجارب التي تناسب مزاجك وتفضيلاتك الفردية.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.landing-area {
  background-image: url("../assets/images/dough.jpg");
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
/* Start Content */
.content {
  margin: 50px auto;
}
.content .boxs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  text-align: right;
}
.content .boxs .box h2,
.content .boxs .box h4 {
  margin: 10px auto 20px auto;
}
.content .boxs .box p {
  margin-top: 10px;
}
@media (max-width: 750px) {
  .content .boxs {
    display: block;
  }
}
</style>
