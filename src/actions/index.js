let socket = null;

export const setGoogleLoginAction = params => ({
	type: 'SET_GOOGLE_LOGIN',
	payload: params
});

function getCall (call) {
	return fetch(call, {
		method: 'GET',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		}
	});
}

export const getReservationAction = (startDate, endDate) => (dispatch) => {
	if (startDate) {
		let searchApi = '';

		if (startDate && endDate) {
			searchApi = `http://125.131.73.28:5002/api/booking/date?start=${startDate}&end=${endDate}`;
		} else {
			searchApi = `http://125.131.73.28:5002/api/booking/date?start=${startDate}`;
		}

		getCall(searchApi).then(
			response => (
				response.json()
			)
		).then(
			(result) => {
				if (result.data) {
					dispatch({
						type: 'SET_RESERVATION_LIST',
						payload: result.data
					});
				}
			}
		);
	}
};

export const getSummaryAction = (startDate, endDate) => (dispatch) => {
	if (startDate) {
		let searchApi = '';

		if (startDate && endDate) {
			searchApi = `http://125.131.73.28:5002/api/booking/date?start=${startDate}&end=${endDate}`;
		} else {
			searchApi = `http://125.131.73.28:5002/api/booking/date?start=${startDate}`;
		}

		getCall(searchApi).then(
			response => (
				response.json()
			)
		).then(
			(result) => {
				if (result.data) {
					dispatch({
						type: 'SET_SUMMARY_LIST',
						payload: result.data
					});
				}
			}
		);
	}
};

export const searchAction = (date, lat, lng) => (dispatch) => {
	if (date && lat && lng) {
		const searchApi = `https://www.yanolja.com/hub/joy/v6-6/adverts?advertsPosition=MAIN&checkinDate=${date}&checkoutDate=${date}&gaList=Around&lat=${lat.toFixed(7)}&limit=20&lng=${lng.toFixed(7)}&myRoom=0&page=1&searchType=recommend`;

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
	}
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
		socket = new WebSocket('ws://125.131.73.161:3005/socketServer', 'protocolOne');

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
