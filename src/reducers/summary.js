const initialState = [];

export default function summary (state = initialState, action) {
	switch (action.type) {
	case 'SET_SUMMARY_LIST':
		return action.payload;
	default:
		return state;
	}
}
