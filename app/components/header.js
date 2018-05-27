import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
          <View style={styles.menuContainer}>
            <View>
              <Text>
                Centaury Emotion Recognition
              </Text>
            </View>
            <View>
              <Image
                source={require('../assets/images/icon-menu.png')}
                style={styles.menuImg}
              />
            </View>
          </View>
          <View style={styles.userContainer}>
            <View style={styles.avatarContainer}>
              <Image
                source={require('../assets/images/icon-avatar.png')}
                style={styles.avatarImg}
              />
            </View>
            <View>
              <Text style={styles.usernameText}>Hackvatar</Text>
            </View>
          </View>
          <Image
            source={require('../assets/images/header-background.png')}
            style={styles.backgroundImg}
          />
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
  },
  usernameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backgroundImg: {
    zIndex: -1,
    position: 'absolute',
    width: '100%',
  }
});