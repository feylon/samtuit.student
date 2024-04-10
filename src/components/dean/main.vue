<template>
<div class="h-screen min-w-max-[100%]">
  <div  class="w-100 h-[40px] bg-green-600  flex ps-0 justify-between items-center">
<div>
    <div class="flex h-100">
        <div  class=" h-[40px]  duration-700 text-white items-center h-[100%] flex  font-semibold text-center justify-center ">
        <span class="text-[20px] duration-700 ms-[40px] select-all">
            Hemis OTM
        </span>
        
    </div>
<!-- <div @click="collapsed = !collapsed" :class="collapsed?'flex justify-center  ps-3':''" class="text-white cursor-pointer ms-2 items-center flex">
    <span class="text-[20px]  m-1">
      <i class="fas fa-bars"></i>
</span>
</div> -->

    </div>
</div>

<n-dropdown  :options="option" >
    <div class="profil  text-white select-none border-l-[1px] h-[100%] flex justify-center items-center w-[240px] duration-700 cursor-pointer ps-3 border-solid pe-3 border-green-700 hover:bg-green-800">
<img  :src="data.url" class="rounded-[50%] w-[35px]" alt="">

<div>
    <div class="flex items-center justify-center flex-col mt-1">
    <span class="block ms-2 mt-2 font-bold profil text-[13px]">  {{`${data.name } ${data.surname }` }}</span>
<span class="block mb-3 text-[11px] text-center">
    Dekan  
    <span v-show="false">{{itr}}</span>
</span>
</div>
</div>
</div>
</n-dropdown>

</div>  
<!-- Navigation tugadi -->

<div class="flex  h-[100%] h-max-[100%] ">
  

  <n-layout class="m-0 w-auto" has-sider >
    <n-layout-sider 
      bordered
      class="bg-black text-white"
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      :background-color="'black'"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
      
      >
    <div class="flex flex-col items-center pt-4 justify-start h-[100%]">
      <!-- <router-link> -->
     <div @click="router.push('/students')" :class="collapsed?'pe-0':'pe-[40px] hover:bg-green-600'" class="w-[170px]  select-none cursor-pointer  rounded-lg flex items-center justify-evenly  duration-1000  p-1 pt-2 pb-2">
      <span class="rounded-lg bg-blue-600 p-3">
        <i class="fas fa-user-group"></i>
</span>
      <span :class="collapsed?'hidden':''" >
      Talabalar
</span>    </div>
      <!-- </router-link> -->
    </div>
      <!-- <n-menu :options="menuOptions" /> -->
    </n-layout-sider>
      <div class="p-10 w-[100%]">
        <RouterView>
          
        </RouterView>
      </div>


    <n-layout />
  </n-layout>

  
</div>
</div> 



    </template>
    <script setup>
import { onMounted, onUnmounted, ref, h, reactive } from 'vue';
import { RouterLink,useRouter } from 'vue-router';
import { NIcon,  useDialog, useMessage } from "naive-ui";
import {
  LaptopOutline as WorkIcon,
  LogOutOutline as HomeIcon
} from "@vicons/ionicons5";

// * o'zgaruvhcilari 
const dialog = useDialog();
const message = useMessage();
let collapsed = ref(false);
const router = useRouter();

//  o'zgaruvhcilari 



  let itr = ref(0)
  setInterval(() => {
    itr.value ++
  }, 500);
  let data = reactive({
    name:"",
    surname:"",
    // url:"http://localhost:5173/src/pictures/user.png"
    // urk :new URL("../../pictures/user.png", import.meta.url)
  });
