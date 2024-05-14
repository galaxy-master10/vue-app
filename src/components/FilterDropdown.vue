<script setup>
const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div>
    <select :name="props.title" :id="props.title">
      <option v-for="(option, index) in props.options" :key="index" :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<style scoped>
/* Add your component-specific styles here */
select {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 1rem;
  background-color: #2c3e50;
  color: white;
}
select:focus {
  outline: none;
  border-color: #333;
}
</style>
