import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Header } from 'semantic-ui-react';
import moment from 'moment';

import strings from '../resources/strings';

import '../styles/reservation.css';

class ReservationResult extends Component {
	renderLists (data) {
		this.key = data.seq;
		this.onlinetype = data.onlinetype;
		this.roomtype = data.roomtype;
		this.reservenumber = data.reservenumber;
		this.reservename = data.reservename;
		this.indate = data.indate;
		this.reservephone = data.reservephone;
		this.gubun = data.gubun;
		this.reservename = data.reservename;
		this.reservephone = data.reservephone;
		this.roomprice = data.roomprice;
		this.balanceprice = data.balanceprice;
		this.gubun = data.gubun;

		return (
			<Table unstackable key={this.key}>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell textAlign='left'>
							<Header as='h4'>
								{strings[this.onlinetype]} / {this.roomtype}
							</Header>
						</Table.HeaderCell>
						<Table.HeaderCell textAlign='right'>
							{strings.reservationNumber} {this.reservenumber}
						</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.Cell textAlign='left'>
							{strings.checkInDate}
						</Table.Cell>
						<Table.Cell textAlign='right'>
							{moment(this.indate).format('MM월 DD일')}
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell textAlign='left'>
							{strings.reservationName}
						</Table.Cell>
						<Table.Cell textAlign='right'>
							{this.reservename}
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell textAlign='left'>
							{strings.cellPhone}
						</Table.Cell>
						<Table.Cell textAlign='right'>
							{this.reservephone}
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell textAlign='left'>
							{strings.category}
						</Table.Cell>
						<Table.Cell textAlign='right'>
							{this.gubun}
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell textAlign='left'>
							{strings.roomPrice}
						</Table.Cell>
						<Table.Cell textAlign='right'>
							{parseInt(this.roomprice, 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell textAlign='left'>
							{strings.balancePrice}
						</Table.Cell>
						<Table.Cell textAlign='right'>
							{parseInt(this.balanceprice, 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		);
	}

	render () {
		const { reservation } = this.props;

		return (
			<div className='reservation-result'>
				{
					!reservation.length &&
					<Header as='h3'>{strings.noReservation}</Header>
				}
				{
					reservation && reservation.map(this.renderLists, this)
				}
			</div>
		);
	}
}

ReservationResult.propTypes = {
	reservation: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	reservation: state.reservation
});

export default connect(mapStateToProps, null)(ReservationResult);
