import React from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {Body, CardItem} from 'native-base';
import {AirbnbRating} from 'react-native-ratings';

const styles = StyleSheet.create({
  rateContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingRight: 10,
    marginLeft: -50,
    marginTop: 50,
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
    color: 'blue',
  },
  header: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 15,
    textAlign: 'center',
    alignItems: 'center',
  },
  grid: {
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
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
    const data = this.state;
    let shower = [];
    this.getCommentData(item.id);
    Object.keys(this.state.data).map(i => {
      shower.push(
        <View>
          <CardItem header style={styles.header}>
            <View style={styles.grid}>
              <View>
                <AirbnbRating
                  count={5}
                  reviews={['Terrible', 'Bad', 'OK', 'Good', 'Great']}
                  defaultRating={this.state.data[i].ratingValue}
                  size={10}
                  showRating={false}
                  isDisabled={true}
                />
              </View>
              <View>
                <Text style={styles.usernameText}>
                  {this.state.data[i].username + ':'}
                </Text>
                <Text>{this.state.data[i].content}</Text>
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
        <Animated.ScrollView scrollEventThrottle={1}>
          {shower}
        </Animated.ScrollView>
      </View>
    );
  }
}
