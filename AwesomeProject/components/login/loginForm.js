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

function LoginForm({navigation}) {
  return (
    <View behavior="padding" style={styles.container}>
      <TextInput
        placeholder="Username or Email"
        placeholderTextColor="rgba(255,255,255,0.7)"
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="rgba(255,255,255,0.7)"
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Classes')}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginForm;
