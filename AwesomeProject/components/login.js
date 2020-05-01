import React from 'react';
import {View,Text,Image,StyleSheet,TextInput,Button,TouchableOpacity, Alert} from 'react-native';

const signInStyle = StyleSheet.create({
    comtaier:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    signUpText:{
        color:'#0f91f5',
        textDecorationLine:'underline',
        marginBottom:5
    },
    inputContainer:{
        justifyContent:'flex-start',
    },
    inputField:{
        backgroundColor:'#e3e3e3',
        marginBottom:5,
        width:150,
        borderRadius:50
    }
});

function Login(){
    return(
        <View style={signInStyle.comtaier}>
            <Image style={signInStyle.icon} source={require('../images/app-icon.png')} />
            <View style={signInStyle.inputContainer} >
                <TextInput 
                    placeholder="Email"
                    style={signInStyle.inputField}
                />
                <TextInput 
                    placeholder="Mật khẩu"
                    style={signInStyle.inputField}
                />
            </View>
            <TouchableOpacity onPress={()=>alert("Liên hệ admin để được cấp tài khoản!")}>
                <Text style={signInStyle.signUpText}>Đăng ký tài khoản?</Text>
            </TouchableOpacity>
            <Button 
            style={signInStyle.signInBtn}
            title="Đăng nhập"
            />
        </View>
    );
}

export default Login;