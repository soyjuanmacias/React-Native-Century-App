import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export class Main extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Welcome',
  };
  _onPressAccessBtn = () => {
    const {
      navigate
    } = this.props.navigation;
    navigate('Dashboard', {
      name: 'Jane'
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/gradient-background.png')}
          style={styles.backgroundImg}
        />
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logo-adidas.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.subtitleText}>
          <Text style={styles.subtitleTextInner}> Adidas Hackathon Madrid </Text>
          <Text style={styles.subtitleTextInnerTeam}> Centaury Team </Text>
        </View>
        <View style={styles.btnAccess}>
          <TouchableOpacity
            style={styles.btnAccessInner}
            onPress={this._onPressAccessBtn}
          >
            <Text style={{ color: '#7c72ff', fontSize: 22, fontWeight: 'bold', opacity: 1}}>Acceder</Text>
          </TouchableOpacity>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  backgroundImg: {
    zIndex: 0,
    position: 'absolute',
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  logo: {
    width: 250,
    height: 200,
    alignItems: 'flex-end',
  },
  subtitleText: {
    flex: 1,
    alignItems: 'center',
  },
  subtitleTextInner: {
    fontFamily: 'Cachin',
    fontSize: 24,
    color: 'white',
    paddingBottom: 5,
  },
  subtitleTextInnerTeam: {
    fontSize: 18,
    color: 'white',
  },
  btnAccess: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 50
  },
  btnAccessInner: {
    backgroundColor: 'white',
    opacity: 0.9,
    borderRadius: 150,
    padding: 20,
    alignItems: 'center',
  },
});