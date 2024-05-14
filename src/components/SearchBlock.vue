<template>
  <div class="main">
    <div class="quote">
      <p> {{greeting}} {{name}}</p>
      <blockquote>
        "The more that you read, the more things you will know.
        The more that you learn, the more places you'll go."
        <footer>- Franklin D. Roosevelt</footer>
      </blockquote>
    </div>
    <div class="search">
      <label for="category">Search the category</label>
      <select name="category" id="category" @change="onCategoryChange">
        <option value="All">All</option>
        <option v-for="category in categories" :key="category" :value="category">{{category}}</option>
      </select>
      <div class="vl"></div>
      <div>
        <SearchInput width="18.75" @onEnter="onSearch" />
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchInput from '@/components/SearchInput.vue'
import { onMounted, ref } from 'vue'
import BooksService from '@/modules/Books/Services/BooksService.js'

const emit = defineEmits(['onCategoryChange', 'onSearch']);

const onCategoryChange = (event) => {
  emit('onCategoryChange', event.target.value);
}

const onSearch = (searchTerm) => {
  emit('onSearch', searchTerm);
}

const name = localStorage.getItem('name');
const greeting = ref('');
const setGreeting = () => {
  const hour = new Date().getHours();
  if(hour < 12){
    greeting.value = 'Good morning';
  } else{
    greeting.value = 'Good afternoon';
  }
}

const booksService = BooksService;
const categories = ref([]);

onMounted(async () => {
  await fetchCategories();
});
const fetchCategories = async () => {
  categories.value = await booksService.getCategories();
}
setGreeting();
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  background-color: #2c3e50;
  margin-left: 2rem;
  margin-right: 2rem;
}

.quote {
  text-align: center;
}

.quote p {
  font-size: 1.5rem;
}
blockquote{
  font-size: 1.3rem;
  font-style: italic;
}

.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.25rem;
  margin-bottom: 1rem;
}

.search label {
  margin-right: 0.625rem;
  font-size: 1.3rem;
}

.search select {
  border-radius: 0.313rem;
  padding: 0.313rem;
  font-size: 1rem;
}

.vl {
  border-left: 6px solid green;
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
}

</style>