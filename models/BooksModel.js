import axios from 'axios';
import SafeRequest from '../utils/safeRequest';

// the 'm' in mvc
// connect with PHP (SQL)
class BooksModel {
  getBooksList() {
    return SafeRequest.fetch('http://localhost/yd-books/web/index.php?r=books');
  }
}

export default BooksModel;