import "../../pictures/user.png"

  onMounted( async ()=>{
let backend =   new Promise((resolve, reject) => {

setTimeout(() => resolve({
  "_id": {
    "$oid": "65fdd8d1c318369b559fad4e"
  },
  "name": "Ergashev",
  "date_of_brith": "9/23/2002",
  "surname": "Jamshid",
  "active": true,
  "date_of_join": "3/23/2024",
  "phone": "+998775634",
  "status": true, 
  "url":"http://localhost:5173/src/pictures/login.png",
  "__v": 0
}), 3000);

setTimeout(() => reject(new Error("ignored")),  5000);

});
try {
  let info = await backend;
  data = info;
  console.log(data)
  
} catch (error) {
  console.log("xatolik", error)
}

});

  let fa = h("div", {innerHTML:"Jamshid"})
  console.log(fa)
  const option = reactive(
  [
        {
          key: "header",
          type: "render",
          render:()=> h("div",{class:"flex p-3 pb-0 ps-2 w-[215px]"},
          [
          h("div", {class:"flex items-center select-none"},[
          h("img", {
        round: true,
        style: "margin-right: 8px;",
        src: data.url,
        class:"w-[60px] rounded-md m-3",
        title: `${data.name } ${data.surname }`
      }),

      h('div',
      [
      h("div",{class:"text-[13px] font-bold"},h("div",
      {innerHTML :`${data.name } ${data.surname }`}
      )),
      
      h("div",{class:"text-[13px] text-center"},h("div",
      {innerHTML :`Dekan `}
      )),
          ])
      ])

        ]
          )
        },
        {
          key: "update_photo",
          type: "render",
          label:"salom",
          render:()=>{
            return h("div",{class:"ps-4 duration-700 flex items-center hover:bg-green-100 cursor-pointer flex border-t-[1px] border-solid "},[
              h("span",
         
            {innerHTML:`<span class="text-[20px] text-green-600 "><i class="fas fa-camera-rotate"></i></span>` },
            {class:""}
            ),
            h("div",
            {class:"text-black ps-3"},
            {default:()=>"Profil rasmini yangilash"}
            )
          ])
          }
        },
        {
          key: "own_info",
          type: "render",
          label:"salom",
          render:()=>{
            return h("div",{class:"ps-4 duration-700 cursor-pointer hover:bg-green-100 flex border-t-[1px] border-solid  flex items-center"},[
              h("span",
         
            {innerHTML:`<span class="text-[20px] text-green-600"><i class="fas fa-circle-info"></i></span>` },
            {class:""}
            ),
            h("div",
            {class:"text-black ps-3"},
            {default:()=>"Shaxsiy ma'lumotlar"}
            )
          ])
          }
        },
        {
          key: "profil_settings",
          type: "render",
          label:"salom",
          render:()=>{
            return h("div",{class:"ps-4 duration-700 cursor-pointer hover:bg-green-100 flex border-t-[1px] border-solid pt-3"},[
              h("span",
         
            {innerHTML:`<span class="text-[20px] text-green-600"><i class="fas fa-gears"></i></span>` },
            {class:""}
            ),
            h("div",
            {class:"text-black ps-3"},
            {default:()=>"Profilni sozlash"}
            )
          ])
          }
        },
        {
          key: "own_info",
          type: "render",
          props: {
            onClick: () => {
              dialog.success({
        title: "Chiqish",
        content: "Tizimdan chiqasizmi ?",
        positiveText: "Albatta",
        negativeText: "Yo'q",
        maskClosable: true,
        onMaskClick: () => {
        return ;          },
        onPositiveClick:() => {
        return router.push("/")          },
        onEsc: () => {
        useMessage().success("Siz tizimda qoldingiz");
        }});

            }},
          label:"salom",
          render:()=>{
            return h("div", {class:"ps-4 duration-700 cursor-pointer hover:bg-red-100 flex border-t-[1px] border-solid pt-3"},[
              h("span",
         
            {innerHTML:`<span class="size-[20px] text-red-600"><i class="fas fa-arrow-right-from-bracket"></i></span>` },
            {class:""},
            
            ),
            h("div",
            {class:"text-red-700 ps-3"},
            {default:()=>"Chiqish"}
            )
          ])
          }
        }
        
      ])
      
// Yon menyu uchun



</script>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
 .profil{
    font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
 }
    </style>