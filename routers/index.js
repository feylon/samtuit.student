import { createRouter, createWebHashHistory } from "vue-router";
import login from "../src/components/login.vue";
// dekan uchun sahifalar
import main_dean from "../src/components/dean/main.vue";
import add_info from "../src/components/dean/add_info.vue";
import own_info_dean from "../src/components/dean/own_info.vue"

// Dekan uchun routerlar
const dean = 
[
{path:"/dean_dashtboard/add_info", component:add_info},
{path:"/dean_dashtboard/own_info", component:own_info_dean}
]

export default
createRouter({
    history:createWebHashHistory(),
    routes:
    [
        {path:"/", component:login},
        // dekan uchun routerlar
        {path:"/dean_dashtboard", component:main_dean,name:"dean_dashtboard", children:dean},
        
    ]
});