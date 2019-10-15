import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
	FlatList,
	Dimensions,
	SafeAreaView,
} from 'react-native';
import { Icon } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default class AirlineScreen extends Component
{
	static navigationOptions = {
		header: null,
		gesturesEnabled: false,
	};

	constructor()
	{
		super();
		this.state = {
	        data: [
				{title: 'Cathay Pacific', image: require("./images/cathay.png"), numCases: 18, responseRate: 90, settledCasesRate: 55, responseTime: 5},
				{title: 'HK Express', image: require("./images/hkexpress.jpg"), numCases: 93, responseRate: 13, settledCasesRate: 20, responseTime: 2},
				{title: 'Pineapple Airlines',image: require("./images/pineapple.png"), numCases: 21, responseRate: 55, settledCasesRate: 95, responseTime: 3},
				{title: 'China Airlines', image: require("./images/chinaairlines.jpg"), numCases: 11, responseRate: 26, settledCasesRate: 95, responseTime: 11},
				{title: 'Ryanair', image: require("./images/ryanair.png"), numCases: 40, responseRate: 60, settledCasesRate: 91, responseTime: 9},
				{title: 'Emirates',image: require("./images/emirates.png"), numCases: 15, responseRate: 75, settledCasesRate: 67, responseTime: 20},
			],
			dropdown: [
				{ value: 'Average Response Time' },
				{ value: 'Number of Cases' },
				{ value: 'Response Rate' },
				{ value: 'Settled Cases Rate' }
			]
	    };
	}

	airlineClicked(title, icon, numCases, responseRate, settledCasesRate, responseTime) {
		globalTitle = title;
		globalIcon = icon;
		globalResponseRate = responseRate;
		globalSettledCases = settledCasesRate;
		globalCases = numCases;
		globalResponseTime = responseTime;
		this.props.navigation.navigate("specificAirline");
	}

	sort(text) {
		if (text == "Number of Cases") {
			this.setState({
				data: [
					{title: 'HK Express', image: require("./images/hkexpress.jpg"), numCases: 93, responseRate: 13, settledCasesRate: 20, responseTime: 2},
					{title: 'Ryanair', image: require("./images/ryanair.png"), numCases: 40, responseRate: 60, settledCasesRate: 91, responseTime: 9},
					{title: 'Pineapple Airlines',image: require("./images/pineapple.png"), numCases: 21, responseRate: 55, settledCasesRate: 95, responseTime: 3},
					{title: 'Cathay Pacific', image: require("./images/cathay.png"), numCases: 18, responseRate: 90, settledCasesRate: 55, responseTime: 5},
					{title: 'Emirates',image: require("./images/emirates.png"), numCases: 15, responseRate: 75, settledCasesRate: 67, responseTime: 20},
					{title: 'China Airlines', image: require("./images/chinaairlines.jpg"), numCases: 11, responseRate: 26, settledCasesRate: 95, responseTime: 11},
				],
			});
		} else if (text == "Average Response Time") {
			this.setState({
				data: [
					{title: 'HK Express', image: require("./images/hkexpress.jpg"), numCases: 93, responseRate: 13, settledCasesRate: 20, responseTime: 2},
					{title: 'Pineapple Airlines',image: require("./images/pineapple.png"), numCases: 21, responseRate: 55, settledCasesRate: 95, responseTime: 3},
					{title: 'Cathay Pacific', image: require("./images/cathay.png"), numCases: 18, responseRate: 90, settledCasesRate: 55, responseTime: 5},
					{title: 'Ryanair', image: require("./images/ryanair.png"), numCases: 40, responseRate: 60, settledCasesRate: 91, responseTime: 9},
					{title: 'China Airlines', image: require("./images/chinaairlines.jpg"), numCases: 11, responseRate: 26, settledCasesRate: 95, responseTime: 11},
					{title: 'Emirates',image: require("./images/emirates.png"), numCases: 15, responseRate: 75, settledCasesRate: 67, responseTime: 20},
				],
			});
		} else if (text == "Response Rate") {
			this.setState({
				data: [
					{title: 'Cathay Pacific', image: require("./images/cathay.png"), numCases: 18, responseRate: 90, settledCasesRate: 55, responseTime: 5},
					{title: 'Emirates',image: require("./images/emirates.png"), numCases: 15, responseRate: 75, settledCasesRate: 67, responseTime: 20},
					{title: 'Ryanair', image: require("./images/ryanair.png"), numCases: 40, responseRate: 60, settledCasesRate: 91, responseTime: 9},
					{title: 'Pineapple Airlines',image: require("./images/pineapple.png"), numCases: 21, responseRate: 55, settledCasesRate: 95, responseTime: 3},
					{title: 'China Airlines', image: require("./images/chinaairlines.jpg"), numCases: 11, responseRate: 26, settledCasesRate: 95, responseTime: 11},
					{title: 'HK Express', image: require("./images/hkexpress.jpg"), numCases: 93, responseRate: 13, settledCasesRate: 20, responseTime: 2},
				],
			});
		} else if (text == "Settled Cases Rate") {
			this.setState({
				data: [
					{title: 'Pineapple Airlines',image: require("./images/pineapple.png"), numCases: 21, responseRate: 55, settledCasesRate: 95, responseTime: 3},
					{title: 'China Airlines', image: require("./images/chinaairlines.jpg"), numCases: 11, responseRate: 26, settledCasesRate: 95, responseTime: 11},
					{title: 'Ryanair', image: require("./images/ryanair.png"), numCases: 40, responseRate: 60, settledCasesRate: 91, responseTime: 9},
					{title: 'Emirates',image: require("./images/emirates.png"), numCases: 15, responseRate: 75, settledCasesRate: 67, responseTime: 20},
					{title: 'Cathay Pacific', image: require("./images/cathay.png"), numCases: 18, responseRate: 90, settledCasesRate: 55, responseTime: 5},
					{title: 'HK Express', image: require("./images/hkexpress.jpg"), numCases: 93, responseRate: 13, settledCasesRate: 20, responseTime: 2},
				],
			});
		}
	}

	renderItem = ({item, index}) => {
		return (
			<TouchableOpacity style = {{flex: 1, flexDirection: 'row', backgroundColor: 'white', marginVertical: 5, borderRadius: 20, marginHorizontal: 10}} activeOpacity={0.5} onPress={() => this.airlineClicked(item.title, item.image, item.numCases, item.responseRate, item.settledCasesRate, item.responseTime)}>
				<View style = {{borderWidth: 0, width: (windowWidth-60)/3, height: (windowWidth-60)/3, borderRadius: 100, justifyContent: 'center', alignItems: 'center', borderColor: 'lightgray'}}>
					<Image
					style={{width: 75, height: 75, borderRadius: 20, borderWidth: 1, borderColor: "lightgray"}}
					source={item.image}
					/>
				</View>
				<View style = {{flex: 1, justifyContent: 'center'}}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontWeight: '500', fontSize: 14}}>{item.title}</Text>
					<Text style = {{fontFamily: 'Avenir Next', color: '#687195', fontWeight: '400', fontSize: 12}}>Total Number of Cases: {item.numCases}</Text>
					<Text style = {{fontFamily: 'Avenir Next', color: '#687195', fontWeight: '400', fontSize: 12, marginTop: -2}}>Average Response Time: {item.responseTime} days</Text>
					<Text style = {{fontFamily: 'Avenir Next', color: '#687195', fontWeight: '400', fontSize: 12, marginTop: -2}}>Response Rate: {item.responseRate}%</Text>
					<Text style = {{fontFamily: 'Avenir Next', color: '#687195', fontWeight: '400', fontSize: 12, marginTop: -2}}>Settled Cases Rate: {item.settledCasesRate}%</Text>
				</View>
			</TouchableOpacity>
		);
	};

	render()
	{
		return(
			<SafeAreaView style = {styles.container}>
				<View style = {{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                	<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontSize: 24, fontWeight: '500', marginBottom: 30}}>AIRLINES</Text>
				</View>
				<View style = {{marginHorizontal: 40, marginTop: -20}}>
					<Dropdown
					label='Sort By'
					data={this.state.dropdown}
					onChangeText={(text) => this.sort(text)}/>
				</View>
				<View>
					<FlatList
						data={this.state.data}
						style = {{width: windowWidth, height: windowHeight-240}}
						renderItem={this.renderItem}
						numColumns={1}
						keyExtractor={(item, index) => index.toString()}
					/>
				</View>
				<View style = {{justifyContent: 'flex-end', flex: 1}}>
					<TouchableOpacity style = {{height: 50, backgroundColor: 'white', marginBottom: 15, marginHorizontal: 100, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => this.props.navigation.goBack()}>
						<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', textAlign: 'center', fontSize: 16}}>Go Back</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ebecf0',
	},
});
