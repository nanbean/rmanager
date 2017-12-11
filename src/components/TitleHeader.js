import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

const TitleHeader = ({ title }) => (
	<Header as='h3' block>
		{title}
	</Header>
);

TitleHeader.propTypes = {
	title: PropTypes.string.isRequired
};

export default TitleHeader;
