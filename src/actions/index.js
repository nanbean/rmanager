let socket = null;

function getCall (call) {
	return fetch(call, {
		method: 'GET',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		}
	});
}

export const searchAction = date => (dispatch) => {
	const searchApi = `https://www.yanolja.com/hub/joy/v6-6/adverts?advert=AROUND&checkinDate=${date}&checkoutDate=${date}&gaList=Around&lat=37.2022147&limit=20&lng=127.0835804&myRoom=0&page=1&searchType=re`;

	getCall(searchApi).then(
		response => (
			response.json()
		)
	).then(
		(result) => {
			if (result.lists) {
				dispatch({
					type: 'SET_SEARCH_LIST',
					payload: result.lists
				});
			}
		}
	);
};

const onmessage = (e) => {
	const data = JSON.parse(e.data);

	if (data.action === 'getReservation' && typeof data.hitCount !== 'undefined') {
		return ({
			type: 'SET_HIT_COUNT',
			payload: data.hitCount
		});
	}

	return 0;
};

export const connectSocketAction = (yanoljaId, yanoljaPwd) => (dispatch) => {
	if (!socket) {
		socket = new WebSocket('ws://nanbean.net:3005/socketServer', 'protocolOne');

		socket.onmessage = (e) => {
			dispatch(onmessage(e));
		};
	}

	const msg = {
		action: 'getReservation',
		yanoljaId,
		yanoljaPwd
	};

	if (socket.readyState === 1) {
		socket.send(JSON.stringify(msg));
	} else {
		socket.onopen = () => {
			socket.send(JSON.stringify(msg));
			socket.onopen = null;
		};
	}
};
