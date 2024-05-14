<template>
  <div class="app-navigation">
    <section class="logo-section">
      <img class="logo" :src="logo" alt="shelf wise logo" />
    </section>

    <section class="navigations">
      <div class="top-section">
        <ul class="navbar">
          <li class="navbar-item">My Account</li>
          <li class="navbar-item">
            <img class="flag" :src="englishFlag" alt="english flag" />
            <select class="language-select" name="languages" id="languages" ref="languageSelect" @change="handleLanguageChange">
              <option value="en">EN</option>
              <option value="nl">NL</option>
              <option value="fr">FR</option>
            </select>


          </li>
        </ul>
      </div>
      <div class="bottom-section">
        <ul class="navbar">
          <li class="navbar-item" @click="navigate('borrowbook')">Borrow</li>
          <li class="navbar-item" @click="navigate('history')">History</li>
          <li class="navbar-item" @click="navigate('favoritescreen')">Favorites</li>
          <li class="navbar-item">Notifications</li>
          <li class="navbar-item">Contact</li>

        </ul>

      </div>
    </section>
    <section class="date">
      <div>
        <p>{{currentDate.weekDay}} <br>
       {{currentDate.day}}/{{currentDate.month}}/{{currentDate.year}}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import logo from '../assets/shelf-wise-logo-2.jpeg'
import englishFlag from '../assets/englishflag.avif'
import { useRouter } from 'vue-router'
import { getCurrentInstance, onMounted, ref } from 'vue'

const router = useRouter();
const languageSelect = ref(null);

const getSelectedLanguage = () => {
  return languageSelect.value ? languageSelect.value.value : null;
};
const handleLanguageChange = () => {
  localStorage.setItem('language', getSelectedLanguage());

};
onMounted(() => {
  localStorage.setItem('language', getSelectedLanguage())
});


const navigate = (route) => {
  if (route === 'borrowbook') {
    router.push('/borrowbook');
  } else if (route === 'history') {
    router.push('/history');
  } else if (route === 'favoritescreen') {
    router.push('/FavoritesScreen');
  }
};

// get language


const timeAndDate = () => {
  const date = new Date();
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekDay = weekDays[date.getDay()]; // Returns the day of the week (0-6), where Sunday is 0.
  const day = date.getDate(); // Returns the day of the month (1-31).
  const month = date.getMonth() + 1; // Returns the month (0-11), so add 1 to get the correct month.
  const year = date.getFullYear(); // Returns the year (four digits).

  return {
    weekDay: weekDay,
    day: day,
    month: month,
    year: year
  };
};

const currentDate = ref(timeAndDate());

const instance = getCurrentInstance();
instance.ctx.timeAndDate = currentDate.value;

// Update the date every second
setInterval(() => {
  currentDate.value = timeAndDate();
}, 1000);

</script>

<style scoped>
.logo {
  width: 100px;
  height: 100px;
  margin: 20px; /* Shorthand for top, right, bottom, left */
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  cursor: pointer;
}

.flag {
  width: 40px;
  height: 30px;
  margin-right: 5px;
}

.language-select {
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  padding: 5px; /* Add padding for better spacing */
}

/* Style for dropdown arrow */
.language-select::-ms-expand {
  display: none;
}

/* Style for navbar */
.navbar {
  list-style: none;
  display: flex;
  justify-content: space-between; /* Align items to the left and right */
  align-items: center;
  padding: 10px 20px;

  color: #000;
}


.navbar-item {
  margin-right: 20px;
  cursor: pointer; /* Add pointer cursor for better user interaction */
}
.date div{
  border: 1px solid #000;
  border-radius: 50%;
}
.date p{
  color: #fff;
  text-align: center;
  padding: 10px;
}
.app-navigation{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin-left: 2rem;
  margin-right: 2rem;
  background-color: #ff5722;

}



/* Media query for responsive design */
@media (max-width: 768px) {
  .navbar {
    justify-content: center; /* Center items on smaller UserScreens */
  }

  .navbar-item {
    margin-right: 10px;
  }

  .logo {
    width: 80px;
    height: 80px;
    margin: 10px; /* Adjusted margin for smaller UserScreens */
  }
}
</style>

