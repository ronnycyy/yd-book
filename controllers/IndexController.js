const Controller = require("./Controller");
class IndexController extends Controller {
  constructor() {
    super();
  }
  async actionIndex(ctx){ 
    // note: 要加await，等待渲染完毕，再给到body上面。由于加了awate，函数要声明成async
    ctx.body = await ctx.render('index');
  }
}
module.exports = IndexController;
