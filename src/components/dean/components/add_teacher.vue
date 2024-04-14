<template>
    <div :class="class1.easy_card">
        <div :class="class1.easy_card_label">O'qituvchini qo'shish</div>
    
    <n-form 
        class="w-[100%]   sm:justify-center flex flex-wrap md:justify-center lg:justify-start lg:gap-3"
        ref="formRef"
        inline
        :label-width="80"
        :model="formValue"
        :rules="rules"
      >
      <n-form-item label="Login" path="login">
          <n-input v-model:value="formValue.login" placeholder="Loginni kiriting" />
        </n-form-item>
        <n-form-item label="Parol" path="password">
          <n-input type="password" show-password-on="mousedown" v-model:value="formValue.password" placeholder="Parolni kiriting" />
        </n-form-item>
    
        <!-- <n-form-item label="Parol qaytadan" path="password_repeat">
          <n-input type="password" show-password-on="mousedown" v-model:value="password" placeholder="Parolni kiriting" />
        </n-form-item> -->
    
        <n-form-item label="Ismi" path="name">
          <n-input v-model:value="formValue.name" placeholder="Ismini kiriting" />
        </n-form-item>
    
        <n-form-item label="Familiya" path="surname">
          <n-input v-model:value="formValue.surname" placeholder="Familiyani kiriting" />
        </n-form-item>
        
    
        <n-form-item label="Tug'ilgan kuni" path="date_of_brith">
          <n-date-picker v-model:value="formValue.date_of_brith" placeholder="Tug'ilgan kuni" type="date" />
    
        </n-form-item>       
    
        
        <n-form-item label="Faolligi" path="active">
            <n-switch v-model:value="formValue.active" />
        </n-form-item> 
    
    
        <n-form-item label="Status" path="status">
            <n-switch v-model:value="formValue.status" />
        </n-form-item> 
    
        <n-form-item label="Telefon raqami" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="Raqamni kiriting" />
        </n-form-item>
        <n-form-item>
    
          <n-button @click="send">
            Qo'shish
          </n-button>
        </n-form-item>
        
    </n-form>
    
    </div>
    </template>
    <script setup>
    import {ref, reactive} from "vue";
    import { useRouter } from "vue-router";
    import {useMessage} from "naive-ui";
    import url from "../../../../reuseble";
    import class1 from "../../../../reuseble/class.js"
    const message = useMessage();
    const router = useRouter();
    let login = ref("");
    
    let formRef = ref(null)
    let formValue = ref({
            login:null,
            password:null,
            name:null,
            surname:null,
            date_of_brith: null,
            active:false,
            phone: null,
            status:false,
          });
     let rules = {
            login:{
              required: true,
              message: "loginni kiriting",
            
              trigger: ["input"]
            },
            password:{
                required: true,
              message: "Maydonni kiriting",
              trigger: ["input"]
            },
            password_repeat:{
                required: true,
              message: ()=>{
                if(password.value.length < 8) return "Maydonni kiriting";
                if(password.value != password1.value) return "Parollar o'xshash emas"
              },
              trigger: ["input"]
            },
            name:{
              required: true,
              message: "Maydonni kiriting",
              trigger: ["input"]
            },
            
            surname:{required: true,
              message: "Maydonni kiriting",
              trigger: ["input"]},
            
            date_of_brith:{required: true,
              message: "Maydonni kiriting",
              trigger: ['blur', 'change'],
              type:'number'
            },
    
            active:{required: false,
            },
            phone: {
              required: true,
              message: "Maydonni kiriting",
              trigger: ["input"]
            },
            status:{required: false,
              
            }
          }     
         async function send(e) {
            e.preventDefault();
            formRef.value?.validate(async(errors) => {
              try {
                if (!errors) {
                
                if(formValue.value.login.length < 5) return message.error("Login kamida 5 ta belgi bo'lishi lozim");
                if(formValue.value.password.length < 5) return message.error("Parol kamida 5 ta belgi bo'lishi lozim");
                if(formValue.value.name.length < 3) return message.error("Ism kamida 3 ta belgi bo'lishi lozim");
                if(formValue.value.surname.length < 5) return message.error("Familiya kamida 3 ta belgi bo'lishi lozim");
    
                if(formValue.value.phone.length < 9) return message.error("Telefon kamida 9 ta belgi bo'lishi lozim");
    
                try{
                    let data = await fetch(`${url.dean}/add_teacher`,{
                    method:"POST",
                    headers:{
                        "Content-type":"application/json; charset=UTF-8",
                        token:localStorage.token
                    },
                    body:JSON.stringify(formValue.value)
                });
                if(data.status == 401) return router.push("/");
                if(data.status == 403) {return message.error(`${formValue.value.login} ro'yxatdan o'tgan`)}
                if(data.status == 201){
                 message.success(formValue.value.name + " mufaqiyatli yaratildi");
           formValue.value = {
            login:null,
            password:null,
            name:null,
            surname:null,
            date_of_brith: null,
            active:false,
            phone: null,
            status:false,
          }
                 return    
                }
            }
                catch(err){
                    
                }
              } else {
                message.error("Maydonni to'ldiring");
              }
              } catch (error) {
                
              }
            });
          }
    
    </script>