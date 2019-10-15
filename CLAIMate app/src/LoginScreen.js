import React, { Component } from 'react';
import {
	StyleSheet,
	Text, View,
	TextInput,
	Platform,
	TouchableOpacity,
	SafeAreaView,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
	Image,
	StatusBar,
} from 'react-native';

import { StackActions, NavigationActions } from 'react-navigation';

export default class LoginScreen extends Component
{
	static navigationOptions = {
		header: null,
		gesturesEnabled: false,
	};

	constructor()
	{
		super();
		this.state = {
            usernameValue: '',
			passwordValue: '',
        }
	}

	// TODO: REMOVE THIS
	componentDidMount() {
		this.props.navigation.navigate("pick");
	}

	updateUserText(text) {
        this.setState({usernameValue: text});
    }

    updatePasswordText(text) {
        this.setState({passwordValue: text});
    }

	signinClicked(username, password) {
		if (username.length < 6) {
			Alert.alert("Username cannot be less than 6 characters long");
		} else {
			if (username == "test123" && password == "test123") {
				this.props.navigation.navigate("pick");
			} else {
				Alert.alert("Incorrect credentials");
			}
		}
	}

	render()
	{
		return(
			<SafeAreaView style = {[styles.container, {backgroundColor: '#ebecf0',}]}>
				<KeyboardAvoidingView behavior='padding' style={styles.container} enabled>
				<TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
					<View style={{flex: 1, justifyContent: 'flex-end'}}>
						<TextInput style={styles.input}
						placeholder="username"
						value={this.state.usernameValue}
						ref='username'
						autoCapitalize='none'
						autoCorrect={false}
						onSubmitEditing={(event) => this.focusNextField('password')}
						onChangeText={(text) => this.updateUserText(text)}
						blurOnSubmit={true}
						placeholderTextColor='#7f8c8d'
						maxLength={15}
						/>

						<TextInput style={styles.input}
						placeholder="password"
						defaultValue={this.passwordValue}
						secureTextEntry={true}
						ref='password'
						onChangeText={(text) => this.updatePasswordText(text)}
						blurOnSubmit={true}
						placeholderTextColor='#7f8c8d'
						/>

						<TouchableOpacity style={[styles.button, {marginBottom: 15, backgroundColor: "#ffffff"}]} onPress={ () => this.signinClicked(this.state.usernameValue, this.state.passwordValue) }>
							<Text style={styles.buttonText}>
								SIGN IN
							</Text>
						</TouchableOpacity>
					</View>
				</TouchableWithoutFeedback>
				</KeyboardAvoidingView>

			{/* Render for under Sign in Button */}
			<View>
				<TouchableOpacity
				style = {{width: 200, justifyContent: 'center', alignSelf: 'center'}}
				onPress={ () => Alert.alert("Forgot Password? Clicked") }>
					<Text style = {{fontSize: 12, justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: -5, color: '#001a5a', fontFamily: 'Avenir Next'}}>
						Forgot Password?
					</Text>
				</TouchableOpacity>

				<View>
					<Text style = {{fontSize: 16, justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: 15, color: '#001a5a', fontFamily: 'Avenir Next'}}>
						Or,
					</Text>
				</View>
				<View style = {styles.infoContainer2}>
					{/*
						Navigates to Phone Verification for initial step of account creation
					*/}
					<TouchableOpacity style={[styles.button, {backgroundColor: '#ffffff', marginBottom: 25}]} onPress={ () => Alert.alert("Create An Account Clicked") }>
						<Text style={styles.buttonText}>
							CREATE AN ACCOUNT
						</Text>
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
	},
	infoContainer: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		paddingHorizontal: 20,
	},
	input: {
        height: 40,
        color: '#00355f',
        marginBottom: 10,
        marginHorizontal: 20,
        borderBottomWidth: 2,
        borderColor: '#c8cbd8',
        fontSize: 16,
    },
	button: {
        marginVertical: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginHorizontal: 40,
    },
	buttonText: {
        textAlign: 'center',
        color: '#001a5a',
        fontWeight: '500',
        fontSize: 18,
		fontFamily: 'Avenir Next',
    },
});
