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

export default class SectionScreen extends Component
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
				<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontSize: 16, fontWeight: '500', textAlign: 'center'}}>Section 9 of the Consumer Protection Act</Text>
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
				<View style = {{flex: 1, backgroundColor: 'white', margin: 20, borderRadius: 20, padding: 20}}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Text style = {styles.reviewText}>
						(1) Every contract to supply goods is to be treated as including a term that the quality of the goods is satisfactory.{"\n"}
						(2) The quality of goods is satisfactory if they meet the standard that a reasonable person would consider satisfactory, taking account of—{"\n"}
						{"        "}(a) any description of the goods,{"\n"}
						{"        "}(b) the price or other consideration for the goods (if relevant), and{"\n"}
						{"        "}(c) all the other relevant circumstances (see subsection (5)).{"\n"}
						(3) The quality of goods includes their state and condition; and the following aspects (among others) are in appropriate cases aspects of the quality of goods—{"\n"}
						{"        "}(a) fitness for all the purposes for which goods of that kind are usually supplied;{"\n"}
						{"        "}(b) appearance and finish;{"\n"}
						{"        "}(c) freedom from minor defects;{"\n"}
						{"        "}(d) safety;{"\n"}
						{"        "}(e) durability.{"\n"}
						(4) The term mentioned in subsection (1) does not cover anything which makes the quality of the goods unsatisfactory—{"\n"}
						{"        "}(a) which is specifically drawn to the consumer's attention before the contract is made,{"\n"}
						{"        "}(b) where the consumer examines the goods before the contract is made, which that examination ought to reveal, or{"\n"}
						{"        "}(c) in the case of a contract to supply goods by sample, which would have been apparent on a reasonable examination of the sample.{"\n"}
						(5) The relevant circumstances mentioned in subsection (2)(c) include any public statement about the specific characteristics of the goods made by the trader, the producer or any representative of the trader or the producer.{"\n"}
						(6) That includes, in particular, any public statement made in advertising or labelling.{"\n"}
						(7) But a public statement is not a relevant circumstance for the purposes of subsection (2)(c) if the trader shows that—{"\n"}
						{"        "}(a) when the contract was made, the trader was not, and could not reasonably have been, aware of the statement,{"\n"}
						{"        "}(b) before the contract was made, the statement had been publicly withdrawn or, to the extent that it contained anything which was incorrect or misleading, it had been publicly corrected, or{"\n"}
						{"        "}(c) the consumer's decision to contract for the goods could not have been influenced by the statement.{"\n"}
						(8) In a contract to supply goods a term about the quality of the goods may be treated as included as a matter of custom.{"\n"}
						(9) See section 19 for a consumer's rights if the trader is in breach of a term that this section requires to be treated as included in a contract.{"\n"}
					</Text>
				</ScrollView>
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
	reviewText: {fontFamily: 'Avenir Next', color: '#00355f', fontSize: 12, fontWeight: '400'},
	reviewTextBold: {fontFamily: 'Avenir Next', color: '#00355f', fontSize: 15, fontWeight: '500'},
});
