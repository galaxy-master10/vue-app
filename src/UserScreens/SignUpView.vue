<template>
  <div>
    <h1>SHELF WISE</h1>

    <div class="main">
      <div class="image-section">
        <img :src="formSideImage" alt="Form Image" />
      </div>
      <div class="form-section">
        <h2>Sign in</h2>
        <form @submit.prevent="handleSubmit">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" v-model="form.name" required placeholder="enter name" />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" v-model="form.email" required placeholder="enter email" />
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" v-model="form.password" placeholder="enter password" required />
          <label for="repassword">Re-enter Password:</label>
          <input type="password" id="repassword" name="repassword" v-model="form.repassword" placeholder="re-enter password" required />
          <button type="submit">Sign up</button>
        </form>

        <section>
          <img :src="itsme" alt="itsme" />
          <img :src="csam" alt="csam" />
        </section>
        <p>
          Have an account?
          <router-link to="/signin">Sign in</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import formSideImage from '../assets/bookshelf-bg-small.webp'
import itsme from '../assets/itsmee.webp';
import csam from '../assets/csam.png';
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import UserService from '@/modules/Members/Services/UserService.js'

const form = ref({
  name: '',
  email: '',
  password: '',
  repassword: ''
})
const router = useRouter()
const userService = UserService;

// ...
const handleSubmit = (e) => {
  e.preventDefault();
  if (form.value.password !== form.value.repassword) {
    alert('Passwords do not match')
    return;
  }else{
  userService.register(form.value);
    const name = form.value.name;
    localStorage.setItem('name', name)
    localStorage.setItem('email', form.value.email)
    router.push('/HomeScreenUser')

  }
}
// ...

</script>

<style scoped>
h1 {
  color: #333;
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.image-section {
  width: 50%;
  height: 70%;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.form-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form label {
  margin-top: 10px;
  font-size: 1.3rem;
}

form input {
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #333;
  color: #fff;
  cursor: pointer;
}

section img {
  margin-top: 15px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-left: 15px;
  margin-right: 15px;
}

p {
  margin-top: 15px;
  font-size: 1.5rem;
  text-align: center;
}
toastify-container{
  top: 0;
  right: 0;
}
toast{
  background-color: #333;
  color: white;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-right: 10px;
  font-size: 1.2rem;
  text-align: center;
  width: 200px;
  position: absolute;
  z-index: 1000;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
</style>
