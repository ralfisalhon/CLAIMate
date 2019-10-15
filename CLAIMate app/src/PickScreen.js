import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
	SafeAreaView,
	ScrollView
} from 'react-native';
import { Icon } from "native-base";
import { StackActions, NavigationActions } from 'react-navigation';

export default class PickScreen extends Component
{
	static navigationOptions = {
		header: null,
		gesturesEnabled: false,
	};

	constructor()
	{
		super();
	}

	render()
	{
		return(
			<SafeAreaView style = {styles.container}>
				{1==0?

				<View style = {{backgroundColor: 'white', borderRadius: 20, height: 120, margin: 20, marginBottom: -50, padding: 10}}>
					<ScrollView>
					<Text style = {{color: '#00355f', marginTop: 5, fontFamily: 'Avenir Next', fontSize: 16}}>
						Pineapple Airlines{"\n"}
						Date: 20/2/2019{"\n"}
						Message: We apologize for your inconvenience and would like to settle your claim with a full refund.{"\n"}
						Transaction number: 050-23-234234{"\n"}{"\n"}

						The company indicates that the claim has been settled. Please click “Yes” to confirm settlement should you have received your compensation/apologies.
					</Text>
					</ScrollView>
				</View>

				:null}

				<View style = {{flex: 1, flexDirection: 'row', paddingTop: 100}}>
					<View style = {styles.half}>
						<TouchableOpacity style = {styles.halfButton} onPress={() => this.props.navigation.navigate("browse")}>
							<View style = {{height: 125, width: 125, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 100}}>
								<Icon name="magnifying-glass" type="Entypo" style={{ fontSize: 90, color: "#00355f" }} />
							</View>
							<Text style = {{color: '#00355f', marginTop: 5, fontFamily: 'Avenir Next', fontSize: 16}}>Browse</Text>
						</TouchableOpacity>
					</View>
					<View style = {styles.half}>
						<TouchableOpacity style = {styles.halfButton} onPress={() => this.props.navigation.navigate("claim")}>
							<View style = {{height: 125, width: 125, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 100}}>
								<Icon name="exclamation" type="FontAwesome" style={{ fontSize: 90, color: "#00355f" }} />
							</View>
							<Text style = {{color: '#00355f', marginTop: 5, fontFamily: 'Avenir Next', fontSize: 16}}>Make a Claim</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style = {{flex: 1, flexDirection: 'row', paddingBottom: 100}}>
					<View style = {styles.half}>
						<TouchableOpacity style = {styles.halfButton} onPress={() => this.props.navigation.navigate("review")}>
							<View style = {{height: 125, width: 125, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 100}}>
								<Icon name="rate-review" type="MaterialIcons" style={{ fontSize: 75, color: "#00355f" }} />
							</View>
							<Text style = {{color: '#00355f', marginTop: 5, fontFamily: 'Avenir Next', fontSize: 16}}>Review</Text>
						</TouchableOpacity>
					</View>
					<View style = {styles.half}>
						<TouchableOpacity style = {styles.halfButton} onPress={() => this.props.navigation.navigate("myclaims")}>
							<View style = {{height: 125, width: 125, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 100}}>
								<Icon name="history" type="FontAwesome" style={{ fontSize: 75, color: "#00355f" }} />
							</View>
							<Text style = {{color: '#00355f', marginTop: 5, fontFamily: 'Avenir Next', fontSize: 16}}>My Claims</Text>
						</TouchableOpacity>
					</View>
				</View>
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
	half: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	halfButton: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});
