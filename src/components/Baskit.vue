<template>
  <div class="baskit">
    <div class="title-bs">
      <h2>السله</h2>
    </div>
    <div class="card">
      <div class="details">
        <div>
          <h3 class="name">بيتزا حراقه</h3>
          <p class="dic">
            هذا نص وصفي تجريبي يمكن استبداله هذا نص وصفي تجريبي يمكن استبداله
            هذا نص وصفي تجريبي يمكن
          </p>
        </div>
        <img src="../assets/images/pizza-icon.svg" alt="order-iamge" />
      </div>
      <div class="actions">
        <button class="add">اتمام الطلب</button>
        <div class="price">$ <span>10</span></div>
        <div class="add-remove">
          <button class="add">+</button>
          <span>0</span>
          <button class="add dis">-</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="details">
        <div>
          <h3 class="name">بيتزا حراقه</h3>
          <p class="dic">
            هذا نص وصفي تجريبي يمكن استبداله هذا نص وصفي تجريبي يمكن استبداله ص
            وصفي تجريبي يمكن استبداله
          </p>
        </div>
        <img src="../assets/images/pizza-icon.svg" alt="order-iamge" />
      </div>
      <div class="actions">
        <button class="add">اتمام الطلب</button>
        <div class="price">$ <span>10</span></div>
        <div class="add-remove">
          <button class="add">+</button>
          <span>0</span>
          <button class="add dis">-</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {},
};
</script>
<style scoped>
.baskit {
  margin: 0 10px;
  max-width: 600px;
  width: 100%;
  min-width: 280px;
  position: fixed;
  top: 80px;
  right: -10px;
  background-color: #e77700;
  padding: 10px 30px;
}

.baskit .card {
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.103);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 10px auto;
  background-color: #fff;
}
.baskit .card img {
  width: 150px;
  margin: 10px;
}
.baskit .details {
  text-align: right;
  padding: 15px;
  width: 100%;
  font-size: 14px;
  display: flex;
}
.baskit .details h3,
.baskit .details .dic,
.baskit .details img {
  display: inline-block;
}
.baskit .actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.card .add {
  width: 130px;
  background-color: #e77700;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 12px 12px;
  font-weight: bold;
  transition: 0.3s linear;
  -webkit-transition: 0.3s linear;
  -o-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
  cursor: pointer;
}
.card .add:hover {
  background-color: transparent;
  border-color: #e77700;
  color: #000;
}
.baskit .add {
  padding: 4px 8px;
}
.baskit .add-remove {
  display: flex;
  justify-content: center;
  align-items: center;
}
.baskit .add-remove span {
  padding: 5px;
  display: inline-block;
}
.baskit .add-remove .add.dis {
  background-color: transparent;
  border-color: #e77700;
  color: #000;
}
.baskit .add-remove .add.dis:hover {
  background-color: #e77700;
  border-color: #fff;
  color: #fff;
}
.baskit .add-remove .add {
  width: auto;
}
.baskit > .add {
  display: block;
}
@media (max-width: 450px) {
  .baskit {
    padding: 5px;
  }
  .baskit .actions {
    margin-top: 20px;
  }
  .baskit .card img {
    width: 50px;
  }
}
</style>