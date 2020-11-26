const Router = require('@koa/router');
const IndexController = require('./IndexController');
const indexController = new IndexController();  //note:注意实例化 页面路由
const ApiController = require('./ApiConttoller');
const apiController = new ApiController();  // 接口路由
const router = new Router();

function initController(app){
  router.get('/', indexController.actionIndex);
  router.get('/api/getDataList', apiController.actionDataList);

  app
    .use(router.routes())
    .use(router.allowedMethods());
}
module.exports = initController;
