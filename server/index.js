const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');

const reservation = require('./routes/reservation');
const info = require('./routes/info');

const app = new Koa();

const indexHtml = fs.readFileSync(path.resolve(__dirname, '../build/index.html'), { encoding: 'utf8' });

app.use(serve(path.resolve(__dirname, '../build/')));

app.use(reservation.routes());
app.use(reservation.allowedMethods());

app.use(info.routes());
app.use(info.allowedMethods());

app.use(ctx => {
  ctx.body = indexHtml;
});

app.listen(3002);
