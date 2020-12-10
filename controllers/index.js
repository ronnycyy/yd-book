import Router from '@koa/router';
import IndexController from './IndexController';
const indexController = new IndexController();  //note:注意实例化 页面路由
import ApiController from './ApiConttoller';
const apiController = new ApiController();  // 接口路由
const router = new Router();

function initController(app){
  router.get('/', indexController.actionIndex);
  router.get('/api/getBooksList', apiController.actionBooksList);

  app
    .use(router.routes())
    .use(router.allowedMethods());
}
export default initController;
