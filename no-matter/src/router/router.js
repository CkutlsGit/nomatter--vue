import { createRouter, createWebHistory } from "vue-router";

// Import pages:
import mainPage from "@/pages/MainPage.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: mainPage }
    ]
})