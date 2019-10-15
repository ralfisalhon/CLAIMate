import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
	SafeAreaView,
	ScrollView
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { Icon } from 'native-base';

var dummyText =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis. Non blandit massa enim nec dui. Turpis egestas pretium aenean pharetra magna ac placerat. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Lorem mollis aliquam ut porttitor leo a."

var legislations = "Claimed Amount: 570HKD (full refund)\nThe Claimant also kindly requested a written apology from the company.\nGoverning law: English Law\nRelevant statutory sections: Section 9 of the Consumer Protection Act:"

export default class ReviewScreen extends Component
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
				<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontSize: 24, fontWeight: '500'}}>Review</Text>
			</View>
		);
	}

	renderClaims() {
		return(
			<View style = {{flex: 1, backgroundColor: 'white', marginVertical: 15, borderRadius: 20, marginHorizontal: 20}}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style = {{flexDirection: 'row', marginHorizontal: 20, marginTop: 10}}>
					<View>
						<Icon name="computer" type="MaterialIcons" style={{ fontSize: 80, color: "#00355f" }} />
					</View>
					<View style = {{flex: 1, marginLeft: 20, alignItems: 'center', justifyContent: 'center'}}>
						<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontSize: 16, fontWeight: '500', textDecorationLine: 'underline'}}>An Online Goods Provider</Text>
						<Text style = {styles.reviewText}>Transaction Date: 23/02/2019</Text>
						<Text style = {styles.reviewText}>Good or Service: Good</Text>
					</View>
				</View>
				<View style = {{flex: 1, marginHorizontal: 20, marginVertical: 10}}>
					<View style = {{flex: 1}}>
						<Text style = {styles.reviewTextBold}>Ground for claim:</Text>
						<Text style = {styles.reviewText}>Bought a toaster which was not of satisfactory quallity. The toaster would not turn on and the bread would not stay down</Text>
					</View>
					<View style = {{marginTop: 10}}>
						<Text style = {styles.reviewTextBold}>Evidence attached:</Text>
						<View style = {{flexDirection: 'row'}}>
							<TouchableOpacity activeOpacity={0.5} style = {{width: 110, height: 30, backgroundColor: '#00355f', borderRadius: 100, marginTop: 5, marginRight: 10, justifyContent: 'center', alignItems: 'center'}} onPress={() => this.props.navigation.navigate("image")}>
								<Text style = {{color: 'white', fontFamily: 'Avenir Next'}}>confirmation</Text>
							</TouchableOpacity>
							<TouchableOpacity activeOpacity={0.5} style = {{width: 110, height: 30, backgroundColor: '#00355f', borderRadius: 100, marginTop: 5, marginRight: 10, justifyContent: 'center', alignItems: 'center'}}>
								<Text style = {{color: 'white', fontFamily: 'Avenir Next'}}>identification</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style = {{marginTop: 15}}>
						<Text style = {styles.reviewTextBold}>Claimed amount:</Text>
						<Text style = {[styles.reviewText]}>570HKD (full refund){"\n"}The Claimant also kindly requested a written apology from the company.</Text>
					</View>
					<View style = {{marginTop: 15}}>
						<Text style = {styles.reviewTextBold}>Governing law:</Text>
						<Text style = {[styles.reviewText]}>English Law</Text>
					</View>
					<View style = {{marginTop: 15}}>
						<Text style = {styles.reviewTextBold}>Relevant statutory sections:</Text>
						<TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate("section")}>
							<Text style = {[styles.reviewText, {textDecorationLine: 'underline'}]}>Section 9 of the Consumer Protection Act</Text>
						</TouchableOpacity>
					</View>

					<View style = {{marginTop: 15}}>
						<Text style = {styles.reviewTextBold}>Company Response</Text>
						<Text style = {styles.reviewText}>Email response on 20th January 2019: We apologize for your inconvenience and would like to settle your claim with a full refund.</Text>
					</View>

					<View style = {{marginTop: 25}}>
						<Text style = {[styles.reviewTextBold, {textAlign: 'center', fontSize: 16}]}>Do you find this complaint authentic and reasonable?</Text>
						<View style = {{flexDirection: 'row', marginTop: 10}}>
							<TouchableOpacity style = {{height: 50, backgroundColor: '#00355f', marginBottom: 15, borderRadius: 100, justifyContent: 'center', alignItems: 'center', flex: 1, marginRight: 5}} activeOpacity={0.5} onPress={() => this.props.navigation.navigate("pick")}>
								<Text style = {{fontFamily: 'Avenir Next', color: 'white', textAlign: 'center', fontSize: 18, fontWeight: '500'}}>YES</Text>
							</TouchableOpacity>
							<TouchableOpacity style = {{height: 50, backgroundColor: '#00355f', marginBottom: 15, borderRadius: 100, justifyContent: 'center', alignItems: 'center', flex: 1, marginLeft: 5}} activeOpacity={0.5} onPress={() => this.props.navigation.navigate("pick")}>
								<Text style = {{fontFamily: 'Avenir Next', color: 'white', textAlign: 'center', fontSize: 18, fontWeight: '500'}}>NO</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
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
				{this.renderClaims()}
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ebecf0',
	},
	reviewText: {fontFamily: 'Avenir Next', color: '#00355f', fontSize: 13, fontWeight: '400'},
	reviewTextBold: {fontFamily: 'Avenir Next', color: '#00355f', fontSize: 15, fontWeight: '500'},
});
