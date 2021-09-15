import { createApp } from "vue";
import App from "./App.vue";
import store from "./components/store/index.js";
import router from "./components/route/index.js";
const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");