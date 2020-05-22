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
  Platform,
  SafeAreaView,
} from 'react-native';
import LoginForm from './loginForm';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#3498db',
    textAlign: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    backgroundColor: '#3498db',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  loginLogo: {
    width: 150,
    height: 150,
  },
  loginTitle: {
    color: '#FFF',
    marginTop: 10,
    width: 300,
    textAlign: 'center',
    opacity: 0.9,
  },
  formContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10,
  },
});

function Login({navigation}) {
  var inputs = {};
  function focusTheField(id) {
    this.inputs[id].focus();
  }
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <KeyboardAvoidingView
        KeyboardVerticalOffset={200}
        behavior="padding"
        style={styles.loginContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.loginLogo}
            source={require('../../images/app-icon.png')}
          />
          <Text style={styles.loginTitle}>An APP made for UET Rating</Text>
          <Text style={styles.loginTitle}>Thank for using</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm navigation={navigation} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Login;
