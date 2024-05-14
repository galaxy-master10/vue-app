

const BASE_URL = 'http://shelf-wise.test/api/books';
const language = localStorage.getItem('language').toString() || 'en';

// get all books
const getBooks = async () => {
    const response = await fetch(
      BASE_URL,
      {
          headers: {
              'Accept-Language': language
          }
      }
    );
    console.log(language)
    return response.json();
}

// get a single book
const getBook = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    return response.json();
}

// create a book
const createBook = async (book) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    return response.json();
}

// update a book
const updateBook = async (id, book) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    return response.json();
}

// delete a book
const deleteBook = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });
    return response.json();
}

// added search function
const searchBooks = async (search) => {
    const response = await fetch(`${BASE_URL}/search/${search}`,
      {
        headers: {
            'Accept-Language': language
        }
    });
    return response.json();
}

// category filter
const filterBooksOnCategory = async (category) => {
    const response = await fetch(`${BASE_URL}/category/${category}`,{headers: {

        'Accept-Language': language}
    });
    return response.json();
}

// get all categories
const getCategories = async () => {
    const response = await fetch(`http://shelf-wise.test/api/categories`,
      {
        headers: {
            'Accept-Language': language
        }
    });

    return response.json();
}

export default {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
    searchBooks,
    filterBooksOnCategory,
    getCategories
}
