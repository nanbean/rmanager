var router = require('koa-router')();

router.get('/api/getReservation', (ctx, next) => {
	ctx.body = {
		list: [
			{
				o2o: 'yanolja',
				name: '홍길동',
				room: 'delux'
			},
			{
				o2o: 'yanolja',
				name: '김삿갓',
				room: 'delux'
			}
		]
	};
});

module.exports = router;
