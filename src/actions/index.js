function getCall (call) {
	return fetch(call, {
		method: 'GET',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		}
	});
}

export const setQuizId = params => ({
	type: 'SET_QUIZ_ID',
	payload: params
});

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

