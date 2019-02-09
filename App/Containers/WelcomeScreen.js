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

// import all basic components
import { CameraKitCameraScreen } from 'react-native-camera-kit';
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

	onOpenlink() {
		//Function to open URL, If scanned
		Linking.openURL(this.state.qrvalue);
		//Linking used to open the URL in any browser that you have installed
	}
	onBarcodeScan(qrvalue) {
		//called after te successful scanning of QRCode/Barcode
		this.setState({ qrvalue: qrvalue });
	}
	onContinueScan() {
		//To continue Scanning
		this.setState({ qrvalue: '' });
	}
	componentDidMount() {
		//Setting up Status Bar
		StatusBar.setBarStyle('light-content');
	}

	render() {
		let displayModal;
		//If qrvalue is set then return this view
		if (this.state.qrvalue) {
			displayModal = (
				<View
					style={{
						backgroundColor: 'rgba(00, 00, 00 , 0.8)',
						position: 'absolute',
						marginTop: 100,
						height: Dimensions.get('window').height - 100,
						width: Dimensions.get('window').width
					}}
				>
					<View style={{ alignSelf: 'center', padding: 10, marginTop: 30 }}>
						<Text style={{ color: '#FFFFFF', fontSize: 24 }}>SCANNED</Text>
					</View>
					<View style={{ alignSelf: 'center' }}>
						<Text
							style={{ color: '#FFFFFF', fontSize: 18 }}
							onPress={() => this.onOpenlink()}
						>
							QR Code:{' '}
							<Text style={{ color: 'lightblue' }}>{this.state.qrvalue}</Text>
						</Text>
					</View>
					<TouchableHighlight
						onPress={() => this.onOpenlink()}
						style={{
							marginTop: 180,
							alignSelf: 'center',
							padding: 10,
							backgroundColor: '#2C3539'
						}}
					>
						<View>
							<Text style={{ color: '#FFFFFF', fontSize: 12 }}>Open Link</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={() => this.onContinueScan()}
						style={{
							marginTop: 10,
							alignSelf: 'center',
							padding: 10,
							backgroundColor: '#2C3539'
						}}
					>
						<View>
							<Text style={{ color: '#FFFFFF', fontSize: 12 }}>
								Continue Scanning
							</Text>
						</View>
					</TouchableHighlight>
				</View>
			);
			return displayModal;
		}
		//Initial/After Reset return this view
		return (
			<View style={{ flex: 1 }}>
				<View
					style={{ height: 100, backgroundColor: '#000000', paddingTop: 20 }}
				>
					<Text
						style={{
							color: '#FFFFFF',
							fontSize: 32,
							marginTop: 20,
							marginLeft: 20
						}}
					>
						QRCodeScannerExample
					</Text>
				</View>
				<CameraKitCameraScreen
					showFrame={false}
					//Show/hide scan frame
					scanBarcode={true}
					//Can restrict for the QR Code only
					laserColor={'blue'}
					//Color can be of your choice
					frameColor={'yellow'}
					//If frame is visible then frame color
					colorForScannerFrame={'black'}
					//Scanner Frame color
					onReadCode={event =>
						this.onBarcodeScan(event.nativeEvent.codeStringValue)
					}
				/>
			</View>
		);
	}
}

export default WelcomeScreen;
