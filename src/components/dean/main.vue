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
</span>
</div>
</div>
</div>
</n-dropdown>

</div>  
<!-- Navigation tugadi -->

  

  
<div class="h-[100%]">
  <n-layout has-sider class="h-[100%] ">
      <n-layout-sider
      class="h-[100%] "
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        show-trigger
        :inverted="menu_show"
      >
        <n-menu
          :inverted="menu_show"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout>
        <div class="m-[20px]">
       
         <RouterView></RouterView>
        </div>
      </n-layout>
    </n-layout>
</div>
</div> 



    </template>
    <script setup>
import { onMounted, onUnmounted, ref, h, reactive } from 'vue';
import { RouterLink,useRouter } from 'vue-router';
import { NIcon,  useDialog, useMessage } from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from "@vicons/ionicons5";
import url from "../../../reuseble";
// * o'zgaruvhcilari 
const dialog = useDialog();
const message = useMessage();

const router = useRouter();

//  o'zgaruvhcilari 



  let data = ref({
    name:"",
    surname:""
  });

  onMounted( async ()=>{


try {
  let info = await fetch(`${url.dean}/profil/${localStorage.token}`,{
    method:"GET",
    headers:{
      token:localStorage.getItem("token")
    }
  }) ;
  if(info.status != 200) return router.push("/")
  info = await info.json();
  data.value = info.user;
  
} catch (error) {
  console.log("xatolik", error)
}
});



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
        src: data.value.url,
        class:"w-[60px] rounded-md m-3",
        title: `${data.value.name } ${data.value.surname }`
      }),

      h('div',
      [
      h("div",{class:"text-[13px] font-bold"},h("div",
      {innerHTML :`${data.value.name } ${data.value.surname }`}
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
        localStorage.setItem("token","");router.push("/");return;          },
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

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
function render_mbd_icon(name){
  return () =>h("i",
  {class:name}
  )
}
const menuOptions = ref(
  [
  {
    label:() => h(
      RouterLink,
      {
        to: "/dean_dashtboard/add_info",
      },
       { default:()=>"Ma'lumotlarni qo'shish"}
      ),
      
     
      
      
    
    key: "Add_info",
    icon: render_mbd_icon("fas fa-square-plus"),
    
  },


 
  {
    label: "Kabinet",
    key: "Kabinet_dean",
    icon: render_mbd_icon("fas fa-circle-info"),
    children: [
      {
        type: "group",
        label:() => h(
      RouterLink,
      {
        to: "/dean_dashtboard/own_info",
      },
       { default:()=>"Shaxsiy ma'lumotlar"}
      ),
        key: "people",
        icon:render_mbd_icon("fas fa-user-pen")
      },
    
      
    ]
  }
]
)
let menu_show = ref(true)
     
</script>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
 .profil{
    font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
 }
    </style>