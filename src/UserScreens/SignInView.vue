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
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" v-model="form.email" required placeholder="enter email" />
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" v-model="form.password" placeholder="enter password" required />
          <button type="submit">login</button>
        </form>

        <section>
          <img :src="itsme" alt="itsme" />
          <img :src="csam" alt="csam" />
        </section>
        <p>
          Don't have an account? <router-link to="/signup">Sign up</router-link>
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
import UserService from '@/modules/Members/Services/UserService.js'

const form = ref({
  email: '',
  password: '',
})
const router = useRouter()
const userService = UserService;
// login user



const handleSubmit = async () => {
  // Check if form value is not null
  if (!form.value) {
    alert('Please fill in the form');
    return;
  }

  // Attempt to login
  const response = await userService.login(form.value);
  localStorage.setItem('response', JSON.stringify(response))
  localStorage.setItem('email', form.value.email)

  // Check if login was successful
  if (response.message === 'Invalid details') {
    alert('Invalid email or password');
    return;
  }else{
    const name = form.value.email.split('@')[0];
    localStorage.setItem('name', name);

    // Check user role and navigate accordingly
    if (form.value.email.includes('@admin.shelfwise')) {
      localStorage.setItem("role", "admin");
      router.push('/HomeScreen');
    } else {
      localStorage.setItem("role", "user");
      router.push('/HomeScreenUser');
    }
  }

  // Extract name from email

}

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
section  img{
  margin-top: 15px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-left: 15px;
  margin-right: 15px;
}
p{
  margin-top: 15px;
  font-size: 1.5rem;
  text-align: center;
}
</style>
