<template>
  <div class="book-details">
    <img :src="book" alt="book" class="book-image" />
    <div class="book-info">
      <h3>Title: {{title}}</h3>
      <p v-if="props.showDetails" class="description">
        <span>Description:</span> {{description}}
      </p>
      <p v-if="props.showDetails" class="author">
        <span>Author:</span> {{author}}
      </p>
    </div>
  </div>
</template>

<script setup>
import book from '../assets/book1.png';
import { defineProps } from 'vue';

const props = defineProps({
  showDetails: Boolean,
  title: {
    type : String,
    required: true
  },
  author: {
    type : String,
    required: false
  },
  description: {
    type : String,
    required: false
  }

});
</script>

<style scoped>
.book-details {
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  border: 1px solid aqua; /* Add border to book details */
  border-radius: 10px; /* Optional: Add border radius for rounded corners */
  padding: 20px; /* Optional: Add padding for better spacing */
  max-width: 300px; /* Set maximum width */
  width: 100%; /* Make the container take full width */
  margin-right: auto;
  margin-left: auto;
}

.book-image {
  width: 100%; /* Set the image width to 100% to fit container */
  height: auto; /* Automatically adjust height based on width */
}

.book-info {
  flex: 1;
}

h3 {
  margin: 0 0 10px;
}

.description,
.author {
  margin: 0;
}

.description span,
.author span {
  font-weight: bold;
}
</style>
