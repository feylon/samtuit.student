import { createRouter, createWebHashHistory } from "vue-router";
import login from "../src/components/login.vue";
// dekan uchun sahifalar
import main_dean from "../src/components/dean/main.vue";

export default
createRouter({
    history:createWebHashHistory(),
    routes:
    [
        {path:"/", component:login},
        // dekan uchun routerlar
        {path:"/dean_dashtboard", component:main_dean,name:"dean_dashtboard"}
    ]
});