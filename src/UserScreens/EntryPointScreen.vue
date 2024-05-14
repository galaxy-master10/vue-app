<template>
  <div class="main">
    <h1>Welcome to SHELF WISE</h1>
    <div class="buttons">
      <button @click="handleClick('Admin')">Admin</button>
      <button @click="handleClick('Member')">Member</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const handleClick = (role) => {
  if (role === 'Admin') {
    router.push('/HomeScreen')
  } else {
    router.push('/signin')
  }
}
</script>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;

}
h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
}
.buttons{
  display: flex;
  justify-content: space-evenly;
  width: 50%;
}
button{
  padding: 0.5rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

</style>
