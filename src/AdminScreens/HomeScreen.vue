<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const handleClick = (button) => {
  if (button === 'Add Books') {
    router.push('/admin/addBook')
  } else if (button === 'Published Books') {
    router.push('/admin/publishedbooks')
  }
}

</script>

<template>
  <div class="main">
    <h1>Hey John, welcome</h1>
    <div class="buttons">
      <div>
        <button @click="handleClick('Add Books')">Add Books</button>
        <button @click="handleClick('Published Books')">Published Books</button>
      </div>
     <div>
       <button>View Users</button>
       <button>Post notification</button>
     </div>


    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  margin-top: 2rem;
  margin-left: 2rem;
  text-align: center;
}
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
width: 50%;
}
button {
  padding: 0.5rem;
  font-size: 1.3rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 5px;
}
.buttons div{
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;

}
button:hover {
  background-color: #34495e;
}
.main{
  margin-top: 50px;
  margin-left:auto;

  margin-right: auto;
  width: 80%;
  height: 500vh;
}

</style>