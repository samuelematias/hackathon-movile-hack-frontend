import React from 'react';
import { Platform } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import { Colors } from '../Themes';

import LaunchScreen from '../Containers/LaunchScreen';
import ExampleScreen from '../Containers/ExampleScreen';
import AboutScreen from '../Containers/AboutScreen';
import WelcomeScreen from '../Containers/WelcomeScreen';
import InputScreen from '../Containers/InputScreen';

import HomeScreen from '../Containers/HomeScreen';
import QrCodeGeneratorScreen from '../Containers/QrCodeGeneratorScreen';
import ProfileScreen from '../Containers/ProfileScreen';
import LoginScreen from '../Containers/LoginScreen';

const TabNav = TabNavigator(
	{
		HomeScreenTab: {
			screen: HomeScreen
		},
		QrCodeGeneratorScreenTab: {
			screen: QrCodeGeneratorScreen
		},
		ProfileScreenTab: {
			screen: ProfileScreen
		}
	},
	{
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false,
		initialRouteName: 'HomeScreenTab',
		tabBarOptions: {
			showLabel: true,
			showIcon: true,
			style: {
				backgroundColor: '#4993d6',
				height: 47
			},
			tabStyle: {
				borderTopWidth: 1,
				borderTopColor: '#4993d6',
				flex: 1
			},
			labelStyle: {
				fontSize: 12,
				color: 'red',
				paddingBottom: 3
			},
			indicatorStyle: {
				backgroundColor: 'transparent'
			}
		}
	}
);

const AppNavigation = StackNavigator(
	{
		TabRoot: { screen: TabNav },
		Welcome: { screen: WelcomeScreen },
		Input: { screen: InputScreen },
		Login: { screen: LoginScreen }
	},
	{
		headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
		initialRouteName: 'Login',
		/* The header config from HomeScreen is now here */
		navigationOptions: {
			headerStyle: {
				backgroundColor: Colors.skinBlue
			},
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}
	}
);

export default AppNavigation;
