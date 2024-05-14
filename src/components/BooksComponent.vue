<template>
  <section class="books">
    <div class="trending-topics">
      <h2>All Books</h2>
      <ul>
        <!-- Render multiple instances of the Book component -->
        <li v-for="book in filteredBooks" :key="book.id">
          <Book :title="book.title" :author="book.author_name" :image="book.image" :show-details="true"  :description="book.description"/>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { computed, defineProps, onMounted } from 'vue'
import Book from '@/components/Book.vue'

const props = defineProps({
  books: Array
});
let language = ""
onMounted(() => {
  language = localStorage.getItem('language');
});
const filteredBooks = computed(() => {
  return props.books.flatMap(book =>
    book.languages.filter(lang => lang.language === language).map(lang => ({
      ...book,
      title: lang.title,
      description: lang.description
    }))
  )});
</script>

<style scoped>
/* Add your book styles here */
.books {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin-left: 2rem;
  margin-right: 2rem;
}

.trending-topics ul,
.novel-books ul {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
