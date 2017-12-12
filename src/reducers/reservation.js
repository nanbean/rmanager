const initialState = [];

export default function reservation (state = initialState, action) {
	switch (action.type) {
	case 'SET_RESERVATION_LIST':
		return action.payload;
	default:
		return state;
	}
}
