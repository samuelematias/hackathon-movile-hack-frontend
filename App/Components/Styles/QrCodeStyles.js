import { StyleSheet } from 'react-native';
import { Colors, Metrics, ApplicationStyles, Fonts } from '../../Themes/';
import colors from '../../Themes/Colors';
const { QrCodeComponentMetrics } = Metrics;
export default StyleSheet.create({
	...ApplicationStyles.screen,
	containerReadQrCode: {
		...QrCodeComponentMetrics.containerReadQrCode,
		backgroundColor: Colors.blackout
		// position: 'absolute'
	},
	readQrCodeTitleStyle: {
		...QrCodeComponentMetrics.readQrCodeTitleStyle,
		...Fonts.style.readQrCodeTitleStyle,
		color: Colors.white,
		textAlign: 'center'
	},
	containerShowQrCodeInfo: {
		...QrCodeComponentMetrics.containerShowQrCodeInfo,
		backgroundColor: colors.black_0_18,
		position: 'absolute'
	},
	wrapperShowQrdCodeInfoTitle: {
		...QrCodeComponentMetrics.wrapperShowQrdCodeInfoTitle,
		alignSelf: 'center'
	},
	showQrCodeInforTitleStyle: {
		...Fonts.style.showQrCodeInforTitleStyle,
		color: Colors.white
	},
	qrValueTextStyle: {
		...Fonts.style.qrValueTextStyle,
		color: Colors.white
	},
	buttonOpenLink: {
		...QrCodeComponentMetrics.buttonOpenLink,
		alignSelf: 'center',
		backgroundColor: Colors.skinBlack
	},
	openLinkTextStyle: {
		...Fonts.style.openLinkTextStyle,
		color: Colors.white
	},
	buttonContinue: {
		...QrCodeComponentMetrics.buttonContinue,
		alignSelf: 'center',
		backgroundColor: Colors.skinBlack
	},
	continuaTextStyle: {
		...Fonts.style.continuaTextStyle,
		color: Colors.white
	},
	view1: {
		...QrCodeComponentMetrics.view1,
		position: 'relative',
		// flex: 1,
		backgroundColor: 'blue'
	},
	view2: {
		...QrCodeComponentMetrics.view2,
		position: 'relative',
		// flex: 1,
		backgroundColor: Colors.tomatoRed
	},
	wrapperOpacityFrame: {
		...QrCodeComponentMetrics.wrapperOpacityFrame,
		position: 'absolute'
	},
	opacityFrameStyle: {
		...QrCodeComponentMetrics.opacityFrameStyle
	},
	wrapperHeaderTitle: {
		...QrCodeComponentMetrics.wrapperHeaderTitle,
		position: 'absolute'
	},
	iconArrowLeftStyle: {
		...QrCodeComponentMetrics.iconArrowLeftStyle
	},
	containerIconArrowLeft: {
		position: 'absolute',
		flex: 1
	},
	wrapperIconArrowLeft: {
		...QrCodeComponentMetrics.wrapperIconArrowLeft
	}
});
