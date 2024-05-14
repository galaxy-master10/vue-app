<script setup>
import CommonNavbar from '@/components/CommonNavbar.vue';
import ReservationService from '@/modules/Reservations/Services/ReservationService.js'
import { onMounted, ref } from 'vue'

const reservationData = ref([]);



const reservationService = ReservationService;

onMounted(async () => {
 const data  = await reservationService.getReservations();
  console.log(data)
  reservationData.value = data.filter(item => item.book.languages.length > 0);


});

</script>

<template>
  <div  >
    <CommonNavbar title="History" />
    <div class="table">
      <table>
        <thead>
        <tr>
          <th>#</th>
          <th>Book Title</th>
          <th>Date Borrowed</th>
          <th>Return Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        <!-- Map dummy data to table rows -->
        <tr v-for="(item, index) in reservationData" :key="item.id">
          <td>{{ index + 1 }}</td> <!-- Add a column for numbering -->
          <td>{{ item.book.languages[0].title }}</td>
          <td>{{ item.reservationDate }}</td>
          <td>{{ item.reservationDate }}</td>
          <td>{{ reservationService.generateRandomBoolean() }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
/* Add your component-specific styles here */
table {
  width: 95.5vw; /* Set table width to 100% of viewport width */
  border-collapse: collapse;
  margin-left: 0; /* Remove left margin */
  margin-right: 0; /* Remove right margin */
}

th, td {
  padding: 8px;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
.table{
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>
