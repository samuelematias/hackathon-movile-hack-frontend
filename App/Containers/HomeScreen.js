import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	Image,
	View,
	Platform,
	ActivityIndicator
} from 'react-native';
import { Images, Colors, Metrics } from '../Themes';

// Styles
import styles from './Styles/HomeScreenStyles';
import { FlatList } from 'react-native-gesture-handler';
import { StatusBarColor, Button } from '../Components/Common';
class HomeScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		// headerTitle: <Text style={styles.headerLabelStyle}>{'HomeScreen'}</Text>,
		header: null,
		tabBarIcon: ({ focused }) => {
			if (focused) {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconHomeOn}
						resizeMode={'contain'}
					/>
				);
			} else {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconHomeOff}
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
					{'Home'}
				</Text>
			</View>
		)
	});

	constructor(props) {
		super(props);

		this.state = {
			minhasCompras: []
		};
	}

	componentDidMount() {
		const minhasCompras = [
			{
				id: '1',
				date: '08/02/2019',
				seller: 'Bença Lanches',
				value: 'R$ 20,00'
			},
			{
				id: '2',
				date: '08/02/2019',
				seller: 'Bença Lanches',
				value: 'R$ 20,00'
			},
			{
				id: '3',
				date: '08/02/2019',
				seller: 'Bença Lanches',
				value: 'R$ 20,00'
			}
		];

		this.setState({ minhasCompras: minhasCompras });
	}

	_renderItem = item => {
		<View style={{ flexDirection: 'row' }}>
			<Text>Nome 1</Text>
			<Text>Nome 2</Text>
			<Text>Nome 3</Text>
		</View>;
	};

	render() {
		const { minhasCompras } = this.state;
		return (
			<View style={styles.mainContainer}>
				<View style={styles.header}>
					<View style={styles.saldoContent}>
						<Text style={styles.TextSaldoDisponivel}>Saldo Disponível</Text>
						<Text style={styles.TextSaldoValor}>R$ 700,00</Text>
						{/* <Image source={Images.iconWallet} style={styles.imageSaldo} /> */}
					</View>
				</View>
				<View style={styles.adicionarSaldo}>
					<Button
						labelButton={'Adicionar valor a Carteira'}
						labelButtonStyle={styles.labelButtonStyle}
						buttonStyle={styles.actionButtonStyle}
						onPress={() => {
							navigation.navigate('Login');
						}}
					/>
				</View>
				<View style={styles.wrapperCompras}>
					<Text style={styles.wrapperComprasTitle}>Últimas Compras</Text>
					<FlatList
						data={minhasCompras}
						_keyExtractor={(item, index) => item.id}
						renderItem={item => this._renderItem(item)}
					/>
				</View>
			</View>
		);
	}
}

export default HomeScreen;
