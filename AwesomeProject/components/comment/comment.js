import React from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import {Body, CardItem} from 'native-base';
import {AirbnbRating} from 'react-native-ratings';
import {Icon} from 'react-native-elements';
import Footer from '../footer/footer';

const styles = StyleSheet.create({
  rateContainer: {
    flex: 1,
    marginTop: 30,
  },
  contentContainer: {
    marginLeft: 30,
  },
  infoHeader: {
    fontSize: 16,
    fontWeight: '700',
    paddingRight: 3,
    marginRight: 10,
    color: 'green',
  },
  infoTitle: {
    fontSize: 25,
    fontWeight: '700',
    paddingRight: 3,
    marginRight: 10,
    marginLeft: '10%',
  },
  infoData: {
    fontSize: 25,
    fontWeight: '300',
    paddingRight: 3,
    marginRight: 10,
  },
  infoRow: {
    flexDirection: 'row',
    marginLeft: 50,
    marginBottom: 5,
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    height: 50,
    marginTop: 50,
    marginLeft: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  input: {
    height: 100,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    marginHorizontal: 10,
    borderWidth: 4,
    borderColor: 'yellow',
    width: '85%',
  },
  starRate: {
    marginLeft: '10%',
  },
  usernameText: {
    color: '#4169E1',
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
    fontWeight: '700',
  },
  header: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 15,
  },
  grid: {
    flexDirection: 'column',
    flex: 1,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  ratingContainer: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  threedot: {
    position: 'absolute',
    right: 0,
  },
  date: {
    marginLeft: 20,
    fontSize: 13,
    color: 'grey',
  },
});

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getCommentData = async id => {
    try {
      let response = await fetch(
        'https://uet-feedback-api.herokuapp.com/commentsByClass/' + id,
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
        // alert('Username or Password is invalid');
      }
    } catch (e) {
      // alert('Username or Password is invalid');
    }
  };

  render() {
    const {item} = this.props.route.params;
    let shower = [];
    this.getCommentData(item.id);
    Object.keys(this.state.data).map(i => {
      shower.push(
        <View>
          <CardItem header style={styles.header}>
            <View style={styles.grid}>
              <View style={styles.itemContainer}>
                <Image
                  style={styles.avatar}
                  source={{
                    uri: this.state.data[i].avatarUrl,
                  }}
                />
                <Text style={styles.usernameText}>
                  {this.state.data[i].name}
                </Text>
                <View style={styles.threedot}>
                  <Icon name={'more-vert'} />
                </View>
              </View>
              <View style={styles.ratingContainer}>
                <AirbnbRating
                  count={5}
                  reviews={['Terrible', 'Bad', 'OK', 'Good', 'Great']}
                  defaultRating={this.state.data[i].ratingValue}
                  size={12}
                  showRating={false}
                  isDisabled={true}
                />
                <Text style={styles.date}>
                  {this.state.data[i].lastUpdateTime.substring(0, 10)}
                </Text>
              </View>
              <View style={styles.contentContainer}>
                <Text style={{fontSize: 16}}>{this.state.data[i].content}</Text>
              </View>
            </View>
          </CardItem>
        </View>,
      );
    });
    return (
      <View style={styles.rateContainer}>
        <View style={styles.contentContainer}>
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
            <Text style={styles.infoHeader}>CÁC NHẬN XÉT</Text>
          </View>
        </View>
        <View style={{marginBottom: 220}}>
          <Animated.ScrollView scrollEventThrottle={1}>
            {shower}
          </Animated.ScrollView>
        </View>
      </View>
    );
  }
}
