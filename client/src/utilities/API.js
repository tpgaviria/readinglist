import axios from "axios";

export default {
    getBooks: () => {
        return axios.get('api/books');
    },
    searchBooks: (query) => {
        return axios.post('/search', query);
    },
    addToDB: (bookData) => {
        return axios.post('/api/books', bookData);
    },
    deleteBook: (id) => {
        return axios.delete('/api/books/:id');
    }
}