import { combineReducers } from 'redux';
import search from './search';
import hitCount from './hitCount';

const gamequiz = combineReducers({
	search,
	hitCount
});

export default gamequiz;
