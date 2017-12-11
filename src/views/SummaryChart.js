import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, Table } from 'semantic-ui-react';
import { Chart } from 'react-google-charts';
import moment from 'moment';

import strings from '../resources/strings';

import '../styles/graph.css';

const interval = 7;

const SummaryChart = ({ summaryYanolja, summaryGoodChoice }) => {
	const startDate = moment('2017-11-30').subtract(interval, 'days');
	const options = {
		legend: { position: 'top' },
		series: {
			0: { color: '#085c98' },
			1: { color: '#E44647' }
		}
	};
	const data = [
		['Date', strings.yanolja, strings.goodchoice]
	];

	for (let i = 0; i < interval; i += 1) {
		const dateFormat = startDate.add(1, 'days').format('YYYY-MM-DD');
		data.push([
			dateFormat,
			summaryYanolja.filter(item => item.reservedate.match(dateFormat)).length,
			summaryGoodChoice.filter(item => item.reservedate.match(dateFormat)).length
		]);
	}

	return (
		<div>
			<Table unstackable>
				<Table.Body>
					<Table.Row>
						<Table.Cell textAlign='left'>
							{strings.total}
						</Table.Cell>
						<Table.Cell textAlign='right'>
							{summaryYanolja.length + summaryGoodChoice.length}
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell textAlign='left'>
							{strings.yanolja}
						</Table.Cell>
						<Table.Cell textAlign='right'>
							{summaryYanolja.length}
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell textAlign='left'>
							{strings.goodchoice}
						</Table.Cell>
						<Table.Cell textAlign='right'>
							{summaryGoodChoice.length}
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
			<div className='graph-title'>
				<Header as='h3' textAlign='left'>
					{strings.reservationAnalysisGraph}
				</Header>
			</div>
			<Chart
				chartType='LineChart'
				data={data}
				options={options}
				graph_id='LineChart'
				width='100%'
				height='400px'
			/>
		</div>
	);
};

SummaryChart.propTypes = {
	summaryYanolja: PropTypes.array.isRequired,
	summaryGoodChoice: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	summaryYanolja: state.summaryYanolja,
	summaryGoodChoice: state.summaryGoodChoice
});

export default connect(mapStateToProps, null)(SummaryChart);
