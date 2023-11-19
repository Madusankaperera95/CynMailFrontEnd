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
            <h3 class="text-2xl">Update Contact</h3>
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
            <form @submit="UpdateContact" method="post">
              <input type="hidden" v-model="updateFormData.id" />
              <div class="mb-6">
                <label for="firstName" class="inline-block text-lg mb-2"
                >First Name</label
                >
                <input
                    type="text"
                    class="border border-gray-200 rounded p-2 w-full"
                    v-model="updateFormData.firstName"

                />

              </div>
              <div class="mb-6">
                <label for="lastName" class="inline-block text-lg mb-2"
                >Last Name</label
                >
                <input
                    type="text"
                    class="border border-gray-200 rounded p-2 w-full"
                    v-model="updateFormData.lastName"

                />

              </div>
              <div class="mb-6">
                <label for="phone" class="inline-block text-lg mb-2"
                >Phone Number</label
                >
                <input
                    type="text"
                    class="border border-gray-200 rounded p-2 w-full"
                    v-model="updateFormData.phone"

                />

              </div>

              <div class="mb-6">
                <label for="email" class="inline-block text-lg mb-2"
                >Email</label
                >
                <input
                    type="text"
                    class="border border-gray-200 rounded p-2 w-full"
                    v-model="updateFormData.email"

                />

              </div>
              <div class="mb-6">
                <label for="photo" class="inline-block text-lg mb-2"
                >Photo</label
                >
                <input
                    type="file"
                    class="border border-gray-200 rounded p-2 w-full"
                    @change="handleFileChange"

                />

              </div>

              <div class="mb-6">
                <label for="address" class="inline-block text-lg mb-2"
                >Address</label
                >
                <input
                    type="text"
                    class="border border-gray-200 rounded p-2 w-full"
                    v-model="updateFormData.address"

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
            <h3 class="text-2xl">Add New Contact</h3>
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
            <form @submit="registerContact" method="post">

              <div class="mb-6">
                <label for="firstName" class="inline-block text-lg mb-2"
                >First Name</label
                >
                <input
                    type="text"
                    class="border border-gray-200 rounded p-2 w-full"
                    v-model="formData.firstName"

                />

              </div>
              <div class="mb-6">
                <label for="lastName" class="inline-block text-lg mb-2"
                >Last Name</label
                >
                <input
                    type="text"
                    class="border border-gray-200 rounded p-2 w-full"
                    v-model="formData.lastName"

                />

              </div>
              <div class="mb-6">
                <label for="phone" class="inline-block text-lg mb-2"
                >Phone Number</label
                >
                <input
                    type="text"
                    class="border border-gray-200 rounded p-2 w-full"
                    v-model="formData.phone"

                />

              </div>

              <div class="mb-6">
                <label for="email" class="inline-block text-lg mb-2"
                >Email</label
                >
                <input
                    type="text"
                    class="border border-gray-200 rounded p-2 w-full"
                    v-model="formData.email"

                />

              </div>
              <div class="mb-6">
                <label for="photo" class="inline-block text-lg mb-2"
                >Photo</label
                >
                <input
                    type="file"
                    class="border border-gray-200 rounded p-2 w-full"
                    @change="handleFileChange"

                />

              </div>

              <div class="mb-6">
                <label for="address" class="inline-block text-lg mb-2"
                >Address</label
                >
                <input
                    type="text"
                    class="border border-gray-200 rounded p-2 w-full"
                    v-model="formData.address"

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
        Add New Contact
      </button>
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            First Name
          </th>
          <th scope="col" class="px-6 py-3">
            Last Name
          </th>
          <th scope="col" class="px-6 py-3">
           phone
          </th>
          <th scope="col" class="px-6 py-3">
            Email
          </th>
          <th scope="col" class="px-6 py-3">
            Photo
          </th>
          <th scope="col" class="px-6 py-3">
            Address
          </th>

          <th scope="col" class="px-6 py-3">
            Action
          </th>

        </tr>
        </thead>
        <tbody>

        <tr v-for="contact in contacts" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" :key="contact.id">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ contact.firstName  }}
          </th>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ contact.lastName  }}
          </th>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ contact.phone  }}
          </th>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ contact.email  }}
          </th>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             <img :src="contact.photo" />
          </th>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ contact.address  }}
          </th>
          <td class="px-6 py-4">
            <div class="flex space-x-6">
              <button @click="OpenUpdateModal(contact)" class="text-white rounded py-2 px-4 hover:bg-black bg-amber-600">Edit</button>
              <form @submit.prevent="deleteRecord(contact.id)">
                <input type="submit" class="text-white rounded py-2 px-4 hover:bg-black bg-red-600" value="Delete" />
              </form>
            </div>
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
  name: "Contacts",

  components: {UserInfo},
  data(){
    return {
      contacts:[],
      showModal:false,
      showUpdateModal:false,
      formData:{
        firstName:'',
        lastName:'',
        phone:'',
        email:'',
        photo:null,
        address:''

      },
      updateFormData:{
        id:'',
        firstName:'',
        lastName:'',
        phone:'',
        email:'',
        photo:null,
        address:''
      }
    }
  },

  methods:{
    handleFileChange(event) {
      this.formData.photo = event.target.files[0];
      console.log(this.formData)
    },

    allContacts(){
      const bearerToken = localStorage.getItem("authToken");


      Axios.get(import.meta.env.VITE_APP_API_URL + 'contactGroup'+'/'+this.$route.params.contactGroupId+'/'+'contacts', {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
          .then((res) => {
            this.contacts = res.data.contacts

          })
          .catch((error) => {
            console.error("Error:", error);
          });
    },
    deleteRecord(id)
    {
      const bearerToken = localStorage.getItem("authToken");


      Axios.delete(import.meta.env.VITE_APP_API_URL + 'contactGroup'+'/' +this.$route.params.contactGroupId+'/'+'contact/'+id, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
          .then((res) => {
            this.allContacts()


          })
          .catch((error) => {
            console.error("Error:", error);
          });
    },
    registerContact(e){
      e.preventDefault();
      const bearerToken = localStorage.getItem("authToken");
      const newformData = new FormData();
      newformData.append('firstName', this.formData.firstName);
      newformData.append('lastName', this.formData.lastName);
      newformData.append('phone', this.formData.phone);
      newformData.append('email', this.formData.email);
      newformData.append('photo', this.formData.photo);
      newformData.append('address', this.formData.address);
      Axios.post(import.meta.env.VITE_APP_API_URL+ 'contactGroup'+'/'+this.$route.params.contactGroupId+'/'+'contact',newformData,{
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }).then((res) => {
        this.allContacts()
        this.showModal = false

      }).catch((e) => console.log(e))
    },

    UpdateContact(e)
    {
      e.preventDefault()
      const bearerToken = localStorage.getItem("authToken");
      const UpdatedformData = new FormData();
      UpdatedformData.append('firstName', this.updateFormData.firstName);
      UpdatedformData.append('lastName', this.updateFormData.lastName);
      UpdatedformData.append('phone', this.updateFormData.phone);
      UpdatedformData.append('email', this.updateFormData.email);
      UpdatedformData.append('photo', this.updateFormData.photo);
      UpdatedformData.append('address', this.updateFormData.address);
      Axios.put(import.meta.env.VITE_APP_API_URL+'contactGroup'+'/'+this.$route.params.contactGroupId+'/'+'contact/'+this.updateFormData.id,UpdatedformData,{
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }).then((res) => {
        this.contacts()
        this.showUpdateModal = false

      }).catch((e) => console.log(e))
    },

    openModel(){
      this.showModal=true
      this.formData.groupName = ''
    },
    OpenUpdateModal(contact){

      this.updateFormData.id = contact.id
      this.updateFormData.firstName = contact.firstName
      this.updateFormData.lastName = contact.lastName
      this.updateFormData.address = contact.address
      this.updateFormData.phone = contact.phone
      this.updateFormData.photo = null
      this.updateFormData.email = contact.email
      this.showUpdateModal = true
    }

  },

  created() {
    this.allContacts()
  }


}
</script>

<style scoped>

</style>