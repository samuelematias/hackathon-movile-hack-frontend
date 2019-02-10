import React, { Component } from 'react';
import { ScrollView, Text, Image, View, Platform } from 'react-native';
import { Images, Colors } from '../Themes';

// Styles
import styles from './Styles/QrCodeGeneratorScreenStyles';

class QrCodeGeneratorScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		headerTitle: (
			<Text style={styles.headerLabelStyle}>{'QrCodeGeneratorScreen'}</Text>
		),
		tabBarIcon: ({ focused }) => {
			if (focused) {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconQrCodeOn}
						resizeMode={'contain'}
					/>
				);
			} else {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconQrCodeOff}
						resizeMode={'contain'}
					/>
				);
			}
		},
		tabBarLabel: ({ focused }) => (
			<View style={Platform.OS === 'ios' ? styles.wrapperTabBarLabel : {}}>
				<Text
					style={[
						styles.label,
						{
							color: focused ? '#FFF' : 'rgba(255, 255, 255, 0.5)'
						}
					]}
				>
					{'Gerar'}
				</Text>
			</View>
		)
	});

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<View style={styles.mainContainer}>
				<Image
					source={Images.background}
					style={styles.backgroundImage}
					resizeMode="stretch"
				/>
				<ScrollView style={styles.container}>
					<View style={styles.centered}>
						<Image source={Images.launch} style={styles.logo} />
					</View>

					<View style={styles.section} />
				</ScrollView>
			</View>
		);
	}
}

export default QrCodeGeneratorScreen;
