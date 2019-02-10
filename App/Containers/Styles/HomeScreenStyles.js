import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
	// ...ApplicationStyles.screen,
	container: {
		paddingBottom: Metrics.baseMargin
	},
	header: {
		height: 130,
		width: Metrics.screenWidth,
		backgroundColor: '#4993d6'
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
	saldoImage: {
		alignItems: 'flex-end'
	},
	imageSaldo: {
		width: 89,
		height: 94
	},
	headerImageContent: {
		alignItems: 'flex-end',
		flex: 1,
		backgroundColor: 'yellow'
	},
	adicionarSaldo: {
		alignItems: 'center',
		marginTop: 20
	},
	actionButtonStyle: {
		borderRadius: 5,
		backgroundColor: '#fff',
		borderColor: '#4993d6',
		borderWidth: 2
	},
	labelButtonStyle: {
		color: '#464646'
	},
	wrapperCompras: {
		flex: 1,
		margin: 16,
		justifyContent: 'flex-start'
	},
	wrapperComprasTitle: {
		fontSize: 16,
		fontWeight: '200',
		color: '#4993d6'
	}
});
