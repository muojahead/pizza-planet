<template>
  <div class="container">
    <div class="admin_container">
      <div class="login_as">
        you are Logged in as: Mohamed Mujahid
        <button class="btn">Logout</button>
      </div>
      <h2 class="title">Items Published</h2>
      <!-- Start Items List -->
      <div class="items_list">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>options</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in itemsPublished" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.options.length }} Options</td>
              <td>
                <button class="btn" @click="showItem(item)">Show</button>
                <button class="btn-rev" @click="deleteItem(item.id)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="actions">
          <button class="btn" @click="openAddItem">Add new Item</button>
        </div>
      </div>
    </div>
    <!-- Start Add New Item -->
    <div class="add_new_item" v-if="addItem">
      <form @submit.prevent="addNewItem">
        <div class="deleter" @click="closeAddItem">+</div>
        <h2 class="title">add New Item</h2>
        <div class="custom_input">
          <input type="text" id="pizzaName" v-model="newItem.name" />
          <label for="pizzaName">Name</label>
        </div>
        <div class="custom_input">
          <input type="text" id="desc" v-model="newItem.description" />
          <label for="desc">Description</label>
        </div>
        <div class="options" ref="options">
          <div class="option" v-for="opt in newItem.options" :key="opt.price">
            option:
            <div class="custom_input">
              <input
                type="number"
                :id="'size' + newItem.options.length + 1"
                v-model="opt.size"
              />
              <label :for="'size' + newItem.options.length + 1">size</label>
            </div>
            <div class="custom_input">
              <input
                type="number"
                :id="'price' + newItem.options.length + 1"
                v-model="opt.price"
              />
              <label :for="'price' + newItem.options.length + 1">price</label>
            </div>
            <div
              class="btn"
              @click="deleteOption(opt.id)"
              v-if="newItem.options.length > 1"
            >
              Delete Option
            </div>
          </div>
          <button type="button" class="btn" @click="addOption">
            Add Option
          </button>
        </div>
        <div class="actions">
          <button type="submit" class="btn">Add Item</button>
          <button type="button" @click="closeAddItem" class="btn-rev">
            Close
          </button>
        </div>
      </form>
    </div>
    <!-- Start Edit Item Modal -->
    <div class="edit_item" v-if="editItem">
      <form @submit.prevent="UpdateItem">
        <div class="deleter" @click="closeEditItem">+</div>
        <h2 class="title">Edit Item</h2>
        <div class="custom_input">
          <input type="text" id="pizzaName" v-model="newItem.name" />
          <label for="pizzaName">Name</label>
        </div>
        <div class="custom_input">
          <input type="text" id="desc" v-model="newItem.description" />
          <label for="desc">Description</label>
        </div>
        <div class="options">
          <div class="option" v-for="opt in newItem.options" :key="opt.size">
            option:
            <div class="custom_input">
              <input
                type="number"
                :id="'size_' + opt.size + 5"
                v-model="opt.size"
              />
              <label :for="'size_' + opt.size + 5">size</label>
            </div>
            <div class="custom_input">
              <input
                type="number"
                :id="'price_' + opt.price + 5"
                v-model="opt.price"
              />
              <label for="price1">price</label>
            </div>
            <div
              class="btn"
              @click="deleteOption(opt.id)"
              v-if="newItem.options.length > 1"
            >
              Delete Option
            </div>
          </div>
          <button type="button" class="btn" @click="addOption">
            Add Option
          </button>
        </div>

        <div class="actions">
          <button type="submit" class="btn">Update Item</button>
          <button type="button" @click="closeEditItem" class="btn-rev">
            Close
          </button>
        </div>
      </form>
    </div>
    <!-- Start Show Item Box -->
    <div class="show_item_box" v-if="ShowItem">
      <div class="box">
        <div class="deleter" @click="closeShowItem">+</div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>Descrition</th>
              <th>options</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in itemBeShowed" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.description }}</td>
              <td>
                <div class="row" v-for="opt in item.options" :key="opt.price">
                  <p>
                    السعر:<span>{{ opt.price }} جنيه</span>
                  </p>
                  <p>
                    الحجم: <span>{{ opt.size }}</span>
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="actions">
          <button class="btn" @click="openUpdateModal(itemBeShowed[0])">
            Update
          </button>
          <button class="btn-rev" @click="deleteItem(itemBeShowed[0].id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addItem: false,
      editItem: false,
      itemsPublished: [],
      counter: 1,
      itemBeShowed: [],
      ShowItem: false,
      newItem: {
        name: "",
        description: "",
        qyt: 1,
        id: Math.floor(Math.random() * 700000),
        options: [
          {
            size: "",
            price: "",
            id: Math.floor(Math.random() * 800000),
          },
        ],
      },
    };
  },
  methods: {
    openAddItem() {
      this.newItem = {
        name: "",
        description: "",
        qyt: 1,
        id: Math.floor(Math.random() * 900000),
        options: [
          {
            size: "",
            price: "",
            id: Math.floor(Math.random() * 100000),
          },
        ],
      };
      this.addItem = true;
    },
    closeAddItem() {
      this.addItem = false;
    },
    closeEditItem() {
      this.editItem = false;
    },
    showItem(item) {
      this.itemBeShowed.length = 0;
      this.itemBeShowed.push(item);
      this.ShowItem = true;
    },
    closeShowItem() {
      this.ShowItem = false;
    },
    openUpdateModal(item) {
      let updatedItem = {
        name: item.name,
        description: item.description,
        qyt: 1,
        id: item.id,
        options: [],
      };
      for (let i = 0; i < item.options.length; i++) {
        const element = item.options[i];
        updatedItem.options.push(element);
      }
      this.newItem = updatedItem;
      this.ShowItem = false;
      this.editItem = true;
    },
    deleteItem(item) {
      const myData = this.itemsPublished;
      const newData = [];
      for (const key in myData) {
        if (myData[key].id === item) {
          delete myData[key];
        } else {
          newData.push(myData[key]);
        }
        this.ShowItem = false;
      }
    },
    UpdateItem() {
      for (const obj in this.itemsPublished) {
        if (this.itemsPublished[obj].id === this.newItem.id) {
          this.itemsPublished[obj] = this.newItem;
        }
      }
      this.editItem = false;
    },
    addOption() {
      if (this.newItem.options.length == 3) {
        alert("You cant add More Options");
      } else {
        this.newItem.options.push({
          size: "",
          price: "",
          id: Math.floor(Math.random() * 100000),
        });
      }
    },
    addNewItem() {
      const itemsCount = Object.keys(this.itemsPublished).length + 1;

      this.itemsPublished[itemsCount] = this.newItem;
      this.addItem = false;
    },
    deleteOption(id) {
      const newOptList = this.newItem.options.filter((opt) => opt.id !== id);
      this.newItem.options = newOptList;
    },
  },
  created() {
    const data = this.$store.state.items;
    this.itemsPublished = data;
  },
};
</script>
<style scoped>
.admin_container {
  display: block;
  text-align: left;
}
.title {
  text-align: center;
  font-size: 18px;
}
.add_new_item,
.edit_item,
.show_item_box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.349);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.add_new_item form,
.edit_item form,
.show_item_box .box {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding: 30px;
  width: 100%;
  max-width: 800px;
  min-width: 270px;
  position: relative;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.397);
  overflow-y: auto;
}
.show_item_box .box {
  padding: 39px 10px 10px;
}
.show_item_box .box table {
  overflow-y: auto;
  border: none;
  border-radius: unset;
  width: 100% !important;
}
.show_item_box .box table .row {
  border-bottom: 1px solid #e77700;
  margin-bottom: 5px;
  text-align: right;
}
.add_new_item form .custom_input,
.edit_item form .custom_input {
  position: relative;
  margin: 5px auto;
  width: 98%;
}
.add_new_item form .options,
.edit_item form .options {
  width: 98%;
}
.add_new_item form .options .option,
.edit_item form .options .option {
  position: relative;
  margin-top: 5px;
}
.add_new_item form .options .option .btn,
.edit_item form .options .option .btn {
  position: absolute;
  right: 5px;
  top: -4px;
  left: unset;
  transform: unset;
  font-size: 14px;
  padding: 2px;
}
.add_new_item form .custom_input input,
.edit_item form .custom_input input {
  width: 100%;
  padding: 20px 10px 10px;
  border-radius: 5px;
  border: 1px solid #e77700;
  font-size: 16px;
  font-family: "IBM Plex Sans Arabic", sans-serif;
  outline: none;
}
.add_new_item form .custom_input label,
.edit_item form .custom_input label {
  position: absolute;
  top: 3px;
  left: 5px;
  transition: 0.3s linear;
  -webkit-transition: 0.3s linear;
  -o-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
}
.add_new_item form .custom_input input:focus + label,
.edit_item form .custom_input input:focus + label {
  font-size: 14px;
  opacity: 0.6;
}
.login_as {
  margin: 5px 0;
  padding: 10px;
  text-align: center;
  width: 100%;
  background-color: rgba(26, 204, 26, 0.397);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
}
.login_as .btn {
  margin: 0;
  background-color: rgb(161, 46, 46);
}
.login_as .btn:hover {
  border-color: rgb(161, 46, 46);
  color: rgb(161, 46, 46);
  background-color: #fff;
}

table {
  border: 2px solid #e77700;
  border-radius: 5px;
  margin: 5px auto;
  text-align: center;
  width: 100%;
  padding: 0;
}
table thead {
  text-align: center;
  padding: 10px;
  background-color: #e77700;
}
table thead tr th {
  color: #fff;
  margin: 0;
}
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td,
table th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;

  background-color: #e77700;
  color: white;
}
.actions {
  width: 100%;
  text-align: center;
}
</style>