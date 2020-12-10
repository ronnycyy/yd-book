import Controller from './Controller';
import BooksModel from '../models/BooksModel';

class ApiController extends Controller {
  constructor() {
    super();
  }
  // 返回的数据是异步的，需要用async await
  async actionBooksList(ctx){
    const booksModel = new BooksModel();
    const result = await booksModel.getBooksList();
    ctx.body = {
      data: result.data
    }
  }
}
export default ApiController;
