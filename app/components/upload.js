import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { httpService } from '../services';

export class Upload extends Component {
  _onPressUploadBtn = () => {
    httpService.uploadImage()
      .then((res) => {
        
      })
      .catch((err) => {

      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/gradient-background.png')}
          style={styles.backgroundImg}
        />
        <View style={styles.headerContainer}>
          <View style={styles.menuContainer}>
            <View>
              <Text>
                Centaury Emotion Recognition
              </Text>
            </View>
            <View>
              <Image
                source={require('../assets/images/logo-adidas.png')}
                style={styles.menuImg}
              />
            </View>
          </View>
          <View style={styles.userContainer}>
            <View style={styles.avatarContainer}>
              <Image
                source={require('../assets/images/logo-adidas.png')}
                style={styles.avatarImg}
              />
            </View>
            <View>
              <Text style={styles.usernameText}>Usuario</Text>
            </View>
          </View>
          <Image
            source={require('../assets/images/header-background.png')}
            style={styles.backgroundImg}
          />
        </View>
        <View style={styles.pageLayout}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/images/cristiano.png')}
              style={styles.img}
            />
          </View>
          <View style={styles.btnUpload}>
            <TouchableOpacity
              style={styles.btnUploadInner}
              onPress={this._onPressUploadBtn}
            >
              <Text style={{ color: '#7c72ff', fontSize: 22, fontWeight: 'bold', opacity: 1 }}>Enviar</Text>
            </TouchableOpacity>
          </View>
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
  backgroundImg: {
    zIndex: -1,
    position: 'absolute',
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
  pageLayout: {
    flex: 5,
    width: '100%',
    alignItems: 'center',
  },
  imgContainer: {
    flex: 3,
    width: '80%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnUpload: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 50
  },
  btnUploadInner: {
    backgroundColor: 'white',
    opacity: 0.9,
    borderRadius: 150,
    padding: 20,
    alignItems: 'center',
  },
  img: {
    width: 300,
    height: 300,
  },
});