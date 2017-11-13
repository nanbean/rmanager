var router = require('koa-router')();

router.get('/api/getInfo', (ctx, next) => {
	ctx.body = {
		info: {
			name: 'test hotel',
			room: 4
		}
	};
});

module.exports = router;
