import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
	SafeAreaView,
	TextInput,
	ScrollView
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
var db = require('./functions/db.js');

export default class ClaimScreen extends Component
{
	static navigationOptions = {
		header: null,
		gesturesEnabled: false,
	};

	constructor()
	{
		super();
		this.state = {
			data: globalData,
			category: [],
			grounds: [],
			apology: [{value: "Yes"}, {value: "No"}]
		}
	}

	componentDidMount() {
		var temp = [];
		for (var i = 0; i < db.categories.length; i++) {
			temp.push({value: db.categories[i].displayName});
		}
		this.setState({category: temp});
	}

	goToEvidence() {
		for (var i = 0; i < 12; i++) {
			//TODO: UNCOMMENT
			// if (this.state.data[i].length < 1) {
			// 	Alert.alert("Please fill in all the responses first!");
			// 	return;
			// }
		}

		globalData = this.state.data;
		this.props.navigation.navigate("evidence");
	}

	updateUserText(text, index) {
		var temp = this.state.data;
		temp[index] = text;
        this.setState({data: temp});
    }

	categoryChanged(text) {
		globalData[4] = text;

		for (var i = 0; i < db.categories.length; i++) {
			if (text == db.categories[i].displayName) {
				var temp = [];
				for (var j = 0; j < db.categories[i].grounds.length; j++) {
					temp.push({value: db.categories[i].grounds[j]});
				}
				this.setState({grounds: temp});
			}
		}
	}

	groundsChanged(text) {
		globalData[7] = text;
	}

	apologyChanged(text) {
		text == "Yes" ? globalData[5] = true : globalData[5] = false;
	}

	renderForm() {
		return(
			<ScrollView style = {{flex: 1, margin: 20}}>
				<View style = {styles.questionView}>
					<Text style = {styles.questionText}>Customer Name</Text>
					<TextInput style={styles.input}
					placeholder="Type your response here"
					value={this.state.data[0]}
					ref='username'
					autoCapitalize='none'
					autoCorrect={false}
					onChangeText={(text) => this.updateUserText(text, 0)}
					blurOnSubmit={true}
					placeholderTextColor='#7f8c8d'
					/>
				</View>
				<View style = {styles.questionView}>
					<Text style = {styles.questionText}>Phone Number</Text>
					<TextInput style={styles.input}
					placeholder="Type your response here"
					value={this.state.data[1]}
					ref='username'
					autoCapitalize='none'
					autoCorrect={false}
					onChangeText={(text) => this.updateUserText(text, 1)}
					blurOnSubmit={true}
					placeholderTextColor='#7f8c8d'
					/>
				</View>
				<View style = {styles.questionView}>
					<Text style = {styles.questionText}>Email</Text>
					<TextInput style={styles.input}
					placeholder="Type your response here"
					value={this.state.data[2]}
					ref='username'
					autoCapitalize='none'
					autoCorrect={false}
					onChangeText={(text) => this.updateUserText(text, 2)}
					blurOnSubmit={true}
					placeholderTextColor='#7f8c8d'
					/>
				</View>
				<View style = {styles.questionView}>
					<Text style = {styles.questionText}>Company Name</Text>
					<TextInput style={styles.input}
					placeholder="Type your response here"
					value={this.state.data[3]}
					ref='username'
					autoCapitalize='none'
					autoCorrect={false}
					onChangeText={(text) => this.updateUserText(text, 3)}
					blurOnSubmit={true}
					placeholderTextColor='#7f8c8d'
					/>
				</View>
				<View style = {styles.dropdownView}>
					<Dropdown
					baseColor={"#00355f"}
					label='Category'
					data={this.state.category}
					onChangeText={(text) => this.categoryChanged(text)}/>
				</View>
				<View style = {styles.dropdownView}>
					<Dropdown
					baseColor={"#00355f"}
					label='Grounds'
					data={this.state.grounds}
					onChangeText={(text) => this.groundsChanged(text)}/>
				</View>
				<View style = {styles.questionView}>
					<Text style = {styles.questionText}>Description</Text>
					<TextInput style={styles.input}
					placeholder="Type your response here"
					value={this.state.data[6]}
					ref='username'
					autoCapitalize='none'
					autoCorrect={false}
					onChangeText={(text) => this.updateUserText(text, 6)}
					blurOnSubmit={true}
					placeholderTextColor='#7f8c8d'
					/>
				</View>
				<View style = {styles.questionView}>
					<Text style = {styles.questionText}>Transaction Date</Text>
					<TextInput style={styles.input}
					placeholder="Type your response here"
					value={this.state.data[8]}
					ref='username'
					autoCapitalize='none'
					autoCorrect={false}
					onChangeText={(text) => this.updateUserText(text, 8)}
					blurOnSubmit={true}
					placeholderTextColor='#7f8c8d'
					/>
				</View>
				<View style = {styles.questionView}>
					<Text style = {styles.questionText}>Claim Amount</Text>
					<TextInput style={styles.input}
					placeholder="Type your response here"
					value={this.state.data[9]}
					ref='username'
					autoCapitalize='none'
					autoCorrect={false}
					onChangeText={(text) => this.updateUserText(text, 9)}
					blurOnSubmit={true}
					placeholderTextColor='#7f8c8d'
					/>
				</View>
				<View style = {styles.dropdownView}>
					<Dropdown
					baseColor={"#00355f"}
					label='Would you like a written apology?'
					data={this.state.apology}
					onChangeText={(text) => this.apologyChanged(text)}/>
				</View>
				<View style = {styles.questionView}>
					<Text style = {styles.questionText}>Customer Location</Text>
					<TextInput style={styles.input}
					placeholder="Type your response here"
					value={this.state.data[10]}
					ref='username'
					autoCapitalize='none'
					autoCorrect={false}
					onChangeText={(text) => this.updateUserText(text, 10)}
					blurOnSubmit={true}
					placeholderTextColor='#7f8c8d'
					/>
				</View>
				<View style = {styles.questionView}>
					<Text style = {styles.questionText}>Company Location</Text>
					<TextInput style={styles.input}
					placeholder="Type your response here"
					value={this.state.data[11]}
					ref='username'
					autoCapitalize='none'
					autoCorrect={false}
					onChangeText={(text) => this.updateUserText(text, 11)}
					blurOnSubmit={true}
					placeholderTextColor='#7f8c8d'
					/>
				</View>

			</ScrollView>
		);
	}

	renderButton() {
		return(
			<View style = {{justifyContent: 'flex-end'}}>
				<TouchableOpacity style = {{height: 40, backgroundColor: 'white', marginBottom: 15, marginHorizontal: 100, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => this.goToEvidence()}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', textAlign: 'center', fontSize: 16}}>Continue</Text>
				</TouchableOpacity>
				<TouchableOpacity style = {{height: 40, backgroundColor: 'white', marginBottom: 15, marginHorizontal: 100, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => this.props.navigation.goBack()}>
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
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontSize: 24, fontWeight: '500'}}>Questionnaire</Text>
				</View>
				{this.renderForm()}
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
	questionView: {backgroundColor: 'white', borderRadius: 20, padding: 10, marginVertical: 5},
	dropdownView: {backgroundColor: 'white', borderRadius: 20, padding: 10, marginVertical: 5, paddingTop: 0},
	questionText: {color: "#00355f", fontFamily: 'Avenir Next', fontWeight: '500', marginBottom: 5}
});
