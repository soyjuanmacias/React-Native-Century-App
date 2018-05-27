import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { httpService } from '../services';
import { Header } from './header';

const cristianoDiccionary = {
  0: require('../assets/images/cristiano-0.png'),
  1: require('../assets/images/cristiano-1.png'),
  2: require('../assets/images/cristiano-2.png'),
  3: require('../assets/images/cristiano-3.png'),
  4: require('../assets/images/cristiano-4.png'),
}

export class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }
  componentWillMount() {
    const options = [1, 2, 3, 4, 5];
    this._random = Math.floor(Math.random() * options.length - 1)
  }
  _onPressUploadBtn = () => {
    const {
      navigate
    } = this.props.navigation;
    this.setState({ loading: true });
    httpService.uploadImage(this._random)
      .then((res) => {
        console.log('👍🏻 Recibo respuesta de uploadImage')
        console.log(res[0].faceAttributes.emotion);
        httpService.getPercentage(res[0].faceAttributes.emotion)
          .then(res => {
            console.log('👍🏻 Recibo respuesta de getPorcentage');
            console.log(res);
            // navigate('Result', {
            //   result: res,
            // })
            // this.setState({ loading: false })
          })
          .catch(err => {
            console.log('Error');
            console.log(err);
          })
      })
      .catch((err) => {
        console.log(err)
        console.log('👎🏻 Error en componente upload')
        this.setState({ loading: false })
        // En caso de subida incorrecta.
      })
  }
  _getSource = () => {
    const index = this._random;
    return cristianoDiccionary[index];
  }
  _renderImage() {
    return (
      <Fragment>
        <View style={styles.imgContainer}>
          <Image
            source={this._getSource()}
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
      </Fragment>
    )
  }
  _renderSpinner() {
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/gradient-background.png')}
          style={styles.backgroundImg}
        />
        <Header />
        <View style={styles.pageLayout}>
          {this.state.loading ? this._renderSpinner() : this._renderImage()}
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