// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
import React from 'react';
import {View,Text,Button,TextInput,Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function LoginScreen({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Button 
        title="Đăng nhập"
        onPress={()=>navigation.navigate('Home')}
      />
    </View>
  );
}
function HomeScreen(){
  return(
  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>
      Trang chủ
    </Text>
  </View>
  );
}
function ClassScreen(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>
      Lớp học
    </Text>
  </View>
  );
}
function StatisticScreen(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>
      Thống kê
    </Text>
  </View>
  );
}
function ProfileScreen({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>
      Hồ sơ
    </Text>
    <Button
    title="Đăng xuất"
    onPress={()=>navigation.navigate('Login')}
    />
  </View>
  );
}

function Home(){
  const Tab = createBottomTabNavigator();
  return(
      <Tab.Navigator
      tabBarOptions={{
        activeTintColor:"#004683",
        inactiveTintColor:"gray",
        labelStyle:{fontSize:12}
      }}
      >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={
          {title:"Trang chủ",
          tabBarIcon:()=>(<MaterialCommunityIcons name="home" size={25} color="#004683" />),
            }
          }/>
        <Tab.Screen name="Class" component={ClassScreen} 
        options={{
          title:"Lớp học",
          tabBarIcon:()=>(<MaterialCommunityIcons name="book-open" size={25} color="#004683" />),
        }}/>
        <Tab.Screen name="Statistic" component={StatisticScreen} 
        options={{
          title:"Thống kê",
          tabBarIcon:()=>(<MaterialCommunityIcons name="chart-line" size={25} color="#004683" />),
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} 
        options={{
          title:"Hồ sơ",
          tabBarIcon:()=>(<MaterialCommunityIcons name="account" size={25} color="#004683" />),
        }}/>
      </Tab.Navigator>
  );
}
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" mode="modal"> 
        <Stack.Screen name="Login" component={LoginScreen} options={{title:"UETFeedBack"}}/>
        <Stack.Screen name="Home" component={Home} options={{headerLeft:null,title:null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;