import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import Login from "@/components/Login.vue";
import Profile from "@/components/Profile.vue";
import {createRouter, createWebHistory} from "vue-router";
import UserBoard from "@/components/UserBoard.vue";


const routes = [
    {
        path: "/",
        component: Login,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/profile",
        name: 'profile',
        component: Profile,
    },
    {
        path: "/userboard",
        name: 'userboard',
        component: UserBoard,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});



let app = createApp(App);
app.use(router);
app.mount("#app");


