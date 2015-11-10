var co = require('co');
var koa = require('koa'); 
var ccors = require('koa-cors');
var Router = require('koa-router');
var createService = require('./microservice');

var app = koa();  
var main = function* () {
   var service = yield createService();
   var router = new Router();
   router.get('aname', '/echo', service.get);

   app.use(router.routes());
   app.listen(3000);
} 
   
if (!module.parent) {
  co(main).catch(function (err) {
    console.log(err.stack);
    process.exit(1); 
  });
}

