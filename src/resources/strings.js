import LocalizedStrings from 'react-localization';

const strings = new LocalizedStrings({
	en: {
		home: 'Home',
		search: 'Search',
		reservation: 'Reservation',
		hitCount: 'Hit Count',
		yanoljaId: 'yanolja ID...',
		yanoljaPwd: 'yanolja Password...',
		getReservation: 'Get Reservation',
		accommodationName: 'Accommodation Name',
		distance: 'Distance',
		rentReservation: 'Rent Reservation',
		stayReservation: 'Stay Reservation',
		searchHelp: 'Move 📍 to search different location'
	},
	ko: {
		home: '홈',
		search: '찾기',
		reservation: '예약',
		hitCount: '조회수',
		yanoljaId: '야놀자 아이디...',
		yanoljaPwd: '야놀자 패스워드...',
		getReservation: '예약 가져오기',
		accommodationName: '숙박업소명',
		distance: '거리',
		rentReservation: '대실예약',
		stayReservation: '숙박예약',
		searchHelp: '📍를 이동해서 원하는 지역을 검색하세요.'
	}
});

export default strings;
