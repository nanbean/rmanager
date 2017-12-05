import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

import TitleHeader from '../components/TitleHeader';
import SearchMap from '../components/SearchMap';

import SearchResult from './SearchResult';

import strings from '../resources/strings';

import { searchAction } from '../actions';

const defaultMarkerPositionLat = 37.48351904546265;
const defaultMarkerPositionLng = 127.04403751324458;

class Search extends Component {
	constructor (props) {
		super(props);

		this.onMarkerDragEnd = this.onMarkerDragEnd.bind(this);

		this.state = {
			yanoljaId: null,
			yanoljaPwd: null
		};
	}

	componentWillMount () {
		this.props.searchAction(
			new Date().toISOString().slice(0, 10),
			defaultMarkerPositionLat,
			defaultMarkerPositionLng
		);
	}

	onMarkerDragEnd (ev) {
		if (ev.latLng) {
			const lat = ev.latLng.lat();
			const lng = ev.latLng.lng();
			this.props.searchAction(
				new Date().toISOString().slice(0, 10),
				lat,
				lng
			);
		}
	}

	render () {
		return (
			<div>
				<Helmet>
					<title>{strings.search}</title>
				</Helmet>
				<TitleHeader
					icon='search'
					title={strings.search}
				/>
				<Header as='h2'>
					{strings.searchHelp}
				</Header>
				<SearchMap
					markerPositionLat={defaultMarkerPositionLat}
					markerPositionLng={defaultMarkerPositionLng}
					onMarkerDragEnd={this.onMarkerDragEnd}
				/>
				<SearchResult />
			</div>
		);
	}
}

Search.propTypes = {
	searchAction: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
	searchAction (date, lat, lng) {
		dispatch(searchAction(date, lat, lng));
	}
});

export default withRouter(connect(
	null,
	mapDispatchToProps
)(Search));
