<template>
  <div class="search-container">
    <form @submit.prevent="onEnter">
      <input type="text" placeholder="Type in a title, author or keywords" class="search-input" :style="{ width: props.width + 'rem' }" v-model="search" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="search-icon" @click="onEnter">
        <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
      </svg>
    </form>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
  width: {
    type: Number,
    required: true
  }
});
const emit = defineEmits(['onEnter']);
const search = ref('');

const onEnter = () => {
  console.log('Search:', search.value);
  emit('onEnter', search.value);
}
</script>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
}

.search-container input[type="text"] {
  flex: 1;
  border: none;
  outline: none;
  padding: 5px;
  font-size: 1rem;
}

.search-icon {
  width: 20px;
  height: 22px;
  fill: #666;
  margin-left: 5px;
  cursor: pointer;
}
</style>
