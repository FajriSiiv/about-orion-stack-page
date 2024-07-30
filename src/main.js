import "./assets/main.css";

import router from "./router";

import { createApp } from "vue";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as LaIcons from "oh-vue-icons/icons/la";
import * as IoIcons from "oh-vue-icons/icons/io";

const Fa = Object.values(FaIcons);
const La = Object.values(LaIcons);
const Io = Object.values(IoIcons);
addIcons(...Fa);
addIcons(...La);
addIcons(...Io);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.mount("#app");
