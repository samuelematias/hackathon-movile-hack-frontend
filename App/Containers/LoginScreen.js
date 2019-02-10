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
		return <Login />;
	}
}

export default LoginScreen;
