<template>
  <div class="mx-4">
    <div
        class="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24"
    >
      <header class="text-center">
        <h2 class="text-2xl font-bold uppercase mb-1">
          Register
        </h2>

      </header>
      <form @submit="registerUser" method="post">

        <div class="mb-6">
          <label for="name" class="inline-block text-lg mb-2">
            Name
          </label>
          <input
              type="text"
              class="border border-gray-200 rounded p-2 w-full"
              v-model="formData.name"

          />

        </div>

        <div class="mb-6">
          <label for="email" class="inline-block text-lg mb-2"
          >Email</label
          >
          <input
              type="email"
              class="border border-gray-200 rounded p-2 w-full"
              v-model="formData.email"

          />

        </div>

        <div class="mb-6">
          <label
              for="password"
              class="inline-block text-lg mb-2"
          >
            Password
          </label>
          <input
              type="password"
              class="border border-gray-200 rounded p-2 w-full"
              v-model="formData.password"
          />

        </div>

        <div class="mb-6">
          <label
              for="password2"
              class="inline-block text-lg mb-2"
          >
            Confirm Password
          </label>
          <input
              type="password"
              class="border border-gray-200 rounded p-2 w-full"
              v-model="formData.password_confirmation"
          />

        </div>

        <div class="mb-6">
          <button
              type="submit"
              class="bg-red-400  text-white rounded py-2 px-4 hover:bg-black"
          >
            Sign Up
          </button>
        </div>

        <div class="mt-8">
          <p>
            Already have an account?
            <a href="/login" class="text-laravel"
            >Login</a
            >
          </p>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import Axios from "axios";
export default {
  name: "Login",
  data()
  {
    return {
      formData : {
        email:'',
        name:'',
        password:'',
        password_confirmation:''
      },

    }
  },

  methods:{
    registerUser(e){
      e.preventDefault();
      Axios.post(import.meta.env.VITE_APP_API_URL+'register',this.formData).then((res) => {
        localStorage.setItem("authToken", res.data.token);
        this.$router.push('/dashboard')
      }).catch((e) => console.log(e))

    }
  }
}
</script>

<style scoped>

</style>