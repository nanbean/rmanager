var router = require('koa-router')();

const dummyDate = [
	{
		id: 1,
		date: '2017-12-09',
		name: '홍길동',
		room: 'delux',
		amount: '50000',
		pay: 'credit'
	},
	{
		id: 2,
		date: '2017-12-09',
		name: '김갑동',
		room: 'suite',
		amount: '100000',
		pay: 'cash'
	},
	{
		id: 3,
		date: '2017-12-10',
		name: '홍길동',
		room: 'delux',
		amount: '50000',
		pay: 'credit'
	},
	{
		id: 4,
		date: '2017-12-10',
		name: '김갑동',
		room: 'suite',
		amount: '100000',
		pay: 'cash'
	},
	{
		id: 5,
		date: '2017-12-10',
		name: '꽃순이',
		room: 'suite',
		amount: '100000',
		pay: 'cash'
	},
	{
		id: 6,
		date: '2017-12-11',
		name: '고길동',
		room: 'normal',
		amount: '40000',
		pay: 'credit'
	},
	{
		id: 7,
		date: '2017-12-11',
		name: '존',
		room: 'delux',
		amount: '50000',
		pay: 'cash'
	},
	{
		id: 8,
		date: '2017-12-11',
		name: '제인',
		room: 'delux',
		amount: '50000',
		pay: 'credit'
	},
	{
		id: 9,
		date: '2017-12-12',
		name: '탐',
		room: 'suite',
		amount: '100000',
		pay: 'credit'
	},
	{
		id: 10,
		date: '2017-12-12',
		name: '제시카',
		room: 'delux',
		amount: '50000',
		pay: 'credit'
	},
	{
		id: 11,
		date: '2017-12-12',
		name: '조나단',
		room: 'delux',
		amount: '50000',
		pay: 'credit'
	}
]
router.get('/api/getReservation', (ctx, next) => {
	let body = {};
	const startDate = ctx.request.query.startDate;

	if (startDate) {
		body.list = dummyDate.filter((item) => item.date == startDate );
		body.count = body.list.length;
	}

	ctx.body = body;
});

module.exports = router;
