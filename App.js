/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  onPressAccessBtn = () => {
    console.log('Hola')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./app/assets/images/logo-adidas-white.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.subtitleText}>
          <Text style={styles.subtitleTextInner}> Adidas Hackathon Madrid </Text>
        </View>
        <View style={styles.btnAccess}>
          <Button
            onPress={this.onPressAccessBtn}
            title="Acceder"
            color="#7c72ff"
          />
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    backgroundColor: 'red',
    paddingBottom: 25,
  },
  logo: {
    width: 220,
    height: 220,
    alignItems: 'flex-end',
  },
  subtitleText: {
    flex: 1,
    backgroundColor: 'blue',
  },
  subtitleTextInner: {
    fontFamily: 'Cachin',
    fontSize: 24,
    color: 'white',
  },
  btnAccess: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
  }
});
