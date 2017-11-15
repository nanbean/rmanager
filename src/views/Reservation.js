import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { Header, Input, Button } from 'semantic-ui-react';
import TitleHeader from '../components/TitleHeader';

import strings from '../resources/strings';

import { connectSocketAction } from '../actions';

class Reservation extends Component {
	constructor (props) {
		super(props);

		this.onYanoljaIdChange = this.onYanoljaIdChange.bind(this);
		this.onYanoljaPwdChange = this.onYanoljaPwdChange.bind(this);
		this.getReservationClick = this.getReservationClick.bind(this);

		this.state = {
			yanoljaId: null,
			yanoljaPwd: null
		};
	}

	onYanoljaIdChange (ev) {
		this.setState({
			yanoljaId: ev.target.value
		});
	}

	onYanoljaPwdChange (ev) {
		this.setState({
			yanoljaPwd: ev.target.value
		});
	}

	getReservationClick () {
		const { yanoljaId, yanoljaPwd } = this.state;

		this.props.connectSocketAction(yanoljaId, yanoljaPwd);
	}

	render () {
		const { hitCount } = this.props;

		return (
			<div>
				<Helmet>
					<title>{strings.reservation}</title>
				</Helmet>
				<TitleHeader
					icon='travel'
					title={strings.reservation}
				/>
				<Input
					placeholder={strings.yanoljaId}
					defaultValue={this.state.yanoljaId}
					onChange={this.onYanoljaIdChange}
				/>
				<Input
					placeholder={strings.yanoljaPwd}
					defaultValue={this.state.yanoljaPwd}
					onChange={this.onYanoljaPwdChange}
				/>
				<Button
					content={strings.getReservation}
					onClick={this.getReservationClick}
				/>
				<Header as='h4' textAlign='center'>{strings.hitCount}:{hitCount}</Header>
			</div>
		);
	}
}

Reservation.propTypes = {
	connectSocketAction: PropTypes.func.isRequired,
	hitCount: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
	hitCount: state.hitCount
});

const mapDispatchToProps = dispatch => ({
	connectSocketAction (yanoljaId, yanoljaPwd) {
		dispatch(connectSocketAction(yanoljaId, yanoljaPwd));
	}
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Reservation));
