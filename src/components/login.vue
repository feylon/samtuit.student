<template>
  

<div class="container relative ">
<div class="left-[-100px] opacity-0 sm:hidden md:hidden lg:flex lg:w-1/2  left h-screen absolute" id="left"></div>

<div id="login" class="md:width-screen   opacity-0 shadow-md right-[100px] lg:w-[400px] p-3 lg:h-[500px]  font-serif border-solid border-[2px] absolute mt-[60px] rounded-md">

<div  class="flex w-full justify-between">
<div @click="first()"  :class="pages.first?'border-b-solid border-b-green-600 border-b-[3px]  text-green-600':'border-b-gray-200'" class="border-b-gray-200 me-1 w-[33%] border-b-solid border-b-[3px] text-center p-1 font-bold cursor-pointer">Talaba</div>
<div @click="second()" :class="pages.second?'border-b-solid border-b-green-600 border-b-[3px]  text-green-600':'border-b-gray-200'" class="border-b-gray-200 me-1 w-[33%] border-b-solid border-b-[3px] text-center p-1 font-bold cursor-pointer" >O'qituvchi</div>
<div @click="third" :class="pages.third?'border-b-solid border-b-green-600 border-b-[3px]  text-green-600':'border-b-gray-200'" class="border-b-gray-200 me-1 w-[33%] border-b-solid border-b-[3px] text-center p-1 font-bold cursor-pointer">Dekanat</div>

    
</div>
<div class="user_back m-auto mt-3 w-[150px] h-[150px]"></div>
<!-- <component :is="login_component"></component> -->
<student v-if="pages.first"/>
<teacher v-if="pages.second" />
<dean v-if="pages.third" />
</div>
<div>
  
    
  </div>
</div>


</template>
<script setup>
import {reactive, onMounted,ref,defineComponent} from "vue";
import gsap from 'gsap';
import {NInput, NCheckbox, useMessage} from "naive-ui";
// komponentlar
import student from "./login_component/student.vue"
import dean from "./login_component/dean.vue";
import teacher from "./login_component/teracher.vue";

let login_component = student;
let pages;
if(localStorage.role){pages = reactive(JSON.parse(localStorage.role))}
else
pages = reactive( {
    first : true,
    second : false,
    third : false
}); 

onMounted(()=>{
    gsap.to('#left',
    {
        duration:3,
        // delay:3,
        x:100,
        opacity:1
    })


    gsap.to('#login',
    {
        duration:4, 
        // delay:3,
        // x:100,
        opacity:1
    })
});
function first(){
    pages.first = true;
    pages.second = false;
    pages.third = false;
    localStorage.setItem("role",JSON.stringify(pages))
    // login_component = student;
}

function second(){
    pages.first = false;
    pages.second = true;
    pages.third = false;
    localStorage.setItem("role",JSON.stringify(pages))

    // login_component = teacher;
}

function third(){
    pages.first = false;
    pages.second = false;
    pages.third = true;
    localStorage.setItem("role",JSON.stringify(pages))

    // login_component = dean;
}


</script>
<style scoped>
@media(min-width:1024px){
    .left{
    background-image: url("../pictures/login.png");
    background-position: center;
    background-size: cover;

}

}
.user_back{
    background-image: url("../pictures/user.png");
    background-position: center;
    background-size: cover;
}
</style>