import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from '../../Themes/';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	container: {
		paddingBottom: Metrics.baseMargin
	},
	avatarContent: {
		width: 130,
		height: 130,
		borderRadius: 63,
		borderWidth: 4,
		borderColor: 'white',
		marginBottom: 10,
		alignSelf: 'center',
		position: 'absolute',
		marginTop: 130
	},
	header: {
		backgroundColor: Colors.orangeAccent,
		height: 200
	},
	bodyContent: {
		flex: 1,
		alignItems: 'center',
		padding: 30,
		marginTop: 80
	},
	nameContent: {
		fontSize: 28,
		color: '#696969',
		fontWeight: '600'
	},
	emailContent: {
		fontSize: 16,
		color: '#696969',
		marginTop: 10
	},
	logoutContent: {
		marginTop: 50
	},
	centered: {
		alignItems: 'center'
	},

	iconHeader: {
		height: 20,
		width: 20
	},
	icon: {
		width: 24,
		height: 24,
		marginRight: 14,
		marginTop: 30
	},
	actionButtonStyle: {
		borderRadius: 5,
		backgroundColor: Colors.orangeAccent
	},
	label: {
		textAlign: 'center',
		fontSize: 10
	},
	wrapperTabBarLabel: {
		marginTop: Platform.OS === 'ios' ? 15 : 0
	}
});
