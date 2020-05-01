import React, { useState } from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import Card,{SearchBox} from './base';

//sample data
const COURSESDATA =[
{id:1,courseName:"Lập trình HĐT",courseCode:"INT3306",averageRate:5,teacher1:"Nguyễn Văn A",teacher2:"Nguyễn Văn B"},
{id:2,courseName:"Phân tích & thiết kế HĐT",courseCode:"INT3306",averageRate:4,teacher1:"Nguyễn Văn C",teacher2:"Nguyễn Văn D"},
{id:3,courseName:"Thiết kế giao diện người dùng",courseCode:"INT3306",averageRate:5,teacher1:"Nguyễn Văn E",teacher2:"Nguyễn Văn F"},
{id:4,courseName:"Mạng máy tính ",courseCode:"INT3307",averageRate:3,teacher1:"Nguyễn Văn E",teacher2:"Nguyễn Văn F"},
{id:5,courseName:"Lập trình mạng",courseCode:"INT3308",averageRate:2,teacher1:"Nguyễn Văn E",teacher2:"Nguyễn Văn F"},
];


const courseInfo = StyleSheet.create({
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

const renderCourses = (filterText)=>{
    let courses =[];
    COURSESDATA.filter((item)=>{
        if(item.courseName.indexOf(filterText)>=0){
            courses.push(
                <Card 
                key={item.id}
                title={item.courseName}
                rate={item.averageRate}
                avatar={require('../images/book-icon.jpg')}
                bodyComponent={
                    <View style={courseInfo.container}>
                        <View style={courseInfo.infoRow}>
                <Text style={courseInfo.infoTitle}>Mã môn học:</Text>
                            <Text style={courseInfo.infoData}>{item.courseCode}</Text>
                        </View>
                        <View style={courseInfo.infoRow}>
                            <Text style={courseInfo.infoTitle}>Lý thuyết:</Text>
                            <Text style={courseInfo.infoData}>{item.teacher1}</Text>
                        </View>
                        <View style={courseInfo.infoRow}>
                            <Text style={courseInfo.infoTitle}>Thực hành:</Text>
                            <Text style={courseInfo.infoData}>{item.teacher2}</Text>
                        </View>
    
                    </View>
                }
                />
            );
        }
    });
    return courses;
}
function HomeScreen(){
const [filterText,setFilterText] = React.useState("");
return(
    <>
    <SearchBox 
    title={"Tên môn học"}
    onChangeText={(filterText)=>setFilterText(filterText)}
    />
    <ScrollView >
        {
            renderCourses(filterText)
        }
    </ScrollView>
    </>
);
}

export default HomeScreen;