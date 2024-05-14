const BASE_URL= 'http://shelf-wise.test/api/';


  const login = async (user) => {
    const response = await fetch(`${BASE_URL}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Accept-Language': 'en'
      },
      body: JSON.stringify(user)
    });
    return response.json();
  }

  const register = async (user) => {
    const response = await fetch(`${BASE_URL}register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'en'
      },
      body: JSON.stringify(user)
    });
    return response.json();
  }


  export default {
    login,
    register
  }




