const initialState = '';

export default function userName (state = initialState, action) {
	switch (action.type) {
	case 'SET_GOOGLE_LOGIN':
		if (action.payload && typeof action.payload.googleId !== 'undefined') {
			if (action.payload.profileObj) {
				return action.payload.profileObj.name;
			}
		}
		return initialState;
	default:
		return state;
	}
}
