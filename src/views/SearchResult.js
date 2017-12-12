import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, Table } from 'semantic-ui-react';

import strings from '../resources/strings';

import '../styles/search.css';

class SearchResult extends Component {
	renderLists (data) {
		this.key = data.key;
		this.name = data.name;
		this.distance = data.distance;
		this.rentDiscountPrice = data.rentDiscountPrice;
		this.stayDiscountPrice = data.stayDiscountPrice;

		return (
			<Table.Row key={this.key}>
				<Table.Cell textAlign='center'>
					{this.name}
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
			<div className='search-result'>
				<Table celled unstackable>
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
		);
	}
}

SearchResult.propTypes = {
	search: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	search: state.search
});

export default connect(mapStateToProps, null)(SearchResult);
