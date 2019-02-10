import React, { Component } from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import { Images, Colors } from '../Themes';
import { StatusBarColor, Button } from '../Components/Common';

import { Icon } from '../Components/Common';

// Styles
import styles from './Styles/ProfileScreenStyles';

class ProfileScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null,
		tabBarIcon: ({ focused }) => {
			if (focused) {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconUserActive}
						resizeMode={'contain'}
					/>
				);
			} else {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconUserInactive}
						resizeMode={'contain'}
					/>
				);
			}
		},
		tabBarLabel: ({ focused }) => (
			<View style={styles.wrapperTabBarLabel}>
				<Text
					style={[
						styles.label,
						{
							color: focused ? Colors.black : Colors.greyAccent
						}
					]}
				>
					{'Perfil'}
				</Text>
			</View>
		)
	});

	constructor(props) {
		super(props);

		this.state = {
			user: {}
		};
	}

	componentDidMount() {
		this._getCurrentUser();
	}

	_getCurrentUser() {
		const user = {
			name: 'Pedro Neto',
			email: 'pedro.neto@email.com',
			photo: 'https://img.icons8.com/color/1600/engineer.png'
		};
		this.setState({ user });
	}

	_logoutClean() {}

	render() {
		const { navigation } = this.props;
		const { user } = this.state;
		return (
			<View style={styles.mainContainer}>
				<ScrollView style={styles.container}>
					<View style={styles.header} />
					<Image source={{ uri: user.photo }} style={styles.avatarContent} />
					<View style={styles.bodyContent}>
						<Text style={styles.nameContent}>{user.name}</Text>
						<Text style={styles.emailContent}>{user.email}</Text>
						<View style={styles.logoutContent}>
							<Button
								labelButton={'Logout'}
								buttonStyle={styles.actionButtonStyle}
								onPress={() => {
									navigation.navigate('Login');
								}}
							/>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default ProfileScreen;
