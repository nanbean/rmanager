const initialState = [];

export default function search (state = initialState, action) {
	switch (action.type) {
	case 'SET_SEARCH_LIST':
		return action.payload;
	default:
		return state;
	}
}
