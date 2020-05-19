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
import Users from '../profile';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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

let username;
let password;

function LoginForm({navigation}) {
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
        style={styles.input}
      />
      <TouchableOpacity
        onPress={async () => {
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
              navigation.navigate('Classes');
            } else {
              alert('Username or Password is invalid');
            }
          } catch (e) {
            alert('Username or Password is invalid');
          }
        }}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginForm;
