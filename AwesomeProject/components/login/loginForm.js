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
} from 'react-native';
import {AsyncStorage} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    marginHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusDescriptionInput: false,
      user: [],
    };
  }

  inputs = {};
  focusTheField = id => {
    this.inputs[id].focus();
  };

  login = async (username, password) => {
    try {
      let response = await fetch(
        'https://uet-feedback-api.herokuapp.com/login',
        {
          method: 'post',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        },
      );
      let statusCode = response.status;
      let responseJson = await response.json();
      if (statusCode === 200) {
        try {
          await AsyncStorage.setItem('username', username);
          this.setState({
            user: responseJson,
          });
          await AsyncStorage.setItem('name', this.state.user.name.toString());
          await AsyncStorage.setItem(
            'avatarUrl',
            this.state.user.avatarUrl.toString(),
          );
        } catch (error) {
          alert('Cannot save user');
        }
        this.props.navigation.navigate('Classes');
      } else {
        alert('Username or Password is invalid');
      }
    } catch (e) {
      alert('Username or Password is invalid');
    }
  };

  render() {
    let username;
    let password;
    return (
      <View behavior="padding" style={styles.container}>
        <TextInput
          placeholder="Username or Email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
          onChangeText={data => {
            username = data;
          }}
          value={username}
          label={'Field 1'}
          blurOnSubmit={false}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            this.focusTheField('field2');
          }}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
          onChangeText={data => {
            password = data;
          }}
          value={password}
          ref={input => {
            this.inputs.field2 = input;
          }}
          label={'Field 2'}
          onSubmitEditing={() => this.login(username, password)}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => this.login(username, password)}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
