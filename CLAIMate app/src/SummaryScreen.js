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
import { Dropdown } from 'react-native-material-dropdown';
import { Icon } from 'native-base';
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

var dummyText =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis. Non blandit massa enim nec dui. Turpis egestas pretium aenean pharetra magna ac placerat. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Lorem mollis aliquam ut porttitor leo a. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Auctor urna nunc id cursus metus. Tellus in metus vulputate eu scelerisque felis imperdiet. Neque viverra justo nec ultrices. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Quam elementum pulvinar etiam non quam. Scelerisque felis imperdiet proin fermentum. Facilisis mauris sit amet massa vitae tortor. Felis donec et odio pellentesque diam volutpat commodo sed egestas."

var output = require('./functions/output.js');

export default class SummaryScreen extends Component
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
				{ value: 'Receipt' },
				{ value: 'Ticket' },
				{ value: 'Identification' }
			],
			outputText: dummyText,
			checked: [false, false, false],
		};

	}

	renderButton() {
		return(
			<View style = {{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 50}}>
				<TouchableOpacity style = {{height: 40, width: 120, backgroundColor: 'white', marginBottom: 15, marginHorizontal: 0, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => this.props.navigation.goBack()}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', textAlign: 'center', fontSize: 16}}>Go Back</Text>
				</TouchableOpacity>
				<TouchableOpacity style = {{height: 40, width: 120, backgroundColor: 'white', marginBottom: 15, marginHorizontal: 0, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => this.props.navigation.navigate("confirmation")}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', textAlign: 'center', fontSize: 16}}>Submit</Text>
				</TouchableOpacity>
			</View>
		);
	}

	componentDidMount() {
		// var data = {
		// 	customerName: globalData[0],
		// 	phoneNumber: "+852 99999999",
		// 	email: "email@gmail.com",
		// 	companyName: "Bad Company",
		// 	category: "Airlines",
		// 	itemType: "services",
		// 	description: "They are just so stupid.",
		// 	grounds: "Defective ticket / overbooking",
		// 	transactionDate: "24 Feb 2019",
		// 	claimAmount: 3200,
		// 	customerLocation: "Hong Kong",
		// 	companyLocation: "Hong Kong"
		// }

		var data = {
			customerName: globalData[0],
			phoneNumber: globalData[1],
			email: globalData[2],
			companyName: globalData[3],
			category: globalData[4],
			wantApology: globalData[5],
			description: globalData[6],
			grounds: globalData[7],
			transactionDate: globalData[8],
			claimAmount: globalData[9],
			customerLocation: globalData[10],
			companyLocation: globalData[11]
		}

		var text = output.createDemandLetter(data);
		this.setState({outputText: text});
	}

	check(index) {
		var temp = this.state.checked;
		temp[index] = !temp[index]
		this.setState({checked: temp})
	}

	renderDisclaimer() {
		return(
			<View style = {{marginBottom: 20, marginHorizontal: 20}}>
				<View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: windowWidth-30, paddingRight: 20, marginTop: -10, justifyContent: 'flex-start'
			}}>
					<TouchableOpacity onPress={() => this.check(0)}>
						<Icon name={this.state.checked[0] ? "checkbox-marked-outline" : "checkbox-blank-outline"} type="MaterialCommunityIcons" style={{ fontSize: 20, color: "#00355f", marginRight: 5 }} />
					</TouchableOpacity>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontSize: 12, fontWeight: '400'}}>I confirm that the information given in this form is true, complete and accurate.</Text>
				</View>
				<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontSize: 14, fontWeight: '500'}}>Disclaimer</Text>
				<View style = {{height: 75, backgroundColor: 'white', padding: 5, borderRadius: 10}}>
					<ScrollView>
						<Text style = {{fontFamily: 'Avenir Next', color: "#00355f", fontSize: 12}}>
						1. This letter of demand is automatically generated on CLAIMate for users who act in a personal capacity. CLAIMate is not a law firm and does not provide legal advice.{"\n"}
						2. In providing its document generation service, CLAIMate does not guarantee any response or compensation in any form, and takes no responsibility for any losses arising out of any acts or omission in connection to the generation or transmission of the said letters of demands.
						</Text>
					</ScrollView>
				</View>
				<View style = {{marginTop: 5, marginBottom: -10}}>
					<View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: windowWidth-30, paddingRight: 20, marginTop: 5, justifyContent: 'flex-start'
				}}>
						<TouchableOpacity onPress={() => this.check(1)}>
							<Icon name={this.state.checked[1] ? "checkbox-marked-outline" : "checkbox-blank-outline"} type="MaterialCommunityIcons" style={{ fontSize: 20, color: "#00355f", marginRight: 5 }} />
						</TouchableOpacity>
						<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontSize: 12, fontWeight: '400'}}> I understand the above terms and note my right to seek independent legal advice.</Text>
					</View>
					<View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: windowWidth-30, paddingRight: 20, marginTop: 5, justifyContent: 'flex-start'
				}}>
						<TouchableOpacity onPress={() => this.check(2)}>
							<Icon name={this.state.checked[2] ? "checkbox-marked-outline" : "checkbox-blank-outline"} type="MaterialCommunityIcons" style={{ fontSize: 20, color: "#00355f", marginRight: 5 }} />
						</TouchableOpacity>
						<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontSize: 12, fontWeight: '400'}}>I agree with the disclosure of contents of my claim insofar as necessary for the publication and rating of claims on CLAIMate (save and except that my identifying details would be redacted).</Text>
					</View>
				</View>
			</View>
		);
	}

	render()
	{
		return(
			<SafeAreaView style = {styles.container}>
				<View style = {{marginLeft: 20, marginBottom: -15, marginTop: 10}}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontSize: 14, fontWeight: '500'}}>Your Letter of Demand:</Text>
				</View>
				<ScrollView style ={{margin: 20, flex: 1, backgroundColor: 'white', borderRadius: 10, padding: 10}}>
					<Text style = {{fontFamily: 'Avenir Next', fontSize: 12, paddingBottom: 15}}>{this.state.outputText}</Text>
				</ScrollView>
				<View style = {{marginBottom: 20, marginHorizontal: 20, marginTop: -10}}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontSize: 14, fontWeight: '500'}}>Your Attachments</Text>
					<View style = {{flexDirection: 'row'}}>
						<View style = {{width: 120, height: 22, backgroundColor: 'white', borderRadius: 100, marginTop: 5, marginRight: 10, justifyContent: 'center', alignItems: 'center'}}>
							<Text style = {{color: '#00355f', fontFamily: 'Avenir Next'}}>ticket.pdf</Text>
						</View>
						<View style = {{width: 120, height: 22, backgroundColor: 'white', borderRadius: 100, marginTop: 5, marginRight: 10, justifyContent: 'center', alignItems: 'center'}}>
							<Text style = {{color: '#00355f', fontFamily: 'Avenir Next'}}>screenshot.jpg</Text>
						</View>
					</View>
				</View>
				{this.renderDisclaimer()}
				{this.renderButton()}
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
