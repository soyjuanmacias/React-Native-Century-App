import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Header} from './header';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Dashboard',
  };
  _openCamera = () => {
    const {
      navigate
    } = this.props.navigation;
    navigate('Upload')
  }
  _showPlayers = () => {

  }
  _showTeam = () => {

  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.btnLayout}>
          <TouchableOpacity
            style={[styles.buttonContainer, { backgroundColor: '#8477ff' }]}
            onPress={this._openCamera}
            >
          {/* TODO: Cambiar los iconos por iconos de verdad */}
            <Image 
              source={require('../assets/images/logo-adidas.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Capturar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.buttonContainer, { backgroundColor: '#0ae299'}]}
            onPress={this._showPlayers}
            >
            <Image 
              source={require('../assets/images/logo-adidas.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Jugadores</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.buttonContainer, { backgroundColor: '#6eccfc'}]}
            onPress={this._showTeam}
            >
            <Image 
              source={require('../assets/images/logo-adidas.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Equipo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  headerContainer: {
    flex: 2,
    width: '100%',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
  },
  menuImg: {
    width: 20,
    height: 20,
    backgroundColor: 'black',
  },
  userContainer: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  avatarContainer: {
    flexDirection: 'row',
    paddingRight: 15,
  },
  avatarImg: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
  },
  usernameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backgroundImg: {
    zIndex: -1,
    position: 'absolute',
    width: '100%',
  },
  btnLayout: {
    flex: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '80%',
    height: '25%',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }, 
});