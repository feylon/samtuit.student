<template>
<div class="h-screen min-w-max-[100%]">
  <div  class="w-100 h-[40px] bg-green-600  flex ps-0 justify-between items-center">
<div>
    <div class="flex h-100">
        <div :class="collapsed?'w-0':'w-[239px]'" class="bg-black h-[40px]  duration-700 text-white items-center h-[100%] flex  font-semibold text-center justify-center ">
        <span :class="collapsed?'hidden':''" class="text-[20px] duration-700 select-all">
            Hemis OTM
        </span>
        
    </div>
<div @click="collapsed = !collapsed" :class="collapsed?'flex justify-center  ps-3':''" class="text-white cursor-pointer ms-2 items-center flex">
    <span class="text-[20px] material-symbols-outlined">
menu
</span>
</div>

    </div>
</div>

<n-dropdown v-if ='1' :options="option" >
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

<div class="text-white relative h-[100%] flex w-[100%] w-max-[100%]">
  <!-- <div class="bg-black text-white h-[100%] flex w-[303px] border-t-[1px] border-t-gray-800  border-e-[3px] border-green-100 border-solid">
    

</div> -->


  <n-layout has-sider >
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
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, non.
      <!-- <n-menu :options="menuOptions" /> -->
    </n-layout-sider>
    <n-layout />
  </n-layout>

</div>

</div> 



    </template>
    <script setup>
import { onMounted, onUnmounted, ref, h, reactive } from 'vue';
import { RouterLink,useRouter } from 'vue-router';
import { NIcon, useDialog, useMessage } from "naive-ui";
import {
  LaptopOutline as WorkIcon,
  LogOutOutline as HomeIcon
} from "@vicons/ionicons5";

// *navivue o'zgaruvhcilari 
const dialog = useDialog();
const message = useMessage();
// navivue o'zgaruvhcilari 



const router = useRouter();
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
  "name": "Ergasheva",
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
  let option = [
        {
          key: "header",
          type: "render",
          render:()=> h("div",{class:"flex p-3 ps-2 w-[215px]"},
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
            return h("div",{class:"ps-4 duration-700 hover:bg-green-100 cursor-pointer flex border-t-[1px] border-solid pt-3"},[
              h("span",
         
            {innerHTML:`<span class="material-symbols-outlined text-green-600">add_a_photo</span>` },
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
            return h("div",{class:"ps-4 duration-700 cursor-pointer hover:bg-green-100 flex border-t-[1px] border-solid pt-3"},[
              h("span",
         
            {innerHTML:`<span class="material-symbols-outlined text-green-600">info</span>` },
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
         
            {innerHTML:`<span class="material-symbols-outlined text-green-600">manage_accounts</span>` },
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
         
            {innerHTML:`<span class="material-symbols-outlined text-red-600">logout</span>` },
            {class:""},
            
            ),
            h("div",
            {class:"text-red-700 ps-3"},
            {default:()=>"Chiqish"}
            )
          ])
          }
        }
        
      ];
      
// Yon menyu uchun
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [ h(RouterLink,{
    label:"salom",
    default:'sasas',
      
      
        to: {
          name: "home",
          params: {
            lang: "zh-CN"
          }
        
      },
      key: "go-back-home",
    icon: renderIcon(HomeIcon)
  })]
;

let collapsed = ref(true);
</script>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
 .profil{
    font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
 }
    </style>