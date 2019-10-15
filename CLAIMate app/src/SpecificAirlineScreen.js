import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
	FlatList,
	Dimensions,
	SafeAreaView
} from 'react-native';
import { Icon } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default class SpecificAirlineScreen extends Component
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
				{status: "In Dispute", 	nature: "Overbooking", date: "23/02/2019", approval: 140},
				{status: "In Progress", nature: "Overcharged", date: "18/02/2019", approval: 120},
				{status: "Settled", 	nature: "Overbooking", date: "02/02/2019", approval: 130},
				{status: "In Dispute", 	nature: "Overbooking", date: "13/01/2019", approval: 80},
				{status: "In Progress", nature: "Overcharged", date: "23/12/2018", approval: 20},
				{status: "In Progress", nature: "Overcharged", date: "18/11/2018", approval: 110},
				{status: "In Dispute",	nature: "Overbooking", date: "02/11/2018", approval: 100},
				{status: "Settled", 	nature: "Overbooking", date: "13/09/2018", approval: 70},
				{status: "In Dispute", 	nature: "Overbooking", date: "23/02/2019", approval: 140},
				{status: "In Progress", nature: "Overcharged", date: "18/02/2019", approval: 120},
				{status: "Settled", 	nature: "Overbooking", date: "02/02/2019", approval: 130},
				{status: "In Dispute", 	nature: "Overbooking", date: "13/01/2019", approval: 80},
				{status: "In Progress", nature: "Overcharged", date: "23/12/2018", approval: 20},
				{status: "In Progress", nature: "Overcharged", date: "18/11/2018", approval: 110},
				{status: "In Dispute",	nature: "Overbooking", date: "02/11/2018", approval: 100},
				{status: "Settled", 	nature: "Overbooking", date: "13/09/2018", approval: 70},
			]
	    };
	}

	renderHeader() {
		return(
			<View>
				<View style = {{height: windowWidth/3+100, flexDirection: 'column', backgroundColor: 'white', borderRadius: 20, marginHorizontal: 20, marginVertical: 10, paddingTop: 20}}>
					<View style = {{justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 20, flexDirection: 'row'}}>
						<Image
						style={{width: 75, height: 75, borderRadius: 20, borderWidth: 1, borderColor: "lightgray"}}
						source={globalIcon}
						/>
						<View style = {{height: 75, width: windowWidth-150, justifyContent: 'center', alignItems: 'center'}}>
							<Text style = {{color: '#00355f', fontFamily: 'Avenir Next', fontSize: 24}}>{globalTitle}</Text>
						</View>
					</View>

					<View style = {{marginTop: 15}}>
						<View style = {{flexDirection: 'row'}}>

							<View style = {styles.circleAndText}>
								<View style = {styles.circle}>
									<Text style = {styles.circleText}>
										{globalCases}
									</Text>
								</View>

								<Text style = {styles.circleTextBelow}>
									Total{"\n"}Cases
								</Text>
							</View>

							<View style = {styles.circleAndText}>
								<View style = {styles.circle}>
									<Text style = {styles.circleText}>
										{globalResponseTime} Days
									</Text>
								</View>

								<Text style = {styles.circleTextBelow}>
									Avg. Response Time
								</Text>
							</View>

							<View style = {styles.circleAndText}>
								<View style = {styles.circle}>
									<Text style = {styles.circleText}>
										{globalResponseRate}%
									</Text>
								</View>

								<Text style = {styles.circleTextBelow}>
									Response{"\n"}Rate
								</Text>
							</View>

							<View style = {styles.circleAndText}>
								<View style = {styles.circle}>
									<Text style = {styles.circleText}>
										{globalSettledCases}%
									</Text>
								</View>

								<Text style = {styles.circleTextBelow}>
									Settled{"\n"}Cases
								</Text>
							</View>

						</View>
					</View>
				</View>
			</View>
		);
	}

	renderInfo() {
		return(
			<View style = {{flex: 1, flexDirection: 'column', marginBottom: 10, marginHorizontal: 20}}>
				<FlatList
					data={this.state.data}
					style = {{width: windowWidth-40, height: windowHeight-160}}
					renderItem={this.renderItem}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item, index) => index.toString()}
				/>
			</View>
		);
	}

	renderItem = ({item, index}) => {
		return (
			<TouchableOpacity style = {{height: windowWidth/4, borderWidth: 0, borderRadius: 10, marginVertical: 5, borderColor: 'white', backgroundColor: 'white', justifyContent: 'space-between', padding: 10}} activeOpacity={0.5} onPress={() => Alert.alert((index+1).toString())}>
				<View style = {{flexDirection: 'row', flex: 1}}>
					<View style = {{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
						<Text style = {{color: '#00355f', fontFamily: 'Avenir Next', fontSize: 13}}>Case #{index+1}</Text>
						<Text style = {{color: '#00355f', fontFamily: 'Avenir Next', fontSize: 13}}>Date: {item.date}</Text>
						<Text style = {{color: '#00355f', fontFamily: 'Avenir Next', fontSize: 13}}>Status: {item.status}</Text>
					</View>
					<View style = {{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
						<View>
							<Text style = {{color: '#00355f', fontFamily: 'Avenir Next', fontSize: 13}}>Nature: {item.nature}</Text>
						</View>
						<View>
							<View style = {{flexDirection: 'row'}}>
								<View style = {{width: item.approval, height: 15, borderTopLeftRadius: 100, borderBottomLeftRadius: 100, backgroundColor: '#00b894'}}>
								</View>
								<View style = {{width: 150 - item.approval, height: 15, borderTopRightRadius: 100, borderBottomRightRadius: 100, backgroundColor: '#ff7675'}}>
								</View>
							</View>
						</View>
						<View>
							<Text style = {{color: '#00355f', fontFamily: 'Avenir Next', fontSize: 13}}>Approval: {Math.floor((item.approval*100)/150)}%</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	renderButton() {
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
				{this.renderInfo()}
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
	circle: {
		width: windowWidth/6,
		height: windowWidth/6,
		borderRadius: 100,
		marginHorizontal: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderWidth: 1,
	},
	circleText: {
		fontFamily: 'Avenir Next',
		color: '#00355f',
		fontWeight: '400',
		fontSize: 16,
		textAlign: 'center',
		paddingHorizontal: 5,
	},
	circleTextBelow: {
		fontFamily: 'Avenir Next',
		color: '#00355f',
		fontWeight: '400',
		fontSize: 12,
		textAlign: 'center',
		paddingHorizontal: 0,
		marginTop: 10,
	},
	infoBox: {
		flex: 1,
		flexDirection: 'row',
		borderRadius: 100,
		borderWidth: 2,
		marginVertical: 10,
		borderColor: 'gray',
	},
	settledTextView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	settledText: {
		color: 'white',
		fontFamily: 'Avenir Next',
		fontWeight: '400',
		fontSize: 16,
	},
	circleAndText: {
		width: (windowWidth-40)/4,
		justifyContent: 'center',
		alignItems: 'center'
	},
});
