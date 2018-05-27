import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Dashboard',
  };
  render() {
    return (
      <View>
        <Text>Router working</Text>
      </View >
    );
  }
}