<template>
<div class="w-100 h-[40px] bg-green-600  flex ps-0 justify-between items-center">
<div>
    <div class="flex h-100">
        <div class="bg-green-700 h-[40px]  text-white items-center h-[100%] flex  font-semibold text-center w-[300px] justify-center ">
        <span class="text-[20px] select-all">
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

<n-dropdown :options="option" @select="handleSelect">
    <div class="profil  text-white  border-l-[1px] h-[100%] flex items-center w-[180px] duration-700 cursor-pointer ps-3 border-solid pe-3 border-green-700 hover:bg-green-800">
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
import { ref, h } from 'vue';
import { useMessage, NAvatar, NText } from "naive-ui";

function renderCustomHeader() {
  return h(
    "div",
    {
      style: "display: flex; align-items: center; padding: 8px 12px;"
    },
    [
      h(NAvatar, {
        round: true,
        style: "margin-right: 12px;",
        src: "../../pictures/profil.png"
      }),
      h("div", null, [
        h("div", null, [
          h(NText, { depth: 2 }, { default: () => "A worker at Hangzhou" })
        ]),
        h("div", { style: "font-size: 12px;" }, [
          h(NText, { depth: 3 }, { default: () => "<???>" })
        ])
      ])
    ]
  );
}


let option = [
        {
          key: "header",
          type: "render",
          render: renderCustomHeader
        },
        {
          key: "header-divider",
          type: "divider"
        },
        {
          label: "lpsum1",
          key: "stmt1"
        },
        {
          label: "lpsum2",
          key: "stmt2"
        },
        {
          label: "lpsum3",
          key: "stmt3"
        }
      ];
      function handleSelect(key) {
        console.log(key);
      }

</script>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
 .profil{
    font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
 }
    </style>