const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');
const websockify = require('koa-websocket');

const socketServer = require('./routes/socketServer');
const reservation = require('./routes/reservation');
const info = require('./routes/info');

const wsOptions = {};
const app = websockify(new Koa(), wsOptions);

const PORT = process.env.PORT || 3000
const indexHtml = fs.readFileSync(path.resolve(__dirname, '../build/index.html'), { encoding: 'utf8' });

app.use(serve(path.resolve(__dirname, '../build/')));

app.use(reservation.routes());
app.use(reservation.allowedMethods());

app.use(info.routes());
app.use(info.allowedMethods());

app.ws.use(socketServer.routes());
app.use(socketServer.allowedMethods());

app.use(ctx => {
  ctx.body = indexHtml;
});

app.listen(PORT);
