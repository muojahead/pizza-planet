import { createRouter, createWebHistory } from "vue-router";
import adminPage from "../Admin.vue";
import menu from "../Menu.vue";
import home from "../Home.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/dashboard", component: adminPage },
        { path: "/menu", component: menu },
        { path: "/home", component: home },
        { path: "/", component: home },
    ],
});

export default router;