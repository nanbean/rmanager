import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import strings from '../resources/strings';

class TopMenu extends Component {
	constructor (props) {
		super(props);

		this.handleItemClick = this.handleItemClick.bind(this);
		this.state = {
			activeItem: null
		};
	}

	handleItemClick (ev, data) {
		const { name } = data;

		this.setState({ activeItem: name });
		this.props.history.push(name);
	}

	render () {
		const { activeItem } = this.state;

		return (
			<Menu>
				<Menu.Item
					name='/'
					active={activeItem === '/'}
					onClick={this.handleItemClick}
				>
					{strings.home}
				</Menu.Item>

				<Menu.Item
					name='/reservation'
					active={activeItem === '/reservation'}
					onClick={this.handleItemClick}
				>
					{strings.reservation}
				</Menu.Item>

				<Menu.Item
					name='/search'
					active={activeItem === '/search'}
					onClick={this.handleItemClick}
				>
					{strings.search}
				</Menu.Item>

				<Menu.Item
					name='/account'
					active={activeItem === '/account'}
					onClick={this.handleItemClick}
				>
					{strings.account}
				</Menu.Item>
			</Menu>
		);
	}
}

TopMenu.propTypes = {
	history: PropTypes.object.isRequired
};

// to use history.push
export default withRouter(connect()(TopMenu));
