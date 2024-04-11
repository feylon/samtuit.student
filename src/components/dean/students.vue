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
  <facultet/>
  </template>
<script setup>
import facultet from "./components/facultets.vue"
import { reactive, ref } from "vue";

const formRef = ref(null);
let formValue = reactive({
    student_group: {
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
function handleValidateClick(e) {
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


</script>