import React from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
<<<<<<< HEAD:AwesomeProject/components/class.js
} from 'react-native';
import {CardItem, Body} from 'native-base';
import {AirbnbRating} from 'react-native-ratings';
=======
  Modal,
  Alert,
  TouchableHighlight, Dimensions,
} from 'react-native';
import {SearchBox} from '../base';
import {Card, CardItem, Body} from 'native-base';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {Dialog} from 'react-native-simple-dialogs';
>>>>>>> origin/datquocngo:AwesomeProject/components/class/class.js
import {SearchBar} from 'react-native-elements';
import Footer from '../footer/footer';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  cardContainerAll: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 0.9,
    marginTop: 10,
    marginBottom: 10,
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
    marginLeft: 0,
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
  cardBody: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default class Classes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      data: [],
    };
  }

  updateSearch = search => {
    this.setState({search});
  };

  getUetClassData = async () => {
    try {
      let response = await fetch(
        'https://uet-feedback-api.herokuapp.com/uetClasses',
        {
          method: 'get',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(),
        },
      );
      let statusCode = response.status;
      let responseJson = await response.json();
      if (statusCode === 200) {
        this.setState({
          data: responseJson,
        });
      } else {
        alert('Cannot get Uet Class Data');
      }
    } catch (e) {
      alert('Cannot get Uet Class Data');
    }
  };

  render() {
    const {search, data} = this.state;
    let users = [];
    let modalVisible = false;
    function setModalVisible(bo) {
      modalVisible = bo;
      alert(modalVisible);
    }
    this.getUetClassData();
    for (let item of data) {
      if (item.displayName.indexOf(search) < 0) {
      } else {
        users.push(
          <View style={styles.cardContainerAll}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.card}>
                <CardItem header style={styles.header}>
                  <Image
                    style={styles.logo}
                    source={require('../../images/app-icon.png')}
                  />
                  <View style={styles.viewTitleHeader}>
                    <Text style={styles.titleHeader}>{item.displayName}</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Đánh giá', {item: item})
                      }
                      style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>Đánh giá</Text>
                    </TouchableOpacity>
                  </View>
                </CardItem>
                <CardItem cardBody style={styles.cardBody}>
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
                            defaultRating={item.rateAverage}
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
    }
    return (
      <>
        <SearchBar
          round
          lightTheme
          noIcon
          placeholder="ID hoặc tên môn học"
          onChangeText={this.updateSearch}
          value={search}
        />
        <View style={{marginBottom: 150}}>
          <Animated.ScrollView scrollEventThrottle={1}>
            {users}
          </Animated.ScrollView>
        </View>
      </>
    );
  }
}
