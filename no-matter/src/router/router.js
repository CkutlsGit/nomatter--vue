import { createRouter, createWebHistory } from "vue-router";

// Import pages:
import mainPage from "@/pages/MainPage.vue";
import Shitpost from "@/components/Shitpost.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: mainPage, name: Main },
        { path: '/shtpst', component:  Shitpost, name: Post}
    ]
})