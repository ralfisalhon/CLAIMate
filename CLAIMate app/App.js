import React, { Component } from 'react';
import {
	Alert,
	Linking,
	Platform,
	StyleSheet,
	Text,
	View,
	Dimensions,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './src/LoginScreen.js';
import PickScreen from './src/PickScreen.js';
import BrowseScreen from './src/BrowseScreen.js';
import ClaimScreen from './src/ClaimScreen.js';
import AirlineScreen from './src/AirlineScreen.js';
import SpecificAirlineScreen from './src/SpecificAirlineScreen.js';
import EvidenceScreen from './src/EvidenceScreen.js';
import SummaryScreen from './src/SummaryScreen.js';
import ReviewScreen from './src/ReviewScreen.js';
import SectionScreen from './src/SectionScreen.js';
import MyClaimsScreen from './src/MyClaimsScreen.js';
import ConfirmationScreen from './src/ConfirmationScreen.js';
import ImageScreen from './src/ImageScreen.js';
import ImageScreen2 from './src/ImageScreen2.js';

global.globalTitle = "";
global.globalIcon = "";
global.globalType = "";
global.globalResponseRate = 0;
global.globalSettledCases = 0;
global.globalCases = 0;
global.globalResponseTime = 0;
global.globalData = ["","","","","","","","","","","","",""];

const RootStack = createStackNavigator({
    login: {
      screen: LoginScreen
    },
    pick: {
      screen: PickScreen
  	},
	browse: {
      screen: BrowseScreen
  	},
	claim: {
      screen: ClaimScreen
  	},
	airline: {
      screen: AirlineScreen
  	},
	specificAirline: {
      screen: SpecificAirlineScreen
  	},
	evidence: {
      screen: EvidenceScreen
  	},
	summary: {
      screen: SummaryScreen
  	},
	review: {
      screen: ReviewScreen
  	},
	section: {
      screen: SectionScreen
  	},
	myclaims: {
      screen: MyClaimsScreen
  	},
	confirmation: {
      screen: ConfirmationScreen
  	},
	image: {
      screen: ImageScreen
  	},
	image2: {
      screen: ImageScreen2
  },
  });

const App = createAppContainer(RootStack);

export default App;
