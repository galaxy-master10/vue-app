<script setup>
import back from '@/assets/2203523_arrow_back_botton_left_icon.png';
import SearchInput from '@/components/SearchInput.vue'
import Book from '@/components/Book.vue'

const goBack = () => {
  window.history.back();
};

</script>

<template>
  <div class="main">

    <div class="nav">
      <img :src="back" alt="back" class="icon" @click="goBack()" />
      <h1>Published Books</h1>
    </div>
    <div class="search">
      <SearchInput width="40" />
    </div>
    <div class="books">
      <div class="book">
        <Book :show-details="false" />
        <div class="buttons">
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
      <div class="book">
        <Book :show-details="false" />
        <div class="buttons">
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
      <div class="book">
        <Book :show-details="false" />
        <div class="buttons">
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
      <div class="book">
        <Book :show-details="false" />
        <div class="buttons">
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div> <div class="book">
      <Book :show-details="false" />
      <div class="buttons">
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div> <div class="book">
      <Book :show-details="false" />
      <div class="buttons">
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div> <div class="book">
      <Book :show-details="false" />
      <div class="buttons">
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div> <div class="book">
      <Book :show-details="false" />
      <div class="buttons">
        <button>Update</button>
        <button>Delete</button>
      </div>

    </div>

    </div>
  </div>

</template>

<style scoped>
.nav{
  display : flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;

}
h1{
  color: #2c3e50;
  flex: 1;
  text-align: center;
  margin-bottom: 2rem;
}
.icon {
  width: 40px; /* Adjust the width as needed */
  height: 40px; /* Adjust the height as needed */
  margin-left: 5rem;
}
.books{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  margin-left: 2rem;
  margin-right: 2rem;
}
.buttons{
  display: flex;
  justify-content: space-evenly;
  border: 1px solid brown;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
}
.search{
  margin-right: auto;
  margin-left: auto;
  width: 70%;
}



</style>