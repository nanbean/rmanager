import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rmanager from '../reducers';

export default function configureStore (initialState) {
	const store = createStore(
		rmanager,
		initialState,
		applyMiddleware(thunkMiddleware) // lets us dispatch functions
	);
	return store;
}
