import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import TitleHeader from '../components/TitleHeader';
import ReservationResult from './ReservationResult';

import strings from '../resources/strings';

import { getReservationAction } from '../actions';

class Reservation extends Component {
	constructor (props) {
		super(props);

		this.state = {
			startDate: moment('2017-11-30'),
			focused: false
		};
	}

	componentWillMount () {
		const startDate = this.state.startDate.format('YYMMDD');

		this.props.getReservationAction(
			startDate
		);
	}

	render () {
		return (
			<div className='reservation'>
				<Helmet>
					<title>{strings.reservation}</title>
				</Helmet>
				<TitleHeader
					title={strings.realtimeReservationResult}
				/>
				<ReservationResult />
			</div>
		);
	}
}

Reservation.propTypes = {
	getReservationAction: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
	getReservationAction (startDate, endDate) {
		dispatch(getReservationAction(startDate, endDate));
	}
});

export default withRouter(connect(
	null,
	mapDispatchToProps
)(Reservation));
