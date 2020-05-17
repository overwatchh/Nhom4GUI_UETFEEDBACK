import React from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  TouchableHighlight,
} from 'react-native';
import {SearchBox} from './base';
import {Card, CardItem, Body} from 'native-base';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {Dialog} from 'react-native-simple-dialogs';
//Sampe data
const CLASSDATA = [
    {
      id: 1,
      giangVien: 'GV1',
      yourRate: 5,
      displayName: 'Subject 1',
    },
    {
      id: 2,
      giangVien: 'GV2',
      yourRate: 3.5,
      displayName: 'Subject 2',
    },
    {
      id: 3,
      giangVien: 'GV3',
      yourRate: 5,
      displayName: 'Subject 3',
    },
    {
      id: 4,
      giangVien: 'GV4',
      yourRate: 5,
      displayName: 'Subject 4',
    },
    {
      id: 5,
      giangVien: 'GV5',
      yourRate: 4,
      displayName: 'Subject 5',
    },
  ],
  styles = StyleSheet.create({
    cardContainerAll: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      flex: 0.9,
      marginBottom: 20,
      borderWidth: 1,
    },
    container: {
      // backgroundColor:'yellow'
      marginTop: 10,
    },
    infoRow: {
      flexDirection: 'row',
      marginLeft: 50,
      marginBottom: 5,
    },
    infoTitle: {
      fontSize: 15,
      fontWeight: '700',
      paddingRight: 3,
    },
    logo: {
      width: 35,
      height: 35,
    },
    infoData: {},
    header: {
      height: 40,
      backgroundColor: '#3498db',
      textAlign: 'center',
      alignItems: 'center',
    },
    titleHeader: {
      color: 'white',
    },
    viewTitleHeader: {
      flex: 1,
      textAlign: 'center',
      alignItems: 'center',
    },
    ratingContainer: {
      flex: 1,
    },
    buttonContainer: {
      backgroundColor: '#228B22',
      paddingVertical: 4,
      height: 30,
      width: 80,
      textAlign: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
    },
  }),
  renderUsers = (filterText, navigation) => {
    let users = [];
    let modalVisible = false;
    function setModalVisible(bo) {
      modalVisible = bo;
      alert(modalVisible);
    }
    CLASSDATA.filter(item => {
      if (item.displayName.indexOf(filterText) >= 0) {
        users.push(
          <View style={styles.cardContainerAll}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.card}>
                <CardItem header style={styles.header}>
                  <Image
                    style={styles.logo}
                    source={require('../images/app-icon.png')}
                  />
                  <View style={styles.viewTitleHeader}>
                    <Text style={styles.titleHeader}>{item.displayName}</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Rate', {item})}
                      style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>Đánh giá</Text>
                    </TouchableOpacity>
                  </View>
                </CardItem>
                <CardItem cardBody style={{backgroundColor: 'white'}}>
                  <Body>
                    <View style={styles.container}>
                      <View style={styles.infoRow}>
                        <Text style={styles.infoTitle}>Mã môn học:</Text>
                        <Text style={styles.infoData}>{item.id}</Text>
                      </View>
                      <View style={styles.infoRow}>
                        <Text style={styles.infoTitle}>Tên môn học:</Text>
                        <Text style={styles.infoData}>{item.displayName}</Text>
                      </View>
                      <View style={styles.infoRow}>
                        <Text style={styles.infoTitle}>Giảng viên:</Text>
                        <Text style={styles.infoData}>{item.giangVien}</Text>
                      </View>
                      <View style={styles.infoRow}>
                        <View style={styles.ratingContainer}>
                          <Text style={styles.infoTitle}>
                            Đánh giá trung bình:
                          </Text>
                          <AirbnbRating
                            count={5}
                            reviews={['Terrible', 'Bad', 'OK', 'Good', 'Great']}
                            defaultRating={item.yourRate}
                            size={15}
                            showRating={false}
                            isDisabled={true}
                          />
                        </View>
                      </View>
                    </View>
                  </Body>
                </CardItem>
              </View>
            </View>
          </View>,
        );
      }
    });
    return users;
  };

function Classes({navigation}) {
  const [filterText, setFilterText] = React.useState('');
  return (
    <>
      <SearchBox
        title={'Nhập tên môn hoc...'}
        onChangeText={filterText => setFilterText(filterText)}
      />
      <Animated.ScrollView scrollEventThrottle={1}>
        {renderUsers(filterText, navigation)}
      </Animated.ScrollView>
    </>
  );
}
export default Classes;
