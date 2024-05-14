<script setup>
import FilterDropdown from '@/components/FilterDropdown.vue';
const genres = [
  'Fiction',
  'Non-Fiction',
  'Science Fiction',
  'Fantasy',
  'Spirituality',
  'Philosophy',
  'Business',
  'Finance',
];
const years = [
  '2021',
  '2020',
  '2019',
  '2018',
  '2017',
  '2016',
  '2015',
  '2014',
];
const categories = [
  'Best Sellers',
  'New Releases',
  'Upcoming',
  'Award Winners',
  'Recommended',
  'Top Rated',
];
const books = [
  { id: 1, title: 'Book 1', author: 'Author 1', image: 'book1.jpg' },
  { id: 2, title: 'Book 2', author: 'Author 2', image: 'book2.jpg' },
  { id: 3, title: 'Book 3', author: 'Author 3', image: 'book3.jpg' },
  { id: 4, title: 'Book 4', author: 'Author 4', image: 'book4.jpg' },
  { id: 5, title: 'Book 5', author: 'Author 5', image: 'book5.jpg' },
  { id: 6, title: 'Book 6', author: 'Author 6', image: 'book6.jpg'},
  { id: 7, title: 'Book 7', author: 'Author 7', image: 'book7.jpg'},
  { id: 8, title: 'Book 8', author: 'Author 8', image: 'book8.jpg'},
  { id: 9, title: 'Book 9', author: 'Author 9', image: 'book9.jpg'},
  { id: 10, title: 'Book 10', author: 'Author 10', image: 'book10.jpg'},

  // Add more books as needed
];

import NavbarWithSearch from '@/components/NavbarWithSearch.vue'
import Book from '@/components/Book.vue'
</script>

<template>
  <NavbarWithSearch />
  <div class="filterOptions">
    <FilterDropdown title="genre" :options="genres" />
    <FilterDropdown title="years" :options="years" />
    <FilterDropdown title="categories" :options="categories" />

  </div>
  <div class="books">
    <ul>
      <li v-for="book in books" :key="book.id">
        <Book :title="book.title" :author="book.author" :image="book.image" :show-details="false" />

      </li>
    </ul>

  </div>


</template>

<style scoped>


.books ul {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-right: 2rem;
  margin-left: 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
}
.filterOptions{
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
  flex-direction: row;
}
</style>