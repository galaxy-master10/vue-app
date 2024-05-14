const BASE_URL= 'http://shelf-wise.test/api/reservations';
const email = localStorage.getItem('email');

const getUserId = async (email) => {
  const response = await fetch('http://shelf-wise.test/api/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'en'
    }
  });
  const users = await response.json();
  return getId(users, email);
}

function getId(users, email){
  for (const user of users) {
    if (user.email === email) {
alert(user.id)
      return user.id;
    }
  }
}
const getReservations = async () => {
  const userId = await getUserId(email);
  const response = await fetch(`${BASE_URL}/members/${userId}`,
    {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'en'
    }
  });
  return response.json();
}

function generateRandomBoolean() {
  return Math.random() < 0.5;
}

export default {

getReservations,
generateRandomBoolean
}
