<script setup>
import CommonNavbar from '@/components/CommonNavbar.vue'
</script>

<template>
  <div>
    <CommonNavbar title="Borrow" />
    <div class="form">
      <form action="">

          <label for="book">Book Title</label>
          <input type="text" id="book" name="book" placeholder="Enter book title" required>
          <label for="reservation-date">Reservation Date</label>
          <input type="date" id="reservation-date" name="reservation-date" required>
          <label for="return-date">Return Date</label>
          <input type="date" id="return-date" name="return-date" required>
          <label for="amount">Amount of books</label>
          <input type="number" id="amount" name="amount" required>
          <button type="submit">Borrow</button>

      </form>
    </div>
  </div>
</template>

<style scoped>
.form {
 margin-top: 2rem;
  margin-right: auto;
  margin-left: auto;
  width: 80%;
}
form{
  display: flex;
  flex-direction: column;
  justify-content: center;

}
label{
  margin-top: 1rem;
  font-size: 1.5rem;
}
input{
  margin-top: 0.5rem;
  padding: 0.5rem;
  font-size: 1.3rem;
}
button{
  margin-top: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: #2c3e50;
  color: white;
  border: none;
}
/* Add your component-specific styles here */
</style>
