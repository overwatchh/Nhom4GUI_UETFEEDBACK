import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
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
    top: '-25%',
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
  return (
    <SafeAreaView style={styles.safeAreaContainer} //xử lý hiển thị toàn màn hình trên một số thiết bị có màn hình đa giác 8 cạnh như iphone X
    >  
      <KeyboardAvoidingView  
        KeyboardVerticalOffset={1}
        style={styles.loginContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.loginLogo}
            source={require('../../images/app-icon.png')}
          />
          <Text style={styles.loginTitle}>Đưa tay đây nào</Text>
          <Text style={styles.loginTitle}>Mình cùng qua môn bạn nhé</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm navigation={navigation} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Login;
