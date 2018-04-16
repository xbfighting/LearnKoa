"use strict"
const Koa = require("koa");
const app = new Koa();

// x-response-time
app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.set(`X-Response-Time ${ms}ms`);
	console.log(`X-Response-Time - ${ms}ms`);
});

// logger
app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	console.log(`logger - ${ms}ms`);
});

// response

app.use(async ctx => {
	ctx.body = 'Hello World';
	console.log(`${ctx.method} ${ctx.url} - Hello World`);
});


app.listen(8020, () => { console.log('goto http://localhost:8020') });