import { createStore } from "vuex";
const store = createStore({
    state() {
        return {
            cart: [],
            orders: [],
            items: {
                1: {
                    id: Math.floor(Math.random() * 100000),
                    name: "Margherita",
                    description: "بيتزا لذيذة من الطماطم مغطاة بجبنة الموزاريلا ",
                    options: [{
                            size: 9,
                            price: 6,
                            id: Math.floor(Math.random() * 100000),
                        },
                        {
                            size: 12,
                            price: 10,
                            id: Math.floor(Math.random() * 100000),
                        },
                    ],
                },
                2: {
                    id: Math.floor(Math.random() * 100000),
                    name: "Pepperoni",
                    description: "بيتزا لذيذة  من الطماطم مغطاة بجبنة الموزاريلا والبيبروني ",
                    options: [{
                            size: 9,
                            price: 7,
                            id: Math.floor(Math.random() * 100000),
                        },
                        {
                            size: 12,
                            price: 12,
                            id: Math.floor(Math.random() * 100000),
                        },
                    ],
                },
                3: {
                    id: Math.floor(Math.random() * 100000),
                    name: "Ham and Pineapple",
                    description: "بيتزا لذيذة من الطماطم مغطاة بجبنة الموزاريلا ولحم الماعز والأناناس ",
                    options: [{
                            size: 9,
                            price: 7,
                            id: Math.floor(Math.random() * 100000),
                        },
                        {
                            size: 12,
                            price: 12,
                            id: Math.floor(Math.random() * 100000),
                        },
                        {
                            size: 15,
                            price: 18,
                            id: Math.floor(Math.random() * 100000),
                        },
                    ],
                },
            },
        };
    },
    mutations: {
        addToCart(state, payload) {
            state.cart.push(payload);
        },
    },
    actions: {
        removeItem(state, payload) {
            const data = {...payload };
            state.cart.push(data);
        },
    },
    getters: {
        getItems(state) {
            return state.items;
        },
        cartData(state) {
            return state.cart;
        },
    },
});

export default store;