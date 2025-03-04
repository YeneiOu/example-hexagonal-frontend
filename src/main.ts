import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";

// import Toast, { type PluginOptions } from "vue-toastification";
// import "vue-toastification/dist/index.css";

const pinia = createPinia()
const app = createApp(App);
app.use(pinia)
// const toastOptions: PluginOptions = {
//   timeout: 3000,
//   closeOnClick: true,
// };

// app.use(Toast, toastOptions);
app.mount("#app");
