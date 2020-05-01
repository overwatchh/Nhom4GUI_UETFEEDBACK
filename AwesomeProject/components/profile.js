import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import Card,{SearchBox} from './base';
//Sampe data
const USERDATA=[
    {id:1,email:"emailcuatuan",passWord:"123456",displayName:"Nguyễn Đăng Tuấn"},
    {id:2,email:"emailcuathi",passWord:"123456",displayName:"Bùi Anh Thi"},
    {id:3,email:"emailcuathinh",passWord:"123456",displayName:"Nguyễn Đức Thịnh"},
    {id:4,email:"emailcuadat",passWord:"123456",displayName:"Ngô Quốc Đạt"},
    {id:5,email:"emailcuadat",passWord:"123456",displayName:"Thân Chí Đạt"},
];
const usersInfo = StyleSheet.create({
    container:{
        // backgroundColor:'yellow'
    },
    infoRow:{
        flexDirection:'row',
    },
    infoTitle:{
        fontSize:15,
        fontWeight:'700',
        paddingRight:3
    },
    infoData:{

    }
});

const renderUsers = (filterText)=>{
    let users =[];
    USERDATA.filter((item)=>{
        if(item.displayName.indexOf(filterText)>=0){
            users.push(
                <Card 
                key={item.id}
                title={item.displayName}
                avatar={require('../images/app-icon.png')}
                bodyComponent={
                    <View style={usersInfo.container}>
                        <View style={usersInfo.infoRow}>
                            <Text style={usersInfo.infoTitle}>Email:</Text>
                            <Text style={usersInfo.infoData}>{item.email}</Text>
                        </View>
                        <View style={usersInfo.infoRow}>
                            <Text style={usersInfo.infoTitle}>Mật khẩu:</Text>
                            <Text style={usersInfo.infoData}>{item.passWord}</Text>
                        </View>
                    </View>
                }
                />
            );
        }
    });
    return users;
}
function USERS(){
    const [filterText,setFilterText] = React.useState("")
return(
    <>
    <SearchBox 
    title={"Tên người dùng..."}
    onChangeText={(filterText)=>setFilterText(filterText)}
    />
    <ScrollView >
        {
            renderUsers(filterText)
        }
    </ScrollView>
    </>
);
}

export default USERS;


