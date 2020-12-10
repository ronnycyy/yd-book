import axios from 'axios';

class BooksModel {
  getBooksList() {
    return axios.get('url');
  }
  findBook(id) {}
}

export default BooksModel;
