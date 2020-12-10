import axios from 'axios';

// the 'm' in mvc
// connect with PHP (SQL)
class BooksModel {
  getBooksList() {
    // return a Promise Object
    return axios.get('http://localhost/server-books/web/index.php?r=books');
  }
  findBook(id) {}
}

export default BooksModel;
