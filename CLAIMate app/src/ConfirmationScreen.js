import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
	SafeAreaView,
	Dimensions,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import { Icon } from "native-base";
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default class EvidenceScreen extends Component
{
	static navigationOptions = {
		header: null,
		gesturesEnabled: false,
	};

	constructor()
	{
		super();
	}

	renderButton() {
		return(
			<View style = {{justifyContent: 'flex-end'}}>
				<TouchableOpacity style = {{height: 50, backgroundColor: 'white', marginBottom: 15, marginHorizontal: 100, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => this.props.navigation.navigate("pick")}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', textAlign: 'center', fontSize: 16}}>Go Back</Text>
				</TouchableOpacity>
			</View>
		);
	}

	render()
	{
		return(
			<SafeAreaView style = {styles.container}>
				<View style = {{flex: 1}}>
					<View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
						<Icon name="checkbox-marked-circle" type="MaterialCommunityIcons" style={{ fontSize: 80, color: "#00355f", marginRight: 15 }} />
						<Text style = {{color: "#00355f", fontFamily: 'Avenir Next', fontSize: 18, fontWeight: '500'}}>Your case have been{"\n"}sent to the company. </Text>
					</View>
					<View style = {{margin: 20, backgroundColor: 'white', borderRadius: 20, padding: 10}}>
						<Text style = {{color: "#00355f", fontFamily: 'Avenir Next', fontSize: 16, fontWeight: '400'}}>
						Claim No. 903924{"\n"}
						If you do not receive response form the company within 2 weeks, come back to CLAIMate to publicise your case!{"\n"}{"\n"}
						Authenticity of cases is crucially important in supporting the operation of our App. {"\n"}{"\n"}Would you mind spending several minutes to review the cases that others have filed?
						</Text>

						<TouchableOpacity style = {{height: 50, backgroundColor: '#00355f', marginTop: 15, marginHorizontal: 75, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => this.props.navigation.navigate("review")}>
							<Text style = {{fontFamily: 'Avenir Next', color: 'white', textAlign: 'center', fontSize: 16}}>Give Reviews</Text>
						</TouchableOpacity>
					</View>
				</View>
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
