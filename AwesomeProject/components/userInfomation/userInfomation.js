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
import * as RootNavigation from '../navigation/RootNavigation';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff',
    width: (deviceWidth * 8) / 10,
    marginLeft: deviceWidth / 10,
    borderRadius: 30,
  },
  input: {
    borderWidth: 2,
    borderRadius: 20,
    paddingLeft: 20,
    borderColor: 'green',
  },
  inputDisable: {
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 20,
    paddingLeft: 20,
    backgroundColor: '#D3D3D3',
  },
  header: {
    textAlign: 'center',
    fontSize: 40,
  },
  label: {
    fontWeight: '700',
    marginBottom: 5,
    marginTop: 5,
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    height: 50,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: '',
      password: '',
      repeatPassword: '',
      email: '',
      avatarUrl: '',
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange({updateData}) {
    this.setState({form: updateData});
  }

  getUserData = async () => {
    const username = await AsyncStorage.getItem('username');
    try {
      let response = await fetch(
        'https://uet-feedback-api.herokuapp.com/userByUsername',
        {
          method: 'post',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
          }),
        },
      );
      let statusCode = response.status;
      let responseJson = await response.json();
      if (statusCode === 200) {
        this.setState({
          data: responseJson,
        });
      } else {
        alert('Response Code not 200');
      }
    } catch (e) {
      alert('You must Login First');
      RootNavigation.navigate('Đăng nhập');
    }
  };

  render() {
    this.getUserData();
    return (
      <View style={styles.container}>
        <Animated.ScrollView scrollEventThrottle={1}>
          <Text style={styles.header}>Thông tin cá nhân</Text>
          <View>
            <Text style={styles.label}>ID: </Text>
            <TextInput editable={false} style={styles.inputDisable}>
              {this.state.data.id}
            </TextInput>
          </View>
          <View>
            <Text style={styles.label}>Tên tài khoản: </Text>
            <TextInput editable={false} style={styles.inputDisable}>
              {this.state.data.username}
            </TextInput>
          </View>
          <View>
            <Text style={styles.label}>Tên: </Text>
            <TextInput
              onChangeText={data => {
                this.setState({
                  name: data,
                });
              }}
              style={styles.input}
              placeholder={this.state.data.name}
            />
          </View>
          <View>
            <Text style={styles.label}>Mật khẩu: </Text>
            <TextInput
              onChangeText={data => {
                this.setState({
                  password: data,
                });
              }}
              style={styles.input}
              secureTextEntry={true}
              placeholder="***********"
            />
          </View>
          <View>
            <Text style={styles.label}>Nhập lại mật khẩu: </Text>
            <TextInput
              onChangeText={data => {
                this.setState({
                  repeatPassword: data,
                });
              }}
              style={styles.input}
              secureTextEntry={true}
              placeholder="***********"
            />
          </View>
          <View>
            <Text style={styles.label}>Email: </Text>
            <TextInput
              onChangeText={data => {
                this.setState({
                  email: data,
                });
              }}
              style={styles.input}
              placeholder={this.state.data.email}
            />
          </View>
          <View>
            <Text style={styles.label}>Đường dẫn đến ảnh đại diện: </Text>
            <TextInput
              onChangeText={data => {
                this.setState({
                  avatarUrl: data,
                });
              }}
              style={styles.input}
              placeholder={this.state.data.avatarUrl}
            />
          </View>
          <TouchableOpacity
            onPress={() => this.updateUser()}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>CẬP NHẬT</Text>
          </TouchableOpacity>
        </Animated.ScrollView>
      </View>
    );
  }

  updateUser = async () => {
    let username = this.state.data.username;
    let id = this.state.data.id;
    let name = this.state.name === '' ? this.state.data.name : this.state.name;
    let password =
      this.state.password === ''
        ? this.state.data.password
        : this.state.password;
    let repeatPassword =
      this.state.repeatPassword === ''
        ? this.state.data.password
        : this.state.repeatPassword;
    let email =
      this.state.email === '' ? this.state.data.email : this.state.email;
    let avatarUrl =
      this.state.avatarUrl === ''
        ? this.state.data.avatarUrl
        : this.state.avatarUrl;
    if (password === repeatPassword) {
      try {
        let response = await fetch(
          'https://uet-feedback-api.herokuapp.com/users/' + id,
          {
            method: 'patch',
            mode: 'no-cors',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: id,
              username: username,
              password: password,
              name: name,
              email: email,
              avatarUrl: avatarUrl,
            }),
          },
        );
        let statusCode = response.status;
        let responseJson = await response.json();
      } catch (e) {}
      this.props.navigation.navigate('Trang chủ');
    } else {
      alert('Password not equal Repeat Password');
    }
  };
}
