import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
	FlatList,
	Dimensions,
} from 'react-native';
import { Icon } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default class BrowseScreen extends Component
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
				{name: 'Airlines', icon: 'plane', type: 'FontAwesome'},
				{name: 'Household Appliances', icon: 'house-damage', type: 'FontAwesome5'},
				{name: 'Entertainment & Vehicles', icon: 'car', type: 'FontAwesome'},
				{name: 'Electronics', icon: 'ethernet-cable-off', type: 'MaterialCommunityIcons'},
				{name: 'Food & Beverages', icon: 'food', type: 'MaterialCommunityIcons'},
				{name: 'Furnitures', icon: 'sofa', type: 'MaterialCommunityIcons'},
				{name: 'Child Products', icon: 'child', type: 'FontAwesome'},
				{name: 'Healthcare & Cosmetics', icon: 'medical-bag', type: 'MaterialCommunityIcons'},
				{name: 'Fashion', icon: 'tshirt', type: 'FontAwesome5'},
			],
	    };
	}

	goToPage(name, index) {
		if (index == 0) {
			this.props.navigation.navigate("airline");
		} else {
			Alert.alert("Please click Airlines");
		}
	}

	renderButton() {
		return(
			<View style = {{justifyContent: 'flex-end', flex: 1}}>
				<TouchableOpacity style = {{height: 50, backgroundColor: 'white', marginBottom: 15, marginHorizontal: 100, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => this.props.navigation.goBack()}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', textAlign: 'center', fontSize: 16}}>Go Back</Text>
				</TouchableOpacity>
			</View>
		);
	}

	renderItem = ({item, index}) => {
		return (
			<TouchableOpacity style = {{margin: 10, height: windowWidth/3+10}} activeOpacity={0.5} onPress={() => this.goToPage(item.name, index)}>
				<View style = {{borderWidth: 0, width: (windowWidth-60)/3, height: (windowWidth-60)/3, borderRadius: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
					<Icon name={item.icon} type={item.type} style={{ fontSize: 60, color: "#00355f" }} />
				</View>
				<View style = {{width: (windowWidth-60)/3, justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', textAlign: 'center', fontSize: 12}}>{item.name}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	render()
	{
		return(
			<View style = {styles.container}>
				<View style = {{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
                	<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontSize: 24, fontWeight: '500', marginBottom: 10}}>INDUSTRIES</Text>
				</View>
				<View>
					<FlatList
						data={this.state.data}
						style = {{width: windowWidth, height: windowHeight-180}}
						renderItem={this.renderItem}
						numColumns={3}
						keyExtractor={(item, index) => index.toString()}
					/>
				</View>
				{this.renderButton()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ebecf0',
	},
});
