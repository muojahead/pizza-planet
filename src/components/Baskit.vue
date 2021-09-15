<template>
  <div class="overlay">
    <div :class="cartHasData() ? 'baskit hasData' : 'baskit'">
      <div class="deleter" @click="closeBaskit">+</div>
      <div class="title-bs">
        <h2>السله</h2>
      </div>
      <div class="contain">
        <div class="card" v-for="item in cart" :key="item.name">
          <div class="deleter" :id="item.id" @click="deleteItem(item.id)">
            <img src="../assets/images/delete.svg" alt="" />
          </div>
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
              <button class="add" @click="item.qyt++">+</button>
              <span>{{ item.qyt }}</span>
              <button
                class="add dis"
                @click="item.qyt <= 1 ? deleteItem(item.id) : item.qyt--"
              >
                -
              </button>
              :العدد
            </div>
          </div>
        </div>
        <div class="done" v-if="cart.length">
          <button class="add" @click="checkout">اتمام عملية الشراء</button>
          <p>
            السعر النهائي: <span>{{ getPrices() }}</span> جنيه
          </p>
        </div>
        <div class="no-data" v-else>
          يرجي اضافة طلبات من القائمه<router-link
            to="/menu"
            @click="closeBaskit"
            >الذهاب الي القائمه؟</router-link
          >
        </div>
      </div>
      <div class="dialog" v-if="deleteItemAlert">
        <div class="box">
          <div class="msg">هل تريد حذف الطلب؟</div>
          <div class="actions">
            <button class="add" @click="deleteItemOkay">نعم</button>
            <button class="add dis" @click="deleteItemNot">لا</button>
          </div>
        </div>
      </div>
      <div class="dialog" v-if="checkoutDone">
        <div class="box">
          <div class="msg">
            تم استلام طلبك شكرا لك لأستخدامك موقعنا، ستصلك مكالمه تأكيديه برجاء
            ابقاء الهاتف مفتوحا وقريبا منك
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cart: [],
      cartHight: false,
      deleteItemAlert: false,
      deleteOkay: false,
      checkoutDone: false,
    };
  },
  methods: {
    deleteItem(id) {
      const userDeleted = this.cart.filter((item) => item.id !== id);
      this.deleteItemAlert = true;
      if (this.deleteOkay) {
        this.$store.state.cart.splice(userDeleted, 1);
        this.deleteOkay = false;
        return;
      } else {
        return false;
      }
    },
    checkoutِAlert() {
      this.checkoutDone = true;
      setTimeout(() => {
        this.checkoutDone = false;
      }, 7000);
    },
    closeCartFunc() {
      this.closeCart = !this.closeCart;
    },
    deleteItemOkay() {
      this.deleteOkay = true;
      this.deleteItem();
      this.deleteItemAlert = false;
    },
    deleteItemNot() {
      this.deleteOkay = false;
      this.deleteItem();
      this.deleteItemAlert = false;
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
    closeBaskit() {
      this.$emit("close-cart");
    },
    cartHasData() {
      if (this.cart.length >= 2) {
        this.cartHight = true;
      } else {
        this.cartHight = false;
      }
      return this.cartHight;
    },
    checkout() {
      console.log(this.cart);
      const order = {
        id: Math.floor(Math.random() * 50000),
        details: this.cart,
      };
      this.$store.state.orders.push(order);
      this.checkoutِAlert();
    },
  },
  created() {
    this.cart = this.$store.state.cart;
  },
  watch: {
    $route() {
      this.cart = this.$store.state.cart;
    },
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
  left: 48%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 10px 30px;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.473);
  border-radius: 10px;
}
.baskit .contain {
  overflow-y: auto;
  height: auto;
}
.baskit.hasData .contain {
  height: 70vh;
}
.baskit .contain .card .deleter {
  transform: rotate(0);
  -webkit-transform: rotate(0);
  -moz-transform: rotate(0);
  -o-transform: rotate(0);
}
.baskit .contain .card .deleter img {
  width: 25px !important;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.219);
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
  border: 2px solid #e77700;
  position: relative;
  margin-right: 3px;
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
  color: #fff !important;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
  transition: 0.3s linear;
  -webkit-transition: 0.3s linear;
  -o-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
}
.baskit .price * {
  color: #fff;
  transition: 0.3s linear;
}
.baskit .price:hover * {
  color: #000;
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
  width: 99%;
  margin: 10px 3px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e77700;
  padding: 5px;
  border-radius: 5px;
}
.baskit .done * {
  color: #fff;
}
.baskit .done .add:hover {
  background-color: #fff;
  color: #e77700;
  border-color: #e77700;
}
.baskit .dialog {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.233);
  display: flex;
  justify-content: center;
  align-items: center;
}
.baskit .dialog .box {
  transform: translate(-50, -50%);
  -webkit-transform: translate(-50, -50%);
  -o-transform: translate(-50, -50%);
  -moz-transform: translate(-50, -50%);
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.164);
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