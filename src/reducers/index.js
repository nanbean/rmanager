import { combineReducers } from 'redux';
import search from './search';
import login from './login';
import userName from './userName';
import userImage from './userImage';
import hitCount from './hitCount';
import reservation from './reservation';
import summary from './summary';
import summaryYanolja from './summaryYanolja';
import summaryGoodChoice from './summaryGoodChoice';

const rmanager = combineReducers({
	search,
	login,
	userName,
	userImage,
	hitCount,
	reservation,
	summary,
	summaryYanolja,
	summaryGoodChoice
});

export default rmanager;
