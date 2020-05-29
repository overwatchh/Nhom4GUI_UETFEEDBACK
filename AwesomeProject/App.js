
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  View,
  StyleSheet,
} from 'react-native';
import Users from './components/profile';
import Login from './components/login/login';
import Classes from './components/class';
import Rate from './components/rate';
import Comment from './components/comment';

const Stack = createStackNavigator();
function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
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
        </Stack.Navigator>
      </NavigationContainer>
      {/*<UsersStack />*/}
      {/*<Users />*/}
      {/* <HomeScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
});

export default App;
