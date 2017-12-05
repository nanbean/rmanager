import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { Header, Image } from 'semantic-ui-react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import TitleHeader from '../components/TitleHeader';

import strings from '../resources/strings';

import { setGoogleLoginAction } from '../actions';

class Search extends Component {
	constructor (props) {
		super(props);

		this.responseGoogleLogin = this.responseGoogleLogin.bind(this);
		this.responseGoogleLogout = this.responseGoogleLogout.bind(this);
	}

	responseGoogleLogin (ev) {
		if (typeof ev.googleId !== 'undefined') {
			this.props.setGoogleLoginAction(ev);
		}
	}

	responseGoogleLogout () {
		this.props.setGoogleLoginAction('');
	}

	render () {
		const { login, userName, userImage } = this.props;

		return (
			<div>
				<Helmet>
					<title>{strings.account}</title>
				</Helmet>
				<TitleHeader
					icon='user'
					title={strings.account}
				/>
				{
					!login &&
					<GoogleLogin
						className='ui button teacher-login-button'
						clientId='703855235482-hllef1ii57fblvvjdf2h5shod0d75b2o.apps.googleusercontent.com'
						buttonText={strings.googleLogin}
						onSuccess={this.responseGoogleLogin}
						onFailure={this.responseGoogleLogin}
					/>
				}
				{
					login &&
					<div>
						<Header as='h2'>
							<Image
								circular
								src={userImage}
							/>
							{' '}{userName}
						</Header>
						<GoogleLogout
							className='ui button teacher-login-button'
							buttonText={strings.googleLogout}
							onLogoutSuccess={this.responseGoogleLogout}
						/>
					</div>
				}
			</div>
		);
	}
}

Search.propTypes = {
	login: PropTypes.bool.isRequired,
	userName: PropTypes.string.isRequired,
	userImage: PropTypes.string.isRequired,
	setGoogleLoginAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	login: state.login,
	userName: state.userName,
	userImage: state.userImage
});

const mapDispatchToProps = dispatch => ({
	setGoogleLoginAction (param) {
		dispatch(setGoogleLoginAction(param));
	}
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Search));
