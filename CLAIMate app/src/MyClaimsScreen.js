import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
	SafeAreaView,
	FlatList,
	Dimensions,
} from 'react-native';
import { Icon } from "native-base";
import { StackActions, NavigationActions } from 'react-navigation';
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default class MyClaimsScreen extends Component
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
				{name: "Peach Airlines", status: "In Progress", nature: "Overbooking", date: "23/02/2019", image: require("./images/peach.png"), public: false},
				{name: "Apple Inc.", status: "Settled (within 2 weeks)", nature: "Overcharged", date: "18/02/2019", image: require("./images/apple.png"), public: false},
				{name: "Samsung Inc.", status: "In Progress (exceeded 2 weeks)", nature: "Overbooking", date: "02/02/2019", image: require("./images/samsung.jpg"), public: true},
			]
	    };
	}

	renderItem = ({item, index}) => {
		return (
			<View style = {{height: item.public ? windowWidth/4 + 30 : windowWidth/4, borderWidth: 0, borderRadius: 10, marginVertical: 5, borderColor: 'white', backgroundColor: 'white', justifyContent: 'space-between', padding: 10}}>
				<View style = {{flexDirection: 'row', height: (windowWidth/4-20)}}>
					<View style = {{width: 85, flexDirection: 'column', justifyContent: 'space-between'}}>
						<Image
						style={{width: 70, height: 70, borderRadius: 20, borderWidth: 0, borderColor: "lightgray"}}
						source={item.image}
						/>
					</View>

					<View style = {{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
						<Text style = {{color: '#00355f', fontFamily: 'Avenir Next', fontSize: 13}}>{item.name}</Text>
						<Text style = {{color: '#00355f', fontFamily: 'Avenir Next', fontSize: 13}}>Date: {item.date}</Text>
						<Text style = {{color: '#00355f', fontFamily: 'Avenir Next', fontSize: 13}}>Status: {item.status}</Text>
					</View>
				</View>
				{item.public
					?
					<View style = {{flex: 1, marginTop: 10, flexDirection: 'row'}}>
						<Text style = {{color: '#00355f', fontFamily: 'Avenir Next', fontSize: 13, fontWeight: '500'}}>Go public now?</Text>
						<TouchableOpacity style = {{width: 50, backgroundColor: '#00355f', height: 20, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 5}} activeOpacity={0.5} onPress={() => Alert.alert("Your claim has gone public!")}>
							<Text style = {{color: 'white', fontFamily: 'Avenir Next', fontSize: 14}}>YES</Text>
						</TouchableOpacity>
					</View>
					:
					<View></View>}
			</View>
		);
	};

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

				<View style = {{justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontSize: 24, fontWeight: '500'}}>My Claims</Text>
				</View>

				<View style = {{flex: 1, flexDirection: 'column', marginBottom: 10, marginHorizontal: 20}}>
					<FlatList
						data={this.state.data}
						style = {{width: windowWidth-40, height: windowHeight-160}}
						renderItem={this.renderItem}
						showsVerticalScrollIndicator={false}
						keyExtractor={(item, index) => index.toString()}
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
		flexDirection: 'column',
	},
});
