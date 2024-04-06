<template>
<div class="w-100 h-[40px] bg-green-600  flex ps-0 justify-between items-center">
<div>
    <div class="flex h-100">
        <div class="bg-green-700 h-[40px]  text-white items-center h-[100%] flex  font-semibold text-center w-[300px] justify-center ">
        <span class="text-[20px]  select-all">
            Hemis OTM
        </span>
        
    </div>
<div class="text-white cursor-pointer ms-2 items-center flex">
    <span class="text-[20px] material-symbols-outlined">
menu
</span>
</div>

    </div>
</div>

<n-dropdown :options="option" >
    <div class="profil  text-white select-none border-l-[1px] h-[100%] flex justify-center items-center w-[240px] duration-700 cursor-pointer ps-3 border-solid pe-3 border-green-700 hover:bg-green-800">
<img src="../../pictures/profil.png" class="rounded-[50%] w-[35px]" alt="">
<!-- <n-avatar
      
      :size="small"
      src="../../pictures/profil.png"
    /> -->
<div>
    <div class="flex items-center justify-center flex-col mt-1">
    <span class="block ms-2 mt-2 font-bold profil text-[13px]">   Ergashev J.J.</span>
<span class="block mb-3 text-[11px] text-center">
    Dekan 
    
</span>
</div>
</div>
</div>
</n-dropdown>
</div>   



    </template>
    <script setup>
import { onMounted,ref, h, reactive } from 'vue';
import { useRouter } from 'vue-router';
// let option = reactive();
const router = useRouter();
   let itr = ref(0);
  //  setInterval(() => {
  //   console.log(itr.value);
  //   itr.value ++
  //  }, 1000);





  let data = {
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
  "__v": 0
}
let option = [
        {
          key: "header",
          type: "render",
          render:()=> h("div",{class:"flex p-3 ps-2 w-[215px]"},
          [
          h("div", {class:"flex items-center select-none"},[
          h("img", {
        round: true,
        style: "margin-right: 12px;",
        src: "http://localhost:5173/src/pictures/profil.png",
        class:"w-[60px] rounded-md m-3",
        title: `${data.name } ${data.surname }`
      }),

      h('div',
      [
      h("div",{class:"text-[13px] font-bold"},h("div",
      {innerHTML :`${data.name } ${data.surname }`}
      )),
      
      h("div",{class:"text-[13px] text-center"},h("div",
      {innerHTML :`Dekan ${itr.value}`}
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
              console.log('Tizimdan chiqish');
              return router.push("/")
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

</script>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
 .profil{
    font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
 }
    </style>