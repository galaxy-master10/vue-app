<script setup>
import { defineProps } from 'vue';
import heart from '../assets/211755_heart_icon.png';
import back from '../assets/2203523_arrow_back_botton_left_icon.png';

const props = defineProps({
  title: String,
});
// back navigation
const goBack = () => {
  window.history.back();
};
</script>

<template>
  <div class="navbar">
    <img :src="back" alt="back" class="icon" @click="goBack()" />
    <h2>{{ props.title }}</h2>
    <img :src="heart" alt="heart" class="icon" />
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #2c3e50;
  color: white;
  margin-left: 2rem;
  margin-right: 2rem;
}

.icon {
  width: 40px; /* Adjust the width as needed */
  height: 40px; /* Adjust the height as needed */
}
</style>
