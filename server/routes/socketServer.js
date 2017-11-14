var router = require('koa-router')();
var Spooky = require('spooky');

router.all('/socketServer', (ctx) => {
	ctx.websocket.on('message', (message) => {
		const data = JSON.parse(message);

		if (data.action === 'getReservation' && data.yanoljaId && data.yanoljaPwd) {
			var spooky = new Spooky({
				child: {
					transport: 'http'
				},
				casper: {
					logLevel: 'debug',
					verbose: true,
					viewportSize: {width: 1600, height: 1200}
				}
			}, function (err) {
				if (err) {
					e = new Error('Failed to initialize SpookyJS');
					e.details = err;
					throw e;
				}

				spooky.start('https://smartfront.yanolja.com/member/login');

				spooky.then([{
					yanoljaId: data.yanoljaId,
					yanoljaPwd: data.yanoljaPwd
				}, function() {
					this.fillSelectors('form#loginForm', {
						'input[name="id"]': yanoljaId,
						'input[name="passwd"]': yanoljaPwd
					}, true);
				}]);

				spooky.wait(3000, function() {});


				// TODO: need to implemnt getting actual reservation, temporary gettings hit rate and contact
				spooky.then(function(){
					var hitCount = this.evaluate(function() {
						return document.querySelector("#container > article > section.section.section_total.ng-scope > div > div:nth-child(2) > div > strong.ng-binding").innerText;
					});

					var contact = this.evaluate(function() {
						return document.querySelector("#container > article > section.section.section_total.ng-scope > div > div:nth-child(1) > ul:nth-child(3) > li:nth-child(2) > strong > i").innerText;
					});

					this.emit('dataParsed', hitCount, contact);
				});

				spooky.run();
			});

			spooky.on('dataParsed', function (hitCount, contact) {
				var msg = {
					action: 'getReservation',
					hitCount: hitCount,
					contact: contact
				};
				ctx.websocket.send(JSON.stringify(msg));
			});
		}
	});
});

module.exports = router;
