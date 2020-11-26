const Controller = require("./Controller");
class IndexController extends Controller {
  constructor() {
    super();
  }
  async actionIndex(ctx){ 
    // throw new Error('custom error');
    // note: 要加await，等待渲染完毕，再给到body上面。由于加了await，函数要声明成async
    ctx.body = await ctx.errFunc('index', {
      message: '后端数据'
    });
  }
}
module.exports = IndexController;
