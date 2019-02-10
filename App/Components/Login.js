import React, { Component } from 'react';
import {
	View,
	Image,
	KeyboardAvoidingView,
	Platform,
	Keyboard
} from 'react-native';
import { Images } from '../Themes/';
import LoginForm from '../Components/LoginForm';

import styles from './Styles/LoginStyles';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			marginVertical: 0,
			email: '',
			password: '',
			visible: true,
			hide: false
		};
	}

	componentDidMount() {
		//Listener to handle when the keyboard will show, to hide the TabBar
		this.keyboardDidShowListener = Keyboard.addListener(
			'keyboardDidShow',
			this.keyboardWillShow
		);

		//Listener to handle when the keyboard will hide, to show the TabBar
		this.keyboardDidHideListener = Keyboard.addListener(
			'keyboardDidHide',
			this.keyboardWillHide
		);
	}

	keyboardWillShow = () => {
		this.setState({
			hide: true
		});
	};

	keyboardWillHide = () => {
		this.setState({
			hide: false
		});
	};

	render() {
		const { hide } = this.state;
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				{!hide ? (
					<View style={styles.loginContainer}>
						<Image
							resizeMode="contain"
							style={styles.logoOut}
							source={Images.logoClient}
						/>
					</View>
				) : null}

				<View>
					<LoginForm />
				</View>
			</KeyboardAvoidingView>
		);
	}
}

export default Login;
