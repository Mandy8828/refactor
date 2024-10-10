import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import router from "./router";
import SvgIcon from "@/components/common/SvgIcon.vue";

const app = createApp(App);
const pinia = createPinia();
const vuetify = createVuetify();

app.use(router);
app.use(pinia);
app.use(vuetify);
app.component("svgIcon", SvgIcon);

app.mount("#app");
