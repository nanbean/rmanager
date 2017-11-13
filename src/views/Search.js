import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { Header, Table } from 'semantic-ui-react';

import TitleHeader from '../components/TitleHeader';

import strings from '../resources/strings';

import { searchAction } from '../actions';

class Search extends Component {
	componentWillMount () {
		this.props.searchAction(new Date().toISOString().slice(0, 10));
	}

	renderLists (data) {
		this.key = data.key;
		this.name = data.name;
		this.rentDiscountPrice = data.rentDiscountPrice;
		this.stayDiscountPrice = data.stayDiscountPrice;

		return (
			<Table.Row key={this.key}>
				<Table.Cell>
					<Header as='h4' textAlign='center'>{this.name}</Header>
				</Table.Cell>
				<Table.Cell>
					<Header as='h4' textAlign='center'>{this.rentDiscountPrice}</Header>
				</Table.Cell>
				<Table.Cell>
					<Header as='h4' textAlign='center'>{this.stayDiscountPrice}</Header>
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
				<div>
					<Table celled selectable>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>
									<Header as='h4' textAlign='center'>Name</Header>
								</Table.HeaderCell>
								<Table.HeaderCell>
									<Header as='h4' textAlign='center'>Rent Price</Header>
								</Table.HeaderCell>
								<Table.HeaderCell>
									<Header as='h4' textAlign='center'>Stay Price</Header>
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
	searchAction (param) {
		dispatch(searchAction(param));
	}
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Search));
