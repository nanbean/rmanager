import { combineReducers } from 'redux';
import search from './search';
import hitCount from './hitCount';

const rmanager = combineReducers({
	search,
	hitCount
});

export default rmanager;
