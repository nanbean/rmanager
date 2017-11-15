import LocalizedStrings from 'react-localization';

const strings = new LocalizedStrings({
	en: {
		home: 'Home',
		search: 'Search',
		reservation: 'Reservation',
		hitCount: 'Hit Count',
		yanoljaId: 'yanolja ID...',
		yanoljaPwd: 'yanolja Password...',
		getReservation: 'Get Reservation'
	},
	ko: {
		home: '홈',
		search: '찾기',
		reservation: '예약',
		hitCount: '조회수',
		yanoljaId: '야놀자 아이디...',
		yanoljaPwd: '야놀자 패스워드...',
		getReservation: '예약 가져오기'
	}
});

export default strings;
