<template>
    <div class="w-[100%] mx-auto p-3">
    <div class="h-8 font-medium mt-3 text-center">Dekanat</div>
        <form @submit.prevent="submit">
            <n-mention :status="input.login" @input="input.login = 'success';" v-model:value="login" type="text" placeholder="Login" name="hbhjdsbsdfhjsdcbs"  />
    
            <n-input  v-model:value="password" class="mt-5" aria-required="true" type="password" show-password-on="mousedown" placeholder="Parol" />
            
            <n-checkbox  class="mt-3 checked:bg-black">
          Eslab qolish
        </n-checkbox>
            <button type="submit" class=" border-none mt-5 w-[100%] text-base  bg-green-600 p-3 text-white mx-auto  rounded-md"> Kirish</button>
        </form>
        
    </div>
    
    </template>
    
    <script setup>
    import {reactive,ref} from "vue";
    import {NInput,useDialog, NCheckbox, useMessage} from "naive-ui";
    import { useRouter } from "vue-router";
    import url from "../../../reuseble"
    import axios from "axios"
    const message = useMessage()
    const dialog = useDialog();
    const router = useRouter();
    
    
    let login = ref('Gaytes');
    let password = ref('feylon1409');
    const input = reactive(
    {
    login:"success",
    password:"success"
    });
    
    const submit = async  function(){
        if(login.value == '')  {
    
            message.info('Loginni kiriting', {duration:3000});
            input.login = 'warning';
        
              
            return;
        }
        if(password.value == '') {
            message.info('Parolni kiriting', {duration:3000});
            return;
        }
        try {
            let data = await fetch(`${url.dean}/login`,{
                method:"POST",
                body:JSON.stringify({login:login.value,password:password.value}),
                headers:{"Content-Type":"application/json; charset=UTF-8"}
            });
            if(data.status == 200){
                data = await data.json();
                localStorage.setItem("token",data.token)

                return router.push("/dean_dashtboard");

            }
            if(data.status == 401)
            return message.error("Parol yoki login xato", {duration:3000})
            
     
        } catch (error) {
            console.log(error)
        }
    
    }
    
    
    </script>
    