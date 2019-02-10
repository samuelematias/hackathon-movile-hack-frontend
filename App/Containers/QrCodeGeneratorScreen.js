import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	Image,
	View,
	Platform,
	TextInput
} from 'react-native';
import { Images, Colors } from '../Themes';
import { Button, FullModal } from '../Components/Common/';
import axios from 'axios';

// Styles
import styles from './Styles/QrCodeGeneratorScreenStyles';

class QrCodeGeneratorScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null,
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
			QRCode: {}
		};
	}

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
		this.setState({ openFullModal: false });
	};

	_renderFullModalContent = () => {
		return (
			<View style={styles.wrapperModal}>
				<View style={{ alignItems: 'center', justifyContent: 'center' }}>
					<Image
						style={{ width: 200, height: 200 }}
						source={{
							uri: this.state.QRCode.filepath
						}}
					/>
					<Text style={{ color: '#4993d6', fontSize: 12, marginTop: 10 }}>
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

	render() {
		const { openFullModal, QRCodeValue } = this.state;
		return (
			<View style={styles.mainContainer}>
				<View>
					<View style={styles.headerContent}>
						<View sytle={styles.saldoContent}>
							<Text style={styles.TextSaldoDisponivel}>Saldo disponível</Text>
							<Text style={styles.TextSaldoValor}>R$ 700,00</Text>
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
								placeholder={'10,00'}
								placeholderTextColor={'#4993d6'}
								value={QRCodeValue}
							/>
						</View>
					</View>
				</View>
				<View style={styles.gerarCodeContent}>
					<Button
						labelButton={'QR Code'}
						buttonStyle={styles.actionButtonStyle}
						onPress={() => this._generateQRCode(QRCodeValue)}
					/>
				</View>
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
