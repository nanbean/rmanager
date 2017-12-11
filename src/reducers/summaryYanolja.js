const initialState = [];

export default function summaryYanolja (state = initialState, action) {
	switch (action.type) {
	case 'SET_SUMMARY_LIST':
		return action.payload.filter(item => item.onlinetype === 'yanolja');
	default:
		return state;
	}
}
