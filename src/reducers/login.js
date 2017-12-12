const initialState = false;

export default function login (state = initialState, action) {
	switch (action.type) {
	case 'SET_GOOGLE_LOGIN':
		if (action.payload && typeof action.payload.googleId !== 'undefined') {
			return true;
		}
		return false;
	default:
		return state;
	}
}
