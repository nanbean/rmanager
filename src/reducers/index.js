import { combineReducers } from 'redux';
import search from './search';
import login from './login';
import userName from './userName';
import userImage from './userImage';
import hitCount from './hitCount';

const rmanager = combineReducers({
	search,
	login,
	userName,
	userImage,
	hitCount
});

export default rmanager;
