<template>
 <div>

   <UserInfo />

   <div class="flex justify-between items-center">
     <!-- Your other content goes here -->

     <!-- Button at the right end -->

     <div
     v-show="showUpdateModal"
     class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-10"
     >
     <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
       <div class="flex items-center justify-between">
         <h3 class="text-2xl">Update Contact Group</h3>
         <svg
             @click="showUpdateModal = false"
             xmlns="http://www.w3.org/2000/svg"
             class="w-8 h-8 text-red-900 cursor-pointer"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
         >
           <path
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
           />
         </svg>
       </div>
       <div class="mt-4">
         <form @submit="UpdateGroup" method="post">
            <input type="hidden" v-model="updateFormData.id" />
           <div class="mb-6">
             <label for="groupName" class="inline-block text-lg mb-2"
             >Group Name</label
             >
             <input
                 type="text"
                 class="border border-gray-200 rounded p-2 w-full"
                 v-model="updateFormData.groupName"

             />

           </div>



           <div class="mb-6">
             <button
                 type="submit"
                 class="bg-red-400 text-white rounded py-2 px-4 hover:bg-black"
             >
               Submit
             </button>

           </div>


         </form>

       </div>
     </div>
   </div>

     <div
         v-show="showModal"
         class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-10"
     >
       <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
         <div class="flex items-center justify-between">
           <h3 class="text-2xl">Add New Contact Group</h3>
           <svg
               @click="showModal = false"
               xmlns="http://www.w3.org/2000/svg"
               class="w-8 h-8 text-red-900 cursor-pointer"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
           >
             <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 stroke-width="2"
                 d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
             />
           </svg>
         </div>
         <div class="mt-4">
           <form @submit="registerGroup" method="post">

             <div class="mb-6">
               <label for="groupName" class="inline-block text-lg mb-2"
               >Group Name</label
               >
               <input
                   type="text"
                   class="border border-gray-200 rounded p-2 w-full"
                   v-model="formData.groupName"

               />

             </div>



             <div class="mb-6">
               <button
                   type="submit"
                   class="bg-red-400 text-white rounded py-2 px-4 hover:bg-black"
               >
                 Submit
               </button>

             </div>


           </form>

         </div>
       </div>
     </div>
     <button @click="openModel" class="text-white rounded py-2 px-4 hover:bg-black bg-amber-600 ml-auto bg-lime-500">
       Add New Contact Group
     </button>
   </div>

   <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

     <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
       <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
       <tr>
         <th scope="col" class="px-6 py-3">
           Contact Group
         </th>

         <th scope="col" class="px-6 py-3">
           Action
         </th>
         <th scope="col" class="px-6 py-3">
           Contacts
         </th>
       </tr>
       </thead>
       <tbody>

       <tr v-for="contact in contacts" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" :key="contact.id">
         <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
           {{ contact.groupName  }}
         </th>
         <td class="px-6 py-4">
           <div class="flex space-x-6">
           <button @click="OpenUpdateModal(contact)" class="text-white rounded py-2 px-4 hover:bg-black bg-amber-600">Edit</button>
           <form @submit.prevent="deleteRecord(contact.id)">
             <input type="submit" class="text-white rounded py-2 px-4 hover:bg-black bg-red-600" value="Delete" />
           </form>
           </div>
         </td>
         <td class="px-6 py-4">
           <router-link :to="{ name: 'Contacts', params: { contactGroupId: contact.id } }" class="text-white rounded py-2 px-4 hover:bg-black bg-amber-600">View Contacts</router-link>
         </td>
       </tr>

       </tbody>

     </table>
   </div>


 </div>
</template>

<script>
import UserInfo from "../components/UserInfo.vue";
import Axios from "axios";
export default {
  name: "DashBoard",
  components: {UserInfo},
  data(){
    return {
      contacts:[],
      showModal:false,
      showUpdateModal:false,
      formData:{
        groupName:'',
      },
      updateFormData:{
        id:'',
        groupName:'',
      }
    }
  },

  methods:{

    contactGroups(){
      const bearerToken = localStorage.getItem("authToken");


      Axios.get(import.meta.env.VITE_APP_API_URL + 'contactGroups', {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
          .then((res) => {
            this.contacts = res.data

          })
          .catch((error) => {
            console.error("Error:", error);
          });
    },
    deleteRecord(id)
    {
      const bearerToken = localStorage.getItem("authToken");


      Axios.delete(import.meta.env.VITE_APP_API_URL + 'contactGroups'+'/' +id, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
          .then((res) => {
            this.contactGroups()


          })
          .catch((error) => {
            console.error("Error:", error);
          });
    },
    registerGroup(e){
      e.preventDefault();
      const bearerToken = localStorage.getItem("authToken");
      Axios.post(import.meta.env.VITE_APP_API_URL+'contactGroups',this.formData,{
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }).then((res) => {
        this.contactGroups()
        this.showModal = false

      }).catch((e) => console.log(e))
    },

    UpdateGroup(e)
    {
      e.preventDefault()
      const bearerToken = localStorage.getItem("authToken");
      Axios.put(import.meta.env.VITE_APP_API_URL+'contactGroups'+'/'+this.updateFormData.id,this.updateFormData,{
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }).then((res) => {
        this.contactGroups()
        this.showUpdateModal = false

      }).catch((e) => console.log(e))
    },

    openModel(){
      this.showModal=true
      this.formData.groupName = ''
    },
    OpenUpdateModal(contact){

      this.updateFormData.id = contact.id
      this.updateFormData.groupName = contact.groupName
      this.showUpdateModal = true
    }

  },

  created() {
    this.contactGroups()
  }


}
</script>

<style scoped>

</style>