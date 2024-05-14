<template>
  <div>
    <div class="nav">
      <img :src="back" alt="back" class="icon"  @click="goBack()"/>
      <h1>{{ title }}</h1>
      <select class="language-select" name="languages" id="languages" ref="languageSelect" @change="handleLanguageChange">
        <option value="en">EN</option>
        <option value="nl">NL</option>
        <option value="fr">FR</option>
      </select>
    </div>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" v-model="formData.title" />
      </div>
      <div class="form-group">
        <label for="isbn">Isbn</label>
        <input type="number" id="isbn" name="isbn" v-model="formData.isbn" />
      </div>
      <div class="form-group">
        <label for="author">Author</label>
        <input type="text" id="author" name="author" v-model="formData.author" />
      </div>
      <div class="form-group">
        <label for="year">Year</label>
        <input type="number" id="year" name="year" v-model="formData.year" />
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <input type="text" id="category" name="category" v-model="formData.category" />
      </div>
      <div class="form-group">
        <label for="genre">Genre</label>
        <input type="text" id="genre" name="genre" v-model="formData.genre" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" name="description" v-model="formData.description"></textarea>
      </div>
      <div v-if="title === 'Add Book'" class="form-group">
        <label for="image">Image</label>
        <input type="file" id="image" name="image" />
      </div>

      <button type="submit">{{ title }}</button>
    </form>
  </div>
</template>

<script setup>
import back from '@/assets/2203523_arrow_back_botton_left_icon.png';
import { ref } from 'vue';

const currentUrl = window.location.href;
const splittedUrl = currentUrl.split('/');
const lastUrl = splittedUrl[4];
let title = '';

if (lastUrl === 'addbook') {
  title = 'Add Book';
} else if (lastUrl === 'updatebook') {
  title = 'Update Book';
} else {
  title = 'Delete Book';
}

const goBack = () => {
  window.history.back();
};

const formData = ref({
  title: '',
  isbn: '',
  author: '',
  year: '',
  category: '',
  genre: '',
  description: ''
});

const handleSubmit = () => {
  console.log(formData.value);
};
</script>
<style scoped>
h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

input[type="file"] {
  width: 100%;
}

button {
  width: 10%;
  padding: 0.5rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #34495e;
}

.nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;

}

h1 {
  color: #2c3e50;
  flex: 1;
}

.icon {
  width: 40px; /* Adjust the width as needed */
  height: 40px; /* Adjust the height as needed */
  margin-left: 5rem;
}

</style>
