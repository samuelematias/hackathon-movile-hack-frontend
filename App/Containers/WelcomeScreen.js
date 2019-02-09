import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	Image,
	View,
	TouchableOpacity,
	StatusBar,
	Dimensions,
	Vibration,
	Linking,
	TouchableHighlight,
	Alert
} from 'react-native';
import { Images } from '../Themes';

import QrCode from '../Components/QrCode';

// import all basic components

//import CameraKitCameraScreen we are going to use.

// Styles
import styles from './Styles/WelcomeScreenStyles';

class WelcomeScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		headerTitle: <Text style={styles.headerLabelStyle}>{'WelcomeScreen'}</Text>,
		headerLeft: (
			<TouchableOpacity
				style={styles.wrapperHeaderLeft}
				onPress={() => {
					navigation.goBack();
				}}
			>
				<Image
					style={styles.iconHeader}
					source={Images.iconArrowLeft}
					resizeMode={'contain'}
				/>
			</TouchableOpacity>
		),
		tabBarIcon: ({ focused }) => {
			if (focused) {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconRadarActive}
						resizeMode={'contain'}
					/>
				);
			} else {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconRadarInactive}
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
							color: focused ? '#3F51B5' : '#404040'
						}
					]}
				>
					{'Launch'}
				</Text>
			</View>
		)
	});

	constructor(props) {
		super(props);

		this.state = {
			qrvalue: ''
		};
	}

	render() {
		return <QrCode />;
	}
}

export default WelcomeScreen;
