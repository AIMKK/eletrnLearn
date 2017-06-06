var koa = require('koa');
var app = new koa();

app.use(function*(next) {
  console.log('begin middleware 1');
  yield next;
  console.log('end middleware 1');
});

app.use(function*(next) {
  console.log('begin middleware 2');
  yield next;
  console.log('end middleware 2');
});

app.use(function*() {
  console.log('middleware 3');
});

app.listen(3000);