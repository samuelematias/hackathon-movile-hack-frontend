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
import PropTypes from 'prop-types';

import { CameraKitCameraScreen } from 'react-native-camera-kit';

import { Images } from '../Themes/';

//styles
import styles from './Styles/QrCodeStyles';

class QrCode extends Component {
	constructor(props) {
		super(props);

		this.state = {
			qrvalue: '',
			arrQrCodeData: []
		};
	}

	// componentDidMount() {
	// 	//Setting up Status Bar
	// 	StatusBar.setBarStyle('light-content');
	// }

	_handleChooseQrCodeOption = () => {
		const { qrvalue } = this.state;
		if (!qrvalue) {
			return this._renderReadQrCode();
		} else {
			return this._renderShowQrCodeInfo();
		}
	};

	_renderReadQrCode = () => {
		const { navigation } = this.props;
		console.log('lol', navigation);
		return (
			<View
				style={{
					flex: 1
				}}
			>
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
				<View style={styles.wrapperOpacityFrame}>
					<Image
						source={Images.opacityFrame}
						style={styles.opacityFrameStyle}
						// resizeMode="stretch"
					/>
				</View>
				<View style={styles.wrapperHeaderTitle}>
					<Text style={styles.readQrCodeTitleStyle}>
						{
							'Posicione o QR code dentro do quadrado e aguarde. /n A leitura é automática.'
						}
					</Text>
				</View>
				<View style={styles.containerIconArrowLeft}>
					<TouchableOpacity
						style={styles.wrapperIconArrowLeft}
						onPress={() => {
							navigation.goBack();
						}}
					>
						<Image
							source={Images.iconArrowLeft}
							style={styles.iconArrowLeftStyle}
							resizeMode={'contain'}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	};

	onBarcodeScan = qrvalue => {
		//called after te successful scanning of QRCode/Barcode
		this.setState({ qrvalue: qrvalue });
	};

	// /**
	//  * render the modal
	//  * @author samuelmataraso
	//  * @method _renderShowQrCodeInfo
	//  * @param none
	//  * @return {func} render
	//  */
	_renderShowQrCodeInfo = () => {
		const {} = this.state;

		return (
			<View style={styles.containerShowQrCodeInfo}>
				<View style={styles.wrapperShowQrdCodeInfoTitle}>
					<Text style={styles.showQrCodeInforTitleStyle}>{'SCANNED'}</Text>
				</View>
				<View style={{ alignSelf: 'center' }}>
					<Text
						style={styles.qrValueTextStyle}
						onPress={() => this.onOpenlink()}
					>
						{'QR Code: '}
						<Text style={{ color: 'lightblue' }}>{this.state.qrvalue}</Text>
					</Text>
				</View>
				<TouchableHighlight
					onPress={() => this.onOpenlink()}
					style={styles.buttonOpenLink}
				>
					<View>
						<Text style={styles.openLinkTextStyle}>{'Open Link'}</Text>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					onPress={() => this.onContinueScan()}
					style={styles.buttonContinue}
				>
					<View>
						<Text style={styles.continuaTextStyle}>{'Continue Scanning'}</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	};

	onOpenlink = () => {
		const { qrvalue } = this.state;
		//Function to open URL, If scanned
		Linking.openURL(qrvalue);
		//Linking used to open the URL in any browser that you have installed
	};
	onContinueScan = () => {
		//To continue Scanning
		this.setState({ qrvalue: '' });
	};

	render() {
		return this._handleChooseQrCodeOption();
	}
}

QrCode.defaultProps = {
	/**
	 *(PropsTypes)
	 *imageProps: Images.iconBlankStateTwo,
	 *boolProps: false,
	 *nullProps: null,
	 *stringProps: '',
	 *funcProps: () => {},
	 *numProps: 2,
	 */
};

QrCode.propTypes = {
	/**
   *(used for some props with any type)
   *  anyType: PropTypes.any
   *(used to boolean props)
   *  boolType: PropTypes.bool
   *(used to stirng props)
   *  stringType: PropTypes.string
   *(user to number props)
   *  numberProps: PropTypes.number
   *(used to func props (onPress, overlay, etc.))
   *  funcType: PropTypes.func
   *(used to styles props)
   *  objectType: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
      PropTypes.array
    ])
   *(used to images(url/images on project))
   *  imageType: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
   */
};

export default QrCode;
