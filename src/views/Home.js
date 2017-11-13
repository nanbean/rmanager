import React from 'react';
import { Helmet } from 'react-helmet';
import TitleHeader from '../components/TitleHeader';

import strings from '../resources/strings';

const Home = () => (
	<div>
		<Helmet>
			<title>{strings.home}</title>
		</Helmet>
		<TitleHeader
			icon='home'
			title={strings.home}
		/>
	</div>
);

export default Home;
