import React, { Component } from 'react';

import Login from '../Components/Login';

// Styles
import styles from './Styles/LoginScreenStyles';

class LoginScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null
	});

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const { navigation } = this.props;
		return <Login navigation={navigation} />;
	}
}

export default LoginScreen;
