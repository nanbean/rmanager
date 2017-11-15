const initialState = '';

export default function hitCount (state = initialState, action) {
	switch (action.type) {
	case 'SET_HIT_COUNT':
		return action.payload;
	default:
		return state;
	}
}
