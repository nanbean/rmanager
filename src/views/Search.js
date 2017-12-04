import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { Header, Table, Icon } from 'semantic-ui-react';

import TitleHeader from '../components/TitleHeader';
import SearchMap from '../components/SearchMap';

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

	renderLists (data) {
		this.key = data.key;
		this.name = data.name;
		this.distance = data.distance;
		this.rentDiscountPrice = data.rentDiscountPrice;
		this.stayDiscountPrice = data.stayDiscountPrice;

		return (
			<Table.Row key={this.key}>
				<Table.Cell textAlign='center'>
					<Icon name='h' />{this.name}
				</Table.Cell>
				<Table.Cell textAlign='center'>
					{this.distance}
				</Table.Cell>
				<Table.Cell textAlign='center'>
					{parseInt(this.rentDiscountPrice, 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
				</Table.Cell>
				<Table.Cell textAlign='center'>
					{parseInt(this.stayDiscountPrice, 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
				</Table.Cell>
			</Table.Row>
		);
	}

	render () {
		const { search } = this.props;

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
				<div>
					<Table celled selectable>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>
									<Header as='h4' textAlign='center'>{strings.accommodationName}</Header>
								</Table.HeaderCell>
								<Table.HeaderCell>
									<Header as='h4' textAlign='center'>{strings.distance}</Header>
								</Table.HeaderCell>
								<Table.HeaderCell>
									<Header as='h4' textAlign='center'>{strings.rentReservation}</Header>
								</Table.HeaderCell>
								<Table.HeaderCell>
									<Header as='h4' textAlign='center'>{strings.stayReservation}</Header>
								</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{
								search && search.map(this.renderLists, this)
							}
						</Table.Body>
					</Table>
				</div>
			</div>
		);
	}
}

Search.propTypes = {
	searchAction: PropTypes.func.isRequired,
	search: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	search: state.search
});

const mapDispatchToProps = dispatch => ({
	searchAction (date, lat, lng) {
		dispatch(searchAction(date, lat, lng));
	}
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Search));
