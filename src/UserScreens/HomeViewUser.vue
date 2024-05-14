
<template>
  <Navigation />
  <SearchBlock @onCategoryChange="fetchBooks" @onSearch="onSearch" />
  <BooksComponent :books="booksToShow" />

</template>

<script setup>
import SearchBlock from '@/components/SearchBlock.vue'
import BooksComponent from '@/components/BooksComponent.vue'
import { onMounted, ref } from 'vue'
import BooksService from '@/modules/Books/Services/BooksService.js'
import Navigation from '@/components/Navigation.vue'


const booksService = BooksService;
const booksToShow = ref([]);

onMounted(async () => {
  const books = await booksService.getBooks();
  booksToShow.value = books.filter(book => book.languages.length > 0);
});

const fetchBooks = async (category) => {
  if (category === 'All') {
    const books = await booksService.getBooks();
    booksToShow.value = books.filter(book => book.languages.length > 0);
  } else {
    const newBooks  = await booksService.filterBooksOnCategory(category);

    booksToShow.value = newBooks.filter(book => book.languages.length > 0);

  }
}

const onSearch = async (searchTerm) => {
  booksToShow.value = await booksService.searchBooks(searchTerm);
}
</script>


<style scoped>
/* Add your home screen user styles here */

</style>