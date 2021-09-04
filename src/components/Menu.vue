<template>
  <div class="container">
    <div class="title">
      <h2>قائمة المأكولات</h2>
      <p>عالم رائع من المأكولات الشهيه</p>
    </div>
    <div class="row">
      <div class="menu">
        <div class="card" v-for="item in items" :key="item.name">
          <div class="details">
            <h3 class="name">{{ item.name }}</h3>
            <p class="dic">
              {{ item.description }}
            </p>
            <div class="options">
              <div class="row" v-for="option in item.options" :key="option">
                <p>
                  <button class="add" @click="addToCart(item, option)">
                    اضف الي السله
                  </button>
                </p>
                <p>
                  السعر:<span>{{ option.price }} جنيه</span>
                </p>
                <p>
                  الحجم: <span>{{ option.size }}</span>
                </p>
              </div>
            </div>
          </div>
          <img src="../assets/images/pizza-icon.svg" alt="Pizza Photo" />
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
      items: {
        1: {
          name: "Margherita",
          description: "بيتزا لذيذة من الطماطم مغطاة بجبنة الموزاريلا ",
          options: [
            {
              size: 9,
              price: 6,
            },
            {
              size: 12,
              price: 10,
            },
          ],
        },
        2: {
          name: "Pepperoni",
          description:
            "بيتزا لذيذة  من الطماطم مغطاة بجبنة الموزاريلا والبيبروني ",
          options: [
            {
              size: 9,
              price: 7,
            },
            {
              size: 12,
              price: 12,
            },
          ],
        },
        3: {
          name: "Ham and Pineapple",
          description:
            "بيتزا لذيذة من الطماطم مغطاة بجبنة الموزاريلا ولحم الماعز والأناناس ",
          options: [
            {
              size: 9,
              price: 7,
            },
            {
              size: 12,
              price: 12,
            },
          ],
        },
      },
    };
  },
  methods: {
    async addToCart(item, opt) {
      const pizzaExist = await this.cart.find(
        (pizza) => pizza.name === item.name && pizza.size === opt.size
      );
      if (pizzaExist) {
        pizzaExist.qyt++;
        return;
      }
      this.cart.push({
        name: item.name,
        price: item.price,
        size: opt.size,
        description: item.description,
        qyt: 1,
      });
    },
  },
};
</script>
<style scoped>
.title {
  padding: 100px 0 50px 0;
}
.row .menu {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
@media (max-width: 900px) {
  .row .menu {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .row .menu {
    grid-template-columns: repeat(1, 1fr);
  }
}
.title-bs {
  margin: 10px auto;
}
.row .menu .card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.048);
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: 0.3s linear;
  -webkit-transition: 0.3s linear;
  -o-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
  flex-direction: column-reverse;
}
.row .menu .card:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.068);
}
.row .menu .card img {
  width: 120px;
}
.row .menu .card .details {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
  width: 100%;
  margin: 0 15px;
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
.options {
  width: 100%;
  margin: 10px 0;
}
.options .row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.205);
  margin: 10px 0;
}
.options .row .add {
  padding: 1px 8px;
  font-size: 14px;
  width: auto;
}
@media (max-width: 482px) {
  .row .menu .card .details {
    width: 100%;
  }
}
/* Start Baskit */
</style>