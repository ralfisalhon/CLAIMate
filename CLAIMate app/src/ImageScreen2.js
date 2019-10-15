import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
	SafeAreaView,
	ScrollView,
	Dimensions,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { Icon } from 'native-base';
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default class ImageScreen2 extends Component
{
	static navigationOptions = {
		header: null,
		gesturesEnabled: false,
	};

	constructor()
	{
		super();
	}

	renderHeader() {
		return(
			<View style = {{justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
				<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontSize: 24, fontWeight: '500'}}>Image Preview</Text>
			</View>
		);
	}


	renderButtons() {
		return(
			<View style = {{justifyContent: 'flex-end'}}>
				<TouchableOpacity style = {{height: 50, backgroundColor: 'white', marginBottom: 15, marginHorizontal: 100, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => this.props.navigation.goBack()}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', textAlign: 'center', fontSize: 16}}>Go Back</Text>
				</TouchableOpacity>
			</View>
		);
	}

	render()
	{
		return(
			<SafeAreaView style = {styles.container}>
				{this.renderHeader()}
				<View style = {{flex: 1, backgroundColor: 'white', margin: 20, borderRadius: 20}}>
					<Image
					style={{width: windowWidth-40, height: windowHeight-180, borderRadius: 10, borderWidth: 1, borderColor: "lightgray"}}
					source={require("./images/pineappleTicket.jpg")}
					/>
				</View>
				{this.renderButtons()}
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
