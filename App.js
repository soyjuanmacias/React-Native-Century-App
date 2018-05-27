import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import { Main, Dashboard } from './app/components';

export default App = StackNavigator({
  Home: { screen: Main },
  Dashboard: { screen: Dashboard },
}, { headerMode: 'none' });
