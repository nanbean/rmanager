const initialState = [];

export default function summaryGoodChoice (state = initialState, action) {
	switch (action.type) {
	case 'SET_SUMMARY_LIST':
		return action.payload.filter(item => item.onlinetype === 'goodchoice');
	default:
		return state;
	}
}
