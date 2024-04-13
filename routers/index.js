import { createRouter, createWebHashHistory } from "vue-router";
import login from "../src/components/login.vue";
// dekan uchun sahifalar
import main_dean from "../src/components/dean/main.vue";
import students from "../src/components/dean/students.vue"

// Dekan uchun routerlar
const dean = 
[
{path:"/dean_dashtboard/students", component:students}
]

export default
createRouter({
    history:createWebHashHistory(),
    routes:
    [
        {path:"/", component:login},
        // dekan uchun routerlar
        {path:"/dean_dashtboard", component:main_dean,name:"dean_dashtboard", children:dean}
    ]
});