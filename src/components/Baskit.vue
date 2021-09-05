<template>
  <div :class="cartHasData ? 'baskit hasData' : 'baskit'">
    <div class="contain">
      <div class="title-bs">
        <h2>السله</h2>
      </div>
      <div class="card" v-for="item in cart" :key="item.name">
        <div class="deleter" :id="item.id" @click="deleteItem(item.id)">+</div>
        <div class="details">
          <img src="../assets/images/pizza-icon.svg" alt="order-iamge" />
          <div class="center">
            <h3>{{ item.name }}</h3>
            <p>
              {{ item.description }}
            </p>
          </div>
          <p>
            الحجم :<span> {{ item.size }}</span>
          </p>
        </div>
        <div class="actions">
          <div class="price">
            <span>السعر: {{ item.price * item.qyt }} جنيه </span>
          </div>
          <div class="add-remove">
            <button class="add" @click="item.qyt + 1">+</button>
            <span>{{ item.qyt }}</span>
            <button class="add dis" @click="item.qyt - 1">-</button>
            :العدد
          </div>
        </div>
      </div>
      <div class="done" v-if="cart.length">
        <button class="add">اتمام عملية الشراء</button>
        <p>
          السعر النهائي: <span>{{ getPrices() }}</span> جنيه
        </p>
      </div>
      <div class="no-data" v-else>
        يرجي اضافة طلبات من القائمه، <a href="/menu">الذهاب الي القائمه؟</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cart: [],
      cartHight: true,
    };
  },
  methods: {
    deleteItem(id) {
      const newCart = this.cart.filter((item) => item.id !== id);
      this.cart = newCart;
    },
    getCartData() {
      this.cart = this.$store.state.cart;
      return this.cart;
    },
    getPrices() {
      let price = 0;
      for (let i = 0; i < this.cart.length; i++) {
        let now = this.cart[i].qyt * this.cart[i].price;
        price += now;
      }
      return price;
    },
    cartHasData() {
      if (this.$store.state.cart.length >= 2) {
        this.cartHight = false;
      } else {
        this.cartHight = true;
      }
      return this.cartHight;
    },
  },
  created() {
    this.cart = this.$store.state.cart;
  },
};
</script>
<style scoped>
.baskit {
  margin: 0 10px;
  max-width: 600px;
  width: 100%;
  min-width: 280px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e77700;
  padding: 10px 30px;
  overflow-y: auto;
  height: auto;
}
.baskit .card,
.baskit .no-data {
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.103);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 10px auto;
  background-color: #fff;
  position: relative;
}
.baskit .card img {
  width: 100px;
}
.baskit .details {
  text-align: right;
  padding: 15px;
  width: 100%;
  font-size: 14px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
}
.baskit .details .center {
  text-align: right;
  width: 60%;
  margin-right: 10px;
}
.baskit .details p:last-of-type {
  font-weight: bold;
}
.baskit .details p:last-of-type span {
  color: #e77700;
}
.baskit .actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.baskit .price {
  border: 2px solid transparent;
  background-color: #e77700;
  padding: 4px 10px;
  color: #fff;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
  transition: 0.3s linear;
  -webkit-transition: 0.3s linear;
  -o-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
}
.baskit .price:hover {
  border-color: #e77700;
  background-color: transparent;
  color: #000;
}
.baskit .add,
.baskit .no-data a {
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
.baskit .no-data a {
  width: auto;
  padding: 8px 12px;
  margin-top: 10px;
  text-decoration: none;
}
.baskit .add:hover,
.baskit .no-data a:hover {
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
.baskit .done {
  width: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.baskit .done .add:hover {
  background-color: #fff;
  color: #e77700;
  border-color: #e77700;
}
.baskit .deleter {
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