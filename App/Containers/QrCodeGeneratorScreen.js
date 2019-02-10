import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	Image,
	View,
	Platform,
	TextInput,
	Keyboard,
	KeyboardAvoidingView
} from 'react-native';
import { Images, Colors } from '../Themes';
import { Button, FullModal } from '../Components/Common/';
import axios from 'axios';

// Styles
import styles from './Styles/QrCodeGeneratorScreenStyles';

class QrCodeGeneratorScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null,
		tabBarVisible: navigation.state.params
			? navigation.state.params.tabBarVisible
			: true,
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

		this.state = {
			QRCodeValue: '',
			openFullModal: false,
			QRCode: {},
			hideButton: false
		};
	}

	componentDidMount() {
		if (Platform.OS === 'android') {
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
	}

	keyboardWillShow = () => {
		this._handleShowTabBar(false);
		this.setState({
			hideButton: true
		});
	};

	keyboardWillHide = () => {
		this._handleShowTabBar(true);
		this.setState({
			hideButton: false
		});
	};

	_handleShowTabBar = boolean => {
		const { navigation } = this.props;
		navigation.setParams({
			tabBarVisible: boolean
		});
	};

	_onChangeText = text => {
		this.setState({ QRCodeValue: text });
	};

	_generateQRCode = value => {
		const currentUser = {
			id: '1',
			name: 'Pedro Neto',
			email: 'pedro.neto@email.com',
			photo: 'https://img.icons8.com/color/1600/engineer.png',
			address: 'Rua Arnaldo Bastos, Madalena, Recife',
			phone: '(81) 99810-7649',
			user_wallet: '1'
		};

		const sendData = {
			user_wallet: currentUser.user_wallet,
			value: value
		};

		axios
			.post(
				'http://ec2-3-90-10-228.compute-1.amazonaws.com:8000/codes/',
				sendData
			)
			.then(res => {
				this.setState({
					QRCode: res.data
				});
			})
			.catch(error => {
				console.log('ERRO');
			});

		this._handleOpenFullModal();
	};

	_handleOpenFullModal = () => {
		this.setState({ openFullModal: true });
	};

	_handleCloseFullModal = () => {
		this.setState({ openFullModal: false, QRCodeValue: '' });
	};

	_renderFullModalContent = () => {
		return (
			<View style={styles.wrapperModal}>
				<View style={styles.wrapperQrCode}>
					<Image
						style={styles.QrCodeStyle}
						source={{
							uri: this.state.QRCode.filepath
						}}
					/>
					<Text style={styles.aboutQrCodeTextStyle}>
						Seu QR Code está pronto para ser escaniado!
					</Text>
				</View>
				<View style={{ marginTop: 15 }}>
					<Button
						labelButton={'Inativar QR Code'}
						buttonStyle={styles.actionButtonStyle}
						onPress={() => this._handleCloseFullModal()}
					/>
				</View>
			</View>
		);
	};

	_handleAndroid = () => {
		const { hideButton, QRCodeValue } = this.state;
		return (
			<View style={styles.gerarCodeContent}>
				{!hideButton ? (
					<Button
						labelButton={'QR Code'}
						labelButtonStyle={styles.QrCodeButtom}
						buttonStyle={styles.actionButtonStyle}
						onPress={() => this._generateQRCode(QRCodeValue)}
						enabledButton={QRCodeValue && QRCodeValue.length > 0 ? true : false}
					/>
				) : null}
			</View>
		);
	};

	render() {
		const { openFullModal, QRCodeValue } = this.state;
		const money = '120,00';
		return (
			<View style={styles.mainContainer}>
				<View style={styles.wrapperHeader}>
					<View style={styles.wrapperInfo}>
						<View>
							<Text style={styles.avaiableMoneyTextStyle}>
								{'Saldo disponível'}
							</Text>
						</View>
						<View style={styles.wrapperMoney}>
							<Text style={styles.moneyTextStyle}>{'R$ ' + money}</Text>
						</View>
						<View style={styles.wrapperWallet}>
							<Image
								source={Images.iconWallet}
								style={styles.wallerStyle}
								resizeMode="stretch"
							/>
						</View>
					</View>
				</View>
				<View style={styles.qrCodeWrapper}>
					<View style={styles.qrCodeContent}>
						<Text style={styles.qrCodeText}>Qual o valor do seu QRCode?</Text>
						<View style={styles.qrCodeInputContent}>
							<Text style={styles.qrCode$}>R$</Text>
							<TextInput
								style={styles.qrCodeInputField}
								onChangeText={text => this._onChangeText(text)}
								placeholder={'00,00'}
								placeholderTextColor={Colors.lightGray}
								value={QRCodeValue}
								keyboardType={'numeric'}
							/>
						</View>
					</View>
				</View>
				{Platform.OS === 'ios' ? (
					<KeyboardAvoidingView
						behavior="padding"
						style={styles.gerarCodeContent}
					>
						<Button
							labelButton={'QR Code'}
							labelButtonStyle={styles.QrCodeButtom}
							buttonStyle={styles.actionButtonStyle}
							onPress={() => this._generateQRCode(QRCodeValue)}
							enabledButton={
								QRCodeValue && QRCodeValue.length > 0 ? true : false
							}
						/>
					</KeyboardAvoidingView>
				) : (
					this._handleAndroid()
				)}
				{
					<FullModal
						open={openFullModal}
						onPressOutside={() => this._handleCloseFullModal()}
						modalContent={() => this._renderFullModalContent()}
					/>
				}
			</View>
		);
	}
}

export default QrCodeGeneratorScreen;
