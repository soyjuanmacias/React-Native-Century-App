import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Header } from './header';

export class Result extends Component {
  _onPressBackBtn = () => {
    const { navigate } = this.props.navigation;
    navigate('Dashboard');
  }
  _getResult = () => {
    const {
      result
    } = this.props.navigation.state.params;
    if (result[0] === "no") {
      return '¡No va a marcar!';
    }
    return '¡Va a ser un golazo!';
  }
  _getPercentage = () => {
    const percent = this.props.navigation.state.params.result[1];
    return Number(Math.floor(percent)).toFixed(2);
  }
  render() {
    const {
      result
    } = this.props.navigation.state.params;
    console.log(result);
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/gradient-background.png')}
          style={styles.backgroundImg}
        />
        <Header />
        <View style={styles.pageLayout}>
          <ScrollView>
            <View style={styles.playerInfoContainer}>
              <View style={{ flex: 2, justifyContent: 'center', marginBottom: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                  <View style={{ paddingRight: 25 }}>
                    <Image
                      source={require(`../assets/images/cristiano-avatar.png`)}
                      style={styles.userAvatar}
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0a0a39' }}>Cristiano Rolando</Text>
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', }}>
                <Image
                  source={require('../assets/images/icon-team-black.png')}
                  style={styles.iconInfo}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#aeabd5' }}>Real Madrid</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', }}>
                <Image
                  source={require('../assets/images/icon-birthday.png')}
                  style={styles.iconInfo}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#aeabd5' }}>33 años</Text>
              </View>
            </View>
            <View style={styles.playerResultContainer}>
              <Text style={{fontSize: 18}}>La conclusión que hemos extraido después de pasar por nuestra herramienta de machine learning es que </Text>
              <Text style={{ fontSize: 21, fontWeight: 'bold', color: '#0a0a39' }}>{this._getResult()}</Text>
            </View>
            <View style={styles.playerGraphicContainer}>
              <Text style={{fontSize: 18}}>Y tenemos una seguridad del</Text>
              <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black'}}>{this._getPercentage()}%</Text>
            </View>
            <View style={styles.btnBack}>
              <TouchableOpacity
                style={styles.btnBackInner}
                onPress={this._onPressBackBtn}
              >
                <Text style={{ color: '#7c72ff', fontSize: 22, fontWeight: 'bold', opacity: 1 }}>Volver</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    )
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
  backgroundImg: {
    zIndex: -2,
    position: 'absolute',
  },
  pageLayout: {
    // flex: 5,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  playerInfoContainer: {
    flex: 2,
    backgroundColor: 'white',
    opacity: 0.9,
    width: '100%',
    borderRadius: 25,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  playerResultContainer: {
    flex: 1,
    backgroundColor: 'white',
    opacity: 0.9,
    borderRadius: 25,
    marginBottom: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  playerGraphicContainer: {
    flex: 1,
    backgroundColor: 'white',
    opacity: 0.9,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 20,
    padding: 20,
  },
  userAvatar: {
    width: 45,
    height: 45,
  },
  iconInfo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  btnBack: {
    width: '80%',
    height: 56,
    borderRadius: 8,
    backgroundColor: '#7c72ff',
  },
  btnBack: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 50,
    marginBottom: 15,
  },
  btnBackInner: {
    backgroundColor: 'white',
    opacity: 0.9,
    borderRadius: 150,
    padding: 20,
    alignItems: 'center',
  },
})