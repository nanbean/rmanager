import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import SummaryChart from './SummaryChart';
import TitleHeader from '../components/TitleHeader';

import strings from '../resources/strings';

import { getSummaryAction } from '../actions';

class Home extends Component {
	constructor (props) {
		super(props);

		this.state = {
			endDate: moment('2017-11-30'),
			focused: false
		};
	}

	componentWillMount () {
		const endDate = this.state.endDate.format('YYMMDD');
		const startDate = this.state.endDate.subtract(7, 'days').format('YYMMDD');

		this.props.getSummaryAction(
			startDate,
			endDate
		);
	}

	render () {
		return (
			<div className='home'>
				<Helmet>
					<title>{strings.home}</title>
				</Helmet>
				<TitleHeader
					title={strings.realtimeReservationResult}
				/>
				<SummaryChart />
			</div>
		);
	}
}

Home.propTypes = {
	getSummaryAction: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
	getSummaryAction (startDate, endDate) {
		dispatch(getSummaryAction(startDate, endDate));
	}
});

export default withRouter(connect(
	null,
	mapDispatchToProps
)(Home));
