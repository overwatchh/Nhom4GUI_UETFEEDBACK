import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  AsyncStorage,
  Dimensions,
  Animated,
  ImageBackground,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Icon} from 'react-native-elements';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import Footer from '../footer/footer';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
let animatedHeading = new Animated.Value(0);
let animatedDetail = new Animated.Value(0);
let animatedLogin = new Animated.Value(0);

async function getUsername() {
  let username = await AsyncStorage.getItem('username').then(value =>
    this.setState({
      username: value,
    }),
  );
}

function headingAnimation() {
  getUsername();
  // using timing
  Animated.timing(animatedHeading, {
    toValue: 50, // from value 0 to 100
    duration: 1500, // time running
  }).start();
}

function detailAnimation() {
  Animated.timing(animatedDetail, {
    toValue: 20, // from value 0 to 100
    duration: 1000, // time running
    delay: 1000,
  }).start();
}

function loginAnimation() {
  Animated.timing(animatedLogin, {
    toValue: 16, // from value 0 to 100
    duration: 1000, // time running
    delay: 2000,
  }).start();
}

const styles = StyleSheet.create({
  semiEllipse: {
    width: deviceWidth,
    height: deviceWidth / 2 - 70,
    borderRadius: deviceWidth,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: '#3498db',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  slider: {
    marginTop: 30,
    marginLeft: 20,
  },
  trapezoidLeftTop: {
    width: deviceWidth / 2,
    height: 0,
    borderBottomColor: '#3498db',
    borderBottomWidth: 130,
    borderLeftWidth: 70,
    borderRightWidth: 70,
    borderRightColor: 'transparent',
    borderLeftColor: '#3498db',
    marginRight: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trapezoidRightTop: {
    width: deviceWidth / 2,
    height: 0,
    borderBottomColor: '#3498db',
    borderBottomWidth: 130,
    borderLeftWidth: 70,
    borderRightWidth: 70,
    borderRightColor: '#3498db',
    borderLeftColor: 'transparent',
    marginLeft: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trapezoidLeftBottom: {
    width: deviceWidth / 2,
    height: 0,
    borderTopColor: '#3498db',
    borderTopWidth: 130,
    borderLeftWidth: 70,
    borderRightWidth: 70,
    borderRightColor: 'transparent',
    borderLeftColor: '#3498db',
    marginRight: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trapezoidRightBottom: {
    width: deviceWidth / 2,
    height: 0,
    borderTopColor: '#3498db',
    borderTopWidth: 130,
    borderLeftWidth: 70,
    borderRightWidth: 70,
    borderRightColor: '#3498db',
    borderLeftColor: 'transparent',
    marginLeft: 2.5,
    justifyContent: 'center',
  },
  option: {
    position: 'absolute',
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
  },
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree', // Network image
      ],
      username: null,
    };
  }

  render() {
    let username = '';
    if (this.props.route.params !== undefined) {
      username = this.props.route.params.username;
    }
    return (
      <View>
        <View style={styles.semiEllipse}>
          <Animated.Text
            style={{
              fontSize: animatedHeading,
              color: 'white',
              opacity: headingAnimation(),
            }}>
            FEEDBACK APP
          </Animated.Text>
          <Animated.Text
            style={{
              fontSize: animatedDetail,
              color: 'white',
              animated: detailAnimation(),
            }}>
            Ứng dụng đánh giá của UET
          </Animated.Text>
        </View>
        {/*<View style={{justifyContent: 'flex-end'}}>*/}
        {/*  <View style={{flexDirection: 'row', marginLeft: 20}}>*/}
        {/*    <Text*/}
        {/*      style={{*/}
        {/*        color: '#3498db',*/}
        {/*        fontSize: 20,*/}
        {/*      }}>*/}
        {/*      {username.length < 1 ? '' : 'Hi, ' + username}*/}
        {/*    </Text>*/}
        {/*  </View>*/}
        {/*</View>*/}
        <View style={styles.slider}>
          <SliderBox
            parentWidth={deviceWidth - 40}
            ImageComponentStyle={{borderRadius: 25, width: '97%', marginTop: 5}}
            images={this.state.images}
          />
        </View>
        <View style={{justifyContent: 'flex-end', marginTop: 70}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Lớp học');
              }}>
              <View style={[{flex: 1, flexDirection: 'row'}]}>
                <View style={styles.trapezoidLeftTop}>
                  <Text style={styles.option}>DANH SÁCH LỚP HỌC</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Tài khoản');
              }}>
              <View>
                <View style={styles.trapezoidRightTop}>
                  <Text style={styles.option}>THÔNG TIN CÁ NHÂN</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <TouchableOpacity
              onPress={() => {
                alert('Chức năng chưa cập nhật');
              }}>
              <View style={[{flex: 1, flexDirection: 'row'}]}>
                <View style={styles.trapezoidLeftBottom}>
                  <Text style={styles.option}>THÔNG TIN ỨNG DỤNG</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                alert('Chức năng chưa cập nhật');
              }}>
              <View>
                <View style={styles.trapezoidRightBottom}>
                  <Text style={styles.option}>GỬI PHẢN HỒI</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
