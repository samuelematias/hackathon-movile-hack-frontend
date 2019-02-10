import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles, CustomFonts, Colors } from '../../Themes/';

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
		color: '#464646',
		fontSize: 18,
		fontWeight: 'bold'
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
		height: 100,
		color: '#4993d6',
		fontSize: 60,
		marginRight: 2
	},
	gerarCodeContent: {
		marginTop: 56,
		alignItems: 'center',
		justifyContent: 'center'
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
	}
});
