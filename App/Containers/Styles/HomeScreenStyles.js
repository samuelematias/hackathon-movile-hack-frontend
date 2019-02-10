import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/';

const { HomeScreenMetrics } = Metrics;

export default StyleSheet.create({
	...ApplicationStyles.screen,
	wrapperHeader: {
		...HomeScreenMetrics.wrapperHeader,
		backgroundColor: Colors.skinBlue
		// flex: 1
	},
	wrapperInfo: {
		...HomeScreenMetrics.wrapperInfo
	},
	wrapperMoney: {
		...HomeScreenMetrics.wrapperMoney,
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
		...HomeScreenMetrics.wallerStyle
	},
	wrapperWallet: {
		...HomeScreenMetrics.wrapperWallet,
		position: 'absolute',
		right: 0
	}
});
