<<<<<<< HEAD

=======
>>>>>>> origin/datquocngo
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  View,
  StyleSheet,
<<<<<<< HEAD
} from 'react-native';
=======
  TextInput,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Home from './components/home/home';
>>>>>>> origin/datquocngo
import Users from './components/profile';
import Login from './components/login/login';
import Classes from './components/class/class';
import Rate from './components/rate/rate';
import Comment from './components/comment/comment';
import Footer from './components/footer/footer';
import {navigationRef} from './components/navigation/RootNavigation';
import UserInfo from './components/userInfomation/userInfomation';
import Settings from './components/setting/setting';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();
function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
<<<<<<< HEAD
          <Stack.Screen name="Login" component={Login}
          options={{title:'Đăng nhập'}} //Đặt tiêu đề cho màn hình, hiển thị ở góc trên bên trái
          /> 
          <Stack.Screen name="Users" component={Users} 
          options={{title:'DS người dùng'}} //Đặt tiêu đề cho màn hình, hiển thị ở góc trên bên trái
          />
          <Stack.Screen name="Classes" component={Classes} 
          options={{title:'Danh sách lớp học'}} //Đặt tiêu đề cho màn hình, hiển thị ở góc trên bên trái
          />
          <Stack.Screen name="Rate" component={Rate} 
          options={{title:'Đánh giá'}} //Đặt tiêu đề cho màn hình, hiển thị ở góc trên bên trái
          />
          <Stack.Screen name="Comment" component={Comment} 
          options={{title:'Bình luận'}} //Đặt tiêu đề cho màn hình, hiển thị ở góc trên bên trái
          />
=======
          <Stack.Screen name="Trang chủ" component={Home} username={''} />
          <Stack.Screen name="Đăng nhập" component={Login} />
          <Stack.Screen name="Lớp học" component={Classes} />
          <Stack.Screen name="Đánh giá" component={Rate} />
          <Stack.Screen name="Bình luận" component={Comment} />
          <Stack.Screen name="Footer" component={Footer} />
          <Stack.Screen name="Tài khoản" component={UserInfo} />
          <Stack.Screen name="Cài đặt" component={Settings} />
>>>>>>> origin/datquocngo
        </Stack.Navigator>
      </NavigationContainer>
      {/*<UsersStack />*/}
      {/*<Users />*/}
      {/* <HomeScreen /> */}
      <View style={styles.bottomMenu}>
        <Footer />
      </View>
    </View>
  );
}
console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  bottomMenu: {
    position: 'absolute',
    left: 0,
    right: 0,
    marginTop: deviceHeight - 80,
  },
});

export default App;
