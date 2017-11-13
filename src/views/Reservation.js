import React from 'react';
import { Helmet } from 'react-helmet';
import TitleHeader from '../components/TitleHeader';

import strings from '../resources/strings';

const Reservation = () => (
	<div>
		<Helmet>
			<title>{strings.reservation}</title>
		</Helmet>
		<TitleHeader
			icon='travel'
			title={strings.reservation}
		/>
	</div>
);

export default Reservation;
