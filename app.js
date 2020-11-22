const Koa = require("koa"); // commonJS语法 require
const co = require('co');
const config = require('./config');
const { historyApiFallback } = require('koa2-connect-history-api-fallback');
const initController = require('./controllers');  // 初始化路由
const errorHandler = require('./middlewares/errorHandler');
const staticServer = require('koa-static');  //静态资源（网页）
var render = require('koa-swig');
const app = new Koa();

// swig 模板
app.context.render = co.wrap(render({
  root: config.viewDir,
  cache: config.cache, // disable, set to false
  ext: 'html',
  varControls: ['[[', ']]']  //修改{{}}模板，避免和vue模板冲突
}));

// 中间件
app.use(staticServer(config.staticDir));
app.use(historyApiFallback({ index: '/', whiteList: ['/api'] }));  //除了/api的路由（取数据），其他都重定向到根
errorHandler.error(app);

initController(app);

app.listen(config.port, () => {
  console.log(`server is running at ${config.port}`);
});
