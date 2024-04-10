<template>

Talabalarni qo'shish

<n-form
    ref="formRef"
    inline
    :label-width="80"
    :model="formValue"
    :rules="rules"
    :size="`medium`"
  >
    <n-form-item label="Name" path="student_group.name">
      <n-input v-model:value="formValue.student_group.name" placeholder="Input Name" />
    </n-form-item>
    <n-form-item label="Age" path="student_group.age">
      <n-input v-model:value="formValue.student_group.age" placeholder="Input Age" />
    </n-form-item>
    
    <n-form-item>
      <n-button @click="handleValidateClick">
        Tekshirish
      </n-button>
    </n-form-item>
  </n-form>

  <div class="w-[100%] p-3 shadow-lg">
    <div class="font-bold text-[18px] mb-3">Fakultetlar</div>
  
    <n-table :bordered="false" :single-line="false">
    <thead>
      <tr>
        <th class="text-center w-[30px]">№</th>
        <th class="text-center w-[100%] flex justify-center">Fakultetlar</th>
        
        
      </tr>
    </thead>
    <tbody>
      <tr v-for="(i, j) in facultets" :key="i._id">
        <td class="text-center">{{ j + 1}}</td>
        <td class="text-center">{{i.name}}</td>
        
      </tr>

    </tbody>
</n-table>
  </div>
</template>
<script setup>
import {ref, onMounted, reactive} from "vue";
import {useMessage} from "naive-ui";
import url from "../../../reuseble"
const message = useMessage()
const formRef = ref(null);
let facultets = ref([])
let formValue = reactive({ student_group: {
            name: "",
            age: ""
          },
          });

let rules = reactive({
          student_group: {
            name: {
              required: true,
              message: "Guruh nomini kiriting",
              trigger: "blur"
            },
            age: {
              required: true,
              message: "Please input your age",
              trigger: ["input", "blur"]
            }
          }
        });       
       function  handleValidateClick(e) {
          e.preventDefault();
          formRef.value?.validate((errors) => {
            if (!errors) {
              message.success("Valid");
              console.log(JSON.stringify(formValue))
            } else {
        
              message.error("Formani to'ldiring");
            }
          });
        };

        // Backend bilan aloqa
  let get_facultets = async ()=>{
    let data = await fetch(`${url.dean}facultets`);
     if(data.status == 200)
     {
      data = await data.json();
     
      facultets.value = data;
     } 
  }
        onMounted(async ()=>{
          get_facultets();
     
    });
       
</script>
<style>

</style>