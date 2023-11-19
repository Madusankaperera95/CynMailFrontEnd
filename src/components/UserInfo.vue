<template>
  <nav class="flex justify-between items-center bg-gray-800 text-white p-4">
    <!-- Use ml-auto to push the following elements to the right -->
    <ul class="flex space-x-6 text-lg ml-auto">
      <li>
        <span class="font-bold uppercase">{{ userName }}</span>
      </li>
      <li>
        <form @submit="logout" class="inline" method="post" >
          <button type="submit" class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
            <i class="fa-solid fa-door-closed"></i> Logout
          </button>
        </form>
      </li>


    </ul>
  </nav>
</template>

<script>
import Axios from "axios";

export default {
  name: "UserInfo",
  data(){
    return {
      userName : ''
    }
  },
  methods:{
    user(){

      const bearerToken = localStorage.getItem("authToken");


      Axios.get(import.meta.env.VITE_APP_API_URL + 'user', {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
          .then((res) => {
             this.userName = res.data.userInfo.name

          })
          .catch((error) => {
            console.error("Error:", error);
          });
    },

    logout(e){
      e.preventDefault()
      const bearerToken = localStorage.getItem("authToken");


      Axios.delete(import.meta.env.VITE_APP_API_URL + 'logout', {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
          .then((res) => {
             localStorage.removeItem("authToken")
             this.$router.push('/login')

          })
          .catch((error) => {
            console.error("Error:", error);
          });
    }
  },

  created(){
    this.user()
  }
}
</script>

<style scoped>

</style>