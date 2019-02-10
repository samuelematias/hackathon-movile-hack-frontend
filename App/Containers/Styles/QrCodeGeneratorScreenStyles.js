import { StyleSheet } from 'react-native';
import {
	Metrics,
	ApplicationStyles,
	CustomFonts,
	Colors,
	Fonts
} from '../../Themes/';

const { QrCodeGeneratorScreenMetrics } = Metrics;

export default StyleSheet.create({
	...ApplicationStyles.screen,
	container: {
		paddingBottom: Metrics.baseMargin
	},
	iconHeader: {
		height: 20,
		width: 20
	},
	wrapperTabBarLabel: {
		marginTop: 15
	},
	label: {
		textAlign: 'center',
		fontSize: 10
	},
	header: {
		height: 130,
		width: Metrics.screenWidth,
		backgroundColor: '#4993d6'
	},
	headerContent: {
		backgroundColor: '#4993d6',
		height: 130
	},
	saldoContent: {
		marginLeft: 14,
		marginTop: 36
	},
	TextSaldoDisponivel: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#07549a'
	},
	TextSaldoValor: {
		fontSize: 30,
		color: '#fff'
	},
	qrCodeWrapper: {
		marginTop: 20,
		alignItems: 'flex-start'
	},
	qrCodeContent: {
		marginLeft: 16
	},
	qrCodeText: {
		...Fonts.style.qrCodeText,
		color: Colors.skinBlack
	},
	qrCodeInputContent: {
		flexDirection: 'row',
		marginTop: 20,
		alignItems: 'flex-start'
	},
	qrCode$: {
		marginRight: 5,
		fontSize: 30,
		height: 100,
		color: '#4993d6'
	},
	qrCodeInputField: {
		// height: 100,
		flex: 1,
		color: Colors.skinBlue,
		fontSize: 50
		// marginRight: 2,
		// backgroundColor: 'red'
	},
	gerarCodeContent: {
		bottom: 0,
		right: 0,
		left: 0,
		position: 'absolute',
		flex: 1,
		alignItems: 'center'
	},
	actionButtonStyle: {
		backgroundColor: '#4993d6'
	},
	labelButtonStyle: {
		color: 'black',
		fontSize: 14
	},
	wrapperModal: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	sectionTitleStyle: {
		...CustomFonts.style.h1,
		color: Colors.grayAccent,
		textAlign: 'center'
	},
	wrapperHeader: {
		...QrCodeGeneratorScreenMetrics.wrapperHeader,
		backgroundColor: Colors.skinBlue
		// flex: 1
	},
	wrapperInfo: {
		...QrCodeGeneratorScreenMetrics.wrapperInfo
	},
	wrapperMoney: {
		...QrCodeGeneratorScreenMetrics.wrapperMoney,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	avaiableMoneyTextStyle: {
		...Fonts.style.avaiableMoneyTextStyle,
		color: Colors.darkBlue
	},
	moneyTextStyle: {
		...Fonts.style.moneyTextStyle,
		color: Colors.white
	},
	wallerStyle: {
		...QrCodeGeneratorScreenMetrics.wallerStyle
	},
	wrapperWallet: {
		...QrCodeGeneratorScreenMetrics.wrapperWallet,
		position: 'absolute',
		right: 0
	},
	wrapperQrCode: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	QrCodeStyle: {
		width: 200,
		height: 200
	},
	aboutQrCodeTextStyle: {
		color: '#4993d6',
		fontSize: 12,
		marginTop: 10
	},
	QrCodeButtom: {
		...Fonts.style.QrCodeButtom,
		color: Colors.white
	}
});
