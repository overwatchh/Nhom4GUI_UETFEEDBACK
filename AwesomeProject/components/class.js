import React from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {CardItem, Body} from 'native-base';
import {AirbnbRating} from 'react-native-ratings';
import {SearchBar} from 'react-native-elements';

const styles = StyleSheet.create({
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
    marginLeft: '10%',
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
                    source={require('../images/app-icon.png')}
                  />
                  <View style={styles.viewTitleHeader}>
                    <Text style={styles.titleHeader}>{item.displayName}</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Rate', {item: item})
                      }
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
        <Animated.ScrollView scrollEventThrottle={1}>
          {users}
        </Animated.ScrollView>
      </>
    );
  }
}
