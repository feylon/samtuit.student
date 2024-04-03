<template>
  

<div class="container relative ">
<div class="left-[-100px] opacity-0 sm:hidden md:hidden lg:flex lg:w-1/2  left h-screen absolute" id="left"></div>

<div class=" right-[100px] w-[400px] p-3 h-[500px]  font-serif border-solid border-[2px] absolute mt-[60px] rounded-md">

<div class="flex w-full justify-between">
<div class="border-b-green-600 me-1 w-[33%] border-b-solid text-center border-b-[3px] p-1 font-bold color text-green-600 cursor-pointer">Talaba</div>
<div class="border-b-gray-200 me-1 w-[33%] border-b-solid border-b-[3px] text-center p-1 font-bold cursor-pointer" >O'qituvchi</div>
<div class="border-b-gray-200 w-[33%] border-b-solid border-b-[3px] p-1 text-center font-bold cursor-pointer">Dekanat</div>

    
</div>
<div class="user_back m-auto mt-3 w-[150px] h-[150px]"></div>

<div class="w-[100%] mx-auto p-3">
<div class="h-8 font-medium mt-3 text-center">Hemis Talaba</div>
    <form @submit.prevent="submit">
        <n-input v-model:value="login" type="text" placeholder="Login" name="hbhjdsbsdfhjsdcbs"  />

        <n-input v-model:value="password" class="mt-5" aria-required="true" type="password" show-password-on="mousedown" placeholder="Password"  />
        <n-checkbox  class="mt-3 checked:bg-black">
      Eslab qolish
    </n-checkbox>
        <button type="submit" class=" border-none mt-5 w-[100%] text-base  bg-green-600 p-3 text-white mx-auto  rounded-md"> Kirish</button>
    </form>
    
</div>
</div>
<div>
  
    
  </div>
</div>


</template>
<script setup>
import {reactive, onMounted,ref,defineComponent} from "vue";
import gsap from 'gsap';
import {NInput, NCheckbox, useMessage} from "naive-ui";
const message = useMessage()


const login = ref('1');
const password = ref('');

const submit = function(){

    if(login.value == '') return message.info('Loginni kiriting', {duration:3000})
    if(password.value == '') return message.info('Parolni kiriting', {duration:3000})
  return message.error("Parol yoki login xato", {duration:3000})

  }

onMounted(()=>{
    gsap.to('#left',
    {
        duration:3,
        // delay:3,
        x:100,
        opacity:1
    })
});


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