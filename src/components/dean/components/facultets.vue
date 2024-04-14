<template>
    <div :class="class1.easy_card">
        <div :class="class1.easy_card_label">Fakultetlar</div>

        <n-table :bordered="false" :single-line="false">
            <thead>
                <tr class="w-[100%]">
                    <th class="text-center w-[30px]">№</th>
                    <th class="text-center  justify-center flex ">Fakultetlar</th>
                    <th class="text-center   justify-center">

                        <span class="block text-center">
                            Tahrir

                        </span>
                    </th>



                </tr>
            </thead>
            <tbody>
                <tr v-if="facultets.length > 0" v-for="(i, j) in facultets" :key="i._id">
                    <td class="text-center">{{ j + 1 }}</td>
                    <td class="text-center" :class="i.edited ? 'flex gap-2' : ''"><span v-if="!i.edited">{{ i.name }}</span>
                        <n-input v-model:value="i.name" size="large" v-else></n-input>
                        <button v-if="i.edited" @click="edit(i.name, i._id)"
                            class="w-[30px] h-[35px]  border-green-600 transition-colors duration-700 hover:bg-green-600 hover:text-white border-solid block border-[1px] rounded-md text-green-600">
                            <i class="fas fa-check"></i>

                        </button>
                        <button v-if="i.edited" @click="i.edited = false; get_facultets()"
                            class="w-[30px] h-[35px] border-red-600 transition-colors duration-700 hover:bg-red-600 hover:text-white border-solid block border-[1px] rounded-md text-red-600">
                            <i class="fas fa-xmark"></i>

                        </button>

                    </td>
                    <td class="">
                        <div class="flex justify-evenly w-[90%] mx-auto">
                            <button v-if="!i.edited" @click="i.edited = true"
                                class="w-[30px] h-[35px]  border-green-600 transition-colors duration-700 hover:bg-green-600 hover:text-white border-solid block border-[1px] rounded-md text-green-600">
                                <i class="fas fa-pen"></i>


                            </button>

                            <button @click="delete_facultet(i._id, i.name)"
                                class="w-[30px] h-[35px] border-red-600 transition-colors duration-700 hover:bg-red-600 hover:text-white border-solid block border-[1px] rounded-md text-red-600">
                                <i class="fas fa-trash-can"></i>
                            </button>
                        </div>
                    </td>

                </tr>
                <tr v-else>
                    <td></td>
                    <td class="text-center"><i>Fakultetlar mavjud emas</i></td>
                </tr>
                <tr>
                    <td>#</td>
                    <td>
                        <n-input v-model:value="item" placeholder="Fakultet qo'shish"></n-input>
                    </td>
                    <td class="flex">
                        <n-button @click="add" :disabled="item.length > 3 ? false : true" class="mx-auto text-green-600">
                            <i class="fas fa-square-plus me-1"></i> Qo'shish
                        </n-button>

                    </td>
                </tr>
            </tbody>
        </n-table>
    </div>
</template>
<script setup>
import { ref, onMounted, reactive } from "vue";
import { useMessage, useDialog } from "naive-ui";
import { useRouter } from "vue-router";
import url from "../../../../reuseble";
import class1 from "../../../../reuseble/class.js"

const router = useRouter();
const message = useMessage();
const dialog = useDialog();
let facultets = ref([])
let item = ref("");


// Backend bilan aloqa
let get_facultets = async () => {
    let data = await fetch(`${url.dean}facultets`, {
        method: "GET",
        headers: {
            token: localStorage.token,
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    if (data.status == 200) {
        data = await data.json();
        data.forEach(i => i.edited = false)

        facultets.value = data;
    }
}
async function delete_facultet(id, name) {
    try {
        dialog.success({
            title: `Fakultetni o'chirish`,
            content: `${name} yo'nalishini o'chirasizmi ?, Tizimda xatoliklarga olib kelishi mumkin`,
            positiveText: "Albatta",
            negativeText: "Yo'q",
            maskClosable: true,
            onMaskClick: () => {
                return;
            },
            onPositiveClick: async () => {
                try {
                    let data = await fetch(`${url.dean}/facultets/${id}`, {
                        method: "DELETE",
                        headers: {
                            token: localStorage.token,
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    });
                    if (data.status == 200) return get_facultets()
                    else {
                        return router.push('/')
                    }
                } catch (error) {
                    console.log(error)
                };
            },
            onEsc: () => {
                message.success("O'chirish bekor qilindi");
            }
        })

    } catch (error) {

    }
}
async function add() {
    if (item.length <= 3) return;
    try {
        let data = await fetch(`${url.dean}/add_facultet`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                token: localStorage.token
            },
            body: JSON.stringify({ name: item.value.trim() })
        });
        if (data.status == 201) {
            message.success(`${item.value} fakulteti yaratildi`);
            item.value = "";
            return get_facultets();
        }
        if (data.status == 403) {
            message.warning(`${item.value} fakulteti mavjud`);
            return;
        }
    } catch (error) {
        console.log(error)
    }

}
async function edit(name, id) {
    name = name.trim();
//     const item = facultets.value.findIndex(i => { return i.name == name })
//    console.log(facultets.value)
//     if (facultets.value[item].name == name) {
//         facultets.value[item].edited = false;
//         return
//     };
    try {
        let data = await fetch(`${url.dean}/facultets/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ name }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                token: localStorage.token
            }
        });
        console.log(data.status)
        if (data.status == 403) return message.error(`${name} o'xshash nom mavjud, boshqa nom kiriting`);
        if (data.status == 401) return router.push("/");
        if (data.status == 201) { message.success("Muvaqiyatli o'zgartirildi"); get_facultets(); return; }
    } catch (error) {
        console.log(error)
    }
}
onMounted(async () => {
    get_facultets();

});

</script>
 